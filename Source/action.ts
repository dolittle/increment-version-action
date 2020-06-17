// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as core from '@actions/core';
import { Logger } from '@dolittle/github-actions.shared.logging';
import semver from 'semver';
import { ReleaseType } from 'semver';
import { VersionIncrementor } from './VersionIncrementor';

const inputs = {
    previousVersion: 'previousVersion',
    releaseType: 'releaseType'
};

const outputs = {
    previousVersion: 'previousVersion',
    releaseType: 'releaseType',
    nextVersion: 'nextVersion'
};

const logger = new Logger();

run();
export async function run() {
    try {
        const versionIncrementor = new VersionIncrementor(logger);
        const previousVersion = core.getInput(inputs.previousVersion, {required: true});
        const releaseType = core.getInput(inputs.releaseType, {required: true});
        if (!releaseType || releaseType === '') {
            logger.warning('Got undefined ReleaseType. Outputting PreviousVersion as NextVersion');

            output(previousVersion, releaseType, previousVersion);
        }
        else {

            logger.info(`Calculating new version from previous version '${previousVersion}' using release type '${releaseType}'`);

            logger.debug(`Got Previous Version ${previousVersion}`);
            logger.debug(`Got Release Type: ${releaseType}`);

            logger.debug(`Updating version for new ${releaseType}`);
            const nextVersion = versionIncrementor.increment(previousVersion, releaseType as ReleaseType);

            logger.info(`Setting next version to be '${nextVersion}'`);
            output(previousVersion, releaseType, nextVersion);
        }

    } catch (error) {
        fail(error);
    }
}

function output(previousVersion: string, releaseType: string | undefined, nextVersion: string | undefined) {
    logger.info('Outputting: ');
    logger.info(`'previousVersion': ${previousVersion}`);
    logger.info(`'releaseType': ${releaseType}`);
    logger.info(`'nextVersion: ${nextVersion}`);
    core.setOutput(outputs.previousVersion, previousVersion);
    core.setOutput(outputs.releaseType, releaseType);
    core.setOutput(outputs.nextVersion, nextVersion);
}


function fail(error: Error) {
    logger.error(error.message);
    core.setFailed(error.message);
}
