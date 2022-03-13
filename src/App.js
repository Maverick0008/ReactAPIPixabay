import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { getImages } from "./api";
import SearchBox from "./components/SearchBox";
const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    getImages(valueSearch).then((data) => {
      console.log(data.hits);
      setImages(data.hits);
      setIsLoading(false);
    });
  }, [valueSearch]);
  return (
    <div className="container mx-auto ">
      <SearchBox searchText={(text) => setValueSearch(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-4xl text-center mx-auto mt-32">Not found</h1>
      )}
      {isLoading ? (
        <h1 className="text-4xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
