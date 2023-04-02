import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  height: 500px;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  color: #d2e054;
  background-color: #0c7c85;

  > img {
    width: 100%;
    border-radius: 12px 12px 0 0;
  }
`

export const Star = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  color: #fff;
  margin-top: 30px;
  align-items: center;
`
