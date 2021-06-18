import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import DatePicker from './DatePicker';
import TextField from '@material-ui/core/TextField';

require('dotenv').config();
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },

    email: {
      position: 'relative',
      display: 'flex',
      top: '800px',
      bottom: '0',
      width: '400px',
      height: '200px',

      justifyContent: 'center',
      borderRadius: '5px',
      backgroundColor: '#e0e0e0',
    },
  },
}));

export default function Email() {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,

        process.env.REACT_APP_TEMPLATE_ID,

        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <br />
      <div className={classes.email}>
        <form
          className={classes.root}
          onSubmit={sendEmail}
          validate
          autoComplete='off'
        >
          <div
            style={{
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <TextField
              type='text'
              name='user_name'
              placeholder='enter name'
              inputProps={{ 'aria-label': 'description' }}
              border={1}
              borderColor='#e0e0e0'
              backgroundColor='white'
              style={{
                position: 'absolute',
                justifyContent: 'center',
                top: '20px',
                right: '20px',
                left: '20px',
                borderRadius: '5px',
                height: '1px',
              }}
              variant='outlined'
              size='small'
            />
            <br />
            <br />
            <TextField
              type='text'
              name='user_email'
              placeholder='enter email'
              inputProps={{ 'aria-label': 'description' }}
              border={1}
              borderColor='#e0e0e0'
              style={{
                position: 'absolute',
                justifyContent: 'center',
                top: '65px',
                right: '20px',
                left: '20px',
                borderRadius: '5px',
                height: '1px',
              }}
              variant='outlined'
              size='small'
            />
            <br />
            <br />
            <br />
            <DatePicker
              style={{
                justifyContent: 'center',
                top: '40px',
                right: '20px',
                left: '20px',
                borderRadius: '5px',
                height: '0px',
                fontFamily: 'Lato, sans-serif',
              }}
            />
            <br />
            <br />
            <Button
              type='submit'
              width='200px'
              variant='contained'
              size='small'
              color='#787878'
              display='flex'
              fontFamily='Lato, sans-serif'
              justifyContent='center'
              borderColor='#909090'
            >
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
