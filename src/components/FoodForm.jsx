import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function FoodForm({ defaultFormData, isEdit }) {
  const router = useRouter();
  const [fromData, setFromData] = useState(defaultFormData);
  const onSubmit = async (e) => {
    e.preventDefault();
    const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
    const urlCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
    const res = await axios.post(
      isEdit ? urlEdit : urlCreate,
      {
        name: fromData.name,
        imageUrl: fromData.imageUrl,
        description: " ",
        ingredients: [],
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    console.log(res);
    if (res.data.code === "200") router.push("/home");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={fromData.name}
        onChange={(e) => setFromData({ ...fromData, name: e.target.value })}
        placeholder="masukkan nama makanan"
      />
      <input
        value={fromData.imageUrl}
        onChange={(e) => setFromData({ ...fromData, imageUrl: e.target.value })}
        placeholder="masukkan url gambar"
      />
      <button type="submit" className="p-2 rounded bg-blue-800">
        update makanan
      </button>
    </form>
  );
}
