import { getLeagueTeams } from '../../../db';
import { authOptions } from '../auth/[...]';
import { getServerSession } from '#auth';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, authOptions);
  if (!session) { return null; }

  const query = getQuery(event);
  if (!query.leagueId) { return null; }

  return await getLeagueTeams(query.leagueId as string);
});
