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

### State

```js
const [listOfUser, setListOfUser] = useState([]);
```

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

### Effect

```js
useEffect(() => {
  // fetch users
}, []);
```

### Rendering

```js
{listOfUser.map((user) => (
  <div className="user-card" key={user.id}>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
))}
```

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

The application was tested successfully in the browser. The User Directory displayed users fetched from JSONPlaceholder using Axios.

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
