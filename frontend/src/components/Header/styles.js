import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  padding: 0 30px;  
  position: fixed;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  input {
    width: 600px;
    height: 50px;
    margin-right: 30px;
    padding-left: 10px;
  }
`;

export const Icon = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin-right: 20px;
  font-size: 30px;
  text-decoration: none;
  
  p {
    font-size: 12px;
  }

  &:hover {
    color: #F67A20;
  }
`;
