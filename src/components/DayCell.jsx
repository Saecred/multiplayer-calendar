import './DayCell.css';

function DayCell(props) {
    if(props.date.getMonth() !== props.currMonth)
    {
        return(
            <div className = "offCell">
                <div className = "cellDate">
                    {props.date.getDate()}
                </div>
            </div>
        )
    }
    if(props.date.getDate() == props.today.getDate()
    && props.date.getMonth() == props.today.getMonth()
    && props.date.getFullYear() == props.today.getFullYear())
    {
        return(
            <div className = "todayCell">
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