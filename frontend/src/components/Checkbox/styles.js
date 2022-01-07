import styled from "styled-components";
import icon_check from "../../assets/icon-check.png";

export const Checked = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid lightgray;
  background-color: #68d802;
  background-image: url(${icon_check});  

  &:disabled {
    background: lightgray;
  }
`;

export const Unchecked = styled(Checked)`
  background-color: #fff;
`;
