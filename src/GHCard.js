import React, {Component} from 'react';
import axios from 'axios';
import {load, parse} from 'gh-emoji';
import htmlParse from 'react-html-parser';
import StatelessCard from './StatelessCard';

class GHCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      githubResponse: {}
    };
  }

  componentDidMount() {
    const {owner, repo} = this.props;
    axios.get(`https://api.github.com/repos/${owner}/${repo}`)
      .then((result) => {
        console.log({result})
        const data = result.data;
        load().then(() => {
          data.description = htmlParse(parse(data.description));
          this.setState({
            githubResponse: data
          });
        });
      })
  }

  render() {
    const {name, description, html_url, language,
      stargazers_count, forks_count} = this.state.githubResponse;
    return (
      <StatelessCard
        name={name || this.props.name}
        description={(description) || this.props.description}
        html_url={html_url}
        language={language}
        stargazers_count={stargazers_count}
        forks_count={forks_count}
      />
    );
  }
}

GHCard.propTypes = {
  owner: React.PropTypes.string,
  repo: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string
};

GHCard.defaultProps = {
  owner: 'folkswhocode',
  repo: 'awesome-diversity',
  name: '',
  description: ''
};

export default GHCard;
