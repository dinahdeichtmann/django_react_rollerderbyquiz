from django.contrib import admin
from rollerderbyapp.models import Theme, Rule, Question, Choice

# Register your models here.

admin.site.register(Theme)
admin.site.register(Rule)
admin.site.register(Question)
admin.site.register(Choice)
