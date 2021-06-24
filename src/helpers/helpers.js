import moment from 'moment';

export const getHourFromDateStr = (date) => {

    date = moment(date);

    return date.hour() + " : " + (date.minute() === 0 ? '00' : date.minute());


}

export const formatDate = (date, withHour = false) => {

    date = moment(date);
    let format;
    if (withHour) {
        format = 'dddd DD MMMM YYYY H : mm';
    } else {
        format = 'dddd DD MMMM YYYY';
    }

    return date.format(format);

}