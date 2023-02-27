import { useRouter } from "next/router";
import UserInfo from "@/components/UserInfo";
import Header from "@/components/Header";
import MainLayout from "@/components/Layout/MainLayout";
import Navbar from "@/components/Navbar";
import Grid from "@/components/Grid";

export default function User({ user }) {
  const router = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getServerSideProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      <MainLayout>
        <section className="min-h-screen">
          <Navbar />
          <UserInfo user={user} />
          <Grid />
        </section>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { userId } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await res.json();
  console.log(user);

  return {
    props: { user },
  };
}
