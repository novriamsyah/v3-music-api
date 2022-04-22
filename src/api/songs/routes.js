/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable camelcase */
/* eslint-disable indent */
const routes = (handler) => [
    {
        method: 'POST',
        path: '/songs',
        handler: handler.postSongHandler,
      },
      {
        method: 'GET',
        path: '/songs',
        handler: handler.getSongsHandler,
      },
      {
        method: 'GET',
        path: '/songs/{id}',
        handler: handler.getSongByIdHandler,
      },
      {
        method: 'PUT',
        path: '/songs/{id}',
        handler: handler.putSongByIdHandler,
      },
      {
        method: 'DELETE',
        path: '/songs/{id}',
        handler: handler.deleteSongByIdHandler,
      },
];
module.exports = routes;