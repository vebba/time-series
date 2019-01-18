import * as React from 'react';
import ReactEcharts from 'echarts-for-react';
import {MktData} from '../../types';


const colors = ['#5793f3', '#d14a61', '#675bba'];


export interface ChartProps {
    instruments: MktData[];
}

export class Chart extends React.Component<ChartProps> {
    public render() {
        const {instruments} = this.props;
        const options = {
            title: {
                text: 'title here'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: instruments.map((instrument) => instrument.instrumentId)
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: false
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            dataZoom: [{
                type: 'slider',
                start: 0,
                end: 10
            }],
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
            },
            series: instruments.map((instrument) => {
                return {
                    large: true,
                    name: instrument.instrumentId,
                    type: 'line',
                    showSymbol: false,
                    smooth: 'true',
                    data: instrument.timeSeries.entries.map((entry) => [entry.d, entry.v.toPrecision(4)])
                };
            })
        };
        return (
            <ReactEcharts
                option={options}
                notMerge={false}
                lazyUpdate={true}
                onChartReady={this.onChartReadyCallback}
            />
        );
    }

    private onChartReadyCallback = () => {
        console.log('on chart ready');
    };
}


