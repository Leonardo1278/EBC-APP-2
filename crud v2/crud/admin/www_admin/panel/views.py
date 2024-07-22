from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import views as auth_views
from django.contrib.auth import authenticate, login
from .forms import SignUpForm
# Se generan las vistas

TEMPLATE_DIRS = (
    'os.path.join(BASE_DIR, "templates")'
)

class CustomLoginView(auth_views.LoginView):
    template_name = 'login.html'

    def form_valid(self, form):
        """If the form is valid, redirect to the supplied URL."""
        next_url = self.get_redirect_url() or 'index'
        return redirect(next_url)

def home(request):
    return render(request, 'home.html')

def index(request):
    return render(request, "index.html")

@login_required
def products(request):
    return render(request, "products.html")

def customers(request):
    return render(request, "customers.html")

def suppliers(request):
    return render(request, "suppliers.html")

def projects    (request):
    return render(request, "projects.html")


def quiotations(request):
    return render(request, "quotations.html")

def overview(request):
    return render(request, "overview.html")

def settings(request):
    return render(request, "conffig.html")


def myquotations(request):
    return render(request, "myquotations.html")

def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            next_url = request.POST.get('next', 'index')
            return redirect(next_url)
        else:
            return HttpResponse("Invalid login details.")
    else:
        next_url = request.GET.get('next', '')
        return render(request, 'login.html', {'next': next_url})

def sign_up(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.role = 'client'  # Asignar el rol de 'client' por defecto
            user.save()
            login(request, user)
            return redirect('index')  # Redirigir a la página principal después de registrarse
    else:
        form = SignUpForm()
    return render(request, 'sign_up.html', {'form': form})