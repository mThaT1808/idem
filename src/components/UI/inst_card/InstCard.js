
import './InstCard.css'


function InstCard(props) {
    const classes = ('instBlock ' + `item${props.id}`);
    return(
        <div className={classes}>
            {props.content}
        </div>
    )
}

export default InstCard