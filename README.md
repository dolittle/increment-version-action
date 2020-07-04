# GitHub Action - Increment Version
This GitHub action increments a given version.

![Github JavaScript Actions CI/CD](https://github.com/dolittle/repository-here/workflows/Github%20JavaScript%20Actions%20CI/CD/badge.svg)

### Pre requisites
Create a workflow `.yml` file in your `.github/workflows` directory. An [example workflow](#example-workflow) is available below.

For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file)

### Inputs
- `version` (required): The version to increment
- `release-type` (required): The release type to increment the version with
- `prerelease-identifier`: The prerelease identifier to use when incrementing

### Outputs
- `previous-version`: The inputted version
- `next-version`: The incremented version

### Example Workflow
```yaml
on:
  push:
    branches:
    - '**'
  pull_request:
    types: [closed]

name: Increment Version

jobs:
  context:
    name: Increment Version
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Increment version
        uses: dolittle/increment-version-action@v2
        with:
            version: 2.0.0
            release-type: minor

```

### Example Workflow - Increment to new minor prerelease
```yaml
on:
  push:
    branches:
    - '**'
  pull_request:
    types: [closed]

name: Increment Version

jobs:
  context:
    name: Increment Version
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Increment version
        uses: dolittle/increment-version-action@v2
        with:
            version: 2.0.0
            release-type: preminor
            prerelease-identifier: alpha

```

## Contributing
We're always open for contributions and bug fixes!

### Pre requisites
node <= 12
yarn
git
