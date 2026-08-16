# Bandage E-Commerce Web App

A responsive e-commerce web application built with **React, TypeScript, Vite, Redux Toolkit, RTK Query, React Router, React Icons, and Vanilla CSS**.

## Project Overview

**Bandage** is a modern and responsive e-commerce web application designed to provide users with a smooth online shopping experience across desktop and mobile devices.

The project was initially focused on building the **Landing Page/Homepage**, including its responsive layout and reusable UI components. The application has since been extended with product listing, shopping cart functionality, dynamic cart quantities, product interactions, and responsive navigation.

The project demonstrates the use of modern React development practices, component-based architecture, global state management, API data fetching, routing, and responsive CSS.

---

## Technologies Used

- **React** – Frontend library
- **TypeScript** – Type safety and maintainable code
- **Vite** – Development and build tool
- **Redux Toolkit** – Global state management
- **RTK Query** – API data fetching and caching
- **React Router** – Application routing
- **React Icons** – Icons throughout the interface
- **Vanilla CSS** – Styling and responsive design

---

## Features

### Homepage

The Homepage is the primary section I worked on and includes:

- Responsive header and navigation
- Promotional top banner
- Hero section
- Product/category sections
- Product cards
- Services section
- Testimonials section
- Call-to-action section
- Footer
- Social media links
- Newsletter section
- Responsive desktop and mobile layouts

I worked extensively on spacing, positioning, typography, sizing, and responsive behavior to make the Homepage closely match the intended design.

---

### Product Listing

The application includes a reusable product listing system.

Products are retrieved through **RTK Query** and displayed using reusable `ProductList` and `ProductCard` components.

The product listing includes:

- API-based product fetching
- Product images
- Product titles
- Product departments
- Original prices
- Discounted prices
- Add-to-cart functionality
- Loading states
- Error states
- Empty product states
- Load More Products functionality
- Responsive product grids

The same reusable product components can be used across different pages.

---

### Product Cards

The `ProductCard` component is responsible for displaying individual products.

Each product card includes:

- Product image
- Product title
- Product department
- Original price
- Discount price
- Add to Cart button
- Hover interactions
- Responsive mobile styling

The Add to Cart button is displayed through a desktop hover interaction and remains accessible on mobile devices where hover interactions are not available.

---

### Shopping Cart

The application includes a functional shopping cart powered by **Redux Toolkit**.

Users can:

- Add products to the cart
- Increase product quantity
- Decrease product quantity
- Remove products
- Clear the entire cart
- View the total number of products
- View individual product subtotals
- View the cart subtotal
- View the total order amount

The cart is connected to the Redux store, allowing cart information to be accessed from different components.

The navigation cart icon also displays the current number of items in the cart.

---

### Add-to-Cart Notification

When a product is successfully added to the cart, the application displays a confirmation popup.

The popup provides feedback such as:

> Added to cart

along with the product name.

The notification is responsive and has been adjusted to display correctly on both desktop and mobile screens.

---

### Responsive Navigation

The Header component includes:

- Brand logo
- Desktop navigation
- Mobile navigation
- Search icon
- Shopping cart icon
- Cart item count
- Wishlist icon
- Login/Register link
- Mobile menu toggle
- Promotional top banner
- Social media icons
- Contact information

The navigation adapts to different screen sizes using responsive CSS media queries.

On mobile devices, the logo, search, cart, wishlist, and menu controls are arranged horizontally to provide a cleaner navigation experience.

---

### Responsive Design

One of the main focuses of the project was responsive design.

I used **CSS media queries** to create layouts that work across desktop, tablet, and mobile screen sizes.

I adjusted:

- Navigation
- Header
- Hero sections
- Product grids
- Product cards
- Content widths
- Flex layouts
- Grid layouts
- Typography
- Margins
- Padding
- Buttons
- Footer sections
- Social media icons
- Newsletter sections
- Shopping cart layout
- Mobile navigation

I tested the application at different screen sizes and made adjustments where elements did not display correctly.

This helped me understand that responsive design sometimes requires creating a different layout for mobile rather than simply shrinking the desktop layout.

---

## Project Structure

The project follows a component-based React structure.

