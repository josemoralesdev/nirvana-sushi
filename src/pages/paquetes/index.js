import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { BackButton } from '../../components/back-button.component';
import { DishCard } from '../../components/dish-card.component';
import { Decoration } from '../../components/title-decoration.component';
import Text from '../../components/text.component';
import Seo from '../../components/seo.component';

const Paquetes = () => {

  const data = useStaticQuery(graphql`
  {
    allDataJson {
      nodes {
        Menu {
          Paquetes {
            descripcion
            imagen {
              id
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  quality: 50
                  breakpoints: [200, 300, 400, 500]
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
  const packagesList = Menu.Paquetes;
  const RenderList = () => {
    return (
      packagesList.map((combo) => {
        return (
          <DishCard key={combo.nombre} dish={combo} />
        )
      })
    )
  }
  return (
    <>
      <Seo title="Paquetes | Nirvana Sushi" />
      <Text variant="title"><Decoration>PAQUETES</Decoration></Text>
      {RenderList()}
      <BackButton />
    </>
  )
}

export default Paquetes
