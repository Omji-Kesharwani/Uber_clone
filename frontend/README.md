# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Frontend Documentation

## Components

### Button Component

The `Button` component is a reusable button component that can be used throughout the project.

#### Props

- `type` (string): The type of the button. Default is `'button'`.
- `className` (string): Additional classes for styling the button.
- `children` (node): The content inside the button.
- `onClick` (function): The function to call when the button is clicked.
- `isLoading` (boolean): If `true`, the button will show a loading state.

#### Example Usage

```jsx
import React, { useState } from 'react';
import Button from '../components/Button';

const ExamplePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Button clicked!');
    }, 3000);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-4">
          <Button
            type="button"
            className="btn-warning btn-lg btn-block"
            onClick={handleClick}
            isLoading={isLoading}
          >
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
```

## Pages

### Home Page

The `Home` page is the landing page of the application.

#### File Path

```jsx
// filepath: /c:/Users/omji2/OneDrive/Desktop/UberClone/frontend/src/pages/Home.jsx
```

### User Signup Page

The `UserSignup` page allows users to sign up for an account.

#### File Path

```jsx
// filepath: /c:/Users/omji2/OneDrive/Desktop/UberClone/frontend/src/pages/UserSignup.jsx
```

### User Login Page

The `UserLogin` page allows users to log in to their account.

#### File Path

```jsx
// filepath: /c:/Users/omji2/OneDrive/Desktop/UberClone/frontend/src/pages/UserLogin.jsx
```

### Captain Signup Page

The `CaptainSignup` page allows captains to sign up for an account.

#### File Path

```jsx
// filepath: /c:/Users/omji2/OneDrive/Desktop/UberClone/frontend/src/pages/CaptainSignup.jsx
```

### Captain Login Page

The `CaptainLogin` page allows captains to log in to their account.

#### File Path

```jsx
// filepath: /c:/Users/omji2/OneDrive/Desktop/UberClone/frontend/src/pages/CaptainLogin.jsx
```

## App Component

The `App` component is the main component that sets up the routes for the application.

#### File Path

```jsx
// filepath: /c:/Users/omji2/OneDrive/Desktop/UberClone/frontend/src/App.jsx
```

#### Routes

- `/`: Home page
- `/login`: User login page
- `/signup`: User signup page
- `/captain-signup`: Captain signup page
- `/captain-login`: Captain login page
