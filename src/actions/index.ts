import { action } from 'typesafe-actions';
export const onDateChange = (date: string) => action('ON_DATE_CHANGE', date);
