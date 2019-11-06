import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Eternal = require('../lib/eternal-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Eternal.EternalStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});