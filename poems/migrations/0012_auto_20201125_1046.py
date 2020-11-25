# Generated by Django 3.1.3 on 2020-11-25 10:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('poems', '0011_verse_verse_cut'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='assonantrhyme',
            options={'ordering': ['-amount_words', 'assonant_rhyme']},
        ),
        migrations.AlterModelOptions(
            name='consonantrhyme',
            options={'ordering': ['-amount_words', 'consonant_rhyme']},
        ),
        migrations.RenameField(
            model_name='assonantrhyme',
            old_name='verse_number',
            new_name='amount_words',
        ),
        migrations.RenameField(
            model_name='consonantrhyme',
            old_name='verse_number',
            new_name='amount_words',
        ),
    ]
