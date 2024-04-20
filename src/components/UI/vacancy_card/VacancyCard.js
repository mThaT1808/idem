import './VacancyCard.css'


function VacancyCard(props) {

    return(
        <li className='vacCard'>
            <div className='post'>
                {props.post}
            </div>
            <div className='vacDescription'>
                {props.description}
            </div>
            <img src={props.image} alt="alt"  className="vacancyImg"/>
        </li>
    )
}

export default VacancyCard