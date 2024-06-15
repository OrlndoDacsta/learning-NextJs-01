import axios from "axios";

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://api.mudoapi.tech/menu/${context.params.productId}`
  );
  return {
    props: {
      makanan: res.data.data,
    },
  };
}

export default function ProductDetail({ makanan }) {
  return (
    <div>
      <h1>{makanan.name}</h1>
    </div>
  );
}
