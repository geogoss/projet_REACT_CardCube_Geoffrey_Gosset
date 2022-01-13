import './Card.css'
import CardImg from "../CardImg/CardImg";
import CardTitle from "../CardTitle/CardTitle";
import CardBody from "../CardBody/CardBody";
import CardFooterFoto from "../CardFooterFoto/CardFooterFoto";
import CardFooterSignature from "../CardFooterSignature/CardFooterSignature";


function Card() {
    return (
        <div>
            <CardImg />
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