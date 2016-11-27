import React, {Component} from 'react';
import {style} from 'glamor';
import DefaultIcon from './star.svg.react';

const styles = {
  iconWrapper: {
    boxSizing: 'border-box',
    color: 'rgb(118, 118, 118)',
    textDecoration: 'none',
    marginLeft: '16px',
    ':hover': {
      color: 'rgb(64, 120, 192)'
    }
  },
  icon: {
    verticalAlign: 'text-bottom'
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
    const {html_url, count, Icon} = this.props;
    return (
      /* eslint-disable camelcase */
      <a
        {...style(styles.iconWrapper)}
        href={html_url}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Icon {...style(styles.icon)} fill={this.state.fill} />
        {` ${count}`}
      </a>
      /* eslint-enable camelcase */
    );
  }
}

StarSection.propTypes = {
  html_url: React.PropTypes.string,
  count: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  Icon: React.PropTypes.func.isRequired
};

StarSection.defaultProps = {
  Icon: DefaultIcon,
  count: null
};

export default StarSection;
