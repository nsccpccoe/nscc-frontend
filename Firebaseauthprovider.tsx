import React, { useEffect } from 'react';
import { AuthProvider, useAuth, useFirebaseApp } from 'reactfire';

import {
  initializeAuth,
  indexedDBLocalPersistence,
  connectAuthEmulator,
  inMemoryPersistence,
} from 'firebase/auth';

function getAuthEmulatorHost() {
  // we can access these variables
  // because they are prefixed with "NEXT_PUBLIC_"
  const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
  const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT;

  return ['http://', host, ':', port].join('');
}

function isBrowser() {
  return typeof window !== 'undefined';
}

export default function FirebaseAuthProvider({
  children,
}: React.PropsWithChildren) {
  const app = useFirebaseApp();

  // make sure we're not using IndexedDB when SSR
  // as it is only supported on browser environments
  const persistence = isBrowser()
    ? indexedDBLocalPersistence
    : inMemoryPersistence;

  const sdk = initializeAuth(app, { persistence });

  const shouldConnectEmulator =
    process.env.NEXT_PUBLIC_EMULATOR ==='true';

  if (shouldConnectEmulator) {
    const host = getAuthEmulatorHost();

    connectAuthEmulator(sdk, host);
  }

  return (
    <>
      {children}
    </>
  );
}