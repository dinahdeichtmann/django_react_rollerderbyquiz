# Generated by Django 4.1.7 on 2023-02-21 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Choice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_id', models.IntegerField()),
                ('answer', models.TextField()),
                ('points', models.FloatField()),
                ('iscorrect', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('theme_id', models.IntegerField()),
                ('year', models.IntegerField()),
                ('image', models.TextField()),
                ('video', models.TextField()),
                ('rule_id', models.IntegerField()),
                ('raisonnement', models.TextField()),
                ('remarque', models.TextField()),
                ('theme_parent_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('score', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('isminimumquiz', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Rule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme_id', models.IntegerField()),
                ('year', models.IntegerField()),
                ('description', models.TextField()),
                ('link_casebook', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Theme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme_number', models.TextField()),
                ('theme_parent_id', models.IntegerField()),
                ('theme_name', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('derbyname', models.CharField(max_length=25)),
                ('email', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=25)),
                ('team', models.CharField(max_length=50)),
                ('picture', models.TextField()),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('color_app', models.TextField()),
                ('quizz_id', models.IntegerField()),
            ],
        ),
    ]
