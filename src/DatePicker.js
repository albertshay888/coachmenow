import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 300,
  },
}));
export default function MaterialDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      style={{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <KeyboardDatePicker
        disableToolbar
        style={{
          borderColor: '#909090',
        }}
        variant='outlined'
        size='small'
        format='MM/dd/yyyy'
        margin='normal'
        id='date-picker-inline'
        label='Select date'
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />

      <KeyboardTimePicker
        inline
        style={{
          fontFamily: 'Lato, sans-serif',
          fontSize: '10px',
          borderColor: '#909090',
        }}
        margin='normal'
        id='time-picker'
        label='Select time'
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
        size='small'
      />
      <br />
      <br />
      <textarea
        style={{
          borderRadius: '5px',
          fontFamily: 'Lato, sans-serif',
          borderColor: '#909090',
          fontSize: '16px',
        }}
        type='text'
        name='message'
        value={`Golf Appointment scheduled for ${selectedDate}`}
        rows={15}
        cols={35}
      />
    </MuiPickersUtilsProvider>
  );
}
