from django.contrib import admin
from .models import User  # Importa tu modelo

# Registra tu modelo en el admin
admin.site.register(User)
