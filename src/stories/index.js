import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, number } from '@kadira/storybook-addon-knobs';

import { GhRepoCard, StatelessGhRepoCard } from '../index';


const stories = storiesOf('GhRepoCard', module);

stories.addDecorator(withKnobs);
stories.add('Default GhRepoCard', () => (
  <div>
    <GhRepoCard
      fullname={'dawsonbotsford/react-gh-repo-card'}/>
    <GhRepoCard
      fullname={'dawsonbotsford/o-o'}/>
  </div>
))
.add('Default StatelessGhRepoCard', () => {
  return (
    <StatelessGhRepoCard
      name={text('name', 'custom name')}
      html_url={text('html_url', 'https://github.com/dawsonbotsford/react-gh-repo-card')}
      description={text('description', 'custom decription')}
      language={text('language', 'C')}
      stargazers_count={number('stargazers_count', 0)}
    />
  );
});
