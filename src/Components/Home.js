import React, { useContext } from "react";
import Hero from "../Pages/Hero";
import DisplayItem from "../Components/DisplayItem";
import ProductContext from "../Shopping-Context/ProductContext";
import Loading from "./Loading";

function Home() {
  const { data } = useContext(ProductContext);
  const { productCategory } = data;
  return (
    <>
      <Hero />
      {productCategory.map((category) => {
        return <DisplayItem key={category.id} {...category} />;
      })}
    </>
  );
}

export default Home;
