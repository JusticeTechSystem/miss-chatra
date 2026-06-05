// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bLjYFTkUimht8zSTm1tKCQpgY5bq6zuhsFayEUVq44+Q7ZctSCrBbNTSCZIz9qG3HXhJdjOLxpKMHFv414+NwbwZmBjpFkb6qXLqjjTdZrGQnGWUlhAz9rQjLjwblHrgXE4i6Uvwi68/DOmOfc+QexK46JkW6JlYGhdRaLolo54tU6gbuVQrj8cqB6tDppNd3M6Zkfz1D4Lbj9/7WLI7tesVuYt7rI42YRyHAc0DBSlM90PiqYq8B3hC/u98ZnvVBhIANPFSM0PSr6sYwRpOIR6Z6sRWWsgakeb/255ab5Pucy1YiKK8f9TevDDoQgsAEZJzuWV0xV0hmx1fuykND+/SgiiqQSz57ntZad+8T2c2eUYb3OhiHXF6p7ss3ozMu7FjH+2BOXF4lsZJTnXcpa/izRbepFaNnS6y4pdCJQcHuNTgcSX1NI/3oQQfPJV10V51tkJ4KD/S23mm9lTnC2mPCUOvDO8JtRaj2SUOAJJCbwJfC063y05QvLG52/R7VWdQ+dQp7OOF0pMgamBdyhs1o828QgkdLFZIJsH96m5NAmAQQQ/PrmovjH4nTfWVaQEHC71CKqVZRrPTF42CwifKKNBphdogSoVkm/d+QZ2UOMrWzeg4vT6WJ0rbZvc94KhN9KaSgsavgRSVi05NzMRTkjXaYaDqLm4gVWeA2Z/feIErBQQ5W0YQWZEh3Rg1gQskGXWbdtpGpJm9Sk+ZHkeyRqRQ/78/OrlVn5vs8JPorRUb3LD2cbv6EEWIYABmnloiwqghcd3PxXhWjYcvcOtLfCyp1ZzH445WjXvAuO5XtoD3uvzYxx7M9b7qign8UJQGhhi3cerSU7NMhkCgDP7eHyMlwcw5aCojUVxeoO5V+azXUNOXSRawjFxTK6LrshFGmT6FwkyUgGKxksH+7Ploe61jF3q2by3t7cQyqaSUoeP8VypDkSkctLwx3KU6aNhgJvzPR9zwclo4AgLEXdreDuRSAtcGLGWlFf8vve1ACEL7IDYszQ7EnmAigAOLantakVVjAcjjSKAK2lj2Pq+UM3gqQ/DT7q/gXBbZJkmaRPfTxuhVdkx9VjgfkC8R95ollrgNZe4uWv6pFnyo6Kvwh4+5o370TOP1jWIwskiRUcdHjgqxGI3EYckLty1LeGbWfSOCgxZYIvihSBmX1nDQ148WSQHDGr72htgGT8WtUK9yy86Sp7nfngH4qGiQIZ3JeNSfY/ocaDcu54iW4V0PNHM+C1a9N88qjczIRAakQWPINhK8oefsrmmhS508ZX2z+NDFlvzHzB44oKVALL58auV2iNU7NIJFae4x65W+bkxP3MQM/hotazANXZye0KvimUiMmSSY27EPsKLsnzNf6MIvdHVK10IRgi/Fvy4hZIEbGG8KbA==';const _IH='452819f35756b9fa0e472091e5a50545c4533340d58eab9d96d1206c3e2f8019';let _src;

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
