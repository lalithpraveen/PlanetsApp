import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import {PlanetsAppContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <PlanetsAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}
export default PlanetsSlider
