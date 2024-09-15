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

1. Wrap the `app` with `AuthProvider`

   ```jsx
   import { AuthProvider } from 'react-login-form-package';

   <AuthProvider>
     <App />
   </AuthProvider>;
   ```

2. Import the and use components from `react-login-form-package`:

   ```jsx
   import React from 'react';
   import { Login, Display, useAuth } from 'react-login-form-package';

   const App: React.FC = () => {
     const { username, logout } = useAuth();
     return (
       <div>
         {username ? (
           <div>
             <Display />
             <button onClick={logout}>Logout</button>
           </div>
         ) : (
           <Login />
         )}
       </div>
     );
   };

   export default App;
   ```
