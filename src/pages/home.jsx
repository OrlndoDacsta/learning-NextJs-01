import { useState } from "react";
import axios from "axios";
import FoodCard from "@/components/FoodCard";

export async function getServerSideProps(context) {
    const res = await axios.get(
        "https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
            headers: {
                apiKey: "w05KkI9AWhKxzvPFtXotUva-",
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"
        }
    })
    const data = res.data.data
    return { props: { foods: data } }
}

export default function PostDetail({ foods }) {
    return (
        <div>
            <ul className="space-y-2 flex gap-4 flex-wrap">
                {foods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </ul>
        </div>
    )
}
