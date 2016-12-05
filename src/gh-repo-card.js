import React, {Component} from 'react';
import axios from 'axios';
import StatelessGhRepoCard from './stateless-gh-repo-card';

class GhRepoCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      githubResponse: {}
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/repos/${this.props.fullname}`)
      .then((result) => {
        console.log('result: ', result);
        this.setState({
          githubResponse: result.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const {name, description, html_url, language,
      stargazers_count, forks_count} = this.state.githubResponse;
    return (
      <StatelessGhRepoCard
        name={name}
        description={(description)}
        html_url={html_url}
        language={language}
        stargazers_count={stargazers_count}
        forks_count={forks_count}
      />
    );
  }
}

GhRepoCard.propTypes = {
  fullname: React.PropTypes.string.isRequired
};

GhRepoCard.defaultProps = {
  fullname: 'https://api.github.com/repos/dawsonbotsford/react-gh-repo-card'
};

export default GhRepoCard;
