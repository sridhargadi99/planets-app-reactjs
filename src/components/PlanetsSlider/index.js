// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-container" data-testid="planets">
      <div className="sub-container">
        <h1 className="main-heading-style">PLANETS</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {planetsList.map(eachList => (
              <PlanetItem eachList={eachList} key={eachList.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PlanetsSlider
