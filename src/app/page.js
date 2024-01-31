// import Image from "next/image";
"use client"
import UserForm from "./component/Userform";
import { signIn, useSession } from "next-auth/react";


export default function Home() {

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      alert("please signin to continue");
      signIn();
    },
  });
  console.log(session);


  return (


    <UserForm />
  )



}
