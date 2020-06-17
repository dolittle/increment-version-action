/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { expect } from 'chai';
import { ReleaseType } from 'semver';
import { a_version_incrementor } from './given/a_version_incrementer';

describe('when release type is invalid', () => {
    const version_incrementor = new a_version_incrementor().version_incrementor;
    const version = '1.0.0';
    let exception: Error;
    try {
        version_incrementor.increment(version, 'something' as ReleaseType);
    }
    catch (error) {
        exception = error;
    }
    it('should throw an exception', () => expect(exception).to.not.be.undefined);
});
