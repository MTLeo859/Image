import styles from "@/styles/index.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen gray-100">
        <img src="https://images8.alphacoders.com/135/1352905.png" alt="Futuro" />
        <h1 className="text-4xl font-bold mb-8">Leonardo Jesus Morales Trejo</h1>
        <h2>TI03SM-22</h2>
        <p>TEXTO DEBAJO DE LA IMAGEN.</p>
      </div>
    </main>
  );
}
