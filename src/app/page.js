"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 100));
  }, []);

  return <div>{count}</div>;
}
