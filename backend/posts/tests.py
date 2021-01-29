
from django.test import TestCase
from django.contrib.auth.models import User
from posts.models import Post, Category


class Test_Create_Post(TestCase):

    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name='foo')
        testuser1 = User.objects.create_user(
            email='test@email.com', username='test_user1', password='testpassword',)
        test_post = Post.objects.create(category_id=1, title='Test Title', excerpt='Test Excerpt',
                                        content='Test Content', slug='test-title', author_id=1, status='published')

    def test_post_content(self):
        post = Post.postobjects.get(id=1)
        cat = Category.objects.get(id=1)
        author = f'{post.author}'
        excerpt = f'{post.excerpt}'
        title = f'{post.title}'
        content = f'{post.content}'
        status = f'{post.status}'
        self.assertEqual(author, 'test_user1')
        self.assertEqual(title, 'Test Title')
        self.assertEqual(content, 'Test Content')
        self.assertEqual(status, 'published')
        self.assertEqual(str(post), "Test Title")
        self.assertEqual(str(cat), "foo")

# ### COMMANDS ###
# pip install coverage
# coverage run --omit=*/venv/*,*/users/* manage.py test
# coverage html
# ### From htmlcov folder open index.html in browser