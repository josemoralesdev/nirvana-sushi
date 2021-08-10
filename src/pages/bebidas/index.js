import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { BackButton } from '../../components/back-button.component';
import { DishCard } from '../../components/dish-card.component';
import { Decoration } from '../../components/title-decoration.component';
import Text from '../../components/text.component';
import Seo from '../../components/seo.component';
import { RenderList } from '../../helpers/functions';

const Bebidas = () => {

  const data = useStaticQuery(graphql`
  {
    allDataJson {
      nodes {
        Menu {
          Bebidas {
            descripcion
            imagen {
              id
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  quality: 50
                  breakpoints: [200, 300, 400, 500]
                  transformOptions: {cropFocus: CENTER}

                )
              }
            }
            nombre
            precio
          }
        }
      }
    }
  }
  
  `);

  const { Menu } = data.allDataJson.nodes[0];
  const drinksList = Menu.Bebidas;
  const title = Object.keys(Menu).toString().toUpperCase();
  const ComponentList = RenderList(drinksList, DishCard);

  return (
    <>
      <Seo title="Bebidas | Nirvana Sushi" />
      <Text variant="title">
        <Decoration>{title}</Decoration>
      </Text>
      {ComponentList}
      <BackButton isCentered />
    </>
  )
}

export default Bebidas
