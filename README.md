npm install express sequelize pg pg-hstore body-parser cors jsonwebtoken bcryptjs --save



Authorization:

https://gentle-fortress-35413.herokuapp.com/api/user/all
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


module.exports = {
  HOST: "ec2-54-80-122-11.compute-1.amazonaws.com",
  USER: "bimumvggwjprjc",
  PASSWORD: "1d670fcd93a18be2cefeae429e845731e01788cd626b2e8382ec7798467bf7cf",
  DB: "d7r4o5vvh2upn9",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
