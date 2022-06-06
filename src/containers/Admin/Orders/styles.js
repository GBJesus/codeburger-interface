import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: #efefef;
  width: 75vw;
`
export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
`
export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-1s2u09g-control {
    cursor: pointer;
    border-radius: 8px;
  }
`
export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 38px;
`

export const LinkMenu = styled.a`
  padding: 13px;
  font-style: normal;
  font-weight: ${props => (props.isActive ? '700' : '400')};
  font-size: 16px;
  line-height: 155%;
  color: #323d5d;
  border-bottom: ${props => (props.isActive ? '2px solid #9758a6' : 'none')};

  cursor: pointer;
`
