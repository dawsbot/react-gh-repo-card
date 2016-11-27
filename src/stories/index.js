import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, number } from '@kadira/storybook-addon-knobs';

import { GhRepoCard, StatelessGhRepoCard } from '../index';


const stories = storiesOf('GhRepoCard', module);

stories.addDecorator(withKnobs);
stories.add('Default GhRepoCard', () => (
  <div>
    <GhRepoCard />
    <GhRepoCard
      url={'https://api.github.com/repos/dawsonbotsford/react-gh-repo-card'}/>
    <GhRepoCard
      url={'https://api.github.com/repos/dawsonbotsford/o-o'}/>
  </div>
))
.add('Default StatelessGhRepoCard', () => {
  return (
    <StatelessGhRepoCard
      name={text('name', 'custom project')}
      html_url={text('html_url', 'https://github.com/dawsonbotsford/react-gh-repo-card')}
      description={text('description', 'do custom things with this thing')}
      language={text('language', 'C')}
      stargazers_count={number('stargazers_count', 9)}
    />
  );
});
