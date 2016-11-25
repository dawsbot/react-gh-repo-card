import React, {Component} from 'react';
import axios from 'axios';
import {load, parse} from 'gh-emoji';
import htmlParse from 'react-html-parser';
import StatelessGhRepoCard from './gh-repo-card';

class GhRepoCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      githubResponse: {}
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then((result) => {
        const data = result.data;
        load().then(() => {
          console.log('parse(data.description): ', parse(data.description));
          console.log('htmlParse(parse(data.description)): ', htmlParse(parse(data.description)));
          data.description = htmlParse(parse(data.description));
          this.setState({
            githubResponse: data
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const {name, description, html_url, language, stargazers_count} = this.state.githubResponse;
    return (
      <StatelessGhRepoCard
        name={name || this.props.name}
        description={(description) || this.props.description}
        html_url={html_url}
        language={language}
        stargazers_count={stargazers_count}
      />
    );
  }
}

GhRepoCard.propTypes = {
  url: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string
};

GhRepoCard.defaultProps = {
  url: 'https://api.github.com/repos/dawsonbotsford/swim',
  name: '',
  description: ''
};

export default GhRepoCard;
