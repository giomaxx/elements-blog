from django.test import TestCase
from django.contrib.auth import get_user_model


class UserAccountTests(TestCase):

    def test_custom_user(self):
        db = get_user_model()
        user = db.objects.create_user(
            'testuser@email.com', 'testusername', 'testpassword')
        self.assertEqual(user.email, 'testuser@email.com')
        self.assertEqual(user.username, 'testusername')
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        self.assertTrue(user.is_active)
        self.assertEqual(str(user), "testusername")

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email='', username='test', password='testpass')

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email='email@test.com', username='test', password='')

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email='email@test.com', username='', password='testpass')


    def test_custom_superuser(self):
        db = get_user_model()
        super_user = db.objects.create_superuser(
            'testuser@super.com', 'testusername', 'testpassword')
        self.assertEqual(super_user.email, 'testuser@super.com')
        self.assertEqual(super_user.username, 'testusername')
        self.assertTrue(super_user.is_superuser)
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_active)
        self.assertEqual(str(super_user), "testusername")

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email='testuser@super.com', username='testusername', password='testpassword', is_staff=False)

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email='testuser@super.com', username='testusername', password='testpassword', is_superuser=False)

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email='testuser@super.com', username='testusername', password='testpassword', is_active=False)


# ### COMMANDS ###
# pip install coverage
# coverage run --omit='*/venv/*' manage.py test
# coverage html
# ### From htmlcov folder open index.html in browser