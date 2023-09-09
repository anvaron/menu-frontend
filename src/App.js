import { useEffect, useState } from "react";
import "./App.css";

// Components
import Container from "./components/Container/Container";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import MenuList from "./components/MenuList/MenuList";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}/items`);
        const json = await response.json();
        const { data, error } = json;
        console.log(response.ok)
        
        if (response.ok) {
          if(loading) {
            hideLoading();
          }
          setMenuData(data)
        } else {
          setError(error);
        }
      } catch (err) {
        console.log(`<App /> useEffect error : ${err.message}`);
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } 
    else if (error) {
      return <Error error={error} />;
    } else {
      return <MenuList menuData={menuData} />;
    }
  };
  
  const hideLoading = () => {
    setTimeout(() => {
      return setLoading(false)
    }, 1000)
  };
  
  return (
    <div className="App">
      <h2 class="my-6 text-4xl font-bold">
        Menu List
        <span class="text-primary dark:text-primary-400"></span>
      </h2>
      <Container center={Boolean(error || loading)} scroll={false}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;