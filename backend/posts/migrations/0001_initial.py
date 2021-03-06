# Generated by Django 3.1.3 on 2020-11-14 09:39

from django.db import migrations, models
import django.utils.timezone
import posts.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('image', models.ImageField(default='posts/default.jpg', upload_to=posts.models.upload_to, verbose_name='Image')),
                ('excerpt', models.TextField(null=True)),
                ('content', models.TextField()),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
                ('slug', models.SlugField(max_length=250, unique_for_date='published')),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='published', max_length=10)),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
    ]
