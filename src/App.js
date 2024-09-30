import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "./Components/SearchBar";
import ItemList from "./Components/ItemList";
import "./App.css";
import { setItems } from "./Store/ItemSlice";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch items");
        return response.json();
      })
      .then((data) => {
        dispatch(setItems(data.products));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [dispatch]);

  if (loading)
    return (
      <div className="loder">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="loder">
        <h1>Error: {error}</h1>
      </div>
    );

  return (
    <div className="App">
      <header>
        <h1>Item List</h1>
        <SearchBar />
      </header>
      <ItemList />
    </div>
  );
}

export default App;
