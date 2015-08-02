# redux-auth-demo

## Initial Requirements

- [x] The API will accept a POST request to /session containing username/password, and successfully return either a JWT token as a cookie for a valid authentication request, or reject a failed request with a 401 error.
- [ ] The front end will assume authentication and attempt to retrieve user details from /user. If no token cookie has been set, the /user endpoint will return a 401 and the UI will display the login form. If a token cookie is present, the /user endpoint will return user details based on the user, and the app will load.
- [ ] The front end login view will accept a username and password entry, and submit the request to the API POST /session route to attempt to create a session.
- [ ] A successful front end login request will trigger a redux reducer to store the current user's login attributes.
- [ ] When the session reducer is in the initial state – whether via a reset, or application load –  the application will route to the login view.
- [ ] Front end can DELETE /session to invalidate the token and log the user out.

### Bonus Round

- [ ] When a login response succeeds, a `setTimeout` could be used to delay an action until just prior to the expiration of the token. At that time, an action could be trigger to update the session reducer of the imminent expiration (`atPeril` attribute or something?) and display a dialog to the user which could be used to request a new JWT token from the API with a renewed expiration. I'm not sure the best method for this, but possibly POSTing the existing token to the API, which could inspect it's validity and if the token is okay respond with a newly issued one with the same characteristics.
