### What is NPM?

npm is a dependancy manager, which you rto install dependancies in our app.

npm init

## What is parcel/webpack?

These are the bundler, which use to code bundled our code and make our app to production ready.
HMR- hot module replacement
bundling
compress our files
tre shaking etc.

## What is NPX?

npx is use to execute dependancy/package in our app

npx parcel -D install

## what is .parcel-cache?

this is a folder where parcel cache our code while built project on dev env or production env , because of this our app reload if there is any change happen and bulit the is less also.

## Whagt is diff b/w dependencies and dev dependancies?

dependencies is for producion which perform required actions and dev one is for devepolment env which includes debugging and error checking.

## what is tree shaking?

while built our web app parcel convert our code into production ready code, it remove unused code. reduce side of the final build.

## What is Hot Module Replacement?

it is a feature in development tool which allow use to update app in realtime, as soon as we save our code the changes immediately reflect in the browser

## Favourite 5 superpowers of parcel?

HRM
Compress
Tree shaking
reduct bult time using cache
provide local server
bundling app Prod ready

## What is .gitignore ?

it is a file where we can add the folder or files name which we don't need to go to production or pushed into git repo, or which file create again or those file where we don't need to do any change.
(node_module, parcel-cache etc)

## diff b/w package.json and package-lock.json?

package.json- is a configuration file of npm, where our dependencies ,versions with (~ or ^) displayed, .
package-lock.json file have all dependencies with their exect version
We need to push these file on git for prod.

## Why should not modify package-lock.json?

because this file have track of our all dependencies versions.

## what is node_modules? good idea to push on git?

This is like a repo of dependancies, which use to build our app.
don't push in git because we can get this by code.

## whar is dist?

distribution - It contail file output file after built, It contain minified and concatenated version og js ,css etc for make out application production ready.

## what is browserlists?

it is a attribute of package.json file whihc specify in which versions our appliction will use.
-> last 2 version
-> last 2 crome version
