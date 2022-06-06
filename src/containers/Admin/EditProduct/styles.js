import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  padding: 45px 45px 60px;
  max-width: 417px;
  background: #565656;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  margin-bottom: 3px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`

export const Input = styled.input`
  display: flex;
  width: 322px;
  height: 48px;
  /* margin-top: 25px; */
  padding-left: 20px;

  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`
export const LabelUpload = styled.label`
  display: flex;
  padding: 10px;
  gap: 10px;
  /* margin-top: 25px; */
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  border: 1px dashed #fff;
  border-radius: 8px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 1px;
  }
`
export const OfferInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 50px;
  height: 48px;

  border-radius: 8px;
`
