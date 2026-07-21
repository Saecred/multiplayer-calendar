import './DayCell.css';

function DayCell(props) {
    return(
        <div className = "cell">
            {props.date !== null && (
            <div className = "cellDate">
                {props.date}
            </div>
            )}
        </div>
    );
}

export default DayCell;