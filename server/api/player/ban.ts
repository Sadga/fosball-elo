import { banPlayer } from '../../../db';
import { getAuthOptions } from '../auth/[...]';
import { getServerSession } from '#auth';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, getAuthOptions(event));
  if (!session) { throw new Error('userNotAuthenticated'); }

  const body = await readBody(event);
  if (!body.playerId) { throw new Error('invalidLeague'); }

  return await banPlayer(event, body.playerId, session?.user.id);
});
