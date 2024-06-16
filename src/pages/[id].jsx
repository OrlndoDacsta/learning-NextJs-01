import FoodCard from "@/components/FoodCard";
import FoodForm from "@/components/FoodForm";
import axios from "axios";

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://api-bootcamp.do.dibimbing.id/api/v1/foods/" + context.params.id,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
      },
    }
  );
  const data = res.data.data;
  return { props: { food: data } };
}

export default function FoodDetail({ food }) {
  return (
    <div>
      <FoodCard food={food} />
      <FoodForm isEdit={true} defaultFormData={{name: food.name, imageUrl: food.imageUrl}} />
    </div>
  );
}
