import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Categories from '../../assets/categories.png'
import api from '../../services/api'
import {
  CategoriesImage,
  Container,
  ContainerItems,
  Image,
  Button
} from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategory()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoriesImage src={Categories} alt="logo" />

      <Carousel
        itemsToShow={5}
        breakPoints={breakPoints}
        style={{ width: '90%' }}
      >
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="imagem-da-categoria" />
              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
