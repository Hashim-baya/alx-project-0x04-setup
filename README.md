# Next.js Application Setup

Hello! This is a simple Next.js application that I built to practice core concepts like shared layouts, global styling, and imperative routing. It's a foundational project that demonstrates how to create a scalable and maintainable Next.js application.

---

## 🚀 Getting Started

To get this project running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd alx-project-0x03
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📘 Project Learnings

### 1. **Shared Layouts with the DRY Principle**

I've learned to implement a **shared layout** for a Next.js application. Instead of repeating the header and footer components on every page, I created a `Layout` component that wraps the main page content. This follows the **Don't Repeat Yourself (DRY)** principle, making the codebase cleaner and easier to manage. All pages now automatically share a consistent header and footer.

### 2. **Global Styling and Fonts**

I integrated a custom font, **Montserrat from Google Fonts**, into the project. By importing the font into the `styles/global.css` file, I was able to apply it globally to the entire application. This ensures a consistent look and feel without having to manually apply the font to each component.

### 3. **Imperative Routing**

While Next.js's file-based routing is powerful, I also explored **imperative routing** using the `useRouter` hook. I implemented a function that programmatically navigates users to different pages when they click a button. This approach gives me more control over the routing logic, such as passing specific data or handling user interactions before navigating.

### 4. **Code Organization**

To keep the project tidy, I learned the importance of centralizing my **TypeScript interfaces**. I created a dedicated `interfaces` directory where all my interfaces are defined. This makes the code more organized and easier to maintain, as all type definitions are in one place.

### 5. **Custom Error Pages**

I created a custom **404 page** to handle situations where a user tries to access a non-existent URL. By creating `pages/404.tsx`, I overrode Next.js's default error page with a custom, branded one. This provides a better user experience by guiding them back to the home page with a clear and friendly message.

---

This project has been a fantastic way to solidify my understanding of these fundamental Next.js concepts. It serves as a great starting point for building more complex applications.
