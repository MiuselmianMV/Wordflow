from django.db import models
from django.contrib.auth.models import AbstractUser

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title

class Lesson(models.Model):
    course = models.ForeignKey(Course, related_name='lessons', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title

class User(AbstractUser):
    class Role(models.TextChoices):
        STUDENT = 'STUDENT', 'Student'
        TEACHER = 'TEACHER', 'Teacher'
        ADMIN = 'ADMIN', 'Admin'
    
    base_role = Role.ADMIN
    role = models.CharField(
        max_length=50,
        choices=Role.choices,
        default=base_role
    )
    