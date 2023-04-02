import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  align-items: center;

  > h1 {
    font-size: 5vh;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #00b5cc;
    text-shadow: #d2e054 0.01em 0.01em 0.01em;
  }

  > div {
    width: 100%;
    height: 2px;
    background-color: #d2e054;
    margin-bottom: 20px;
  }

  @media (max-width: $device-mobile) {
    width: auto;
    margin: 1vh;
    > h1 {
      font-size: 3.5vh;
    }
  }
`
