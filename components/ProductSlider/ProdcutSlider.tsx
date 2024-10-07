"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductSlider.css";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/interface/productInterface";

interface Iprops {
  title: string;
}
const ProdcutSlider: React.FC<Iprops> = ({ title }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getRandomItems = (arr :unknown, numItems:number) => {
    // Shuffle the array and return the first `numItems` items
    return arr.sort(() => 0.5 - Math.random()).slice(0, numItems);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        const { products } = await response.json();
        setProducts(getRandomItems(products,15));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ProductSlider my-10">
      <div className="text-3xl mb-3 text-center">{title}</div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        breakpoints={{
          1440: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          320: { slidesPerView: 2 },
        }}
        className="flex items-center justify-center"
      >
        {products.map((product) => (
          <SwiperSlide key={product.title}>
            <ProductCard productData={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProdcutSlider;
