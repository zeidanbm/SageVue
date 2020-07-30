## Overview

Sage Theme using Vue + Vue Cli + Tailwind
This also includes the complete build that you get using vue cli

-   vuex
-   router
-   jest unit testing
-   eslint/prettier
-   linting on save & commit

### Installation

-   git clone the repo or download into the themes folder in wordpress website
-   `composer install` — install composer packages
-   `npm install` — install node modules

## Server Setup

To get HMR to work, you will need to configure your server. Below is an example with an nginx configuration.

```sh
location /sockjs-node {
      proxy_set_header X-Real-IP  $remote_addr;
      proxy_set_header X-Forwarded-For $remote_addr;
      proxy_set_header Host $host;

      proxy_pass http://127.0.0.1:3000;

      proxy_redirect off;

      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
}
```

### Build commands

-   `npm serve` — Compile assets for development and start wepack dev server
-   `npm build` — Compile assets for production

## Documentation

-   For more info on Sage: [Sage documentation](https://roots.io/sage/docs/)
