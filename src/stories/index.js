import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {GhRepoCard, StatelessGhRepoCard} from '../index';

storiesOf('Button', module)
  .add('Default GhRepoCard', () => (
    <GhRepoCard/>
  ))
  .add('Default StatelessGhRepoCard', () => {
    return (
      <StatelessGhRepoCard
        name={'custom project'}
        description={'do custom things with this thing'}/>
    );
  });
