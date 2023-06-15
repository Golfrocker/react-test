import Alert from "./components/Alert";
import Message from "./components/Alert";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Button";
import { useState } from "react";
import Mybutton from "./components/Mybutton";

Image;

function App() {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("Golf");
  const [ifTrue, setIfTrue] = useState(false);

  const user = {
    firstName: "koko",
    lastName: "hoho",
    imgPic:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  };

  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  function handleplus(){
    setcount(count+1)
  }
  function handledelete(){
    setcount(count-1)
  }
  //const [alertVisible, setAlertVisibility] = useState(false);
  // let items = ["New York", "New York1", "New York2", "New York3", "New York4"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      <h1 style={{ color: "red" }}>Hello</h1>
      <p>{count}</p>
      <button onClick={handleplus}>Increase</button>
      <button onClick={handledelete}>Increase</button>
      <p>
        Myname is {user.firstName} {user.lastName}
      </p>
      <img src={user.imgPic} width="150" height="150" alt={user.firstName} />
      <p>{name}</p>
      <Mybutton />
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

// {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My alert</Alert>}
//       <Button color="primary" onClick={() => setAlertVisibility(true)}>
//         My button
//       </Button>
//       {/* <Alert>
//         Hello <span>World</span>
//       </Alert>
//       <List items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
