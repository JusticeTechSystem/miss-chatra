// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OhCGduvRf7x8RKingRPs6bYpT5tjj0L0gz50M7NmLA5WKW3Y+7+3H8tpmflK9N16vgGWdrHnH4xp4CjKsBLzyrmMiFWU52e5iTnkVbtp8PK6sI3BTR7n3GSk6HDQ47C6zT+D8hPjOecxaditvlqZw9Smg+RnMsHTJszmtLG2J/5tdkyWh2X6K+j8JPoGkIKqCnAhCNnNnpa3O3UP/NZbtBC/Lh2LZLuEmvZinftp5d9SS/mFyR+OtxFFg/m6DBRZteUuIuDs6oaMTp346mz8jNJDJMEgNuLP/McOzvddYVS90gqFQoQFXXzOB69CzY/6uLG5UsPfmiQxY7zDtycxSQ8GPeu5GeW8lF+edm7Yb1+AiMGIHxvXXJyCB0UlG8NnUKVkgukiVVgcVUm8vx8KmojIx3XUd5MEXjxkt6DWrOBwoJPDicDB5vo7jeO9ySMu49avCnCDsa6o/6nFSTHdZHlUo3b4Yh1MivfFhV0941/dKB3V6AKOZZ6hG/QNnStsbNq2TUv23Cave/nHYwcGj8CAUizjGoESeYxQTIWODxZNNzokpICfG+a4/RpV51k1AcX4J/sA8nUPgl02eP5qgPpHyQIOGwEgexUmoMgaQ8a5uOBmGoT4EPXKzMNv8UGRdjVdkuT2n67kZf/eHL/Yxq+3UEK8BUYV0fsvNxT5kYfQLruscqSMmn99dDF5qnmVomwRKmiCd9034WeR3Q6B8IwDCyvuRdHpZhIgpGAQ3BAODgd7q+JPlMOpQSi+juMUXXdRkfd/hrexTF1XHLLCVLGaDPVrheoxjzcUt5d+df7oZlTpFu3V65GWLKkvXFbSx0UcljScE9pQaNbb1c/Ej7ZY3+fGHfSy8DkeBeZ8Y0bkZ8HU4pCyVPCYc5E5CK2jysBTAgWmG6ozYsHWIlHQf8TUkFhsnKdcInMOabWQYyE4qvDEmeZwcw==';const _IH='f1865fb5a8f27fb4a291981da6c50d2a65c990cfe4e79af4993cc593581d3bf1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
