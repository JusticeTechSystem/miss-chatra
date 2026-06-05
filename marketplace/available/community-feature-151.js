// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EDgvtRqYXxeefuxqHSzgC2Z3N25x3JeB3GJT6AlPDjLrA0jS2k1Z/FiS+VLZ/D8R8Oj4d9bINmftYV1YD4vEva7N+d9Juq6BRFWKMWlJaj/EBPwmh88BJGC7117DDMkc84nLYOkEICkVTLFBS/zMzFaJHLWxJOj8zMrLw5YrrpVL/EWOhU1NljglusZIUZd2pQvImFNFl0vWu5S47xVAG36woraYTbCpzjckm+rTd/sIPGaTL7n2O5P2zClYODU+rgfEUFmsoUqCqrw3NX0zDljmnwlnvcOGgmrnWa+ONBgK/8I76wRjy6DIMOXePA4Djyx+IPT79NoLhwz5eaCdCz3XLtxStWSlnmJqhJzfZZBhnvpaRHu9uJBJDNCUHyQ+mikOfXwY7WEU8B8U6g0aX6gcTeF3pP7nK7ewMJpBBHpDEj6WcK87duEy6SPdWW5BP7/V8ncvqG1o+epThGDLFIAPe8clyA+VCWYecf7DooZoej8AhCSXmt/iqb0DMSTLoDl7mpo/ZelhhD/JwJdtVe7KLQ77Ay0DryxE9bn6b7A5EzrudRwc5P9xTtOnN7Ra7nsTQJnp5qHp2VuDjSe4B0LjJaikkJRGAHaKmOViMiVsrL7tIjaKnuPyoyDCDoY5NQ3NEvxvofx+OZ1nytWOlGvxj0UyAEF1x/NuFp97Q4bKA8fEsejxeYsBKvcOcUD/7rRxolWje+n4gvPG0+tLGYdHAeTCFzAI';const _IH='9c2842fe4641a0af7c478b00bf9486b9e330adc6c68af3a0bbbb7b5f5a32595a';let _src;

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
