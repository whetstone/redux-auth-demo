# redux-auth-demo

## Initial Requirements

- [ ] The API will accept a POST request to /auth containing username/password, and successfully return either a JWT token for a valid authentication request, or reject a failed request with a 401 error.
- [ ] The front end default route will check the presence of a JWT token in localStorage; if it exists it will attempt to continue with that token to resume a sesssion.
- [ ] The front end default route will detect the absence of a stored token, and route to the login view.
- [ ] The front end login view will accept a username and password entry, and submit the request to the API POST /auth route to attempt to create a session.
- [ ] A successful front end login request will trigger a redux reducer to store the current user's login attributes.
- [ ] When utilizing the application, API requests will have the JWT token injected from localStorage; if it ever expires or fails, a 401 response from the API will cause the session reducer to reset to the initial state.
- [ ] When the session reducer is in the initial state – whether via a reset, or application load –  the application will route to the login view.

### Bonus Round

- [ ] When a login response succeeds, a `setTimeout` could be used to delay an action until just prior to the expiration of the token. At that time, an action could be trigger to update the session reducer of the imminent expiration (`atPeril` attribute or something?) and display a dialog to the user which could be used to request a new JWT token from the API with a renewed expiration. I'm not sure the best method for this, but possibly POSTing the existing token to the API, which could inspect it's validity and if the token is okay respond with a newly issued one with the same characteristics.
