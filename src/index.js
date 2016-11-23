import React, {Component} from 'react';

const styles = {
  card: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    maxWidth: '360px',
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

  }
};

class GHRepoCard extends Component {
  static displayName: 'GHRepoCard'

  static propTypes = {
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string
  };

  static defaultProps = {
    name: 'defaultName',
    description: 'defaultDescription',
    url: 'defaultUrl'
  };

  render() {
    return (
      <div style={styles.card}>
        <a href={this.props.url} style={styles.header}>
          {this.props.name}
        </a>
        <div
          style={styles.body}>
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default GHRepoCard;
