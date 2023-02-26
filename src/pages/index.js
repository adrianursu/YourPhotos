import MainLayout from "@/components/Layout/MainLayout";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Header />

      <MainLayout>
        <section className="min-h-screen">
          <Navbar />
        </section>
      </MainLayout>
    </>
  );
}
