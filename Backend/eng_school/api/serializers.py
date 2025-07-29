from rest_framework import serializers
from users.models import CustomUser, TeacherProfile, StudentProfile, UserRoles


class TeacherProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherProfile
        fields = ['full_name', 'bio', 'photo', 'specialties', 'experience']


class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = ['full_name', 'level', 'birth_date', 'goals']


class UserProfileSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ['email', 'role', 'profile']

    def get_profile(self, obj):
        if obj.role == UserRoles.TEACHER and hasattr(obj, 'teacher_profile'):
            return TeacherProfileSerializer(obj.teacher_profile).data
        elif obj.role == UserRoles.STUDENT and hasattr(obj, 'student_profile'):
            return StudentProfileSerializer(obj.student_profile).data
        return None


class RegisterSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(write_only=True)
    teacher_code = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = CustomUser
        fields = ['email', 'password', 'role', 'full_name', 'teacher_code']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        role = attrs.get('role')
        teacher_code = attrs.get('teacher_code')
        if role == UserRoles.TEACHER:
            if teacher_code != 'ENG2024':
                raise serializers.ValidationError("Invalid teacher code.")
        return attrs

    def create(self, validated_data):
        role = validated_data.pop('role')
        full_name = validated_data.pop('full_name')
        teacher_code = validated_data.pop('teacher_code', None)
        email = validated_data.get('email')
        password = validated_data.get('password')

        user = CustomUser.objects.create_user(
            email=email,
            password=password,
            role=role
        )

        if role == UserRoles.TEACHER:
            TeacherProfile.objects.create(user=user, full_name=full_name)
        else:
            StudentProfile.objects.create(user=user, full_name=full_name, level='A1')

        return user
