// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ILogger } from '@dolittle/github-actions.shared.logging';
import { ReleaseType, SemVer, parse } from 'semver';
import { IVersionIncrementor } from './IVersionIncrementor';

/**.
 * Represents an implementation of {IVersionIncrementor}
 *
 * @export
 * @class VersionIncrementor
 * @implements {IVersionIncrementor}
 */
export class VersionIncrementor implements IVersionIncrementor {

    /**
     * Instantiates an instance of VersionIncrementor.
     * @param {ILogger} _logger - The logger.
     */
    constructor(private _logger: ILogger) {}

    /**
     * @inheritdoc
     */
    increment(version: string, releaseType: ReleaseType, prereleaseId?: string): string {
        const semverVersion = new SemVer(version);
        this._logger.info(`Incrementing version '${version}' with release type '${releaseType}'`);
        const newVersion = semverVersion.inc(releaseType, prereleaseId === '' ? undefined : prereleaseId)!;
        if (newVersion === null) throw new Error(`'${releaseType}' is not a valid SemVer release type`);
        return newVersion.version;
    }
}
