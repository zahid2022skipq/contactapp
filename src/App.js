import "./App.css";
import ListContacts from "./Components/Css/ListContacts";

function App() {
  const contacts = [
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ];
  return (
    <div>
      {contacts.map((c) => (
        <ListContacts contact={c.name} />
      ))}
    </div>
  );
}

export default App;
