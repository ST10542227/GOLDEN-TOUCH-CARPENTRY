# Golden Touch Carpentry Website

A multi-page business website for Golden Touch Carpentry, built using plain HTML, CSS, and JavaScript. The site includes a home page, products and services page, about page, contact page, and enquiry page with a consistent layout and responsive design.

## Project Overview

This website was improved and updated to provide:

- a cleaner and more professional layout
- consistent header and footer across all pages
- responsive design for mobile and tablet devices
- improved navigation and active page states
- better readability and styling for the homepage
- proper form layouts for contact and enquiry sections
- modern card-based sections for products and team profile information
- cleaner HTML structure and corrected CSS issues
- interactive JavaScript functionality for a better user experience

## Pages Included

- Home.html
- product.html
- About.html
- contact.html
- enquiry.html

## Shared CSS

The styling is centralized in:

- css/golden_layout.css

This makes it easier to maintain the website and keeps the layout consistent across all pages.

## JavaScript File

The JavaScript functionality is stored in:

- JS/carpentry.js

This script was added as Part 3 of the project to improve the website by adding interactivity, validation, and dynamic behaviour.

## Folder Structure

GoldenTouch/
├── Home.html
├── product.html
├── About.html
├── contact.html
├── enquiry.html
├── css/
│   └── golden_layout.css
├── JS/
│   └── carpentry.js
└── Images/
    ├── logo.png
    ├── woodwork5.jpg
    ├── wood1.jpg
    ├── kitchen.jpg
    ├── kitchen2.jpg
    ├── kitchen1.jpg
    ├── custom kitchen2.jpg
    ├── custom kitchen3.jpg
    ├── bedroom.jpg
    ├── fit-in-wardrope.jpg
    ├── fit-in-wardrope1.jpg
    ├── wardrope1.jpg
    ├── home-decor.jpg
    ├── home decor1.jpg
    ├── home-decor (2).jpg
    ├── office-space.jpg
    ├── office-space1.jpg
    ├── office-space2.jpg
    ├── Material-selection-for-custom-furniture-768x439.jpg
    ├── woodwork Project.mp4
    └── team/
        ├── founder.jpg
        └── team-1.jpg

## What Was Updated

### 1. HTML Structure Improvements
- replaced broken and inconsistent table layouts with cleaner semantic sections
- fixed invalid HTML structure in the About, Contact, and Enquiry pages
- corrected class names and section nesting
- standardised page headings and content layout

### 2. CSS Fixes
- corrected invalid CSS values
- fixed missing units such as px and em
- removed invalid selectors and incomplete declarations
- improved responsive layouts for tablets and mobile screens
- improved focus states for accessibility
- styled buttons, forms, cards, and call-to-action sections

### 3. Navigation and Design
- introduced a consistent header with logo, business name, slogan, and navigation
- added active states to navigation links
- kept a professional brand look across all pages
- improved homepage hero section for better readability over the background image

### 4. About Page Expansion
- added a more complete business profile
- included mission and vision sections
- added a target audience section
- added leadership and craftsmanship team cards

### 5. Contact and Enquiry Enhancements
- created structured contact forms
- added enquiry form fields for service type, business location, and project description
- included clear labels and input fields for a better user experience

### 6. Footer Consistency
- added a shared footer to all pages
- included business contact details and branding

### 7. JavaScript Functionality (Part 3)
The JavaScript file was added to improve functionality and user interaction. The following features were included:

- SEO metadata updates:
  - updates the meta description
  - updates the meta keywords
  - adds author information
  - updates the page title when needed

- dynamic copyright year:
  - the footer year updates automatically based on the current date

- form validation:
  - checks required fields
  - validates email format
  - validates phone numbers
  - checks minimum character lengths
  - shows clear error messages

- user feedback:
  - shows success messages after a valid submission
  - shows error messages when input is invalid
  - resets the form after successful submission

- smooth scrolling:
  - anchor links scroll smoothly to the relevant section

- gallery lightbox functionality:
  - images can be clicked to open in a larger view
  - improves the product gallery presentation

- map functionality:
  - map section is loaded when present
  - displays business location information

- general interactivity:
  - JavaScript is loaded after DOM content is ready
  - prevents script errors by running only once the page has loaded

## How to Run the Website

1. Open the project folder in a browser.
2. Open Home.html to view the homepage.
3. Use the navigation menu to move between pages.

You can also use a local web server if needed, but the site works as a static HTML/CSS project.

## Notes

- Make sure all image files exist in the correct folder and names match exactly.
- File names are case-sensitive in some environments, so keep names consistent.
- Some image names have spaces in them (for example, `custom kitchen2.jpg` and `home decor1.jpg`), so ensure the file names are exactly correct when using them in HTML.
- JavaScript functionality works best when the files are served from a local web server or a live hosting environment.

## Credit

Designed and updated for Golden Touch Carpentry to improve business presentation and customer engagement.

## Future Improvements

Possible future enhancements include:

- add a gallery page
- add a testimonial section
- add animations and hover effects
- connect the forms to email or a backend system
- add social media links
- add a booking or quote request workflow

This stage focused on:
- improving the overall customer experience
- validating form input
- improving website responsiveness through interactive elements
- enhancing product image presentation with a lightbox
- making the site more professional and polished

The JavaScript was therefore added to support the final phase of development by making the website more functional and dynamic.

COMMIT LOG

The project should include a commit history with several meaningful commits, including:

- Initial website structure and homepage layout
- Added product and services page
- Improved About page content and layout
- Added contact and enquiry pages
- Implemented JavaScript validation and interactivity
- Added map and gallery functionality
- Updated SEO and accessibility features
- Final styling and project review

## Final Note

The completed website demonstrates a full business website created in stages:
- HTML for content and structure
- CSS for responsive styling and layout
- JavaScript for interactivity and functionality

This combination ensures the website is more professional, user-friendly, and suitable for the project rubric.

## Deployment

The website is deployed using Netlify, a free and reliable hosting platform for static websites built with HTML, CSS, and JavaScript. Netlify allows the project to be published quickly and provides automatic deployment updates when changes are pushed to the connected repository.

### Why Netlify was used
- suitable for static website projects
- simple deployment process
- supports HTML, CSS, and JavaScript files
- provides automatic HTTPS
- allows easy updates and live hosting
- ideal for business websites such as this project

### Netlify Deployment Summary
- the project files were prepared for deployment
- the website was connected to a Netlify account
- the repository was linked to Netlify
- the site was published and made available online
- updates can be deployed by publishing the latest version of the project