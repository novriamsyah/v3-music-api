const CollaborationHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'collaboration',
  version: '1.0.0',
  register: async (
    server,
    { collaborationService, playlistService, userService, validator },
  ) => {
    const collaborationsHandler = new CollaborationHandler(
      collaborationService,
      playlistService,
      userService,
      validator,
    );

    server.route(routes(collaborationsHandler));
  },
};