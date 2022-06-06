import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000;
`
export const LoginImg = styled.img`
  height: 70%;
  box-shadow: 15px 15px 20px rgba(151, 88, 166, 0.3);
`

export const ContainerItems = styled.div`
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 15px 15px 20px rgba(151, 88, 166, 0.3);
  background: #373737;
  border-radius: 0 10px 10px 0;

  img {
    width: 260px;
    height: 94px;
  }
`
export const H1 = styled.h1`
  margin-top: 119px;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`
export const Label = styled.p`
  margin-top: 16px;
  margin-bottom: 3px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  padding: 10px;

  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  outline: none;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
`

export const CreateAccount = styled.p`
  margin-top: 28px;
  align-self: flex-start;

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    margin-left: 2px;
    color: #ffffff;
  }
`
