import MainLayout from "@/components/Layout/MainLayout";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <MainLayout>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello World
        </h1>
      </MainLayout>
    </>
  );
}
