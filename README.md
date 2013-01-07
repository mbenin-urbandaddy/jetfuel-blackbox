jetfuel-blackbox
================

Currently, BlackBox is a boilerplate client-side application framework, built on top of the JetFuel build system and Grunt, Backbone, RequireJS, JetRunner unit test server (Mocha BDD/TDD test framework + PhantomJS + SauceLabs cloud integration), Dust (and Plate Django port) for templating (both client and server-side), Sass, Express dynamic web server, etc.

BlackBox is the template used for JetFuel's basic `init` command.

Install via NPM:
$ sudo npm install -g jetfuel --force
$ jetfuel init blackbox-example && cd blackbox-example
$ npm install
$ ./bin/build-run.sh
