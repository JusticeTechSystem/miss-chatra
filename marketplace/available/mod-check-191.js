// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wFQnScfx7+24eUXqjq+njAWBz9OcsqXGez/SlZ9bVINXgUrfQsgOMtYT3Z3wSK+AEiWYYYbQlnyEoxwr0fbpnj6XhToh4ez01K1beCtzTUCBNemZhaEL8yz1G58zjm07+y1QHeT0msF2f+tC0lL7j4+TPh9bX4uqfvAXAQsPhJlSBxJTkVo2e+PzIcB+pX0xO1gQiOt7rBrCt05z6fJSeuE0Q3aeWyuxK/CaNFsk+TJlFKFdksGdtqUgj0tATR9yUY/FwGyY0eRir+hBZl1fY3TY72830d8TOV4iRX1X1b4Oxt1DwuEWP6qBoDu6jH0aBGcu8dCk1xsk2qGWfttAZFFAYM5Y0qWw5FuaH9YEUI7EB+776S4kqxyWF+Ez/cwzEjm2xFwOcoR+q9nHMg3ev5pQ2L6Urp+ntpEsRsIMWNQ4dewBanpzgXFVV86nEH+W9Xd88Oc/VBeY1NZy3blA9sEgUKXOkCSuzMfqqFDuxNPzx3fHwgbohwxCxv9zOBgwNbA74Gb8XQUhCAqRotZ8wIgjDjybsquXLGkIxe6hY6y6heTOot68eoNjpZJ4xV63DajTZUBjXSL6ZRuH9tPdACjk3d2soRgx1n51YPjPqvQP+qW03hjYOj3sKEDTy+CgE7mJCVpr3FJW+sZ9ypGXLfS/271X7LPHEU4F0uuSSn4CKsZ+hSWIfqhEchz+V12CSQtJf/B61Z0tZfkA2wrtteJK1zczLGuOqpDCb/06gqtf8+zW0h53fxc/T7m/oLwSIEi/TTpISX0JlSLWHjyHBlO81iifNB1RYPlxhhG2KMp54WRYr14/s/JCGMoGGHh2If9K2GNkbaq1K4Lxf8MZ7EqgJ+IBu6YCCyqUw6fvtDqR5xvW2xlI96nhjYptEen2Kts7lxoibcP5P4/jWZl0k671zcuegIe3CPnG9fKGm2pedktqSV5aYBmzLjP9WSV/3qD9UuB5DA5UmxOPO7xeicvUQVEcV2Fsdz2Hx4mXAjBEaWJOTkAGIId/mrHtyGrJUMJdgC3Mn1IO26xjwR0V2C2j66ldJ0fFfZjoth1v+iCcFOk81ebXn3suCpVwK7T5BUtPLc62NU558vflT99I+gVXRLh+7bxi0oAb9AJIdRA3Czwbpv9agaPHzRuCLAaqql1yFlVoxJ01lgr/lTsotZMz0/6LfEBsOg+8AQmHlWYE5QLcjKsDltH6+Mf9KEV1oG7UU67jsWtjOj7bgOX5XQtXtSvqI9NFkdCwHwYrqELFNw/tPSrBWwLb2R8SYse1Lejn4sMfLTVNZuKW1CZ3ixM8LtwIngruYxfKy7pBHn5Ckn1aJ1Ngz8Zs3wcYIcRMsan+LTjSsCRJXC+/yF6XOijuGnsBrCp8mP1Q8xUt';const _IH='4ecd0218af99c8d35fae70ecbb2397a8d54daa0b06ba7222d70ef34063346bca';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
