import './ImageBox.css'

function ImageBox(props) {
    const classes = 'imageBox ' + props.className;
    return (
        <div className={classes} >
            <img src={props.currentImg.image} alt="alt"  className="image"/>
            <div className="imageName">
              {props.currentImg.name}
            </div>
            <div className="imagePost">
              {props.currentImg.post}
            </div>
        </div>
    );
}
export default ImageBox