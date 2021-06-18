import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inline: {
    display: 'inline',
    fontWeight: 'bold',
  },

  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: '20px',
    marginTop: '10px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.list} container justify='center'>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </List>
  );
}
