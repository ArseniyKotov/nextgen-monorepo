import { cookies } from 'next/headers';
import { runWithAmplifyServerContext } from '@aws-amplify/adapter-nextjs';
import { getCurrentUser } from '@aws-amplify/auth/server';
import { generateClient } from '@aws-amplify/api/server'
import { listTodos } from '@/src/graphql/queries';
import { Schema } from '@/amplify/data/resource';

// This page always dynamically renders per request
export const dynamic = 'force-dynamic';

export default async function Home() {

  const currentUser = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => {

      const user = getCurrentUser(contextSpec)
      const client = generateClient<Schema>(contextSpec)
      const result = client

      return user
    }
  });


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {currentUser.username}
    </main>
  )
}
