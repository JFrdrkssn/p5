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

# **Future Features**

<br/>

## _These features are planned:_

<br/>

- Categories
  - Categories to list posts of certain categories and allow users to select category when creating a post.
    <br/><br/>
- Profile page additions
  - Additional fields where users can add more info about themselves.
    <br/><br/>
- Nested comment system
  - A system for replying to certain comments and create threads.
    <br/><br/>
- Most commented posts
  - With nested comments, displaying a list of most commented posts would allow easy access to the posts with the most active conversations.
    <br/><br/>
- Social account authentication
  - Allow user authentication with already created accounts, for example Google accounts.
    <br/><br/>

<br/><br/>

# **API**

<br/>

The backend API is built specifically for this frontend with Django REST Framework. The repository and info on how the two are connected can be found in the Deployment section of [this](https://github.com/JFrdrkssn/llama-be) repo's README.

<br/><br/>

# **Technologies**

<br/>

## **Languages**

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://www.w3schools.com/js/js_es6.asp)
  - [JSX](https://reactjs.org/)

<br/>

## **Programs, libraries, frameworks and dependencies**

- [Gitpod](https://gitpod.io)
  - Gitpod to host a virtual workspace.
- [Git](https://git-scm.com/)
  - Git for version control by utilizing the Gitpod terminal to commit and push to GitHub and Heroku.
- [GitHub](https://github.com/)
  - GitHub to store the project code after being pushed from Git.
- [React 17](https://17.reactjs.org/)
  - React Router for dynamic routing.
- [Axios](https://axios-http.com/docs/intro)
  - Axios for promise-based HTTP.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
  - React Router for dynamic routing.
- [JWT](https://jwt.io/)
  - JWT for tokens and timestamping tokens.
- [React-Bootstrap 1.6](https://react-bootstrap-v4.netlify.app/)
  - React-Bootstrap for styling and responsiveness.
- [Heroku](https://id.heroku.com/login)
  - Heroku to host both the frontend and backends applications and connect them.
- [Google Fonts](https://fonts.google.com/)
  - Google fonts for importing the Indie Flower and Roboto fonts.
- [Font Awesome](https://fontawesome.com/)
  - Font Awesome for icons.
- [Balsamiq](https://balsamiq.com/)
  - Balsamiq to create wireframes for design purposes.
- [favicon.io](https://favicon.io/)
  - favicon to generate favicons.
- [Canva](https://www.canva.com/)
  - Canva to create logo and assets.
- [Coolors](https://coolors.co/?home)
  - Coolors was used to create the color scheme palette.
- [MSW](https://mswjs.io/)
  - MSW for testing purposes.
    <br/><br/>

# **Testing**

<br/>

The W3C Markup Validator, W3C CSS Validator Services, ESLint and PEP8 were used to validate code.

- [W3C Markup Validator](https://validator.w3.org/) show no errors.
  - [HTML](src/assets/screenshots/html-val.png)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) show no errors.
  - [CSS](src/assets/screenshots/css-val.png)
- [ESLint](https://eslint.org/) show no significant issues.
  <br/><br/>

Lighthouse

![Lighthouse](src/assets/screenshots/lighthouse.png)

<br/><br/>

## **Testing User Stories from Agile section**

<br/>

- ### **Navigating the site**

  - As a user, I can view a navbar from every page so that I can easily navigate between pages.
    - Navbar is always visible and links display active states if user is on navbar link URLs.
  - As a user, I can clearly see if I'm logged in/out so that I can log/sign in/out.
    - If a user is not logged in, Log in and Sign up links are displayed. If a user is logged in, display links to profile page, log out, feed of followed user posts and liked posts feed.
  - As a user, I can see user avatars so that I can easily identify users of the application.
    - User profile images and names are displayed across the application on most content. They also link to the user's profile page.
  - As a user, I can see a list of the most followed profiles so that I can find the most popular profiles.
    - A list of the most followed profiles with follower count, listed in a descending order on desktop and from left to right on mobile, is always displayed. On desktop there's a button to follow/unfollow. On both desktop and mobile the users in the list view are links to that specific profile, where you can also choose to follow/unfollow.
      <br/><br/>

- ### **User authentication**

  - As a user, I can create a new account so that I can access all the features for signed up users.
    - In the navbar there's a link to the Sign up page where users can create an account.
  - As a user, I can log in to the app so that I can access functionality for logged in users.
    - In the navbar there's a link to the Log in page where users can log in with their account.
  - As a user, I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.
    - Users stay logged in for 24 hours unless choosing to log out themselves.
      <br/><br/>

- #### **Posting and liking posts**

  - As a logged in user, I can create posts so that I can share my experiences.
    - In the navbar there's a link to the Post create page where users can create a post.
  - As a logged in user, I can like a post so that I can declare my support for posts I like.
    - A clickable like icon is displayed on all posts on both desktop and mobile for users to like or unlike posts.
      <br/><br/>

- #### **Post list page**

  - As a user, I can keep scrolling indefinitely so that I don't have to manually switch pages to view more content.
    - If there's more than 10 posts and/or comments, scrolling to the bottom of the page automatically renders more content, allowing for infinite scroll.
  - As a user, I can search with keywords so that I can find the posts I am looking for.
    - Using the search bar, users can search for posts using keywords which renders posts containing the inputed text in the search bar.
  - As a user, I can view the most recent posts first in descending order so that I am up to speed with the newest content.
    - Posts are ordered based on creation date in a descending order.
  - As a logged in user, I can view the posts I've liked so that I can find the posts I've found interesting.
    - Clicking the "Liked" link in the navbar displays a list of posts the user has liked.
  - As a logged in user, I can filter content by profiles I follow so that I can easily view their content.
    - Clicking the "Feed" link in the navbar displays a list of posts from followed users.
      <br/><br/>

- ### **Post detail page**

  - As a user, I can view the detailed page of a post so that I can interact with the post in more detail.
    - Clicking a post takes users to the specific post where users can comment on the post.
  - As a post creator, I can edit my post so that I can correct mistakes or add new content.
    - Clicking on a post the user owns, a dropdown menu is found at the top of the post where the user can go to the edit page. There the user can edit what they want and save the post or cancel.
  - As a post creator, I can delete my post so that I can control the content I want removed.
    - Clicking on a post the user owns, a dropdown menu is found at the top of the post where the user can choose to delete the post.
  - As a user, I can read comments on a post so that I can see what people are saying about the content.
    - Comments are displayed when clicking on a specific post.
  - As a logged in user, I can comment on a post so that I can engage in conversation about the content.
    - Click on a post takes the user to this specific post's page, where the user can comment.
  - As a comment owner, I can edit my comment so that I can correct or add to my existing comment.
    - A dropdown menu is displayed on comments owned by the user where users can choose to edit the comment.
  - As a comment owner, I can delete my comment so that I have control of my comments visibility.
    - A dropdown menu is displayed on comments owned by the user where user can choose to delete the comment.
  - As a user, I can see when a comment was added so that I know how old a comment is.
    - The creation date of a comment is shown on all comments. Comments that are edited get their creation date updated. Right now, there's no way to know if a comment has been edited by looking at the time it was added.
      <br/><br/>

- ### **Profile page**

  - As a user, I can view other profiles so that I can see their content and learn more about them.
    - Clicking on a profile image or name takes the user to that specific profile page where a bio and stats are displayed.
  - As a logged in user, I can edit my profile so that I can update my profile picture and bio.
    - Going to user's own profile pages, there's a dropdown menu at the top where users can choose to go to the edit profile page where they can update their profile picture and bio.
  - As a logged in user, I can update my username and password so that I can change my display name and password.
    - Going to user's own profile pages, there's a dropdown menu at the top where users can choose to go to the edit username or password page where they can update their username, unless the username is already taken, or password.
  - As a logged in user, I can follow or unfollow a profile so that I can decide what profile's content shows in my feed.
    - On desktop, a list of the most followed profiles are shown with buttons to follow/unfollow. Users can also click the "Feed" link in the navbar to display a list followed user's posts, where they can go to the specific profile and choose to unfollow.
  - As a user, I can view statistics about a specific profile, such as number of posts and followers so that I can see the details of a particular profile.
    - On profile pages there's a separate counter each for Posts, Followed and Following.
  - As a user, I can view all the posts of a specific profile so that I can see their latest content.
    - On profile pages, that specific profile's posts are listed below the profile header.
      <br/><br/>

<br/><br/>

## **Manual Testing**

<br/>

### **Navigation**

| Test               | Action                                       | Expected Result                                                                                                                   | Pass |
| ------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---- |
| Site logo          | Click logo                                   | Take the user to the home page.                                                                                                   | ✓    |
| Log in navbar      | Click "Log in" link                          | Take the user to the log in page.                                                                                                 | ✓    |
| Log in page        | Click "Log in" button                        | If user logs in, redirect to home.                                                                                                | ✓    |
| Log in page        | Click "Sign up" link                         | Take the user to the sign up page.                                                                                                | ✓    |
| Sign up navbar     | Click "Sign up" link                         | Take the user to the sign up page.                                                                                                | ✓    |
| Sign up page       | Click "Sign up" button                       | If user signs up, redirect to log in page.                                                                                        | ✓    |
| Sign up page       | Click "Log in" link                          | Take the user to the log in page.                                                                                                 | ✓    |
| Sign up/log in     | Enter URL for sign up/log in while logged in | Redirects user to home page.                                                                                                      | ✓    |
| Log out navbar     | Click "Log out" link                         | Log out user and redirect to home page.                                                                                           | ✓    |
| Create post navbar | Click "+Post" link                           | When logged in, takes the user to the create post page.                                                                           | ✓    |
| Create post page   | Click "Create" button                        | If user creates post, redirect to this post.                                                                                      | ✓    |
| Post "Feed" navbar | Click "Feed" link                            | Render list of posts from users the user is following.                                                                            | ✓    |
| Post "Liked"       | Click "Liked" link                           | Render list of posts the user has liked.                                                                                          | ✓    |
| Profile navbar     | Click profile image or name                  | Take user to user's profile page                                                                                                  | ✓    |
| Profile site-wide  | Click profile image or name                  | Take user to the clicked user's profile page.                                                                                     | ✓    |
| Edit post          | Click edit icon in dropdown                  | Take user to edit post page.                                                                                                      | ✓    |
| Edit post page     | Click "Save" button                          | Take user to newly edited post.                                                                                                   | ✓    |
| Edit post page     | Click "Cancel" button                        | Take user back to the post.                                                                                                       | ✓    |
| Delete post        | Click delete icon in dropdown                | Delete post and take user to previous page.                                                                                       | ✓    |
| Infinite scroll    | Scrolling to end of page                     | Render new posts and/or comments if there's more than 10 of any.                                                                  | ✓    |
| Unauthorized       | Visit page unauthorized                      | Reaching a create, edit or delete page through URL manipulation to content the user is not authorized for, redirect to home page. | ✓    |

<br/><br/>

### **Features**

| Test            | Action                 | Expected Result                                                                                                          | Pass |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---- |
| Like/unlike     | Click like icon        | When clicked, increment/decrement like counter and to liked posts.                                                       | ✓    |
| Like/unlike     | Click like icon        | When clicked, liked posts appear in "Liked" list view. Unliked posts disappear from "Liked" list view.                   | ✓    |
| Follow/unfollow | Click "Follow" button  | When clicked, increment/decrement follower/following counter and add to user followers or following lists.               | ✓    |
| Follow/unfollow | Click "Follow" button  | When clicked, followed user's posts appear in "Feed" list view. Unfollowed user's posts disappear from "Feed" list view. | ✓    |
| Comment         | Click "Comment" button | When clicked, increment comment count and add comment.                                                                   | ✓    |
| Comment         | Comment icon           | Take user to the specific post and display comments with username and date of comment.                                   | ✓    |

<br/><br/>

### **Validation**

| Test        | Action               | Expected Result                                                                                                                         | Pass |
| ----------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| Sign up     | Form valid           | If the form is valid, user is redirected to log in page.                                                                                | ✓    |
| Sign up     | Form invalid         | If the form is NOT valid, i.e required field not filled, wrong password format or duplicate username the user is notified of the error. | ✓    |
| Log in      | Form valid           | If the form is valid, user is redirected to home page.                                                                                  | ✓    |
| Log in      | Form invalid         | If the form is NOT valid, i.e required field not filled or wrong password, the user is notified of the error.                           | ✓    |
| Log out     | Logging out          | If the user logs out, the navbar reflects the change and functions reserved for logged in users are not displayed.                      | ✓    |
| Create post | Create form valid    | If the form is valid, user is redirected to the newly created post.                                                                     | ✓    |
| Create post | Create form invalid  | If the form is NOT valid, i.e required field not filled or title already exist the user is notified of the error.                       | ✓    |
| Edit post   | Edit form valid      | If the form is valid, user is redirected to the newly edited post.                                                                      | ✓    |
| Edit post   | Edit form invalid    | If the form is NOT valid, the user is notified of the error.                                                                            | ✓    |
| Delete post | Deleting post        | If the user deletes a post, take user to its profile page.                                                                              | ✓    |
| Comment     | Comment form valid   | If the form is valid, a new comment is created.                                                                                         | ✓    |
| Comment     | Comment form invalid | If the form is empty, clicking "Comment" button does nothing.                                                                           | ✓    |

<br/><br/>

### **Error Handling**

| Test | Action                      | Expected Result                                                                                                                                                                    | Pass |
| ---- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 404  | Wrong URL                   | If page does not exist, display custom component on page with information.                                                                                                         | ✓    |
| 404  | ID of posts non-existent    | Manually entering a posts/id URL that is non-existent, redirect to homepage and clear browser history (404 is not displayed because of routing issues concerning dynamic ID's).    | ✓    |
| 404  | ID of profiles non-existent | Manually entering a profiles/id URL that is non-existent, redirect to homepage and clear browser history (404 is not displayed because of routing issues concerning dynamic ID's). | ✓    |

<br/><br/>

## **Bugs**

<br/>

### Fixed

- When trying to create a post without attaching an image, the form was invalid despite being declared with a default image and allowing a blank field in the backend model field.

  - Fix: Add if-statement to form validation.

- Following and/or unfollowing an other user did not change the "Following" count on user's profile page.
  - Fix: A typo in `following_count:` in utils.js file was corrected.

![Image form validation](src/assets/screenshots/image-form.png)

- Trying to log in on the Safari browser refreshes the page. This is because Safari is not setting the http-only cookie and localStorage timestamp. React cannot authenticate itself to the API.
  - Fix: In the privacy settings of your Safari browser, ticking off "Prevent cross-site tracking" works.

A couple of small bugs concerning redirects and API calls were due to typos in URL paths.
<br/><br/>

### Remaining Found Bugs

<br/>

- None

<br/><br/>

# **Deployment**

<br/>

### **\*Note**:

- It is currently not possible to link GitHub repositories with Heroku in the way described below, but as of this date, 24th May, it will be re-enabled this week (week 21 2022). It is therefore recommended to wait until this feature has been re-enabled before connecting Heroku with your GitHub repository. This will greatly simplify the deployment.

<br/>

## **Development**

1.  Clone [this repository](https://github.com/JFrdrkssn/llama).
2.  Open your IDE and connect to your repo, then enter this command in the terminal:

        npm install

- Make sure your package.json dependencies look like this:

      "dependencies": {
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^0.27.2",
        "bootstrap": "^4.6.0",
        "jwt-decode": "^3.1.2",
        "react": "^17.0.2",
        "react-bootstrap": "^1.6.3",
        "react-dom": "^17.0.2",
        "react-infinite-scroll-component": "^6.1.0",
        "react-router-dom": "^5.3.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      },

3.  Git add, commit and push all changes to your repo.
4.  Create or log in to an account on Heroku.
5.  Create a new app on Heroku.
6.  In the Deploy section on Heroku, go to Deployment method and add your GitHub repository.
7.  Go down to Manual deploy and select deploy branch for early deployment.
8.  To run your app locally, enter this command in your terminal:

            npm run dev

    <br/>

## **Production**

1.  To create a production build, enter this command in your terminal:

        npm run build

2.  Git add, commit and push to your repo.
3.  In the Deploy section on Heroku, go to Manual deploy and select deploy branch.
4.  Go to the Settings tab and scroll down to Domains where you find the URL to your deployed site.
    <br/><br/>

# **Credits**

<br/>

## **Code**

- This project was built using React. The source code and styling is from Code Institute's social media walkthrough project [GitHub](https://github.com/Code-Institute-Solutions/moments). I decided to base the UI and functionality of llAMA on this walkthrough project since it was a great fit for the application I had planned and it provides a great foundation to expand upon.
  <br/><br/>

## **Content**

- The structure and layout of this README.md was based on [this template](https://github.com/Code-Institute-Solutions/SampleREADME) by [Code Institute](https://codeinstitute.net/). Some text was also copied. Additional inspiration for this README.md was given from other templates in Code Institute's course curriculum and previous student and alumnus Christopher Goodfellow and his [Tarmachan](https://github.com/Tawnygoody/Tarmachan) project.
  <br/><br/>

## **Media**

- llAMA logo by me using [Canva](https://www.canva.com/).
- Default profile image and default post image from [Code Institute](https://codeinstitute.net/) course material.
  <br/><br/>

## **Acknowledgements**

- My Mentor, Martina Terlevic, for continuous helpful feedback and support.
- [Code Institute](https://codeinstitute.net/) tutors for help with various issues.
- [Stack Overflow](https://stackoverflow.com/) for all kinds of tips and tricks.
