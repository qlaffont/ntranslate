var fs = require('fs');
var path = require('path');

var ntranslate = {};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//                         From ngx-translate
function isDefined(value){
  return typeof value !== 'undefined' && value !== null;
}

function getObjectValueFromString(target, key){
  let keys = key.split('.');
  key = '';
  do {
    key += keys.shift();
    if(isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
      target = target[key];
      key = '';
    } else if(!keys.length) {
      target = undefined;
    } else {
      key += '.';
    }
  } while(keys.length);

  return target;
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Set Default Language
ntranslate.setDefaultLang = (lang) => {
  if(!this.path){
    this.path = path.join(process.cwd(), "lang");
  }

  if(fs.existsSync(path.join(this.path, lang+".json"))){
    this.defaultLang = lang;
    this.SelectedLang = this.defaultLang;
    this.translatefile = JSON.parse(fs.readFileSync(path.join(this.path, lang+".json")));
  }else{
    console.error("Error : Please create a translation file in " + path.join(this.path, lang+".json"));
    process.exit();
  }
};

//Use Language
ntranslate.use = (lang) => {
  if(this.defaultLang){
    if(fs.existsSync(path.join(process.cwd(), "lang", lang+".json"))){
      this.SelectedLang = lang;
      this.translatefile = JSON.parse(fs.readFileSync(path.join(this.path, lang+".json")));
    }
  }else{
    console.error("Error : Please init Default Language. Ex: ntranslate.setDefaultLang('en');");
    process.exit();
  }
};

//Get Default Language
ntranslate.getDefaultLang = () => {
  return this.defaultLang;
};

//Get Selected Language
ntranslate.getSelectedLang = () => {
  return this.getSelectedLang;
};

ntranslate.getPath = () => {
  return this.path;
};

//Translate String and replace data if needed
ntranslate.translate = (key, data) => {
  if(this.translatefile){
    let translatedtext = getObjectValueFromString(this.translatefile, key);

    if (data && typeof data === 'object' && translatedtext) {
      for (var property in data) {
        translatedtext = translatedtext.split("{{" + property + "}}").join(data[property]);
      }
    }

    return translatedtext;
  }else{
    console.error("Error : Please init Default Language. Ex: ntranslate.setDefaultLang('en');");
    process.exit();
  }
};

//Change Language Path
ntranslate.changePath = (pathparam) => {
  this.path = pathparam;
};

module.exports = ntranslate;
