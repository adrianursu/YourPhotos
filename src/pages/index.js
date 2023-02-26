import MainLayout from "@/components/Layout/MainLayout";
import UserInfo from "@/components/UserInfo";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";

export default function Home() {
  return (
    <>
      <Header />

      <MainLayout>
        <section className="min-h-screen">
          <Navbar />
          <UserInfo />
          <Grid />
        </section>
      </MainLayout>
    </>
  );
}
