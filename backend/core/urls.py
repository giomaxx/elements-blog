
from django.contrib import admin
from django.urls import path, include

# To get JWT tokens
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
# Form media files in development together with urlpatterns += static...
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # API Token Management - To get JWT tokens endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('api/user/', include('dj_rest_auth.urls')),
    path('api/user/registration/', include('dj_rest_auth.registration.urls')),
    path('api/', include('posts.urls', namespace="posts")),
    # To have login options on DRF api page
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)