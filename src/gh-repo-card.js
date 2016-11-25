import React, {Component} from 'react';
import Star from './star.svg.react.js';
import {load, parse} from 'gh-emoji';
import htmlParse from 'react-html-parser';
import {style} from 'glamor';

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

class StatelessGhRepoCard extends Component {
  static displayName: 'StatelessGhRepoCard'

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array]).isRequired
  }

  render() {
    const {name, description, html_url, stargazers_count, language} = this.props;
    console.log('description: ', description);
    return (
      <div {...style(styles.card)}>
        <a href={html_url} style={styles.header}>
          {name}
        </a>
        <div
          {...style(styles.body)}>
          {description}
        </div>
        <span {...style(styles.footer)}>
          {language}
          <a {...style(styles.stars)} href={`${html_url}/stargazers`}>
            <Star/>
            {stargazers_count}
          </a>
        </span>
      </div>
    );
  }
}

export default StatelessGhRepoCard;
