import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [age, setAge] = useState(0);

  const [users, setUsers] = useState([]);
  const userCollection = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollection, {
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <input
        placeholder="First Name..."
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <input
        placeholder="Last Name..."
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            <h1>First Name: {user.firstName}</h1>
            <h1>Last Name: {user.lastName}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
