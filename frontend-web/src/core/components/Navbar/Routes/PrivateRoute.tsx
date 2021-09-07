import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../../../utils/auth';

type Props = {
    children: React.ReactNode;
    path: string;
}

const PrivateRoute = ({ children, path }: Props) => {
    return (
      <Route 
        path={path}
        render={({ location }) =>
            isAuthenticated() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;