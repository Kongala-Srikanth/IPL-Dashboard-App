// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, result, matchStatus, id} = details

  const wonOrLost = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li key={id} className="recent-match-card">
      <img
        src={competingTeamLogo}
        className="logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-team-name">{competingTeam}</p>
      <p className="recent-team-result">{result}</p>
      <p className={`recent-team-status ${wonOrLost}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
