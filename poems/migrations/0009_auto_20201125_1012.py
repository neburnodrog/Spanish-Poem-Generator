# Generated by Django 3.1.3 on 2020-11-25 10:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('poems', '0008_auto_20201125_1003'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='verse',
            name='asson_rhy',
        ),
        migrations.RemoveField(
            model_name='verse',
            name='cons_rhy',
        ),
    ]