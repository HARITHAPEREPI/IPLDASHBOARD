import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCardDetails} = this.props
    const {id, teamImageUrl, name} = teamCardDetails

    return (
      <Link to={`/team-matches/${id}`}>
        <li className="team-card-list">
          <div className="img-heading-container">
            <img src={teamImageUrl} alt={`${name}`} className="team-image" />
            <p className="team-name">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
