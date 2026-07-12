import './DayCell.css';

function DayCell(props) {
    return(
        <div className = "cell">
            {props.date}
        </div>
    );
}

export default DayCell;