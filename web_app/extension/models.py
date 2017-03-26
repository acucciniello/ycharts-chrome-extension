from __future__ import unicode_literals
from django.db import models
from django.core.validators import URLValidator

class User(models.Model):
  user_id = models.AutoField(primary_key=True)
  email = models.CharField(max_length=50)
  password = models.CharField(max_length=25)
  
class Article(models.Model):
  url = models.TextField(validators=[URLValidator()])
  name = models.CharField(max_length=400)
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)

