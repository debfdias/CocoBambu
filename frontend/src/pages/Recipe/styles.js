import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  color: black;
  font-size: 1rem;
  font-weight: bold;
  margin: 45px 45px 0 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
  background: url(${(props) => props.image}) center center/cover no-repeat;    
  padding: 15px 30px;
`;

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #fff;
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100px;
  color: #fff;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export const PreparationTime = styled.div`
  display: flex;
  width: 200px;
  height: 70px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;  
  background-color: #fff;
  color: #000;  

  h1 {
    font-size: 14px;
    margin-top: 20px;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
  }

  p {
    font-size: 20px;
    color: white;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  background-color: #f1f1f1;
  height: 60px;
  padding: 40px 30px;
`;

export const ProgressIncomplete = styled(ProgressBar)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  height: 5px;
  background-color: #f67a20;
  transition: width 0.8s;
  min-width: 5%;
  width: ${(props) => (props.now ? props.now : "auto")};
`;

export const ProgressComplete = styled(ProgressBar)`
  background-color: #68d802;
  height: 5px;
`;

export const Button = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 5px;
  background: ${(props) =>
    props.success ? "green" : "orange"};
  color: #fff;
  cursor: pointer;
  font-size: 1rem;  
  border: none;

  &:disabled {
    background: gray;
  }
`;

export const InfoFooter = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: black;
  }
`;

export const AlertButton = styled.button`
  background: #fff;
  color: #000;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  width: 150px;
  height: 50px;
  border: 3px solid black;
  margin-top: 50px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ContainerIngredients = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  background-color: #F9F9F9;
  border-bottom: 1px solid lightgray;

  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;


  button {
    margin-right: 35px;
  }
`;

export const ContainerSteps = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 30px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const Step = styled.div`
  display: flex;
  margin-bottom: 10px;

  button {
    margin-right: 35px;
  }

  div {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      margin-top: -10px;
    }
  }
`;
