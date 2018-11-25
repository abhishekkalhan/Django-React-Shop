from django.urls import path
from . import views

app_name='shop'

urlpatterns = [
	path('', views.ProductListTodo.as_view()),
    path('<int:pk>/', views.CategoryDetailTodo.as_view()),
	path('category/', views.CategoryListTodo.as_view()),
	path('<slug:c_slug>/',views.allProdCat, name='products_by_category'),
	path('<slug:c_slug>/<slug:product_slug>/', views.ProdCatDetail, name='ProdCatDetail'),
]