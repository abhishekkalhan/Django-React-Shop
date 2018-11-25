from rest_framework import serializers
from .models import Cart, CartItem


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'cart_id',
            'date_added',
        )
        model = Cart

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'product',
            'cart',
            'quantity',
        )
        model = CartItem