// when the project gets bigger, checking code take time
// of course we don't need checking typescript code on markdown or json files
module.exports = {
    '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
    '**/*.(ts|tsx|js)': (filenames) => [
        `yarn eslint --fix ${filenames.join(' ')}`,
        `yarn prettier --write ${filenames.join(' ')}`,
    ],
    '**/*.(md|json)': (filenames) =>
        `yarn prettier --write ${filenames.join(' ')}`,
}