# Generated by Django 4.2.7 on 2023-12-07 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coin_app', '0006_alter_coin_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coin',
            name='name',
            field=models.CharField(),
        ),
    ]