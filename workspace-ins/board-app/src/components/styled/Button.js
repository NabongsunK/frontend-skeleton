import styled from 'styled-components';

const Button = styled.button.attrs(props => ({
  type: 'button',
  className: 'btn',
}))`
  padding: 8px;
  margin: 10px;
`;

export const Submit = styled(Button).attrs(props => ({
  type: 'submit',
  className: 'btn-danger',
}))`
  
`;

export const Cancel = styled(Button).attrs(props => ({
  className: 'btn-secondary',
}))`
  
`;

export const Confirm = styled(Button).attrs(props => ({
  className: 'btn-success',
}))`
  
`;

export default Button;