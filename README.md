# Getting started with the data-grid api

This is a 4 column table field of name, gender, role and country. you can check
the deployed api [here](https://data-grid-api-2.herokuapp.com/employee)

## Database Setup

Under the utils folder config the uri to that of your desried database. You get
a notification in the console when you run the backend service.

## Available Scripts

In the project directory, you can run

### `npm run dev`

Runs the api in development mode

## API

Get `\employee` Fetches an object of all available employee entry

- _Request parameters:_ none
- _Example response:_

```
{
  "status": "SUCCESS",
  "message": "Fetch Successful",
  "data": [
    {
      "_id": "62f94197ba803550312e0348",
      "name": "Adekunle Ajasin",
      "gender": "Male",
      "role": "Data Scientist",
      "country": "Tanzania",
      "__v": 0
    }
  ]
}
```

POST `/employee` Add a new employee to the database

- _Request body:_ {name:string, gender:string, role:int, country:string}
- _Example response:_

```
{
  "success": true,
  "message": "User created successfully"
}
```

PUT `/employee/<question_id>` Update an existing employee data from the database

- _Request arguments:_ id:string
- _Example response:_

```
{
  "status": "SUCCESS",
  "message": "Record update succesful"
}
```

DELETE `/employee/id` Delete an existing employee data from the database

- _Request arguments:_ id:string
- _Example response:_

```
{
  "status": "SUCCESS",
  "message": "Record deleted succesfully"
}
```
