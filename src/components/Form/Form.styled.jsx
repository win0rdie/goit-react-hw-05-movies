import styled from 'styled-components';

export const StyledForm = styled.div`
  input[type='search'] {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    width: 300px;
    box-sizing: border-box;
    margin-bottom: 16px;
    outline: none;
    margin-left: 20px;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
`;
