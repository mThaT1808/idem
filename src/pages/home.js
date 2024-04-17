import { useState } from "react";


import Carousel from "../components/Carousel";
import Head from "../components/Head";
import workingBaker from '../media/images/WorkingBaker.png';
import workingTovaroved from '../media/images/WorkingTovaroved.png';
import "./Home.css";
import Vacancies from "../components/Vacancies";
import InstaBlock from "../components/InstaBlock";


function Home() {

    const [carouselImages, setCarouselImages] = useState ([
        {
            description: "У тебя к этому талант",
            name: "валентин",
            post: "пекарь",
            image: workingBaker
        },
        {
            description: "У тебя всё под контролем",
            name: "ксения",
            post: "товаровед",
            image: workingTovaroved
        },
    ])
    const addCarouselImageHandler = (newImage) => {
        setCarouselImages(prevImages => {
            return [newImage, ...prevImages]
        })
    }
    const [carouselIndex, setcarouselIndex] = useState(0);
    const [vacancies, setVacancies] = useState([
        {
            id: '0',
            post: "товаровед",
            description: "Доставка товара по магазинам и гипермаркетам компаниив обслуживаемом регионе",
            image: require("../media/images/TOVAROVED.png"),
        },
        {
            id: '1',
            post: "водитель",
            description: "Доставка товара по магазинам и гипермаркетам компаниив обслуживаемом регионе",
            image: require('../media/images/driver.png'),
        },
        {
            id: '2',
            post: "пекарь",
            description: "Доставка товара по магазинам и гипермаркетам компаниив обслуживаемом регионе",
            image: require("../media/images/baker.png"),
        },
        {
            id: '3',
            post: "кассир",
            description: "Доставка товара по магазинам и гипермаркетам компаниив обслуживаемом регионе",
            image: require("../media/images/Chineese.png"),
        },
        {
            id: '4',
            post: "продавец",
            description: "Доставка товара по магазинам и гипермаркетам компаниив обслуживаемом регионе",
            image: require("../media/images/seller.png"),
        },
        {
            id: '5',
            post: "повар",
            description: "Доставка товара по магазинам и гипермаркетам компаниив обслуживаемом регионе",
            image: require("../media/images/Povar.png"),
        },
        {
            id: '6',
            post: "приёмщик",
            description: "Доставка товара по магазинам и гипермаркетам компаниив обслуживаемом регионе",
            image: require("../media/images/taker.png"),
        }
    ])
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
                updateIndex={setcarouselIndex}
                carouselImages={carouselImages}
            />
            <Vacancies 
                vacancies={vacancies}
            />
            <InstaBlock />
        </div>
    );
  }
  
  export default Home;