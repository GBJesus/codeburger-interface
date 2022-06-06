import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  background: #ffffff;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const OffersImage = styled.img`
  width: 273px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #424242;
  }
`

export const Image = styled.img`
  width: 240px;

  border-radius: 10px;
`
export const Button = styled.button`
  height: 55px;

  background: #9758a6;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
