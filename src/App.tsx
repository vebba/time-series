import * as React from 'react';
import {Chart} from './components/chart';
import {connect} from 'react-redux';
import {Table} from './components/table';
import {DateFilter, ValueFilter} from './components/filters';
import {Dispatch} from 'redux';
import { onDateChange } from './actions';

interface PropsFromDispatch {
    onDateChange: typeof onDateChange;
}

interface AppProps  extends PropsFromDispatch {
    data: [];
}

class App extends React.Component<AppProps> {
    public render() {
        const {data} = this.props;
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <DateFilter instruments={data} onChange={this.handleOnDateChange}/>
                    <ValueFilter/>
                </div>
                <Chart instruments={data}/>
                <Table instruments={data}/>
            </div>
        );
    }
    private handleOnDateChange: React.ReactEventHandler<HTMLSelectElement> = (e) => {
        const sel = e.target as HTMLSelectElement;
        this.props.onDateChange(sel.value);
    }
}

const mapStateToProps = (state: []) => ({
    data: state
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDateChange: (date) => dispatch(onDateChange(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
