import axios from "axios";

export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      },
    }
  );

  console.log(response.data.data);
  return {
    props: {
      makanan: response.data.data || [],
    },
  };
}

export default function MakananPage({ makanan }) {
  return (
    <div>
      {makanan.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
}
