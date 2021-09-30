# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Desktop Screenshot](./screenshot.jpg)

### Links

- Live Site URL: [Hosted On Github Pages](https://shangum.github.io/Intro-component-with-sign-up-form-challenge-hub-Frontend-Mentor/)

## My process

### Built with

- HTML
- CSS
- Flexbox
- SASS
- Mobile-first workflow


### What I learned

During this project I aimed to use mostly responsive units (in this case rem units). I also took the Sass leap. I was able to get used to using Sass and even implemented a function to convert pixel units to rem units (as suggested by user @pikamart). The small "toRem()" function is listed below. The little bit of Sass I used went smoothly. The "sass --watch" command was very helpful during the design process.

This project also made me look at other small design details such as:
  1) Input placeholder, border, and text styling
  2) Placing icons into text inputs
  3) Button hover cursor icons
  4) Inner button shadowing

The script controlling the form was done using vanilla javascript.


```css

@function toRem($value) {

    $remValue: ($value / 16) + rem;
    @return $remValue;

}

```

### Continued development

In future projects I want to utilize more advanced Sass features as well as see how I can utilize the library more efficiently.

### Useful resources

- [Getting familiar with REM units](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/) - Helped me get familiar with rem units
- [REM to pixels with SASS](https://dev.to/nikolab/convert-px-to-rem-using-sass-3-methods-4ep2) - Provided the Sass rem conversion function
- [Inner glow effect on button](https://stackoverflow.com/questions/4625058/inner-glow-effect-of-button) - Helped me get the slight shadow on the inside of the "Claim free trial button"
- [Javascript email validation funtion](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript) - Used email validation javascript function from here


## Author

- Website - [Rashid Wilson](#)
- Frontend Mentor - [@shangum](https://www.frontendmentor.io/profile/shangum)

## Acknowledgments

Shout out to @pikamart and @FluffyKas who gave me good tips on previous projects that I tried to let guide me during this challenge.

