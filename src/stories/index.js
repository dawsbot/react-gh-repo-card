import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { GHCard, StatelessCard } from '../index';

const Padding = (props) => (
  <div style={{margin: '50px'}}>
    {props.children}
  </div>
);

storiesOf('react-project-card', module)
  .add('GHCard', () => (
    <Padding>
      <GHCard />

      <GHCard owner="dawsbot" repo="pluc"/>
      <GHCard owner="dawsbot" repo="mailto"/>
    </Padding>
  ))
  .add('<StatelessCard />', () => {
    return (
      <Padding>
        <StatelessCard
          name={'A Pretty Project 💖 💄'}
          description={'A pretty description for a pretty project 👠'}
          />
        <StatelessCard
          name="The Prettiest Project 🚀 💖 💄"
          description="The prettiest description 💎"
          html_url="https://github.com/dawsbot"
          stargazers_count="123"
          forks_count="84"
          language="elm"
          />
      </Padding>
    );
  });
