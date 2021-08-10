import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { BackButton } from '../../components/back-button.component';
import { DishCard } from '../../components/dish-card.component';
import { Decoration } from "../../components/title-decoration.component"
import Text from '../../components/text.component';
import Seo from '../../components/seo.component';
import { RenderList } from '../../helpers/functions';

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
  const ComponentList = RenderList(breadedSushiList, DishCard);
  return (
    <>
      <Seo title="Empanizados | Nirvana Sushi" />
      <Text variant="title">SUSHIS <Decoration>EMPANIZADOS</Decoration></Text>
      {ComponentList}
      <BackButton isCentered />
    </>
  )
}

export default Empanizados