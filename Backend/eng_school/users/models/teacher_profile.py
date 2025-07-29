from django.db import models
from .user import CustomUser


class TeacherProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='teacher_profile')
    full_name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    photo = models.ImageField(upload_to='teacher_photos/', blank=True, null=True)
    specialties = models.CharField(max_length=255, help_text="e.g. Grammar, Speaking, IELTS")
    experience = models.PositiveIntegerField(help_text="Years of teaching experience")

    def __str__(self):
        return self.full_name
