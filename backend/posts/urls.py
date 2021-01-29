from django.urls import path
from . import views

app_name = 'posts'

urlpatterns = [
    path('', views.PostList.as_view()),
    path('post/<str:pk>/', views.PostDetail.as_view(), name='postdetail'),

    path('admin/create/', views.CreatePost.as_view(), name='postcreate'),
    path('admin/manage/<int:pk>/', views.PostManage.as_view(), name='postmanage'),
    path('admin/edit/postdetail/<int:pk>/', views.AdminPostDetail.as_view(), name='admindetailpost'),
    path('admin/edit/<int:pk>/', views.EditPost.as_view(), name='editpost'),
    path('admin/delete/<int:pk>/', views.DeletePost.as_view(), name='deletepost'),
]