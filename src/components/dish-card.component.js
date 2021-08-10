import React from 'react'
import styled from "styled-components";
import Text from './text.component';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Decoration } from './title-decoration.component';
import { devices } from '../theme/breakpoints';

const Card = styled.div`
  margin: 3rem auto;
  max-width: ${({ theme }) => theme.globals.maxWidth};
 `;

const CardHeader = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1em;
  width: 100%;
`;

const CardBody = styled.div`
`;

const DishTitle = styled.div`
  flex: .9;
  text-transform: uppercase;
`;

const DishPrice = styled.div`
  flex: .1;
`;

const DishDescription = styled.div`
  text-align: justify;
  text-transform: uppercase;
  line-height: 1.25em;
  margin-bottom: 1em;
`;

const DishImage = styled(GatsbyImage).attrs({
})`
width: 100%;
height: 250px;
@media ${devices.tablet}{
  height: 350px;
}
`;

export const DishCard = (dish = {}) => {
  const { nombre, precio, descripcion, imagen } = dish;
  const image = getImage(imagen);
  return (
    <>
      <Card>
        <CardHeader>
          <DishTitle>
            <Text variant="highlight">
              {nombre}
            </Text>
          </DishTitle>
          <DishPrice>
            <Text variant="numbers">
              <Decoration>
                {`$${precio}`}
              </Decoration>
            </Text>
          </DishPrice>
        </CardHeader>
        <CardBody>
          <DishDescription>
            <Text variant="body">
              {descripcion}
            </Text>
          </DishDescription>
        </CardBody>
        <DishImage image={image} alt={nombre} />
      </Card>
    </>
  );
}