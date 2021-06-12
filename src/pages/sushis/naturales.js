import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { DishCard } from "../../components/dish-card.component"
import { BackButton } from "../../components/back-button.component";
import { Decoration } from "../../components/title-decoration.component";
import Text from "../../components/text.component";

const Naturales = () => {
  const data = useStaticQuery(graphql`
  {
    allDataJson {
      nodes {
        Menu {
          SushisNaturales {
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
  const { Menu } = data.allDataJson.nodes[0]
  const naturalSushiList = Menu.SushisNaturales;
  return (
    <>
      <Text variant="title">SUSHIS <Decoration>NATURALES</Decoration></Text>
      {naturalSushiList.map((sushi) => {
        return (
          <DishCard key={sushi.nombre} dish={sushi} />
        )
      })}
      <BackButton />
    </>
  )
}

export default Naturales