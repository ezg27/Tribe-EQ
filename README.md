# Tribe-EQ

A full stack implementation of a user interface for the equaliser section of a typical mixing console/plugin. Through interaction with a RESTful API, it allows for the management of settings through viewing, creating, updating and deleting presets.

Frontend built with React + hosted on Netlify, corresponding RESTful API built using Go + hosted on Heroku. Database hosted with MongoDB/mLab.

I opted for a typical MVC architecture, allowing for the separation of concerns and ease of unit testing.

I chose to utilise the value ranges (and colour scheme) for gain/frequency controls of a typical SSL 4000-series console. While such boards often utilise variable dials/knobs to control parameters like gain/frequency, I opted for sliders due to greater ease of use in web/screen based applications.


APP URL: https://condescending-galileo-cfdd11.netlify.com

API URL: https://tribe-eq.herokuapp.com/api

Repo URL: https://github.com/ezg27/Tribe-EQ


## Getting started

To install project, navigate to your current Go workspace directory, then run command:
```
go get -u github.com/ezg27/Tribe-EQ
```

### Go Server

#### Prerequisites
* Go - version 1.11.1
* Echo - version 3.3.6 - https://echo.labstack.com/
* Dep - version 0.5.0 - https://golang.github.io/dep/

<br>

1. Open Terminal window and enter command ```mongod``` to start mongoDB

2. To seed local development database and start server for the first time, in another Terminal window navigate into Tribe-EQ folder, then set environment variable SEED and run main package with command:
```
SEED=true go run main.go
```

3. Once database is seeded, server can be started independently with:
```
go run main.go
```

4. Use curl or Postman to access data on specified endpoints

5. To build and run as a single binary file, from root directory run command:
```
go build
```

6. Execute binary with:
```
./Tribe-EQ
```

<br>


### API endpoints (for local database and Heroku app)

```http
GET /api
```
Serves an HTML page with documentation for all available endpoints

```http
GET /api/presets
```
Get all presets

```http
POST /api/presets
```
Add a new preset. This route requires a JSON body with name key value pair 
e.g: ```{"name": "new preset"}```

```http
GET /api/presets/:id
```
Returns an individual preset by ID

```http
PATCH /api/presets/:id
```
Updates an existing preset by ID. This route requires a JSON body containing the updated presets new values

```http
DELETE /api/presets/:id
```
Deletes a preset by ID

## Testing

1. From project root directory, navigate into controllers folder:
```
cd controllers
``` 
2. Make sure mongo is still running in Terminal, then to run tests use the command:
```
go test
```
3. To check test descriptions, view messages under each Assertions label in file: ```controllers_test.go``` 

<br>

### React UI

#### Prerequisites
* Node - version 10.10.0
* React - version 16.5.2

#### Dependencies:
* Material UI - https://material-ui.com/
* React Modal - https://www.npmjs.com/package/react-modal
* RC Slider - https://www.npmjs.com/package/rc-slider
* React-Switch - https://www.npmjs.com/package/react-switch
* Axios - https://www.npmjs.com/package/axios

#### devDependencies:
* Jest - https://jestjs.io/
* Enzyme - https://airbnb.io/enzyme/

<br>

1. From root directory, navigate into UI folder:
```
cd UI/
```
2. Install dependencies:
```
npm install
```
3. To start the app, run command:
```
npm start
```

## Testing

Inside UI folder, run command:
```
npm test
```