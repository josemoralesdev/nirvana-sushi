import React from 'react'
import { BackButton } from '../../components/back-button.component'
import { graphql, useStaticQuery } from "gatsby";
import { DishCard } from '../../components/dish-card.component';
import { Decoration } from '../../components/title-decoration.component';
import Text from '../../components/text.component';
import Seo from '../../components/seo.component';

const Gratinados = () => {
  const data = useStaticQuery(graphql`
  {
    allDataJson {
      nodes {
        Menu {
          SushisGratinados {
            descripcion
            imagen {
              id
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 50, breakpoints: [200,300,400,500])
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
  const gratinatedSushiList = data.allDataJson.nodes[0].Menu.SushisGratinados;
  const RenderList = () => {
    return (
      gratinatedSushiList.map((sushi) => {
        return (
          <DishCard key={sushi.nombre} dish={sushi} />
        )
      })
    )
  }
  return (
    <>
      <Seo title="Sushis Gratinados | Nirvana Sushi" />
      <Text variant="title">SUSHIS <Decoration>GRATINADOS</Decoration></Text>
      {RenderList()}
      <BackButton />
    </>
  )
}

export default Gratinados
