// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { a_version_incrementor } from '../given/a_version_incrementer';

import { describeThis } from '@dolittle/typescript.testing';

describeThis('and version has beta', () => {
    const version_incrementor = new a_version_incrementor().version_incrementor;
    const version = '1.0.0-beta.3';
    const result = version_incrementor.increment(version, 'prerelease');

    it('should return the correct version', () => result.should.equal('1.0.0-beta.4'));
});
