# Generated by Django 4.0.3 on 2023-07-20 02:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0003_rename_brand_shoe_model_name_remove_shoe_size_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoe',
            name='url',
            field=models.URLField(default=True, max_length=20000, null=True),
        ),
    ]