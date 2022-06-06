import styled from 'styled-components'

export const Container = styled.div`
  padding: 13px 16px;
  margin-top: 100px;

  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid #b5b5b5;

  p {
    margin-bottom: 15px;

    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #9a9a9d;
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  margin-top: 24px;

  .quantity-container {
    display: flex;
    gap: 20px;
  }

  button {
    align-self: flex-start;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
    border: none;
    background: none;
    cursor: pointer;
  }
`
export const ProductImage = styled.img`
  width: 150px;
  border-radius: 20px;
`
export const ProductName = styled.p`
  max-width: 130px;
  margin-left: 10px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

export const ProductQuantity = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`

export const TotalPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`
export const EmptyCart = styled.p`
  text-align: center;
  margin: 30px;
  font-weight: bold;
  font-size: 20px;
`
