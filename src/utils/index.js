/* eslint-disable camelcase */
const mapDBToModelAlbums = ({
  id,
  name,
  year,
  cover,
}) => ({
  id,
  name,
  year,
  coverUrl: cover,
});

const mapOptSong = ({ song_id, song_title, performer }) => ({
  id: song_id,
  title: song_title,
  performer,
});

const mapPlaylistDBToModel = ({ id, name, username }) => ({
  id,
  name,
  username,
});

const mapDBToModelSongs = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
});

module.exports = {
  mapDBToModelAlbums, mapOptSong, mapPlaylistDBToModel, mapDBToModelSongs,
};
