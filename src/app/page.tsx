import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1>
            Keirs Bike
            <br />
            Repair Shop
          </h1>
          <address>
            689 Mulholland Drive <br />
            Los Angeles, California 12345
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link href="/home" className="hover:underline">
            Tell me more
          </Link>
        </div>
      </main>
    </div>
  );
}
