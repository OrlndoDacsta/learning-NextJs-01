import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Home</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <div className="flex gap-3 flex-col mt-4"  key={item.id}>
              <p>{item.name}</p>
              <img className="w-52" src={item.imageUrl} alt="image" />
              <p>description: {item.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
