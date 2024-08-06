// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {matchNames} = props
  const {id, name, teamImageUrl} = matchNames

  return (
    <Link className="team-link" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
