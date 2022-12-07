// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReleaseType } from 'semver';

/**.
 * Defines a system that can increment a version based on the release type
 *
 * @export
 * @interface IVersionIncrementor
 */
export interface IVersionIncrementor {

    /**
     * Increments a version based on the release type.
     * @param {string} version
     * @param {ReleaseType} releaseType
     */
    increment(version: string, releaseType: ReleaseType, prereleaseId?: string): string
}
