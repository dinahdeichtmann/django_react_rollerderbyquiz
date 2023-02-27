from rest_framework import serializers
from rollerderbyapp.models import Theme, Rule, Question, Choice

class ThemeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Theme
        fields = ('theme_number', 'theme_parent_id', 'theme_name')

class RuleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Rule
        fields = ('theme_id', 'year', 'description', 'link_casebook')

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('text', 'theme_id', 'image', 'video', 'rule_id', 'raisonnement', 'remarque', 'theme_parent_id')

class ChoiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Choice
        fields = ('question_id', 'answer', 'points', 'iscorrect')
