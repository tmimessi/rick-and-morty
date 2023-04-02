import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
  height: 100vh;
  justify-content: center;

  > h3 {
    background-color: transparent;
    margin-top: 10px;
    color: lightgrey;

    > span {
      color: aqua;
    }
  }

  > img {
    border-radius: 5%;
    border: 1px solid yellow;
  }

  > hr {
    border: 0;
    border-top: 1px solid #d2e054;
    width: 20rem;
    padding-bottom: 20px;
  }
`

export const Star = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  gap: 20px;
  font-size: 20px;
  color: #fff;
  margin-top: 30px;
  align-items: center;
  color: whitesmoke;

  > h1 {
    margin-bottom: 8px;
    color: aqua;
    text-shadow: 0 2px 8px rgba(1, 1, 1, 1);
  }
`
