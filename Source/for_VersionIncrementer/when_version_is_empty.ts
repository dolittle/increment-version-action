// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { expect } from 'chai';
import { a_version_incrementor } from './given/a_version_incrementer';

import { describeThis } from '@dolittle/typescript.testing';

describeThis('when version is empty', () => {
    const version_incrementor = new a_version_incrementor().version_incrementor;
    const version = '';
    let exception: Error;
    try {
        version_incrementor.increment(version, 'patch');
    } catch (error: any) {
        exception = error;
    }
    it('should throw an exception', () => expect(exception).to.not.be.undefined);
});
