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

- `changePath(path: String)` : Change languag file path. Default: `ApplicationPath/lang/` *Recommandation: Use path.join() to be compatible with Linux and Windows*

**Path for language file : ApplicationPath/lang/{{lang}}.json**

## Example

*fr.json*
```JSON
{
  "Test":{
    "Example":{
      "Toto": "Je suis un exemple {{name}}"
    }
  }
}
```

*en.json*
```JSON
{
  "Test":{
    "Example":{
      "Toto": "I'm an Example {{name}}"
    }
  }
}
```

*index.js*
```JavaScript
var nstranslate = require('ntranslate');

//Change language folder path
ntranslate.changePath(process.cwd());

//Set to default language to english
ntranslate.setDefaultLang('en');

//Return "I'm an Example {{name}}"
ntranslate.translate("Test.Example.Toto");

//Return "I'm an Example Toto"
ntranslate.translate("Test.Example.Toto", {"name": "Toto"});

//
ntranslate.use('fr');

//Return "Je suis un exemple Toto"
ntranslate.translate("Test.Example.Toto", {"name": "Toto"});

```
