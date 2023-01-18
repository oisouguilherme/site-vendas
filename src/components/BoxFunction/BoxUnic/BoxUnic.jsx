import Box from '../../../assets/box-seam.svg'
import './boxUnic.css'

function BoxUnic({text}){
    return(
        <div className="box">
            <img src={Box} alt="" />
            <span>{text}</span>
        </div>    
    )
}

export default BoxUnic