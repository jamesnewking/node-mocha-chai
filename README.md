#Mocha and Chai example with MondoDb
##from: 
###### https://mherman.org/blog/testing-node-js-with-mocha-and-chai/


* Install MongoDb on computer
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
>  start cmd.exe with Administrative privileges by typing cmd.exe in the search box
>  Press Ctrl + Shift + Enter. This starts the Command Prompt as the Administrator user.


> C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db

> C:\Program Files\MongoDB\Server\4.0\bin>mongo

* Make sure mocha is NPM installed
> npm install -g mocha

> -g make it globally accessible

* Make sure all dependencies are NPM installed
> express

> path

> morgan

> cookie-parser

> body-parser

> http

> mongoose

>> by typing: npm install --save-dev mongoose

>> the --save-dev will add a dependency into the package.json

* run the program by node app.js 

* Manually test each of the CRUD functions via Postman

    
    Add new blobs
    View all blobs
    View a single blob
    Update a single blob
    Delete a single blob

* For instance, in Postman: POST http://localhost:1337//blobs couple of times then
GET http://localhost:1337/blobs will show
> [
      {
          "_id": "5ba5bc8538faf202f88fe00b",
          "__v": 0
      },
      {
          "_id": "5ba5bccf38faf202f88fe00c",
          "__v": 0
      },
      {
          "_id": "5ba5bcd038faf202f88fe00d",
          "__v": 0
      },
      {
          "_id": "5ba5bcd138faf202f88fe00e",
          "__v": 0
      },
      {
          "_id": "5ba5bcd138faf202f88fe00f",
          "__v": 0
      }
  ]
  
* before mocha tests, make sure the tests have the dependencies installed like chai, chai-http
* at a directory above test, run$ mocha 
