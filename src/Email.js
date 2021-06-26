import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import DatePicker from './DatePicker';
import TextField from '@material-ui/core/TextField';
import { NotificationManager } from 'react-notifications';

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
      width: '375px',
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
          NotificationManager.success(
            'Confirmation sent, please check your email!',
            'Successful!'
          );
        },
        (error) => {
          console.log(error.text);
          NotificationManager.error('Please enter a valid email!', 'Error!');
        }
      );
  }
  // <TextField
  //             type='text'
  //             name='user_email'
  //             placeholder='enter email'
  //             inputProps={{ 'aria-label': 'description' }}
  //             border={1}
  //             borderColor='#e0e0e0'
  //             style={{
  //               position: 'absolute',
  //               justifyContent: 'center',
  //               top: '65px',
  //               right: '20px',
  //               left: '20px',
  //               borderRadius: '5px',
  //               height: '1px',
  //             }}
  //             variant='outlined'
  //             size='small'
  //             required
  //           />
  //   <Button
  //   type='submit'
  //   width='200px'
  //   variant='contained'
  //   size='small'
  //   color='#787878'
  //   display='flex'
  //   fontFamily='Lato, sans-serif'
  //   justifyContent='center'
  //   borderColor='#909090'
  // >
  //   Confirm
  // </Button>
  return (
    <>
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
          </div>
        </form>
      </div>
    </>
  );
}
