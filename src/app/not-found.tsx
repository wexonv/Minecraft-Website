"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return null;
};

export default NotFoundPage;

// WRITED BY WWW.WEXON.TOP