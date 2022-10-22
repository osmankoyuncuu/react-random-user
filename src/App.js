import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Button from "./component/Button/Button";
import User from "./component/User/User";
import { useState } from "react";
const App = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getUser = async () => {
    try {
      const url = "https://randomuser.me/api/";
      const { data } = await axios(url);
      setUser(data.results[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRandom = () => {
    getUser();
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="app">
      <User user={user} isLoading={isLoading} />
      <Button handleRandom={handleRandom} />
    </div>
  );
};

export default App;
