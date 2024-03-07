// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachList} = props
  const {name, imageUrl, description} = eachList
  return (
    <div className="planet-item-container">
      <img
        src={imageUrl}
        alt={`planet ${name}`}
        className="planet-item-image-style"
      />
      <h1 className="planet-item-name-style">{name}</h1>
      <p className="planet-item-description-style">{description}</p>
    </div>
  )
}

export default PlanetItem
