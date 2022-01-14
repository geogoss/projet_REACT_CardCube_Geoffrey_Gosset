import './Card.css'
import CardTitle from "../CardTitle/CardTitle";
import CardBody from "../CardBody/CardBody";
import CardFooterFoto from "../CardFooterFoto/CardFooterFoto";
import CardFooterSignature from "../CardFooterSignature/CardFooterSignature";
import LogoBg from '../LogoBg/LogoBg';




function Card() {
    return (
        <div>
            <div className='divImgBg'>
                <LogoBg />
            </div>
            <CardTitle />
            <CardBody />
            <div className="leFooter">
                <CardFooterFoto />
                <CardFooterSignature />
            </div>
        </div>
    )
}

export default Card;