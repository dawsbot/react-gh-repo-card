# React Project Card

> A React component to show-off your software

![](https://i.imgur.com/vYW6HnD.png)

## Usage

```js
import {GHCard} from 'react-project-card';

<GHCard
  url={'https://api.github.com/repos/dawsonbotsford/react-project-card'}/>
```

<br/>

## Install

```sh
yarn add react-project-card

# Same as "npm install --save react-project-card"
```

<br/>

## Non-GitHub repos

Do you have software that is not on GitHub? You can use the `StatelessCard`:

Start by importing `StatelessCard`

```js
import {StatelessCard} from 'react-project-card';
```

Then render the `StatelessCard`

```jsx
<StatelessCard
  name={'My Pretty Project 💖 💄'}
  description={'This is a pretty description for a pretty project 👠'} />
```

<br/>

Here's a more complete example:

```jsx
<StatelessCard
  name="The Prettiest Project 🚀 💖 💄"
  description="The prettiest description 💎"
  html_url="https://github.com/dawsbot"
  stargazers_count="123"
  forks_count="84"
  language="elm"
  />
```

### Props

* name: string *required*
* description: string *required*
* html_url: string,
* stargazers_count: string || number,
* forks_count: string || number,
* language: string

<br/>

## More Examples

![](https://i.imgur.com/3B1NlsL.png)
