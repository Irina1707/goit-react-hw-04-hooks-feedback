import styled from '@emotion/styled';

export const LeaveFeedback = styled.p`
  font-size: 24px; 
  font-weight: 900px;

`;

export const Button = styled.button`
cursor: pointer;
width: 60px;
padding: 5px;
border: 1px solid gray;
border-radius: 3px;

&:hover {
  background-color: lightblue;
}

&:not(:last-child) {
   margin-right: 10px;
 }
`;