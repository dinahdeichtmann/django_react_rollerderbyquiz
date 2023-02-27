from django.urls import path, include
from rollerderbyapp import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'theme', views.ThemeViewSet)
router.register(r'rule', views.RuleViewSet)
router.register(r'question', views.QuestionViewSet)
router.register(r'choice', views.ChoiceViewSet)

urlpatterns = [
    # ...
    path('api/v1/', include(router.urls))
]