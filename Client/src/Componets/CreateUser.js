import { useState } from "react";
import { API_URL } from "../../constant";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = async (e) => {
    console.log(password);
    e.preventDefault();
    try {
      const response = await fetch(API_URL + "/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        console.log("User created successfully");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        console.error("Error creating user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleCreateUser}>
        <div className="form-group">
          <label className="col-form-label mt-4">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            id="inputDefault"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label mt-4">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            autocomplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
