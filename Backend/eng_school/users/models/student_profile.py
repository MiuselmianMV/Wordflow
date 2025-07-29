from django.db import models
from .user import CustomUser


class StudentProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='student_profile')
    full_name = models.CharField(max_length=100)
    level = models.CharField(max_length=5, help_text="e.g. A1, B2, C1")
    birth_date = models.DateField(blank=True, null=True)
    goals = models.TextField(blank=True)

    def __str__(self):
        return self.full_name
