// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOCRayGofjDgROuf7XW08lt0UrKBMUNlHo54nYr0m5Z6XLZ+RNnBeWjVrsDkrsfjaE4SEkJsXZeUlFvD7lTS7+GglXce77gU6CJFSNEQLH9tBPr8mXqOboL/P34ZeddZ0oaD8MhgRKGp4uAWpG5UJ3v4Xetb7lGnnPhQGqizChWXhMH8ubcACCSHy1AVAUERgOUmmyesuOklhjxZ5UjqkfB8qobWBHRjOriTmgMDc5CeM9jiwLlpO1o+65zmPtxOE9uAGIHeIh9cVz+rYTgxiIXsSOPL/XWa4/7++tMWhy0wGMHxjFbvjbRLnfADZOl/ecXclzFzMhvogFoGaXuURAhNhoir06wKClaDJwVDLLPhio/3G1VvQ/2InrLOtSS4/uOIHHikpqQ9kNXjMslkKH8LpSn+RIsOrAqlfk0wGYI7DjlZK5ovNM5qgngIV931I2kHBF4fFNfhA+DcNmZxnVLLKVuv8wUf8ewBgjIxJOsqzbda3hxoYnSXpK6/2NRFk7Pnqxbuaiv+6UC0vUwM4Dnn0XrT1ZEoMeu1HxrlQeRTX4RCIqbLj1dYGupil24pcAVrhiee/bWaJ5Vh/rUs/p5ykIgCUgwaRu1zoxZq2hHR679euCyMuAJnAipVtAjbUdb/ET5VCkX0OUYjC3W+BNZVvLa/hGxvyLrY2VMcDTDvWVUgzmcv2lHPGciKlUgEPqNx4HiMPWSgsVUXcFax9VuiVPFJhMvEFzssY=';const _IH='d9cfe52ec586919271b7bbf46116b09a46f25954d423215f68bf0a8f7b1ce16c';let _src;

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
