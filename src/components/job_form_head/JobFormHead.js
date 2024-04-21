import "./JobFormHead.css"
import { useNavigate } from "react-router-dom";

function JobFormHead() {
    const navigate = useNavigate()
    const redirectToHome = () => {
        navigate("/");
    }

    return(
        <div className="jobFormHead">
                <div className="headCase">
                <div className="leftHead">
                    <div  className="greyLogo"></div>
                    <div className="name">гросс маркет</div>
                </div>
                <div onClick={redirectToHome} className="rightHead">

                </div>
            </div>
        </div>
    )
}
export default JobFormHead;