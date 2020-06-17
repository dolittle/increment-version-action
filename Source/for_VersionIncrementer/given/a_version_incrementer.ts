/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { VersionIncrementor } from '../../VersionIncrementor';
import { IVersionIncrementor } from '../../IVersionIncrementor';
import { NullLogger } from '@dolittle/github-actions.shared.logging';

export class a_version_incrementor {
    version_incrementor: IVersionIncrementor;
    constructor() {
        this.version_incrementor = new VersionIncrementor(new NullLogger());
    }
}
