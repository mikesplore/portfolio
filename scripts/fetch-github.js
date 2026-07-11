import { oneLine, writeEntries } from './utils.js';

const USERNAME = 'mikesplore';

const PROJECT_REPOS = new Set([
  'vela',
  'vela-android',
  'VelaAI',
  'FarmPulse',
  'Kipepeo-Intelligence',
  'quickscore',
  'Timetable-Frontend',
  'Tuya',
  'quizbase',
  'StoryLoom',
  'style-ai-studio',
  'MyKeja',
  'Uni-Connect',
]);

const HOBBY_REPOS = new Set([
  'github-wrapped',
  'EehSawa',
  'LinuxAutomation',
  'sentinel',
  'KenTube',
  'tutorai',
  'AnimalQuiz',
  'PC-Controller',
]);

const INCLUDED_REPOS = new Map(
  [...PROJECT_REPOS].map((name) => [name.toLowerCase(), 'project'])
    .concat([...HOBBY_REPOS].map((name) => [name.toLowerCase(), 'hobby']))
);

const response = await fetch(
  `https://api.github.com/users/${USERNAME}/repos?sort=created&per_page=100`,
  {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'mikesplore-portfolio',
    },
  }
);

if (!response.ok) {
  throw new Error(`GitHub fetch failed: ${response.status} ${response.statusText}`);
}

const repos = await response.json();

const entries = repos
  .filter((repo) => !repo.fork && INCLUDED_REPOS.has(repo.name.toLowerCase()))
  .map((repo) => {
    const type = INCLUDED_REPOS.get(repo.name.toLowerCase());
    const tags = [repo.language].filter(Boolean);

    return {
      date: repo.created_at.split('T')[0],
      type,
      title: repo.name.replace(/-/g, ' '),
      blurb: oneLine(repo.description) || 'GitHub repository',
      link: repo.html_url,
      tags,
    };
  });

writeEntries('entries.github.json', entries);
