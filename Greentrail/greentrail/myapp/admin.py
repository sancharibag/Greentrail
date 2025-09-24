from django.contrib import admin


# Register your models here.
from django.contrib import admin
from .models import UserProfile, Hotel,Guide, Driver, Transaction


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "phone", "address", "date_of_birth","aadhar_number")  # shown in list page
    search_fields = ("user__username", "phone","aadhar_number")  # search option
    list_filter = ("date_of_birth",)  # filters on right side


@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ("name", "location", "price_per_night", "available_rooms", "owner")
    search_fields = ("name", "location")
    list_filter = ("location",)


admin.site.register(Guide)
admin.site.register(Driver)
admin.site.register(Transaction)
admin.site.register(Item)

