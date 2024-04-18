import './Vacancies.css';
import right from "../../media/images/right.png";
import left from "../../media/images/left.png";
import MyButton from '../UI/MyButton/MyButton';
import VacancyCard from '../UI/vacancyCard/VacancyCard';

function Vacancies (props) {


    return (
        <div className='vacancies'>
            <div className='vacHead'>
                <div>
                    вакансии в гросс маркете
                </div>
                <div className="vacButtonsBox">
                    <MyButton className="button-left"></MyButton>
                    <div style={{fontSize: '40px', color: 'gray'}}>|</div>
                    <MyButton className="button-right"></MyButton>
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