import styled from "styled-components";

export const NavigateButton = styled.button`
  margin-top: 2.1rem;
  margin-left:10rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  border-radius: 4px;
  padding: 10px 30px;
  width: ${(props) => (props.width ? props.width : "10rem")};
  height: 2.7rem;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: 600;
  font-size: 1rem;
  line-height: 20px;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "#fff")};
  display: relative;
  outline: none;
`;

