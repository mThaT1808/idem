import JobFormHead from '../components/job_form_head/JobFormHead'
import './ThanksgivingPage.css'

export default function ThanksgivingPage() {

    return(
        <div className="thanksgivingPage">
            <JobFormHead />
            <div className='thanksgivingGrid'>
                <div className='thanksgivingContent'>
                    <h1>
                        Ждем тебя!
                    </h1>
                    <div>
                        В 2020 году самыми востребованными умениями и качествами на рынке труда станут: 
                    </div>
                    <div className='smol'>
                        Умение ставить цели, планировать свое время, инициативность, настойчивость, высокая мотивация, умение эффективно общаться, любознательность. 
                    </div>
                    <div>
                        А профессиональным навыкам можно научить любого человека.
                    </div>
                </div>
                <div className='thanksgivingPhone'>
                    <h2>Остались вопросы?</h2>
                    <div className='pNumberCase'>
                        +7 (926) 433-14-16
                    </div>
                </div>
            </div>
        </div>
    )
}