import * as React from 'react';

export const DateFilter = (props) => {
    const {instruments, onChange} = props;
    const dates = instruments[0].timeSeries.entries.map((item) => item.d);
    return (
        <div>
            Date filter:
            <select onChange={onChange}>
                {dates.map((date, index) => <option key={`MinDate_${index}`} value={date}>{date}</option>)}
            </select>
            <select>
                {dates.map((date, index) => <option key={`MaxDate_${index}`} value={date}>{date}</option>)}
            </select>
            <button>submit</button>
        </div>
    );
};

export const ValueFilter = () => {
    return (
        <div>
            Value filter:
            <input/>
            <input/>
            <button>submit</button>
        </div>
    );
};
