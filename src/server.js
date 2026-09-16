import express from "express";

const app = express();

// http://localhost:5173
// PORTS [3001 node application]
// http://localhost:3001/

/**
 * HTTP METHODS
 * GET - get some data
 * POST - create a resource
 * DELETE - delete a resource
 * PATCH/PUT - updates, partial updates for a resource
 */

// http://localhost:3001/
// Request - coming from the client/frontend request is incoming
// Response - the server is => sending a response back to the client

app.get("/", (request, response) => {
  return response.send("Coming from the backend server");
});

const products = [
  { id: 1, name: "tv", price: 100 },
  { id: 2, name: "orange", price: 20 },
  { id: 3, name: "shoes", price: 60 },
];

app.get("/products", (req, res) => {

    return res.send(products);
})

app.post("/signup", (req, res) => {
  // some interaction with the database
  // send something to the frontend
});

app.listen(5000, () => console.log("Server running on port: 5000"));

/**
 * POST request from the frontend - context form submit request sends it to our server
 * first_name, last_name, password
 *
 *  const [firstName, setFirstName] = useState();
 *  const [lastName, setLastName] = useState();
 *  const [password, setPassword] = useState();
 *
 * const options = {
 *  method: "POST",
 *  headers: {
 *      "content-type": "application/json"
 *  }
 *  body: {
 *      "first_name": firstName,
 *      "last_name": lastName,
 *      "password": password
 *  }
 * }
 *
 * fetch("http://localhost:5000/signup", options)
 *
 *
 */
