
import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { DishCard } from '../components/dish-card.component';
import { BackButton } from '../components/back-button.component';
import { Decoration } from '../components/title-decoration.component';
import Text from '../components/text.component';
import Seo from '../components/seo.component';

const Boneless = () => {

  const data = useStaticQuery(graphql`
  {
    allDataJson {
      nodes {
        Menu {
          Boneless {
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
  const bonelessList = data.allDataJson.nodes[0].Menu.Boneless;
  const RenderList = () => {
    return (
      bonelessList.map((sushi) => {
        return (
          <DishCard key={sushi.nombre} dish={sushi} />
        )
      })
    )
  }
  return (
    <>
      <Seo title="Boneless | Nirvana Sushi" />
      <Text variant="title"><Decoration>BONELESS</Decoration></Text>
      {RenderList()}
      <BackButton />
    </>
  )
}

export default Boneless