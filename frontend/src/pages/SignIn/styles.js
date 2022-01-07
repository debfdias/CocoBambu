import styled from "styled-components";
import background from "../../assets/img-bg-login.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: url(${background}) no-repeat center fixed;
  background-color: black;
`;

export const FormContainer = styled.div`
  width: 250px;
  height: 200px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 250px;
    height: 45px;
    padding-left: 15px;
    margin-bottom: 10px;
    border: 0;
  }
`;

export const Button = styled.button`
    width: 265px;
    height: 45px;
    background: #F67A20;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;  
    border: none;
    font-weight: bold;
`;
