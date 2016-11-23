import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import GHRepoCard from '../index';

storiesOf('Button', module)
  .add('default view', () => (
    <GHRepoCard/>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <GHRepoCard
        name={'o-o'}
        description={'open things'}
        url={'https://github.com/dawsonbotsford/o-o'}/>
    );
  });
