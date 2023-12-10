# API with NodeJS and MongoDB
## Description

This is a simple API with NodeJS and MongoDB. It is a simple CRUD with a Product model. It perform the following actions:

- Create a Product
- Read a Product
- Update a Product
- Delete a Product

## Installation

To install this API you need to have installed NodeJS and MongoDB. Then you need to clone this repository and run the following command:

```bash
npm install
```
```bash
npm install mongoose
```
```bash
npm install express
```

## Usage

To use this API you need to run the following command:

```bash
node index.js 
<br>or</br>
nodemon ./bin/www
```
You can also change the port in the index.js file.
To test the API at port 3030 you can use Postman or Insomnia and perform the following requests:

- Create a Product: POST http://localhost:3030/api/products
- Read all Product: GET http://localhost:3030/api/products
- Read a Product: GET http://localhost:3030/api/:id
- Update a Product: PUT http://localhost:3030/api/:id
- Delete a Product: DELETE http://localhost:3030/api/:id

## Contributing
Issues and pull requests are welcome!

## License
[MIT](https://choosealicense.com/licenses/mit/)