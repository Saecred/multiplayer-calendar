import './WeekdayHeaders.css';

function WeekdayHeaders(props) {
    return (
        <div className = "header">{props.day}</div>
    );
}

export default WeekdayHeaders;