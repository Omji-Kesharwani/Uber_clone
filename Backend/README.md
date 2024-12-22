# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

## Request Body
The request body must be a JSON object with the following properties:

- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The user's last name. Must be at least 3 characters long.
- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the authentication token and user details.
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing validation errors.
```json
{
  "errors": [
    {
      "msg": "Fullname must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Missing Fields
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object indicating missing required fields.
```json
{
  "error": "Fullname with firstname is required."
}
```

### Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object indicating an error occurred on the server.
```json
{
  "error": "Error creating user: error_message_here"
}
```

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint is used to log in an existing user. It requires the user's email and password.

## Request Body
The request body must be a JSON object with the following properties:

- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the authentication token and user details.
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing validation errors.
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Authentication Error
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object indicating invalid credentials.
```json
{
  "error": "Invalid email or password."
}
```

### Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object indicating an error occurred on the server.
```json
{
  "error": "Error logging in user: error_message_here"
}
```

# User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint is used to retrieve the profile data of the authenticated user. It requires a valid authentication token.

## Request Headers
- `Authorization` (string, required): The user's JWT token in the format `Bearer token`.

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the user details.
```json
{
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Authentication Error
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object indicating invalid or missing token.
```json
{
  "error": "Unauthorized access. Token is missing or invalid."
}
```

### Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object indicating an error occurred on the server.
```json
{
  "error": "Error retrieving user profile: error_message_here"
}
```

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint is used to log out the authenticated user. It requires a valid authentication token.

## Request Headers
- `Authorization` (string, required): The user's JWT token in the format `Bearer token`.

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object indicating successful logout.
```json
{
  "message": "User logged out successfully."
}
```

### Authentication Error
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object indicating invalid or missing token.
```json
{
  "error": "Unauthorized access. Token is missing or invalid."
}
```

### Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object indicating an error occurred on the server.
```json
{
  "error": "Error logging out user: error_message_here"
}
```

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

## Request Body
The request body must be a JSON object with the following properties:

- `fullname`: An object containing:
  - `firstname` (string, required): The captain's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The captain's last name. Must be at least 3 characters long.
- `email` (string, required): The captain's email address. Must be a valid email format.
- `password` (string, required): The captain's password. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The vehicle's color. Must be at least 3 characters long.
  - `plate` (string, required): The vehicle's plate number. Must be at least 6 characters long.
  - `capacity` (number, required): The vehicle's capacity. Must be at least 1.
  - `vehicleType` (string, required): The type of vehicle. Must be one of `car`, `motorcycle`, or `auto`.

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the authentication token and captain details.
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing validation errors.
```json
{
  "errors": [
    {
      "msg": "First name must be at least three characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least six characters",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 6 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity cannot be less than one",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Missing Fields
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object indicating missing required fields.
```json
{
  "error": "Fullname with firstname is required."
}
```

### Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object indicating an error occurred on the server.
```json
{
  "error": "Error creating captain: error_message_here"
}
```

# API Documentation

## /captains

### POST /captains/register

Register a new captain.

#### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Response
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "latitude": null,
      "longitude": null
    }
  }
}
```

### POST /captains/login

Login a captain.

#### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response
```json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

### GET /captains/profile

Get the profile of the logged-in captain.

#### Response
```json
{
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "latitude": null,
      "longitude": null
    }
  }
}
```

### GET /captains/logout

Logout the captain.

#### Response
```json
{
  "message": "Logout successfully"
}
```
