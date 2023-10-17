'use client';

import { Amplify } from 'aws-amplify';
import config from '@/amplifyconfiguration.json'
import type { LegacyConfig } from 'aws-amplify/internals/adapter-core';

Amplify.configure(config as LegacyConfig, { ssr: true });

export default function ConfigureAmplifyClientSide() {
    return null;
}