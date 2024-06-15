import { useRouter } from "next/router";

const namaProduk = () => {
  const router = useRouter();
  return <div>{router.query.namaProduk}</div>;
};

export default namaProduk;
