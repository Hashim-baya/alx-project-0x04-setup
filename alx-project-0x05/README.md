# Task 1: Include a Context API for global state management (`alx-project-0x05`)

## Project Description

This task demonstrates the implementation of React's Context API for managing global application state. We extended the counter application to share the `count` state between the `CounterApp` component and a distinct `Header` component, showcasing how Context API eliminates prop drilling and provides a centralized state accessible across unrelated components.

## Objective

The goal was to utilize Context API to maintain a global state for our application, allowing it to be used across multiple components without prop drilling. Specifically, we aimed for the counter value to reflect in both the `Header` and `CounterApp` components, demonstrating cross-component communication.

## Technical Requirements

- Node.js (v14 or later)
- npm or yarn package manager
- React (v18 or later)
- TypeScript
- Next.js framework

## Instructions Followed

1.  Duplicated the project `alx-project-0x04` with the new name `alx-project-0x05`.
2.  Created a new directory `context/` in the project root.
3.  Created an empty file `context/CountContext.tsx`.
4.  Replaced the content of `CountContext.tsx` with the provided Context API setup (Context creation, `CountProvider`, and `useCount` custom hook).
5.  Modified `pages/_app.tsx` to wrap the entire application with the `CountProvider`.
6.  Modified `components/layouts/Header.tsx` to consume the `count` from `CountContext` using the `useCount` hook.
7.  Saved and closed the files.
8.  Ran `npm run dev -- -p 3000` from the terminal.
9.  Accessed `http://localhost:3000` in the browser and navigated to the Counter App.
10. Interacted with the counter buttons and observed the `count` simultaneously updating in both the `CounterApp` and the `Header`.

## What I Learned

This task provided a comprehensive understanding of the React Context API:

* **Prop Drilling Solution**: I clearly understood how Context API solves the "prop drilling" problem, preventing the need to pass props down through many layers of components that don't directly use the data.
* **Context Creation**: How to use `createContext` to create a Context object (`CountContext`). I learned about the importance of defining an `interface` (`CountContextProps`) for the context value to ensure type safety with TypeScript.
* **Context Provider**: The role of the `Provider` component (`CountProvider`). I learned that the `Provider` makes the context value available to all components that are descendants of it in the component tree, regardless of how deep they are. Wrapping `_app.tsx` with the `CountProvider` made the count globally accessible.
* **`useContext` Hook**: How to consume the context value using the `useContext` hook within functional components. This hook allows components to "subscribe" to context changes.
* **Custom Hooks for Context Consumption**: The best practice of creating a custom hook (e.g., `useCount`) to encapsulate the `useContext` call. This not only makes the code cleaner and more reusable but also allows for adding error handling (e.g., throwing an error if `useCount` is called outside of a `CountProvider`).
* **Global State Management**: I successfully implemented a scenario where the state (the counter value) changed in one part of the application (`CounterApp`) and was immediately reflected in a completely separate part (`Header`), demonstrating effective global state management for moderate complexity.
* **When to Use Context API**: I solidified my understanding that Context API is ideal for "global" data that is not frequently updated or is not complex, such as user authentication status, theme preferences, or small-to-medium scale shared data like our counter. For very complex state logic or frequent updates, Redux might be more suitable.

This task significantly enhanced my ability to manage state effectively across a React application, moving beyond local component state to a more interconnected, shared data model.