import './Body.css'

function Calendar() {
    return <div className="calendar-wrapper">
        <button className="arrow">{"<"}</button>
        <table className="calendar-table">
            <tbody>
                <tr className="calendar-title">
                    <td colSpan={7}>MARCH</td>
                </tr>
                <tr className="calendar-head">
                    <td className="day-of-week">SUN</td>
                    <td className="day-of-week">MON</td>
                    <td className="day-of-week">TUE</td>
                    <td className="day-of-week">WED</td>
                    <td className="day-of-week">THU</td>
                    <td className="day-of-week">FRI</td>
                    <td className="day-of-week">SAT</td>
                </tr>
                <tr className="calendar-times">
                    <td contentEditable="true">
                        <br />
                        <u>8am</u><br />
                        Sunday Service <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </td>
                    <td contentEditable="true">
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <u>2pm</u><br />
                        Take Brother to Aquarium
                    </td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true">
                    <br /><br /><br /><br /><br /><br /><br />
                        <u>12pm</u><br />
                        UNI STU 198 Meeting <br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <u>6pm</u><br />
                        Dinner with Michael
                    </td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true">
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <u>7pm</u><br />
                        Bible Study
                    </td>
                    <td contentEditable="true"></td>
                </tr>
                <tr className="notes-head"><td colSpan={7}>Notes</td></tr>
                <tr className="calendar-notes">
                    <td contentEditable="true" className="notes-box"></td>
                    <td contentEditable="true" className="notes-box">LA Evaluation</td>
                    <td contentEditable="true" className="notes-box"></td>
                    <td contentEditable="true" className="notes-box"></td>
                    <td contentEditable="true" className="notes-box">18 Unit Restriction Lifted</td>
                    <td contentEditable="true" className="notes-box"></td>
                    <td contentEditable="true" className="notes-box">Decompression day: take time to relax.</td>
                </tr>
            </tbody>
            
        </table>
        <button className="arrow">{">"}</button>
    </div>
}

export default function Body() {
    return <div className="body">
        <Calendar />
    </div>
}