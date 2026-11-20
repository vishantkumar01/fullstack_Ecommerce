import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8001/api/")
      .then((response) => response.json())
      .then((users) => {
        setData(users);
      })
      .catch((err) => {
        console.log(err, "Not Found");
      });
  }, []);

  return (
    <>
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
        </div>
      )}
    </>
  );
};

export default App;