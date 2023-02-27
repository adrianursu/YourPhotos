import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DefaultUser() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/users/1");
  }, [router]);

  return null;
}
