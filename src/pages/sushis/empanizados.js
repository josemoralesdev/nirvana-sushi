import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { BackButton } from '../../components/back-button.component';
import { DishCard } from '../../components/dish-card.component';
import { Decoration } from "../../components/title-decoration.component"
import Text from '../../components/text.component';

const Empanizados = () => {

  const data = useStaticQuery(graphql`
  {
    allDataJson {
      nodes {
        Menu {
          SushisEmpanizados {
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
  const breadedSushiList = Menu.SushisEmpanizados;
  const RenderList = () => {
    return (
      breadedSushiList.map((sushi) => {
        return (
          <DishCard key={sushi.nombre} dish={sushi} />
        )
      })
    )
  }
  return (
    <>
      <Text variant="title">SUSHIS <Decoration>EMPANIZADOS</Decoration></Text>
      {RenderList()}
      <BackButton />
    </>
  )
}

export default Empanizados