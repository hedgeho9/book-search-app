import React, { useState, Fragment } from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import './BookSearchContainer.scss';
import { FaSearch } from 'react-icons/fa';
import BookCard from '../Components/BookCard';
import JsonData from './item.json';

const useStyles = makeStyles({
  root: {
    border: '10px solid',
    color: 'white',
    height: 65,
    width: 600,
    borderColor: '#0CE682',
  },
  input: {
    fontSize: 20,
    paddingLeft: 10,
  },
});

const BookSearchContainer = () => {
  const [value, setValue] = useState('');
  const classes = useStyles();

  const onChange = (e) => setValue(e.target.value);

  return (
    <Fragment>
      <h1>BOOK SEARCH</h1>
      <div className="searchBar">
        <Input
          classes={{
            root: classes.root,
            input: classes.input,
          }}
          disableUnderline={true}
          placeholder="책을 검색해 보세요"
          onChange={onChange}
          value={value}
        />
        <FaSearch className="sicon" />
      </div>
      <div>
        <BookCard item={JsonData.items[0]} />
      </div>
    </Fragment>
  );
};

export default BookSearchContainer;
