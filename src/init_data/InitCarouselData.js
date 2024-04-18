import workingBaker from '../media/images/WorkingBaker.png';
import workingTovaroved from '../media/images/WorkingTovaroved.png';


function GetInitCarousel() {
    return[
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
    ]
}
export default GetInitCarousel