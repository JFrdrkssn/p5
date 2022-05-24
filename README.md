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

# **Agile**

<br/>

## **Project Goals**

<br/>

The general goal of this project is to create a platform similar to Quora, Twitter and other social media apps, but with a lighter and simpler feel. Users can interact with other users in a number of ways, for example following a user or commenting on a post. As is evident in the design, the application doesn't take itself too serious. This is preferably instilled in users of the application as well. The idea is that the whole concept provides a basis for having fun while also learning new things without the pressure of formality. No questions are llame, basically.

The user stories in Sprint 1 fulfill the needs to build a working MVP application with a specific UI design, the primary goal set for this project.

- User authentication
- User interactivity
  - Posts, comments, likes, followers
- Profiles
  - Bios, profile images
- Engaging UX/UI

<br/>

## **User Stories**

<br/>

- ### **Sprint 1**

  <br/>

  - #### **Navigating the site**

    - As a user, I can view a navbar from every page so that I can easily navigate between pages.
    - As a user, I can clearly see if I'm logged in/out so that I can log/sign in/out.
    - As a user, I can see user avatars so that I can easily identify users of the application.
    - As a user, I can see a list of the most followed profiles so that I can find the most popular profiles.
      <br/><br/>

  - #### **User authentication**

    - As a user, I can create a new account so that I can access all the features for signed up users.
    - As a user, I can log in to the app so that I can access functionality for logged in users.
    - As a user, I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.
      <br/><br/>

  - #### **Posting and liking posts**

    - As a logged in user, I can create posts so that I can share my experiences.
    - As a logged in user, I can like a post so that I can declare my support for posts I like.
      <br/><br/>

  - #### **Post list page**

    - As a user, I can keep scrolling indefinitely so that I don't have to manually switch pages to view more content.
    - As a user, I can search with keywords so that I can find the posts I am looking for.
    - As a user, I can view the most recent posts first in descending order so that I am up to speed with the newest content.
    - As a logged in user, I can view the posts I've liked so that I can find the posts I've found interesting.
    - As a logged in user, I can filter content by profiles I follow so that I can easily view their content.
      <br/><br/>

  - #### **Post detail page**

    - As a user, I can view the detailed page of a post so that I can interact with the post in more detail.
    - As a post creator, I can edit my post so that I can correct mistakes or add new content.
    - As a post creator, I can delete my post so that I can control the content I want removed.
    - As a user, I can read comments on a post so that I can see what people are saying about the content.
    - As a logged in user, I can comment on a post so that I can engage in conversation about the content.
    - As a comment owner, I can edit my comment so that I can correct or add to my existing comment.
    - As a comment owner, I can delete my comment so that I have control of my comments visibility.
    - As a user, I can see when a comment was added so that I know how old a comment is.
      <br/><br/>

  - #### **Profile page**

    - As a user, I can view other profiles so that I can see their content and learn more about them.
    - As a logged in user, I can edit my profile so that I can update my profile picture and bio.
    - As a logged in user, I can update my username and password so that I can change my display name and password.
    - As a logged in user, I can follow or unfollow a profile so that I can decide what profile's content shows in my feed.
    - As a user, I can view statistics about a specific profile, such as number of posts and followers so that I can see the details of a particular profile.
    - As a user, I can view all the posts of a specific profile so that I can see their latest content.
      <br/><br/>

- ### **Sprint 2**

  <br/>

  - #### **Categorising posts**

    - As a user, I can see a list of categories so that I can easily find specific subjects.
    - As a logged in user, I can add a category to my posts so that I can help other users understand what the subject is.
      <br/><br/>

  - #### **Social account authentication**

    - As a user, I can authenticate using already created social accounts so that I don't have keep track of multiple accounts.
      <br/><br/>

  - #### **Nested comments**
    - As a user, I can see threads of comments so that I can better follow conversations.
    - As a logged in user, I can reply to specific comments so that I can easily follow along conversations.
      <br/><br/>

<br/><br/>

For this project the GitHub Kanban agile project management tool was used for workflow.
<br/>

[Kanban](src/assets/screenshots/kanban.png)

<br/><br/>
