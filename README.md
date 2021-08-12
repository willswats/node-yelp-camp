
# Yelp Camp

An Express web application which allows you to add campgrounds, create reviews, create an account, upload images, and more, styled with bootstrap and css.
Live project [_here_](https://yelp-camp-willswats.herokuapp.com/).

![yelp-camp-img](./public/imgs/yelp-camp.png)

## Table of Contents

- [Yelp Camp](#yelp-camp)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Setup](#setup)
  - [Acknowledgements](#acknowledgements)

## General Information

I built this project while following along with [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp) Udemy course. The app's purpose is to be a list of campgrounds which you can add to, or view details about each one, such as the reviews, the location it's in, and where it is on the map.

## Technologies Used

- Express
- MongoDB
- Mongoose

## Features

- Create your own account to start adding campgrounds
- Edit or delete your own campgrounds
- Optional images can be added to your campgrounds
- Add reviews to campgrounds or delete them
- View all the campgrounds on a cluster map
- View the location of a singular campground on a map

## Setup

Requirements:

- Node.js
- MongoDB Shell

Clone this repo to your desktop and run ```npm install``` to install all dependencies.

Create a ```.env``` file in the yelp-camp directory.

Register a Cloudinary account and add your cloudinary cloud name, cloudinary key, and cloudinary secret to the ```.env``` file under these keys:

```txt
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

Register a Mapbox account and add your Mapbox token to the ```.env``` file under this key:

```txt
MAPBOX_TOKEN=
```

After the above steps, run MongoDB locally with `mongod`.

Optionally you can run ```node seeds/index``` to seed the DB.

You can then run ```npm start``` to start the application. You will then be able to access it at localhost:3000.

## Acknowledgements

- This project was based on the Yelp Camp tutorials in [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp) Udemy course.
