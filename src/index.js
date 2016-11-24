import React, {Component} from 'react';
import axios from 'axios';
import Star from './star.svg.react.js';

const styles = {
  card: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    width: '360px',
    border: '1px solid rgb(221, 221, 221)',
    borderRadius: '3px',
    margin: '0px 0px 16px',
    padding: '16px'
  },
  header: {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '21px',
    color: 'rgb(64, 120, 192)',
    wordWrap: 'break-word'
  },
  body: {
    fontSize: '12px',
    lineHeight: '18px',
    color: 'rgb(118, 118, 118)',
    marginBottom: '16px',
    marginTop: '8px',
    wordWrap: 'break-word'
  },
  footer: {
    display: 'block',
    fontSize: '12px',
    lineHeight: '18px',
    marginBottom: '0px',
    marginTop: '0px',
    color: 'rgb(118, 118, 118)'
  },
  stars: {
    marginLeft: '16px'
  }
};

class GHRepoCard extends Component {
  static displayName: 'GHRepoCard'

  static propTypes = {
    url: React.PropTypes.string
  };

  static defaultProps = {
    url: 'https://api.github.com/repos/dawsonbotsford/skrub'
  };

  constructor(props) {
    super(props);
    this.state = {
      githubResponse: {}
    }
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(result => {
        this.setState({
          githubResponse: result.data
        });
        console.log('result.data: ', result.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const {githubResponse} = this.state;
    return (
      <div style={styles.card}>
        <a href={githubResponse.html_url} style={styles.header}>
          {githubResponse.name}
        </a>
        <div
          style={styles.body}>
          {githubResponse.description}
        </div>
        <span style={styles.footer}>
          {githubResponse.language}
          <a style={styles.stars} href={`${githubResponse.html_url}/stargazers`}>
            <Star/>
            {githubResponse.stargazers_count}
          </a>
        </span>
      </div>
    );
  }
}

export default GHRepoCard;
