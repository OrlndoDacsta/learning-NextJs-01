import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClickMauBayar = () => {
    router.push("/shop/checkout");
  };

  return (
    <div>
      <div className="flex gap-3">
        <Link href="/profile">Profile</Link>
        <Link href="/shop/sepatu-lari">Sepatu Lari</Link>
      </div>

      <Link href="/shop/checkout">
        <button className="border-2 border-red-500 px-4 py-2">mau bayar</button>
      </Link>

      <button
        className="border-2 border-red-500 px-4 py-2"
        onClick={handleClickMauBayar}
      >
        mau bayar
      </button>
    </div>
  );
}
