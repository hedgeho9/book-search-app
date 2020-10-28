import React from 'react';
import styled from 'styled-components';
const BookCard = ({ item }) => {
  const { title, image, author, price, publisher, pubdate, description } = item;
  let ReplaceTitle = title.replace(/(<([^>]+)>)/gi, '');

  const StyledBookCardContainer = styled.div`
    color: white;
    cursor: pointer;
    width: 350px;
    height: 550px;
    background-color: #04151f;
    margin: 60px auto 0 auto;
    box-shadow: 5px 5px 115px -14px black;
    border-radius: 2px;
  `;
  const StyledBookImg = styled.div`
    width: 90%;
    margin: 15px auto 0 auto;
    height: 400px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 111 !important;
  `;
  const StyledBookInfo = styled.div`
    padding: 0px 12px;
    overflow: hidden;
  `;

  return (
    <StyledBookCardContainer>
      <StyledBookImg image={image} />
      <StyledBookInfo>
        <h2>{ReplaceTitle}</h2>
        <div>{`저자 ${author}`}</div>
      </StyledBookInfo>
    </StyledBookCardContainer>
  );
};

export default BookCard;
