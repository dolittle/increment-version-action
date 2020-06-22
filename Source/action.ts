// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { getInput, setOutput, setFailed } from '@actions/core';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { ReleaseType } from 'semver';
import { VersionIncrementor } from './VersionIncrementor';


const logger = new Logger();

run();
export async function run() {
    try {
        const versionIncrementor = new VersionIncrementor(logger);
        const previousVersion = getInput('version', {required: true});
        const releaseType = getInput('release-type', {required: true});
        const prereleaseId = getInput('prerelease-id');
        if (!releaseType || releaseType === '') {
            logger.warning('Got undefined ReleaseType. Outputting PreviousVersion as NextVersion');

            output(previousVersion, previousVersion);
        }
        else {

            logger.info(`Calculating new version from previous version '${previousVersion}' using release type '${releaseType}'`);

            logger.debug(`Got Previous Version ${previousVersion}`);
            logger.debug(`Got Release Type: ${releaseType}`);

            logger.debug(`Updating version for new ${releaseType}`);
            const nextVersion = versionIncrementor.increment(previousVersion, releaseType as ReleaseType, prereleaseId);

            logger.info(`Setting next version to be '${nextVersion}'`);
            output(previousVersion, nextVersion);
        }

    } catch (error) {
        fail(error);
    }
}

function output(previousVersion: string, nextVersion: string | undefined) {
    logger.info('Outputting: ');
    logger.info(`'previous-version': ${previousVersion}`);
    logger.info(`'next-version: ${nextVersion}`);
    setOutput('previous-version', previousVersion);
    setOutput('next-version', nextVersion);
}


function fail(error: Error) {
    logger.error(error.message);
    setFailed(error.message);
}
