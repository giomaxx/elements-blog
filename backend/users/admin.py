from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin

class UserAdminConfig(UserAdmin):
    ordering = ('date_joined',)
    list_display = ('username', 'email', 'first_name', 'last_name',
                    'is_active', 'is_staff', 'is_superuser', 'date_joined',)
    search_fields = ('email', 'username', 'first_name', 'last_name',)
    list_filter = ('is_active', 'is_staff', 'is_superuser',)
    fieldsets = ( # Choose and order display fields
        (None, {'fields': ('username', 'email', 'date_joined', 'last_login')}),
        ('Personal Info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions',)}),
    )
    add_fieldsets = ( # Customize Add custom user
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'first_name', 'last_name', 'email',
            'password1', 'password2', 'is_active', 'is_staff', 'is_superuser')}
         ),
    )

    # Example to customize a form field
    # from django.forms import TextInput, Textarea
    # model = CustomUser
    # formfield_overrides = {
    #     CustomUser.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
    # }


admin.site.register(CustomUser, UserAdminConfig)