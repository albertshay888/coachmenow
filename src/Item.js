import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import profile1 from './images/profile.jpg';
import Email from './Email';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    alignItems: 'center',
  },
  inline: {
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif',
  },
  price: {
    display: 'inline',
    fontWeight: 'bold',
    alignItems: 'flex-end',
    fontFamily: 'Lato, sans-serif',
    float: 'right',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: '2px',
    float: 'left',
  },
  list: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lato, sans-serif',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    width: '365px',
    margin: '4px',
    fontFamily: 'Lato, sans-serif',
    borderColor: ' #484848',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
  },
}));

export default function Item() {
  const classes = useStyles();
  const [showHideEmail, setShowHideEmail] = useState(false);
  const hideComponent = function (name) {
    if (name) setShowHideEmail(!showHideEmail);
  };
  return (
    <div>
      <ListItem alignItems='flex-start' className={classes.item}>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' src={profile1} className={classes.large} />
        </ListItemAvatar>
        <ListItemText
          primary='JOHN DOE'
          className={classes.inline}
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                Experience:
              </Typography>
              {' 10 years'}
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                <br />
                Great for:
              </Typography>
              {' Beginners, Single, Handicaps'}
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                <br />
                Availability:
              </Typography>
              {' Tu: 10 - 6pm / Th: 2 - 4pm'}
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                <br />
                <b> $60</b>
              </Typography>
              {' per hour'}
            </React.Fragment>
          }
        />
        <Button
          onClick={() => hideComponent('showHideEmail')}
          style={{ cursor: 'pointer', borderRadius: '5px' }}
          width='200px'
          variant='contained'
          size='small'
          color='#696969'
          display='flex'
          fontFamily='Lato, sans-serif'
          borderColor='#909090'
          alignItem='right'
        >
          Book now
        </Button>
        {showHideEmail && (
          <Email hideComponent={hideComponent} showHideEmail={showHideEmail} />
        )}
      </ListItem>
    </div>
  );
}
