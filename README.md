
# NCR-Duplicates-front
NCR code test

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

Prerequisites
-------------

- [Grunt](http://gruntjs.com/getting-started)
- [Bower] (https://bower.io/#install-bower)
- [Yeoman Angularjs generator requirements](https://github.com/yeoman/generator-angular)

Install `yo`, `grunt-cli`, `bower`, `generator-angular` and `generator-karma`:
```
npm install -g grunt-cli bower yo generator-karma generator-angular
```

Getting Started
---------------

The way to get started this project is to clone the repository:

```bash
# Get repository from github
git clone https://github.com/arbadev/NCR-duplicate-front.git projectName

# Change directory
cd projectName

# Install NPM dependencies
npm install

# Install Bower dependencies
bower install

# Install ngtoast bower component manually (issue)
bower install ngtoast --production

# Start the server with
grunt serve  // client url: 'http://localhost:9000/'
