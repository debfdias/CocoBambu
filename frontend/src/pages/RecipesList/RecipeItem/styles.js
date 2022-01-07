import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid lightgray;
  margin: 0 0 0 15px;
`;

export const CardInfo = styled.div`
  display: flex;
  width: 90%;

  img {
    width: 200px;
    height: 200px;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const Circle = styled(Link)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #f67a20;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 19px;
  font-weight: bold;

  &:hover {
    color: #8e420c;
    font-weight: bold;
  }
`;

export const TitleRecipe = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-top: 0px;
`;

export const DescriptionRecipe = styled.p`
  color: black;
  font-size: 15px;
  margin-top: 0px;
`;
