import './Vacancies.css';
import tovaroved from '../media/images/TOVAROVED.png';
import right from "../media/images/right.png";
import left from "../media/images/left.png";
import MyButton from './UI/MyButton';
import VacancyCard from './UI/vacancyCard/VacancyCard';

function Vacancies (props) {


    return (
        <div className='vacancies'>
            <div className='vacHead'>
                <div>
                    вакансии в гросс маркете
                </div>
                <div className="vacButtonsBox">
                    <MyButton><img src={left} alt="<-" style={{height: "30px"}}/></MyButton>
                    <div style={{fontSize: '40px', color: 'gray'}}>|</div>
                    <MyButton><img src={right} alt="->" style={{height: "30px"}}/></MyButton>
                </div>
            </div>
            <div className='vacScroller'>
                <ul className='vacScroller__inner' >
                    {props.vacancies.map((index) =>
                        <VacancyCard 
                            key={index.id}
                            image={index.image}
                            post={index.post}
                            description={index.description}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}
export default Vacancies;