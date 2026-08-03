import './MonthHeader.css';

function MonthHeader(props){
    return(
        <div className = "monthHeader">
            {props.month+" "+props.year}
        </div>
    );
}

export default MonthHeader;