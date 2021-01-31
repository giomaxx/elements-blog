# elements-blog
Just a simple blog. django rest frameworks + react

Technologies used: DJANGO - DJANGO REST FRAMEWORK - REACT - MATERIAL UI

A simple blog without big aesthetic claims.

I used django and django rest frameworks for the backend.

First things first, I created a custom user model, then I used django-allauth for the authentication system and dj-rest-auth its endpoints. 
I also added JWT tokens for extra security.

Coverage provided a great help with testing.

For the functionalities related to the posts I used the generic views offered by Django Rest Framework, plus I created custom permissions built over BasePermission.

The database is the default sqlite3, that was more than enough for this project.


For the fronted I used React. It communicates with the backend using Axios, with JWT tokens stored in the localstorage.

The whole project was built using react hooks and, besides the header and the footer, there are three sets of components, one for the authentication templates, one for the main views of the posts, and another one for the creation and management of the posts.
