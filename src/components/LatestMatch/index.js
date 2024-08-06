// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div className="latest-match-card">
      <div className="match-details-container">
        <div>
          <p className="team-name">{latestMatchDetails.competingTeam}</p>
          <p className="date">{latestMatchDetails.date}</p>
          <p className="normal-text">{latestMatchDetails.venue}</p>
          <p className="normal-text">{latestMatchDetails.result}</p>
        </div>
        <img
          src={latestMatchDetails.competingTeamLogo}
          className="team-img"
          alt={`latest match ${latestMatchDetails.competingTeam}`}
        />
      </div>
      <hr />
      <div>
        <p className="sub-heading">First Innings</p>
        <p className="normal-text">{latestMatchDetails.firstInnings}</p>
        <p className="sub-heading">Second Innings</p>
        <p className="normal-text">{latestMatchDetails.secondInnings}</p>
        <p className="sub-heading">Man Of The Match</p>
        <p className="normal-text">{latestMatchDetails.manOfTheMatch}</p>
        <p className="sub-heading">Umpires</p>
        <p className="normal-text">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
