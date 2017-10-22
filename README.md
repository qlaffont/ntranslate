ntranslate - Internationalization Library for Node
=========

A small library providing internationalization like ngx-translate for Node. (Use JSON Format)

## Installation

  npm install ntranslate --save

## Usage

- First you need to create a default language file in your application (ApplicationPath/lang/{{DefaultLang}}.json)
- After that you can use the library

## Methods

- `setDefaultLang(lang: String)` : Define default language.

- `use(lang: String)` : Define selected language. If selected language is not available, it will use the default language.

- `getDefaultLang()` : Get default language.

- `getSelectedLang()` : Get selected language.

- `translate(key: String, data: Array)` : Translate string with selected language. Replace Translated string with value if data is defined.


**Path for language file : ApplicationPath/lang/{{lang}}.json**

## Example

```JavaScript
var nstranslate = require('ntranslate');

ntranslate.setDefaultLang('en');

//Return "I'm an Example {{name}}"
ntranslate.translate("Test.Example.Toto");

//Return "I'm an Example Toto"
ntranslate.translate("Test.Example.Toto", {"name": "Toto"});

ntranslate.use('fr');

//Return "Je suis un exemple Toto"
ntranslate.translate("Test.Example.Toto", {"name": "Toto"});

```
