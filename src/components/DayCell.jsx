import './DayCell.css';

function DayCell(props) {
    if(props.dateIndex < 1 || props.dateIndex > props.monthSize)
    {
        return(
            <div className = "offCell">
                <div className = "cellDate">
                    {props.date.getDate()}
                </div>
            </div>
        )
    }
    return(
        <div className = "cell">
            <div className = "cellDate">
                {props.date.getDate()}
            </div>
        </div>
    );
}

export default DayCell;