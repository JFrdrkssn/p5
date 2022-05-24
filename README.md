<h1 align="center" style="font-size: 250%;"><b>
llAMA
</b></h1>

llAMA is a niche AMA-type platform for people to connect, ask and answer anything in a playful manner.

The purpose of the site is to provide a place where people can read, post, comment, follow, like and create a profile to interact with other users and provide a place where any questions or discussions can be had while also having fun.

Target audience is mainly younger people and others who are well-versed in internet culture, who will most likely also appreciate the entertainment value of the applications brand.

It is designed to look and feel similar applications like Twitter and Instagram. It has a simple layout to encourage a lighter spin on anything being posted or discussed on the app.

Users can register an account to access full CRUD functionality for different interactions across the site.

As an early build, llAMA is currently a barebones/MVP application.

The frontend application is connected to the llAMA API, a custom-built backend application designed specifically for the llAMA app. The repo can be found [here](https://github.com/JFrdrkssn/llama-be).

[Check the live project here!](https://llama-jf.herokuapp.com/)

![Am I Responsive?](src/assets/screenshots/air.png)
<br/><br/>

# **Design**

<br/>

![Logo](src/assets/screenshots/logo-llama.png)
<br/><br/>

- ## **Brand**

  - The brand logo is a llama, which is also the name of the application. It has long been a popular animal in internet culture, most often used in memes, GIFs and other content meant primarily for entertainment purposes.
  - The brand and logo fits nicely with the project goal of creating a social media app that doesn't take it itself too seriously.

  <br/><br/>

- ## **Color Scheme**

  - A dark grey background coupled with a light shade of grey for text provides the basis for application with clear contrast that is easy on the eyes. Shades of blue and orange declare interactive elements, such as links and buttons, contrasted with white elements for interactions such as unliking and unfollowing.
  - The navigation bar and content cards on the application has a sligthly brighter dark grey background, providing some contrast between the main background and other content.
  - CTA elements are light blue.
  - Like icons on user's owned posts are red to visually differentiate and declare it as non-interactive.
    ![Palette](src/assets/screenshots/color-scheme.png)
    <br/><br/>

- ## **Typography**

  - The Indie Flower font is used for the site logo. The font has a playful look and fits well with brand logo, a llama.
  - The Roboto font is used everywhere else on the site. It is clear, sleek and provide a good separation between characters, making it easy to read and blending in well. It is also one of the most popular fonts used in web applications today.
  - Sans-serif is used as a backup-font.

  <br/><br/>

## **Wireframes**

<br/>
Wireframes for the application are essentially the same as the finished site.

<br/>

- [Home](src/assets/screenshots/home.png)
- [Logged in](src/assets/screenshots/home-logged-in.png)
- [Profile](src/assets/screenshots/profile.png)
- [Create/edit](src/assets/screenshots/create-edit.png)

<br/><br/>

# **Frontend**

<br/>

## Developer Role

<br/>

A frontend developer is mainly responsible for developing the user-facing side of web applications. Making sure the user is engaged and stays on the site is a primary objective. Responsiveness, accessibility, performance, interactivity and design all play a big factor in determining the success of an application, areas where the frontend developer plays a key role. As part of development teams, frontend developers primarily work with the UX/UI and backend teams, but UX/UI can also be part of a frontend developer's responsibilities.

<br/><br/>

## React

React is declarative JavaScript library. React allows building of independent, reusable UI components that can manage their own state to the DOM, pass values between other components as "props" and lifecycle methods to free up resources.

Several components in this project are reused across the app. Two examples are explained here:

The `<Avatar />` component is used to render profile images. Its props allow for setting source image and size, so the component can be used to set the size of profile images depending on where in the UI they are rendered. It renders specific profile images of users depending on where in the UI they are. For example, in the `<NavBar />` component a logged in user will see their profile image. On posts, the profile that created the post will have their profile image displayed.

The `<MoreDropdown />` component is used to render dropdown menus in the UI. It has to different menus to choose from. One is used for editing profiles and contain links to edit bio and profile image, edit username and update password. The other is used for editing or deleting posts and comments.

<br/><br/>

## React-Bootstrap

<br/>

React-Bootstrap is used for styling and responsiveness. Compared to regular Bootstrap, it comes as ready-to-use components for React. It is very popular and is one of the oldest libraries for React. This ensures compability and a vast selection of components and styles to build upon. React-Bootstrap is also built with accessibility in mind, an important factor when creating a frontend application. I have used regular Bootstrap before so it was an easy choice.

<br/><br/>
