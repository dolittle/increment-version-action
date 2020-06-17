/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const build = require('@dolittle/typescript.build');

module.exports = build.wallaby((w, settings ) => {
    settings.files = settings.files.map(_ => {
        _.pattern = _.pattern.replace('@(ts|js)', 'ts');
        if (_.pattern.startsWith('/')) _.pattern = _.pattern.substr(1);
        return _;
    });
    settings.tests = settings.tests.map(_ => {
        _.pattern = _.pattern.replace('@(ts|js)', 'ts');
        if (_.pattern.startsWith('/')) _.pattern = _.pattern.substr(1);
        return _;
    });
});
