import { saveUser } from '../../../db';
import { authOptions } from '../auth/[...]';
import { getServerSession } from '#auth';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, authOptions);
  if (!session) { return null; }

  const body = await readBody(event);

  return await saveUser(body, session?.user.id);
});
