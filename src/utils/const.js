const userInfo = {
  "username": "sssss",
  "email": "",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4MTYsInVzZXJuYW1lIjoic3Nzc3MiLCJleHAiOjE2MzA4NDU1NDgsImVtYWlsIjoiIiwib3JpZ19pYXQiOjE2MzA4NDE5NDh9.3MWNyJf5NpoMzlu2qQRwjJxAfnT6nIUmUyk9OOLb6oo"
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
