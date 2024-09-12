# react-login-form-package

`react-login-form-package` is a simple and reusable React login form component. It allows users to input their login credentials (username and password) and simulates a login process. After successful login, the component passes the username to another widget to display a welcome message.

## Features

- Validates that both the username and password fields are filled.
- Displays an error message if any field is left empty.
- Simulates a login process on form submission.
- Passes the username to a display component upon successful login.

## Installation

To install this package, use npm or yarn:

```bash
npm install react-login-form-package
# or
yarn add react-login-form-package
```

## Usage Process

1. Import the `LoginComponent` from `react-login-form-package`:

   ```jsx
   import LoginComponent from 'react-login-form-package';

   function App() {
     return (
       <div>
         <LoginComponent />
       </div>
     );
   }

   export default App;
   ```
