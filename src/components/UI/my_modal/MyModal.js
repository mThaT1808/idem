import './MyModal.css'

export default function MyModal({children, ...props}) {


    return(
        <div className={"myModal " + `${props.active}`}>
            <div className="myModalContent">
            <div className='myModalHeading'>
            <h1>{props.heading}</h1>
            <button className='myModalCloseButton' onClick={() => props.setModalActive('')}></button>
            </div>
                {children}
            </div>
        </div>
    )
}