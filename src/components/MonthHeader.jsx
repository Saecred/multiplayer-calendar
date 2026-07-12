import './MonthHeader.css';

function MonthHeader(props){
    return(
        <div className = "monthHeader">
            {props.month}
        </div>
    );
}

export default MonthHeader;