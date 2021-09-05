const userInfo = {
  "username": "йййц",
  "email": "",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4MTIsInVzZXJuYW1lIjoiXHUwNDM5XHUwNDM5XHUwNDM5XHUwNDQ2IiwiZXhwIjoxNjMwODM1Mjc2LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjMwODMxNjc2fQ.SvkKAocqaUSG4elCMKssdXh6xvmmMX1AvuJGu94Rnn0"
};

export const TOKEN = userInfo.token;

export const END_POINT = 'https://trello.backend.tests.nekidaem.ru/api/v1/cards/';

export const Method = {
  GET: 'GET',
  POST: 'POST',
  PUSH: 'PATCH',
  DELETE: 'DELETE',
}

export const Titles = [
  {
    title: 'On hold',
    row: 0,
  },
  {
    title: 'In progress',
    row: 1,
  },
  {
    title: 'Needs review',
    row: 2,
  },
  {
    title: 'Approved',
    row: 3,
  },
];
