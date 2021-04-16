[![@coreui coreui](https://img.shields.io/badge/@coreui%20-coreui-lightgrey.svg?style=flat-square)](https://github.com/coreui/coreui)
[![npm package][npm-coreui-badge]][npm-coreui]
[![NPM downloads][npm-coreui-download]][npm-coreui]  
[![@coreui react](https://img.shields.io/badge/@coreui%20-react-lightgrey.svg?style=flat-square)](https://github.com/coreui/react)
[![npm package][npm-coreui-react-badge]][npm-coreui-react]
[![NPM downloads][npm-coreui-react-download]][npm-coreui-react]  
[![npm next][npm-next]][npm]

[npm-coreui]: https://www.npmjs.com/package/@coreui/coreui
[npm-coreui-badge]: https://img.shields.io/npm/v/@coreui/coreui.png?style=flat-square
[npm-coreui-download]: https://img.shields.io/npm/dm/@coreui/coreui.svg?style=flat-square
[npm-coreui-react]: https://www.npmjs.com/package/@coreui/react
[npm-coreui-react-badge]: https://img.shields.io/npm/v/@coreui/react.png?style=flat-square
[npm-coreui-react-download]: https://img.shields.io/npm/dm/@coreui/react.svg?style=flat-square
[npm-next]: https://img.shields.io/npm/v/@coreui/react/next.png?style=flat-square
[npm]: https://www.npmjs.com/package/@coreui/react

# Steps taken

## 1- Install and configure the Amplify CLI
### link: https://docs.amplify.aws/start/getting-started/installation/q/integration/react#option-2-follow-the-instructions 

### 1.1 Install Amplify CLI
### $ npm install -g @aws-amplify/cli 
### Note: Because we’re installing the Amplify CLI globally, you might need to run the command above with sudo depending on your system policies. The above installs the CLI.

###1.2 Configure Amplify CLI
### $ amplify configure
### Note: Configure Amplify by running the following command above. Once you’re signed in, Amplify CLI will ask you to create an IAM user.Amazon IAM (Identity and Access Management) enables you to manage users and user permissions in AWS. 
### Note: Create a user with AdministratorAccess to your account to provision AWS resources for you like AppSync, Cognito etc.
### Note: Once the user is created, Amplify CLI will ask you to provide the accessKeyId and the secretAccessKey to connect Amplify CLI with your newly created IAM user.

## 2- Create CoreUI React.js application
### link to create only a react.js app: https://docs.amplify.aws/start/getting-started/setup/q/integration/react#create-a-new-react-app
### link to Core.Ui React.js main branch: 

### 2.1 Clone the repo
### $ git clone https://github.com/coreui/coreui-free-react-admin-template.git my-project
### Note: Can replace my-project with whatever you want. This can also be done by going in VSCode and clone repo through application.

### 2.2 Navigate and open app's directory
### $ cd my-project

### 2.3 Install app's dependencies
### $ npm install

### 2.4 Test locally
### $ npm start
### Note: takes a moment, but should eventually open on: http://localhost:3000/



## 3- Initialize Amplify backend
### Navigate to app’s directory and initialize Amplify backend
### $ amplify init

### Note: When you initialize a new Amplify project, a few things happen: (1) It creates a top level directory called amplify that stores your backend definition. During the tutorial you’ll add capabilities such as a GraphQL API and authentication. As you add features, the amplify folder will grow with infrastructure-as-code templates that define your backend stack. Infrastructure-as-code is a best practice way to create a replicable backend stack. (2) It creates a file called aws-exports.js in the src directory that holds all the configuration for the services you create with Amplify. This is how the Amplify client is able to get the necessary information about your backend services. (3) It modifies the .gitignore file, adding some generated files to the ignore list. (4) A cloud project is created for you in the AWS Amplify Console that can be accessed by running amplify console. The Console provides a list of backend environments, deep links to provisioned resources per Amplify category, status of recent deployments, and instructions on how to promote, clone, pull, and delete backend resources

## 4- Install Amplify backend
### Navigate to app’s directory and install libraries
### $ npm install aws-amplify @aws-amplify/ui-react

### Note: The aws-amplify package is the main library for working with Amplify in your apps. The @aws-amplify/ui-react package includes React specific UI components we’ll use as we build the app.


## 5- Set up Front end for Amplify
### 5.1Open src/index.js and add the following code below the last import

### import Amplify from "aws-amplify";
### import awsExports from "./aws-exports";
### Amplify.configure(awsExports);

## 5.1 Save files
### Ensure to save code updates
### Then go through the sequence to ensure it is all  saved locally:
### $ git init
### $ git add .
### $ git commit -m “initial commit”

## 6- Create Repository in Git Hub (GH)
### 6.1- Log onto GH
### 6.2- Go to Repositories page
### 6.3- Click new, name repository, and click create repository
### 6.4- Create Build dir in application ( $ npm run build )
### Note: this creates a /build folder and adds to .gitignore file
### 6.5- Save in VSCode, then $ git add . ; $ git commit -m “added build”
### 6.6- Push application to repository: 
### git remote add origin https://github.com/justrush/Testing.git
### git branch -M main
### git push -u origin main

##7- Add application to Amplify 
### 7.1 Go to Amplify console and click New App and Host web app
### 7.2 Select GH and click the newly created repository.
### 7.3 Wait for Amplify to pull everything in 

##8- Issues I faced
### Access was continually being denied; just like: https://github.com/aws-amplify/amplify-console/issues/436
### First tried the following: https://github.com/aws-amplify/amplify-cli/issues/5047 ; https://stackoverflow.com/questions/63546586/access-denied-error-from-protected-routes-from-react-app-hosted-on-aws-amplify 
### Solution: Many people stated that doing the rewrites and redirects would work.. never did, as many of those issues were relating to a node.js or vue.js app. However, found this solution: https://github.com/aws-amplify/amplify-cli/issues/5047  . All you have to do is-> Go to App Console, Build settings, Edit, and add /build to artifacts section, under baseDirectory. By default , baseDirectory: / , I changed it to baseDirectory: /build 
### Then go back to your makes some changes in your project in VSCode, do a commit in github, then the Amplify console will generate the build automatically and your project will run without any errors.. You do not need to add any Redirects and Rewrites for this, so if you tried that.. go back and delete them. 


# CoreUI Free React Admin Template v3

CoreUI is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means mobile devices also, where the navigation is just as easy and intuitive as on a desktop or laptop. The CoreUI Layout API lets you customize your project for almost any device – be it Mobile, Web or WebApp – CoreUI covers them all!

## Table of Contents

* [Versions](#versions)
* [CoreUI Pro](#coreui-pro)
* [Installation](#installation)
* [Basic usage](#create-react-app)
* [What's included](#whats-included)
* [Documentation](#documentation)
* [Versioning](#versioning)
* [Creators](#creators)
* [Community](#community)
* [Copyright and License](#copyright-and-license)

## Versions

* [CoreUI Free Bootstrap Admin Template](https://github.com/coreui/coreui-free-bootstrap-admin-template)
* [CoreUI Free Angular 9+ Admin Template](https://github.com/coreui/coreui-free-angular-admin-template)
* [CoreUI Free React.js Admin Template](https://github.com/coreui/coreui-free-react-admin-template)
* [CoreUI Free Vue.js Admin Template](https://github.com/coreui/coreui-free-vue-admin-template)
* [CoreUI Free Laravel Admin Template](https://github.com/coreui/coreui-free-laravel-admin-template)
* [CoreUI Free Vue.js + Laravel Admin Template](https://github.com/coreui/coreui-free-vue-laravel-admin-template)

## CoreUI Pro

**Only customers with [Enterpise Membership Plan](https://coreui.io/pro/#buy) have access to private github CoreUI Pro repository.**

* 💪  [CoreUI Pro Bootstrap Admin Template](https://coreui.io/pro/)
* 💪  [CoreUI Pro Angular 9+ Admin Template](https://coreui.io/pro/angular)
* 💪  [CoreUI Pro React Admin Template](https://coreui.io/pro/react)
* 💪  [CoreUI Pro Vue Admin Template](https://coreui.io/pro/vue)
* 💪  [CoreUI Pro Laravel Admin Template](https://coreui.io/pro/laravel/)
* 💪  [CoreUI Pro Vue.js + Laravel Admin Template](https://coreui.io/pro/vue-laravel/)

## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/coreui/coreui-free-react-admin-template.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

### Copy and Paste

Copy all your files to your project folder and then,

``` bash
# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

see also:
[CRA docs](https://create-react-app.dev/docs/getting-started)

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
CoreUI-React#v3.0.0
├── public/          #static files
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/      #assets - js icons object
│   ├── containers/  #container source - template layout
|   │   ├── _nav.js  #sidebar config
|   │   └── ...      
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── polyfill.js
│   ├── index.js
│   ├── routes.js    #routes config
│   └── store.js     #template state example 
│
└── package.json
```

## Documentation

The documentation for the CoreUI Admin Template is hosted at our website [CoreUI for React](https://coreui.io/react/)

### :film_strip: How to setup coreui react theme in laravel. Video tutorial available [here](https://youtu.be/HVVpbpNUJ8M)

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI Free Admin Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui-free-react-admin-template/releases) for changelogs for each release version.

## Creators

**Łukasz Holeczek**
* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>
* <https://github.com/coreui>

**CoreUI team**
* https://github.com/orgs/coreui/people

## Community

Get updates on CoreUI's development and chat with the project maintainers and community members.

- Follow [@core_ui on Twitter](https://twitter.com/core_ui).
- Read and subscribe to [CoreUI Blog](https://coreui.ui/blog/).


## Copyright and License

copyright 2020 creativeLabs Łukasz Holeczek.   

 
Code released under [the MIT license](https://github.com/coreui/coreui-free-react-admin-template/blob/master/LICENSE).
There is only one limitation you can't can’t re-distribute the CoreUI as stock. You can’t do this if you modify the CoreUI. In past we faced some problems with persons who tried to sell CoreUI based templates.

## Support CoreUI Development

CoreUI is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying [CoreUI Pro Version](https://coreui.io/pro/).

We're also open to conversations regarding custom sponsorship / consulting arrangements. Get in touch on [Twitter](https://twitter.com/lukaszholeczek).
