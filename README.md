# eslint-plugin-findkeywords

find keywords

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-findkeywords`:

```
$ npm install eslint-plugin-findkeywords --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-findkeywords` globally.

## Usage

Add `findkeywords` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "findkeywords"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "findkeywords/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





