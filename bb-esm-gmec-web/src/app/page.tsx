import Login from "@/app/auth/signin/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


export const metadata: Metadata = {
  title: "BlueBay Hotels",
  description: "Login page for BlueBay Hotels",
}

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Login />
      </DefaultLayout>
    </>
  );
}
