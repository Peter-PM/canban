const userInfo = {
  "username": "wwwws",
  "email": "",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4MTUsInVzZXJuYW1lIjoid3d3d3MiLCJleHAiOjE2MzA4NDA1NzAsImVtYWlsIjoiIiwib3JpZ19pYXQiOjE2MzA4MzY5NzB9.2Jx5sQh4W92Pn-KVyXxhDmYIaITAFUAizQdltsmuY7o"
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
