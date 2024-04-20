import { useState } from "react";

import Geography from "../components/geography/Geography.js";
import Vacancies from "../components/Vacancies/Vacancies";
import Carousel from "../components/carousel/Carousel";
import Head from "../components/head/Head";
import InstaBlock from "../components/insta_block/InstaBlock.js";
import GetInitCarousel from "../init_data/InitCarouselData";
import GetInitVacancies from "../init_data/InitVacancies";
import "./HomePage.css";

function Home() {
  const [carouselImages, setCarouselImages] = useState(GetInitCarousel);
  const addCarouselImageHandler = (newImage) => {
    setCarouselImages((prevImages) => {
      return [newImage, ...prevImages];
    });
  };
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [vacancies, setVacancies] = useState(GetInitVacancies);
  const addVacancyImageHandler = (newVacancy) => {
    setVacancies((prevVacancies) => {
      return [newVacancy, ...prevVacancies];
    });
  };
  return (
    <div className="home">
      <Head />
      <Carousel
        currentIndex={carouselIndex}
        updateIndex={setCarouselIndex}
        carouselImages={carouselImages}
      />
      <Vacancies vacancies={vacancies} />
      <InstaBlock />
      <Geography />
    </div>
  );
}

export default Home;