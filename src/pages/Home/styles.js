import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #043f47 0%, #0e282c 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 50px;


  @media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
`

