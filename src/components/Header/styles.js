import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 40px;
  height: 72px;

  background: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
`

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const PageLink = styled.a`
  font-style: normal;
  font-weight: ${props => (props.isActive ? '700' : '400')};
  font-size: 16px;
  line-height: 19px;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  cursor: pointer;
  text-decoration: none;
`

export const Line = styled.div`
  border: 0.5px solid #bababa;
  height: 40px;
`

export const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`
export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #9758a6;
  cursor: pointer;
  text-decoration: none;
`
