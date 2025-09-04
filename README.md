# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Extra Features](#extra-features) 🆕
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [Installation & Setup](#installation--setup)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Extra Features
- Swipe navigation enabled for mobile & tablet screens in Crew page.
- Used tanstack router to handle the dynamic rendering of sub-page contents.
- Each sub-page is sharable, can be bookmarked, and persists on page refresh/reload.
- Fully responsive across all screen sizes.

### Screenshot

#### Desktop views

![](./demo/default.png)
![](./demo/desktop-tech.png)

#### Tablet views

![](./demo/iPad-v.png)
![](./demo/iPad-h.png)

#### Mobile views

![](./demo/phone-crew.png)
![](./demo/phone-dest.png)



### Links

-  Solution URL: [Repo URL](https://github.com/corneliusweb/space-tourism)
-  Live Site URL: [Space Tourism](https://cornelius-space.vercel.app/)

## Installation & Setup

### Prerequisites

-  Node.js (v20 or higher)
-  pnpm or npm (v10 or higher)
-  Git

### Environment Setup

-  This project was created with pnpm, but you can use any package manager:

1. Clone the repository:

   ```bash
   git clone https://github.com/corneliusweb/space-tourism.git
   cd sneakers
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Available Scripts

In the project directory, you can run:

-  `pnpm dev` or `npm run dev`

   -  Runs the app in development mode
   -  Open [http://localhost:5173](http://localhost:5173) to view it in the browser
   -  The page will reload when you make changes

-  `pnpm build` or `npm run build`

   -  Builds the app for production to the `dist` folder
   -  It correctly bundles React in production mode and optimizes the build for the best performance
   -  The build is minified and the filenames include the hashes

-  `pnpm preview` or `npm run preview`

   -  Locally preview the production build
   -  Serves the built files from the `dist` folder

-  `pnpm lint` or `npm run lint`
   -  Runs ESLint to check for code quality issues

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript v5.8.3](https://typescript.org) - A JavaScript subset
- [TanstackRouter](https://tanstack.dev/router) - A fully type-safe modern and scalable routing for React and Solid applications
- [Tailwindcss v4.1](https://tailwindcss.com/) - CSS framework


### What I learned

I learned a better way to handle dynamic backgrounds in an application.
I practiced, and learned a lot of tanstack routing techniques while working on this project.
Also, it created another avenue to work with TypeScript, and get familiar.

### Continued development
I look forward to using SEO tools like ZHead & UnHead to better present the pages.
Massive application of tooltips is being considered.


### Useful resources

- [Total TypeScript](https://totaltypescript.com) - This helped me to browse the types to use and in which scenario to do so.

## Author

-  Website - [corneliusweb](https://github.com/corneliusweb)
-  Twitter(X) - [@corneliusweb](https://x.com/corneliusweb_)