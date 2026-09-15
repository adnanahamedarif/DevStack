# Dev Stack

### Build Your Ideal Development Stack

## About

**Dev Stack** is a React app for exploring and comparing different technologies.  
Users can choose frontend, backend, database, and other tools to build their own stack.

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify

## Features


- Add and remove technologies from your stack
- Prevent duplicate items
- Show toast messages for actions
- Load technology data from a JSON file



## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It is used in React because it makes UI code easier to write and understand.

### 2. What is the difference between props and state?

- **Props:** Data passed from a parent component to a child component.
- **State:** Data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

**useState** is used to store and update data in a component. In this project, I used it to manage the technologies added to the user's stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**useEffect** runs code when a component loads or when some data changes. I used it to load the JSON data when the app starts.

### 5. Why does every item in a **.map()** list need a unique **key** prop?

A unique **key** helps React identify each item in a list. It helps React update the list correctly and efficiently.

### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition. In this project, if the stack is empty, a message is shown. otherwise, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**. A child can send information back to the parent by calling a **callback function** passed through props.