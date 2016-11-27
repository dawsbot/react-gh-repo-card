import React, {Component, PropTypes} from 'react';
import {style, insertRule} from 'glamor';
import IconSection from './icon-section';
import ForksIcon from './forks.svg.react';

insertRule(`.gh-emoji {
  height: 1.9em;
  vertical-align: middle;
}`);

function getStyles(props = {}) {
  return {
    card: {
      backgroundColor: 'white',
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
      ...(props.showFooter && {marginBottom: '16px'}),
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
}

class StatelessGhRepoCard extends Component {

  render() {
    const {
      name,
      description,
      html_url,
      stargazers_count,
      language,
      forks_count
    } = this.props;
    const showFooter = language || stargazers_count || forks_count;

    return (
      <div {...style(getStyles().card)}>
        <a href={html_url} {...style(getStyles().name)}>
          {name}
        </a>
        <div
          {...style(getStyles({showFooter}).body)}
        >
          {description}
        </div>
        {showFooter && (<span {...style(getStyles().footer)}>
          {language}
          {stargazers_count > 0 && (<IconSection
            html_url={`${html_url}/stargazers`}
            count={stargazers_count}
          />)}
          {forks_count > 0 && (<IconSection
            html_url={`${html_url}/network`}
            count={forks_count}
            Icon={ForksIcon}
          />)}
        </span>)}
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
  forks_count: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
  language: PropTypes.string
};

export default StatelessGhRepoCard;
