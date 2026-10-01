# API Checkpoint - User Directory

A React application for the Advanced Back End Development: API checkpoint. It consumes the JSONPlaceholder users API with Axios and displays the returned users in a responsive interface.

## Features

- Create React App
- Axios HTTP GET request
- `useEffect` for fetching users on component mount
- `useState` for storing users in `listOfUser`
- `.map()` for displaying users
- Responsive CSS styling
- Error handling with `.catch()`

## API

```text
https://jsonplaceholder.typicode.com/users
```

## Project Structure

```text
api-checkpoint/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── UserList.js
│   └── index.js
├── package.json
└── README.md
```

## Core Implementation

### Axios Request

```js
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    setListOfUser(response.data);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });
```

### React Hooks

`useEffect` is used to perform the API request when the component mounts, while `useState` stores the returned users.

```js
const [listOfUser, setListOfUser] = useState([]);
```

### Rendering Users

The users are rendered by mapping over `listOfUser` and using each user's `id` as the React key.

## Displayed User Data

The interface displays:

- Name
- Username
- Email
- Phone
- Website
- Company

## Installation

```bash
npm install
```

## Run the App

```bash
npm start
```

The development server runs at:

```text
http://localhost:3000
```

## Testing

The application was tested successfully in the browser. Users were fetched from JSONPlaceholder using Axios and rendered in the User Directory interface.

## Learning Objectives

This checkpoint demonstrates:

- Consuming an external API
- Axios GET requests
- React `useEffect`
- React `useState`
- Mapping API data into the UI
- Promise-based error handling
- Responsive styling

## Author

**Aliyu Mubarak**

Advanced Back End Development: API Checkpoint
