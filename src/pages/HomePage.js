import { useState } from "react";


import "./HomePage.css";
import Carousel from "../components/Carousel/Carousel";
import Head from "../components/Head/Head";
import Vacancies from "../components/Vacancies/Vacancies";
import InstaBlock from "../components/InstaBlock/InstaBlock";
import GetInitCarousel from "../init_data/InitCarouselData";
import GetInitVacancies from "../init_data/InitVacancies";
import Geography from "../components/Geography/Geography";


function Home() {

    const [carouselImages, setCarouselImages] = useState (GetInitCarousel)
    const addCarouselImageHandler = (newImage) => {
        setCarouselImages(prevImages => {
            return [newImage, ...prevImages]
        })
    }
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [vacancies, setVacancies] = useState(GetInitVacancies)
    const addVacancyImageHandler = (newVacancy) => {
        setVacancies(prevVacancies => {
            return [newVacancy, ...prevVacancies]
        })
    }
    return (
        <div className="home">
            <Head />
            <Carousel
                currentIndex={carouselIndex}
                updateIndex={setCarouselIndex}
                carouselImages={carouselImages}
            />
            <Vacancies 
                vacancies={vacancies}
            />
            <InstaBlock />
            <Geography />
        </div>
    );
  }
  
  export default Home;