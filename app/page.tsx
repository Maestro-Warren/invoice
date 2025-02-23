import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex mt-2 justify-center">
       <UserButton/>
    <Link href={"/sign-in"} className="btn btn-sm">
      Se connecter
    </Link>
    <Link href={"sign-up"} className="btn mx-4 btn-sm btn-accent">
      S'inscrire
    </Link>
  </div>
  );
}
