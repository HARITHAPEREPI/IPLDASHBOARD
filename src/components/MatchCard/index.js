import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {mathCardDetails} = this.props
    const {
      id,
      competingTeamLogo,
      competingTeam,
      result,
      matchStatus,
    } = mathCardDetails

    return (
      <li className="match-card-list">
        <div className="match-card-container">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
            className="team-logo"
          />
          <p className="team-name">{competingTeam}</p>
          <p className="result">{result}</p>
          <p className="match-status">{matchStatus}</p>
        </div>
      </li>
    )
  }
}

export default MatchCard
