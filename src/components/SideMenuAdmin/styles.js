import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3c3c3c;
  padding: 40px 18px;

  hr {
    width: 230px;
    margin-bottom: 50px;
    margin-top: 50px;
    color: #e9ecef;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 10px;

  background-color: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;

  .icon {
    color: #ffffff;
  }
`

export const ListLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
`
