import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { BackButton } from '../components/back-button.component';
import { DishCard } from '../components/dish-card.component';
import { Decoration } from '../components/title-decoration.component';
import Text from '../components/text.component';
import Seo from '../components/seo.component';

const NuggetsKids = () => {

  const data = useStaticQuery(graphql`
  {
    allDataJson {
      nodes {
        Menu {
          Nuggets_Kids {
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
  const nuggetsList = Menu.Nuggets_Kids;
  const RenderList = () => {
    return (
      nuggetsList.map((sushi) => {
        return (
          <DishCard key={sushi.nombre} dish={sushi} />
        )
      })
    )
  }
  return (
    <>
      <Seo title="Nuggets Kids | Nirvana Sushi" />
      <Text variant="title">NUGGETS <Decoration>KIDS</Decoration></Text>
      { RenderList()}
      <BackButton />
    </>
  )
}

export default NuggetsKids