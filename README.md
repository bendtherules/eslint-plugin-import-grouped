# eslint-plugin-import-grouped

Import statements should be grouped by extensions and groups can have custom order between them

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-import-grouped`:

```
$ npm install eslint-plugin-import-grouped --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-import-grouped` globally.

## Usage

Add `import-grouped` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "import-grouped"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "import-grouped/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





