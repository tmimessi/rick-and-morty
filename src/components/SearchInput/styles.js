import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: #407772;
  color: whitesmoke;
  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    background-color: #407772;
    border: 0;
    font-size: 16px;
    outline: none;
    border-radius: 10px;
    color: whitesmoke;
  }

  > input::placeholder {
    color: whitesmoke;
  }

  > svg {
    margin-left: 16px;
  }
`
