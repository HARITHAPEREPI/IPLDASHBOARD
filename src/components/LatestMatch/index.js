import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      id,
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatch

    return (
      <div className="latest-match-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="match-details-container">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <div className="other-details-container">
          <p className="heading">firstInnings</p>
          <p className="paragraph">{firstInnings}</p>
          <p className="heading">secondInnings</p>
          <p className="paragraph">{secondInnings}</p>
          <p className="heading">manOfTheMatch</p>
          <p className="paragraph">{manOfTheMatch}</p>
          <p className="heading">umpires</p>
          <p className="paragraph">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
