import type { Query, QueryDocumentSnapshot } from 'firebase-admin/firestore'

/**
 * Returns all documents in a flat list from the provided DB queries.
 * @param queries - The DB queries to get the documents from. Can be a single
 * query or an array of queries.
 */
export const getDBSnapshot = async (
  queries: Query | Query[],
): Promise<QueryDocumentSnapshot[]> => {
  const qs = Array.isArray(queries) ? queries : [queries]

  const results = await Promise.all(qs.map((query) => query.get()))

  return results.flatMap((doc) => doc.docs)
}
