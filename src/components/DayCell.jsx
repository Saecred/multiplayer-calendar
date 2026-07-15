import './DayCell.css';

function DayCell(props) {
    return(
        <div className = "cell">
            <div className = "cellDate">
                {props.date}
            </div>
        </div>
    );
}

export default DayCell;