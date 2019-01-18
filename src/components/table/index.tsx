import * as React from 'react';

import {RootObject} from '../../types';

export const Table = (props: RootObject) => {
    const {instruments} = props;
    const dates = instruments[0].timeSeries.entries.map((item) => item.d);
    return (
        <table>
            <thead>
            <tr>
                <th>date</th>
                {instruments.map((instrument, index) =>
                    <th key={`Date_${index}`}>
                        {`Instrument ${instrument.instrumentId}`}
                    </th>)}
            </tr>
            </thead>
            <tbody>
            {dates.map((item, index) => <tr key={`Dates_${index}`}>
                <td>{item}</td>
                {instruments.map((instrument, idx) => <td
                    key={`Instruments_${idx}`}>{instrument.timeSeries.entries[index].v}</td>)}
            </tr>)}
            </tbody>
        </table>
    );
};
