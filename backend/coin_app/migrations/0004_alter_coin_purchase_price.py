# Generated by Django 4.2.7 on 2023-12-06 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coin_app', '0003_alter_coin_purchased_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coin',
            name='purchase_price',
            field=models.DecimalField(decimal_places=5, default=0.0, max_digits=40),
        ),
    ]
