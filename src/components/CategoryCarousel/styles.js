import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  background-color: #efefef;

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

export const CategoriesImage = styled.img`
  width: 412px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Image = styled.img`
  width: 240px;

  border-radius: 10px;
`

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;

  background: #9758a6;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
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
