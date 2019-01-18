import {data} from '../store/configureStore';
import {MktData} from '../types';


// stack here to update state

export function priceTime(state: MktData[] = data, action) {
    switch (action.type) {
        case 'ON_DATE_CHANGE': {
            console.log(
                [
                    ...state,
                        state.reduce(([], currentValue) => {
                            return currentValue;
                        })
                ]
            );
            break;
        }
        default:
            return state;
    }
}
