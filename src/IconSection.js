import React, {Component} from 'react';
import {style} from 'glamor';
import StarIcon from './StarIcon';

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

class IconSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 'rgb(118, 118, 118)'
    };
  }

  handleMouseEnter = () => {
    this.setState({
      fill: 'rgb(64, 120, 192)'
    });
  }
  handleMouseLeave = () => {
    this.setState({
      fill: 'rgb(118, 118, 118)'
    });
  }

  render() {
    const {html_url, count, Icon} = this.props;
    if (count === 0) {
      return null;
    }
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

IconSection.propTypes = {
  html_url: React.PropTypes.string,
  count: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  Icon: React.PropTypes.func
};

IconSection.defaultProps = {
  Icon: StarIcon,
  count: 0
};

export default IconSection;
