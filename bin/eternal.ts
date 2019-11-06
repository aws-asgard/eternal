#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { EternalStack } from '../lib/eternal-stack';

const app = new cdk.App();
new EternalStack(app, 'EternalStack');
