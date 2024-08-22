"use client";

import React, { useEffect } from "react";
import Hero from "../Hero";
import Profile from "../Profile";
function HomePage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(openModal("hello world"));
  // }, [dispatch]);

  return (
    <div className="bg-white max-w-full max-h-full">
      {" "}
      <Hero />
      <Profile />
    </div>
  );
}

export default HomePage;
