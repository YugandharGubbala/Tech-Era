import {Link} from 'react-router-dom'
import './index.css'

const Item = props => {
  const {details} = props
  const {id, name, url} = details

  return (
    <li>
      <Link to={`/courses/${id}`} className="itemcontainer">
        <img className="itemimage" src={url} alt={name} />
        <p className="itempara">{name}</p>
      </Link>
    </li>
  )
}
export default Item
