import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  width: 430px;
  height: 202px;

  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
`
export const Image = styled.img`
  width: 186px;

  border-radius: 30px;
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const ProductName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`
export const ProductPrice = styled.p`
  margin-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #000000;
`
