/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { SemVer, ReleaseType } from 'semver';


/**
 * Defines a system that can increment a version based on the release type
 *
 * @export
 * @interface IVersionIncrementor
 */
export interface IVersionIncrementor {

    /**
     * Increments a version based on the release type
     * @param {string} version
     * @param {ReleaseType} releaseType
     */
    increment(version: string, releaseType: ReleaseType): string
}
