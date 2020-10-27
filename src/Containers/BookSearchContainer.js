import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import './BookSearchContainer.scss';

const useStyles = makeStyles({
  root: {
    border: '10px solid',
    color: 'white',
    height: 65,
    width: 600,
    borderColor: '#0CE682',
  },
  input: {
    fontSize: 30,
    paddingLeft: 10,
  },
});

const BookSearchContainer = () => {
  const classes = useStyles();
  return (
    <segment>
      <div>
        <Input
          classes={{
            root: classes.root,
            input: classes.input,
          }}
          disableUnderline={true}
          placeholder="책을 검색해 보세요"
        />
      </div>
    </segment>
  );
};

export default BookSearchContainer;
