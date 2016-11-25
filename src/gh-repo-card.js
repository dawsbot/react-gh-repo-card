import React, {Component, PropTypes} from 'react';
import StarSection from './star-section';
import {load, parse} from 'gh-emoji';
import htmlParse from 'react-html-parser';
import {style, insertRule} from 'glamor';

insertRule(`.gh-emoji {
  height: 1.9em;
  vertical-align: middle;
}`);

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
  name: {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '21px',
    color: 'rgb(64, 120, 192)',
    wordWrap: 'break-word',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
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
  }
};

class StatelessGhRepoCard extends Component {

  render() {
    const {name, description, html_url, stargazers_count, language} = this.props;
    return (
      <div {...style(styles.card)}>
        <a href={html_url} {...style(styles.name)}>
          {name}
        </a>
        <div
          {...style(styles.body)}>
          {description}
        </div>
        <span {...style(styles.footer)}>
          {language}
          <StarSection
            html_url={html_url}
            stargazers_count={stargazers_count}/>
        </span>
      </div>
    );
  }
}

StatelessGhRepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array]).isRequired,
  html_url: PropTypes.string,
  stargazers_count: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
  language: PropTypes.string,
};

export default StatelessGhRepoCard;
