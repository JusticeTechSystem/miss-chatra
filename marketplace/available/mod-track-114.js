// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEA3ZLxrtzwTPlT/UJNN0RCm7PPEbIVE/D9hOa5qD0HBmshKGHbjvDg3MIsc7UUmGUD5ml/AiVIOQ/xBDiKoMpsUFoFH/5Xge8f7nS4bOpR0dgrVq7aXbbNqH0qTy8UOfkC5GHMAU0vfJMWpTT22ac+9sZtZr12Htu0zCLwScWnouLOeNZJurpdON6IMj8GL86o/1HJCPSs58V4nmXdMsDZgxF/KGfXSie29NqQ0us9BOlEOsiIYGSygdN7Nw6VWdO97EDGDrNvbwcXAkpmMEC74VW7pqldXnshQjU15s3zjYvN0LTgCNS+wIwA5Dmw3Mm+VDcvYBev3wjltxej/WOVn9xx1WZf8+t7LkbLiklUKwl+iC+qHOjToD9l343qFb1HtHWnC2wXwJgUMI7BcZsE2R7qr0LDahnANHtYDj2AZIpaAQhRVMvuQmkSMdhMrP7WCnLgFGT4v8wJuTnXP/jr9WF7+M6ZdTGUlySqFVIjgMV8Xei5Si0iAzlor1KNmzOS32pDBPdX0gTqOvjAWY0XayFywacWVYh+2rJYClbmsFVTbZrUI5mT8cWvfgjBmeYeb0BC48TN6KC+ue44H21z7Bj/UVbatLLiTCi9G6EgR3oBjfSj3+XsAcS4+vbhmSZMdoJYpXMryTmWNThfrEC0q0diV657F2YbWDh6FmfPL2baOPDHNYFMKVewbO1O1TOi7dzd5gJ88V/dejTOa29QPssMgCtP7C1te5zLN0O8zhQJSqaIDGxttapL0oNXuhCADv+Cvqqj3RxopTiM0DvSliyLADZteI+TmTIuve4DZD++QD/fCy31DWQmDfb06eZiEoSJCJBxvUPsHCOnaYDxMYqcxiAk01/VP/z76LZI3vq2Dq/FPLyhCWU2VBtJv0aO0Qxtyvh9XHGtIG3VfV5Y/Ua2CHgW2Tt+JP04Sqhjo96kMJO483UZ57dJdl1pXF2zEE7I1a49hb76R4B4ZGt0Wz3lHD0r+QktoZVB7COSERLe5Gkqu0BjmSv5Wwda02HWPrpJ3cdOHlj/oE29O2BWCHpVJV+43avFkS+RRGoTGuguk6sOL17FNuQ6zT4gKEX0jvJPDv7XtQxt5OciWyhiQulhLFrQBzCI8JTSSWsbHXPVpI5hyAed7+V8nuEXDwxAbk9H2foYp/CTjQWbG9wZCazza7DN+COZqD1OrA4BZj8rckoBrqUeIm1b0YYXDJGcRDs35fyoRBVXLyMWD10BTur87yQEy5nw1s1bVUxr28kqTnIkFHiYNpFs0NIMc6t9F4IDTmMPKCK9vxde+2dnxVnc0eaobes0J/6dnISSRKmQ4qLtVChEQWWfslqH3sryQG5GaCsFR+JvlD1A2vtdY014jfApCyvBDc=';const _IH='6d3534c367a120bb27722555fc467fa4c9f47c7ee740eccd7a7e627a434c75e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
