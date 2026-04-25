from rest_framework import serializers
from .models import Contact   # import MODEL, not serializer


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"

