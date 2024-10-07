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

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        const { products } = await response.json();
        setProducts(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ProductSlider">
      {title}
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
          <SwiperSlide key={product.title} >
            <ProductCard productData={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProdcutSlider;
