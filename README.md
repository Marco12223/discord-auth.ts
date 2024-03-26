# <center>  discord-auth.ts

---
This package provides a comprehensive and easy-to-use solution for implementing Discord OAuth2 authentication in your TypeScript applications. Designed with simplicity and flexibility in mind, it allows developers to quickly integrate Discord's OAuth2 authentication flow into their projects, enabling secure and seamless user authentication. </center>

---
## Table of content
- [Installing](#installing)
- [Usage](#usage)
- [Documentation](#documentation)
- [License](#license)

---

## Installing
To install the package, simply run the following command in your project directory:

```bash 
npm install discord-auth.ts@latest
```

or

```bash
 npm install git+https://github.com/Marco12223/discord-auth.ts.git
```

to load the latest version from the repository.

---

## Usage
 - [Typescript Usage](#typescript)
 - [Javascript Usage](#javascript)
 - [Example](#example)

### Typescript
<details>
    <summary>Click here to see the TypeScript Usage</summary>
To use the package, you need to create a new instance of the `DiscordAuth` class and provide the necessary configuration options. Here's an example of how you can set up the authentication flow in your application:

```typescript
import { DiscordAuth } from 'discord-auth.ts';
import { IDENTIFY, EMAIL } from 'discord-auth.ts/src/enums/scopes';

const oauth2 = new DiscordAuth('CLIENT_ID', 'CLIENT_SECRET', 'REDIRECT_URI', [IDENTIFY, EMAIL]);
````
The `DiscordAuth` class takes four parameters:
- `CLIENT_ID`: Your Discord application's client ID.
- `CLIENT_SECRET`: Your Discord application's client secret.
- `REDIRECT_URI`: The URI to redirect users to after authentication.
- `SCOPES`: An array of OAuth2 scopes to request from the user.

Once you've created an instance of the `DiscordAuth` class, you can use its methods to generate the necessary URLs and handle the authentication flow. Here's an example of how you can generate the authorization URL and redirect users to it:

```typescript
const oauth2Link = oauth2.getAuthUrl();
```

This will return a URL that you can redirect users to in order to start the authentication flow. After the user has authenticated with Discord, they will be redirected back to the `REDIRECT_URI` you provided earlier. You can then use the `tokenExchange` method to exchange the authorization code for an access token:

```typescript
const code = req.query.code; // Get the authorization code from the request (Express example), of course you can get it from anywhere.
const token = await oauth2.accessHandler().tokenExchange(code)
```

This will return an object containing the access token, refresh token, and token expiration time. You can use the access token to make authenticated requests to the Discord API on behalf of the user.

</details>

### Javascript
<details>
    <summary>Click here to see the JavaScript Usage</summary>

To use the package in JavaScript, you can follow the same steps as in TypeScript, but without the type annotations. Here's an example of how you can set up the authentication flow in your application:

```javascript
const { DiscordAuth } = require('discord-auth.ts/dist/discordAuth.js');
const { IDENTIFY, EMAIL } = require('discord-auth.ts/dist/enums/scopes.js');

const oauth2 = new DiscordAuth('CLIENT_ID', 'CLIENT_SECRET', 'REDIRECT_URI', [IDENTIFY, EMAIL]);
```

The `DiscordAuth` class takes four parameters:
- `CLIENT_ID`: Your Discord application's client ID.
- `CLIENT_SECRET`: Your Discord application's client secret.
- `REDIRECT_URI`: The URI to redirect users to after authentication.
- `SCOPES`: An array of OAuth2 scopes to request from the user.

Once you've created an instance of the `DiscordAuth` class, you can use its methods to generate the necessary URLs and handle the authentication flow. Here's an example of how you can generate the authorization URL and redirect users to it:

```javascript
const oauth2Link = oauth2.getAuthUrl();
```

This will return a URL that you can redirect users to in order to start the authentication flow. After the user has authenticated with Discord, they will be redirected back to the `REDIRECT_URI` you provided earlier. You can then use the `tokenExchange` method to exchange the authorization code for an access token:

```javascript
const code = req.query.code; // Get the authorization code from the request (Express example), of course you can get it from anywhere.
const token = await oauth2.accessHandler().tokenExchange(code)
```

This will return an object containing the access token, refresh token, and token expiration time. You can use the access token to make authenticated requests to the Discord API on behalf of the user.

</details>

### Example

Here's a complete example of how you can set up the authentication flow in an Express application (For TypeScript but it can be easily converted to JavaScript):

```typescript
import express from 'express';
import { DiscordAuth } from 'discord-auth.ts';
import { Scopes } from 'discord-auth.ts/src/enums/scopes';
const app = express(); // Create a new Express application
const port = 3000; // Port to run the Express server on

const oauth2 = new DiscordAuth('CLIENT_ID', 'CLIENT_SECRET', 'http://localhost:3000/auth', [Scopes.IDENTIFY, Scopes.EMAIL]); // Create a new instance of the DiscordAuth class

// Initial route to start the OAuth2 flow (http://localhost:3000/)
app.get('/', (req, res) => {
    const oauth2Link = oauth2.getAuthUrl();
    res.redirect(oauth2Link);
});

// Redirect URI for the OAuth2 flow (http://localhost:3000/auth)
app.get('/auth', async (req, res) => {
    const code = req.query.code; // Get the authorization code from the request
    const token = await oauth2.accessHandler().tokenExchange(code); // Exchange the authorization code for an access token
    const userData = await oauth2.getUser(token); // Get the user's information from Discord
    res.send(userData.id); // Respond with the user's Discord ID
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`); // Start the Express server
});
```

---

## Documentation
We currently do not have a dedicated documentation page, but you can find detailed information about the package and its methods in the source code. The package is designed to be simple and intuitive to use, so you should be able to get started quickly by following the examples provided above.

---

## License
This package is licensed under the MIT License. You are free to use, modify, and distribute it as you see fit. For more information, please refer to the [LICENSE](LICENSE) file.