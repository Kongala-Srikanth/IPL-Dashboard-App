// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {matchData: [], isLoading: true}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const newData = data.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({matchData: newData, isLoading: false})
  }

  render() {
    const {matchData, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="loader" className="bg-img-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-img-container">
            <div className="ipl-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="main-ipl-heading">IPL Dashboard</h1>.
            </div>
            <ul className="team-list-container">
              {matchData.map(eachTeam => (
                <TeamCard key={eachTeam.id} matchNames={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
