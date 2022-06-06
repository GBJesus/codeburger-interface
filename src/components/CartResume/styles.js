import styled from 'styled-components'

export const Container = styled.div``

export const ContainerItems = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 30px 25px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items price-items'
      'tax price-tax';

    .title {
      grid-area: title;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 16px;
      color: #222222;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .price-items {
      grid-area: price-items;
      justify-self: end;
    }

    .tax {
      grid-area: tax;
    }

    .price-tax {
      grid-area: price-tax;
      justify-self: end;
    }
  }
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #222222;
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
  }

  .total-price {
    margin-top: 100px;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
`
