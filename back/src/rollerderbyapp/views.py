from django.shortcuts import render, redirect
from rest_framework import viewsets
from django.http import HttpResponse
from django.views.generic import View, TemplateView, ListView
from rollerderbyapp.models import Theme, Rule, Question, Choice
from rollerderbyapp.serializers import ThemeSerializer, RuleSerializer, QuestionSerializer, ChoiceSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.

class ThemeViewSet(viewsets.ModelViewSet):
    queryset = Theme.objects.all().order_by("id")
    serializer_class = ThemeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['theme_number', 'theme_parent_id', 'theme_name']

class RuleViewSet(viewsets.ModelViewSet):
    queryset = Rule.objects.all().order_by("id")
    serializer_class = RuleSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['theme_id', 'description', 'year', 'link_casebook']

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all().order_by("id")
    serializer_class = QuestionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['text', 'theme_id', 'image', 'video', 'rule_id', 'raisonnement', 'remarque', 'theme_parent_id']


class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all().order_by("id")
    serializer_class = ChoiceSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['question_id', 'answer', 'iscorrect', 'points']
