import Fire from "./configs/firebase";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./_app";

const Index = () => {
  const router = useRouter();
  // creation of context
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    if (user) {
      router.push("/dash");
    }
  }, [user]);

  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Index;
