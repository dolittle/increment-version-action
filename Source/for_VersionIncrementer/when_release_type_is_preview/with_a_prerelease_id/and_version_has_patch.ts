// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { a_version_incrementor } from '../../given/a_version_incrementer';

import { describeThis } from '@dolittle/typescript.testing';

describeThis('and version has patch', () => {
    const version_incrementor = new a_version_incrementor().version_incrementor;
    const version = '0.0.1';
    const prereleaseId = 'rc';
    const result = version_incrementor.increment(version, 'prerelease', prereleaseId);

    it('should return the correct version', () => result.should.equal('0.0.2-rc.0'));
});
