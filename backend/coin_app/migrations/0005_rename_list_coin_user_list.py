# Generated by Django 4.2.7 on 2023-12-06 16:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('coin_app', '0004_alter_coin_purchase_price'),
    ]

    operations = [
        migrations.RenameField(
            model_name='coin',
            old_name='list',
            new_name='user_list',
        ),
    ]
