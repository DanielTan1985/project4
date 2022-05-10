


Authorization:
GET /api/test/all
GET /api/test/user for loggedin users (user/moderator/admin)
GET /api/test/mod for moderator
GET /api/test/admin for admin

POST : /api/auth/signin

https://localhost:8080/
https://gentle-fortress-35413.herokuapp.com/api/auth/signup
Register some users with /signup API:

admin with admin role
mod with moderator and user roles
individual with user role

Example of POST (yet to create database)
{
    "username": "Alex",
    "email": "Alex@mindef.gov.sg",
    "password": "iamhandsome",
    "roles": ["user", "moderator"]
}

