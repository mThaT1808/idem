import { useState } from 'react';
import './JobFormBody.css'
import GetInitVacancies from '../../init_data/InitVacancies';
import MyInput from '../UI/my_input/MyInput';


function JobFormBody() {
    const vacancies = GetInitVacancies()
    const [drag, setDrag] = useState('')
    const dragIn = () => {
        setDrag('dragOn')
    }
    const dragOut = () => {
        setDrag('')
    }
    const [state, setState] = useState({
        vacancy: '',
        fullName: '',
        birthday: '',
        sex: '',
        phone: '+7 ',
        email: '',
        resume: '',
        file: '',
    });
    const [errors, setErrors] = useState({
        vacancy: '',
        fullName: '',
        birthday: '',
        sex: '',
        phone: '',
        email: '',
        resume: '',
        file: '',
    })

    const validate = () => {
        let _errors ={
            vacancy: '',
            fullName: '',
            birthday: '',
            sex: '',
            phone: '',
            email: '',
            resume: '',
            file: '',
        };
        let isValid = true;
        

        if(!state.vacancy) {
            isValid = false;
            _errors.vacancy = "Выберите один из вариантов";
        }
        if(!state.fullName) {
            isValid = false;
            _errors.fullName = "Обязательное поле для ввода";
        }
        if(!state.birthday) {
            isValid = false;
            _errors.birthday = "Обязательное поле для ввода";;
        }
        if(state.phone.length<13) {
            isValid = false;
            _errors.phone = "Обязательное поле для ввода";;
        }
        setErrors(_errors)

        if (typeof state.email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
            if (!pattern.test(state.email)) {
              isValid = false;
              _errors.email = "поле заполнено не корректно";
            }
        }
        if (typeof state.birthday !== "undefined") {
            var pattern = new RegExp("\d{1,2}/\d{1,2}/\d{4}");
    
            if (!pattern.test(state.birthday)) {
              isValid = false;
              _errors.birthday = "поле заполнено не корректно";
            }
        }

        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validate())
        {
            alert(`Вакансия: ${state.vacancy}, ФИО: ${state.fullName}, ДР: ${state.birthday}, пол: ${state.sex}, телефон: ${state.phone}, почта: ${state.email}, резюме: ${state.resume}, приложенный файл: ${state.file}.`);
            setState({        
            vacancy: '',
            fullName: '',
            birthday: '',
            sex: '',
            phone: '+7 ',
            email: '',
            resume: '',
            file: '',
            })
        }

    }
    const setFeemaleSex = () => {
        setState({...state, sex: 'Женский'})
    }
    const setMaleSex = () => {
        setState({...state, sex: 'Мужской'})
    }

    return(
        <div className='jobFormBody'>
            <div className='jFormHeading'>
                Работа твоей мечты
            </div>
            <div className='jobFormCase'>
                <div className='jobFormForm'>
                    <form onSubmit={handleSubmit} className='jForm'>
                        <label className='jLabel'>
                            Вакансия*
                            <div className='selectBox'>
                                <div className='triangle'></div>                            
                                <select className='jFselect' value={state.vacancy} onChange={e => setState({...state, vacancy: e.target.value})}>
                                    <option disabled  value=""> выберите вакансию</option>
                                    {
                                        vacancies.map(index => <option key={index.id}>{index.post}</option>)
                                    }
                                </select>
                            </div>
                            <span style={{color: 'red'}}>{errors.vacancy}</span>

                            ФИО*
                            <MyInput type="text" value={state.fullName} onChange={e => setState({...state, fullName: e.target.value})}/>
                            <span style={{color: 'red'}}>{errors.fullName}</span>
                            <div className='lilBlocks'>
                                <div className='lilBlock'>
                                    Дата рождения*
                                    <MyInput type="text" value={state.birthday} onChange={e => setState({...state, birthday: e.target.value})} placeholder='28.07.2002'/>
                                    <span style={{color: 'red'}}>{errors.birthday}</span>
                                </div>
                                <div className='lilBlock'>
                                    Пол
                                    <div className='SEX'>
                                        <div>
                                            <MyInput type="radio" name='sex' onChange={setFeemaleSex} />
                                            Женский
                                        </div>
                                        <div>
                                            <MyInput type="radio" name='sex' onChange={setMaleSex} />
                                            Мужской
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='lilBlock'>
                                    Контактный телефон*
                                    <MyInput 
                                    type="tel" 
                                    value={state.phone}
                                    placeholder="+7("
                                    onChange={e => setState({...state, phone: e.target.value})}  
                                    />
                                    <span style={{color: 'red'}}>{errors.phone}</span>
                                </div>
                            
                                <div className='lilBlock'>
                                    Электронная почта
                                    <MyInput type="text" value={state.email} onChange={e => setState({...state, email: e.target.value})}/>
                                    <span style={{color: 'red'}}>{errors.email}</span>
                                </div>
                            </div>

                            Резюме
                            <textarea className='tArea' type="text" value={state.resume}  onChange={e => setState({...state, resume: e.target.value})} />
                            <label 
                                className={'fInputLabel ' + `${drag}`}                
                                htmlFor="file-input">
                                <MyInput 
                                onDragEnter={dragIn}
                                onDragOver={dragIn}
                                onDragLeaveCapture={dragOut} 
                                onDrop={dragOut}
                                id='file-input' 
                                type="file" 
                                value={state.file}  
                                onChange={e => setState({...state, file: e.target.value})} 
                                className='fileInput '/>
                                    {state.file === ''
                                    ?'выберите или перетащите файл'
                                    :state.file}

                            </label>
                            <div>Тут была бы капча</div>
                            <div className='checkBox'>
                                <MyInput id='jCheckBox' className='jCheckBox' type="checkbox" required/>
                                <label htmlFor="jCheckBox"></label>
                                <div>я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений *</div>
                            </div>
                            
                            <input className='input' type="submit" value="Отправить"/>
                        </label>
                    </form>
                </div>
                <div className='superTarget'>
                    <div className='sTContent'>
                        <h2>Наша суперцель </h2>
                        <div>
                        <div className='pgf'>— стать любимым магазином для каждой российской семьи.</div> 
                        <div className='pgf'>Сотни тысяч наших сотрудников ежедневно работают над её достижением.</div>
                        <div className='pgf'>Мы уверены, что в ближайшие годы достигнем этого и будет здорово,если вместе с тобой.</div>
                        </div>
                    </div>
                    <div className='pNumberCase'>
                        +7 (926) 433-14-16
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobFormBody