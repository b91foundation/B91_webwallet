# B91 Web Wallet

B91 wallet gui based on the basic wallet and cold wallet.

### Directory Structure

```
.
├── src                                  // all files of the application
│   ├── assets
│   │   └── imgs                         // image files
│   │   └── style                        // common less styles
│   ├── components/                      // js files of components
│   ├── utils/                           // js utils
│   ├── lib/                             // common library
│   ├── main.js                          // entrance of js
│   ├── router.js                        // defination of router
│   └── App.vue                          // entrance of vue
│
├── public                               // static html and icon files
│   ├── favicon.ico
│   └── index.html
│
├── .gitignore
├── README.md
├── babel.config.js                      // config of babel
├── gulpfile.js                          // scripts of gulp
├── package.json                         // npm settings
└── server.js                            // local server for development
```

### How to run locally

  1. install node.js (homebrew or https://nodejs.org/)

  2. clone this project

``` bash
$ git clone https://github.com/b91foundation/B91_webwallet.git
```

  3. install packages

```bash
  $ cd B91_webwallet
  $ npm install
```

  4. run

```
$ npm run dev
```
  5. open the website on ```localhost:8080```

  6. if you want the wallet to access data from a different address, edit ```config/nginx.default.conf```

```bash
  proxy_pass 
```
to a particular address