```text
src/
├── app/
│   ├── api.ts
│   ├── cartSlice.ts
│   ├── hooks.ts
│   └── store.ts
│
├── assets/
│   ├── images/
│   └── styles/
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductList.tsx
│   ├── ProductCard.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   └── ...
│
├── pages/
│   ├── HomePage.tsx
│   ├── Shop.tsx
│   └── ShoppingCart.tsx
│
├── types/
│   └── ...
│
├── App.tsx
├── main.tsx
└── index.css


I organized the project this way to maintain separation of concerns.

Reusable UI elements are placed in the components folder, application state and API configuration are handled in the app folder, while page-level components are separated into the pages folder.

Images and styles are also maintained separately so they can be easily located and reused.

This structure makes the application easier to maintain, debug, and scale.

Redux Toolkit

Redux Toolkit is used to manage global application state.

The Redux store provides a centralized location for application data that needs to be accessed by different components.

For example, the shopping cart is managed through a Redux slice.

The cart state contains information about:

Products
Quantities
Cart items
Cart totals

Actions such as adding, removing, increasing, decreasing, and clearing cart items are handled through Redux actions.

Using Redux Toolkit also reduces the amount of boilerplate code compared with traditional Redux.

RTK Query

RTK Query is used for handling API-related data fetching.

The API service is created using createApi() and fetchBaseQuery().

RTK Query allows API endpoints to be defined centrally and automatically generates hooks that can be used inside React components.

For example:

const {
  data,
  isLoading,
  isFetching,
  isError,
} = useGetProductsQuery({
  limit: 10,
  skip: 0,
});

RTK Query manages:

API requests
Loading states
Error states
Caching
Data updates

The retrieved product data is then passed to reusable product components.

State Flow

The general state flow in the application is:

User Interaction
       ↓
Action / API Query
       ↓
Redux Toolkit / RTK Query
       ↓
State or Data Update
       ↓
React Component
       ↓
UI Re-render

React local state is used for component-specific interactions, such as opening the mobile menu or displaying temporary notifications.

Redux Toolkit is used for application state that needs to be shared across different parts of the application, such as the shopping cart.

RTK Query handles server-side product data and provides the requested information to React components through generated hooks.

Product Data Flow

The product data flow works approximately as follows:

Product API
     ↓
RTK Query
     ↓
useGetProductsQuery()
     ↓
ProductList
     ↓
ProductCard
     ↓
User clicks "Add to Cart"
     ↓
Redux cartSlice
     ↓
Shopping Cart State
     ↓
Header Cart Count / Shopping Cart

This structure allows product information to be fetched from the API while cart interactions are handled independently through Redux.

Shopping Cart Flow

The shopping cart follows a centralized state-management approach:

ProductCard
     ↓
Add to Cart
     ↓
Redux Action
     ↓
cartSlice
     ↓
Redux Store
     ↓
Header / ShoppingCart

When a user adds a product to the cart, the Redux store is updated.

The Header reads the Redux cart state to display the current cart count, while the Shopping Cart page reads the same state to display the products and calculate totals.

Development Process

I initially worked on the project locally.

I did not create the Git repository immediately. I first wanted to work on the Homepage, test the implementation, identify issues, and make sure I was satisfied with the result.

My development process was:

Understand the Design
        ↓
Work on the Homepage Locally
        ↓
Build Reusable Components
        ↓
Add Styling
        ↓
Implement Responsive Design
        ↓
Connect Product API
        ↓
Implement Product Listing
        ↓
Implement Cart Functionality
        ↓
Test Desktop & Mobile
        ↓
Fix Issues
        ↓
Refine the Design
        ↓
Review My Work
        ↓
Create Git Repository
        ↓
Push to GitHub

After I was satisfied with the work I had completed locally, I created the Git repository and pushed the project on Saturday.

Therefore, the Git repository does not represent the exact beginning of my development process. I had already worked on the project locally before creating the repository.

Git

After completing and reviewing my work locally, I created the Git repository and pushed the project.

To view the commit history:

git log --oneline --graph --decorate --all

This can be used to review the commits and development history that were pushed to the repository.

Challenges

One of the main challenges I encountered was making the application responsive.

Some sections looked good on desktop but did not have the same appearance on mobile.

I had to adjust:

Layout
Spacing
Positioning
Element sizes
Grid columns
Flexbox alignment
Typography
Navigation behavior
Product card sizing
Shopping cart layout

Another challenge was managing shared application state.

For example, when a product is added to the cart, the cart count in the Header and the contents of the Shopping Cart need to update automatically.

I solved this by using Redux Toolkit as a centralized state-management solution.

I also used RTK Query to simplify product API requests and handle loading and error states.

These challenges helped me better understand how different parts of a React application communicate with each other.

Future Improvements

If I had more time, I would like to:

Improve the Shop page further
Add product search and filtering
Add product detail pages
Improve the Shopping Cart page
Add a complete checkout flow
Integrate a real payment gateway
Improve authentication
Add persistent cart storage
Add more product interactions
Improve loading and error states
Add automated testing
Improve accessibility
Further optimize mobile responsiveness
Improve overall application performance
Getting Started
Clone the Repository
git clone <repository-url>
Navigate to the Project
cd <project-folder>
Install Dependencies
npm install
Start the Development Server
npm run dev

Vite will provide the local development URL in the terminal.

Production Build

To create a production build:

npm run build

To preview the production build:

npm run preview
Conclusion

The Bandage E-Commerce Web App gave me practical experience working with React, TypeScript, Vite, Redux Toolkit, RTK Query, React Router, React Icons, responsive CSS, reusable components, API integration, state management, and Git.

My initial contribution focused on building the Homepage/Landing Page, where I worked extensively on the UI, styling, responsive layouts, and reusable components.

I subsequently extended the application with product listing, API-driven product data, reusable product cards, shopping cart functionality, dynamic cart counts, quantity management, and responsive navigation.

The project also gave me practical experience debugging React and TypeScript issues, managing application state, handling API data, and creating layouts that work across different screen sizes.

The Bandage project has provided a strong foundation for developing a complete e-commerce application, with further improvements planned for product details, search, filtering, checkout, authentication, payment integration, testing, and performance optimization.

Built With ❤️

Built with passion, creativity, and dedication by Inimoney Tech Boss.

Bandage E-Commerce Web App — Designed, Developed & Crafted with ❤️ by Inimoney Tech Boss.

© 2026 Inimoney Tech Boss. All Rights Reserved.