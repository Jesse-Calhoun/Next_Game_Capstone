from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    pass

# Register your models here.
# admin.site.unregister(CustomUserAdmin)
# admin.site.unregister(User)

admin.site.register(User, CustomUserAdmin)
