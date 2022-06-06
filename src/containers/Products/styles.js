import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100vw;
  min-height: calc(100vh - 72px);

  background-color: #e5e5e5;
`

export const ProductsImage = styled.img`
  width: 100%;
`
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
`

export const CategoryButton = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9a9a9d')};
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  background: none;
  cursor: pointer;
  padding-bottom: 5px;
`
export const ProductsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
`
