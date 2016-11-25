import React, {Component} from 'react';
import {style} from 'glamor';
import Star from './star.svg.react';

const styles = {
  starWrapper: {
    boxSizing: 'border-box',
    color: 'rgb(118, 118, 118)',
    textDecoration: 'none',
    marginLeft: '16px',
    ':hover': {
      color: 'rgb(64, 120, 192)'
    }
  },
  star: {
    verticalAlign: 'text-bottom'
    // color: 'rgb(118, 118, 118)'
  }
};

class StarSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 'rgb(118, 118, 118)'
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter () {
    this.setState({
      fill: 'rgb(64, 120, 192)'
    });
  }
  handleMouseLeave () {
    this.setState({
      fill: 'rgb(118, 118, 118)'
    });
  }

  render() {
    const {html_url, stargazers_count} = this.props;
    return (
      /* eslint-disable camelcase */
      <a
        {...style(styles.starWrapper)}
        href={`${html_url}/stargazers`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >

        <Star {...style(styles.star)} fill={this.state.fill} />
        {stargazers_count}
      </a>
      /* eslint-enable camelcase */
    );
  }
}

StarSection.propTypes = {
  html_url: React.PropTypes.string,
  stargazers_count: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

StarSection.defaultProps = {
  testString: 'middle'
};

export default StarSection;
