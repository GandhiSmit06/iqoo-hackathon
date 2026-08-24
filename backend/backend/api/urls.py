"""
ProtoPatch API URL Routing
POST /api/sketch2stack/    — Sketch to Stack (image upload)
POST /api/screentopatch/   — Screen to Patch (video + audio + repo)
GET  /api/health/          — Health check
"""
from django.urls import path
from . import views

urlpatterns = [
    path("sketch2stack/", views.Sketch2StackView.as_view(), name="sketch2stack"),
    path("screentopatch/", views.ScreenToPatchView.as_view(), name="screentopatch"),
    path("health/", views.HealthCheckView.as_view(), name="health"),
]
