# Single Page Application using Angular, Laravel and JWT

This repo shows how to create a Single Page Application authentication system using Angular 8 for the frontend  and Laravel 5.6 for the backend. The 2 frameworks share data via Json Web Token (JWT) cors package.

## Application feautures

* OAuth Authentication using JWT
* Authentication system whereby a user can login/logout and reset password
* CRUD functionality for authenticated users.

## Frontend Installation
* Clone the frontend folder using **git clone**
* Run **npm install** which will read all the dependencies defined in the package.json file and automatically install them.
* Use your favorite IDE and navigate to the **src/app/Services/auth.service.ts** file and set the correct route to hit your backend.
* Navigate to the **src/app/Services/token.service.ts** file and set the correct route to hit your backend.Used for token services and authentication when signing up. 
* Run **ng serve** to spin up your local server.

Please check the backend repo link [here](https://github.com/Patwan/angular-laravel-spa)

## License
This program is free software published under the terms of the GNU [Lesser General Public License](http://www.gnu.org/copyleft/lesser.html).
You can freely use it for commercial or non-commercial purposes.