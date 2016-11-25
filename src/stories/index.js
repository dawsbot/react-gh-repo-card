import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { GhRepoCard, StatelessGhRepoCard } from '../index';

storiesOf('GhRepoCard', module)
  .add('Default GhRepoCard', () => (
    <GhRepoCard />
  ))
  .add('Default StatelessGhRepoCard', () => {
    return (
      <StatelessGhRepoCard
        name={'custom project'}
        description={'do custom things with this thing'}
      />
    );
  });
