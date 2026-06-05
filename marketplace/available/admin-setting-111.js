// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zAOkWkVcYP4YonWDScBCQmm9m+NvhA3/rQgpAzWaZA7TYg8uSjULJBzGpm3VduAB1ULtNvzTq4cP+4e/U99QQz7r2FbGup4W2mb2F8dY2jErLf/rntiB351aIw81GPnVxRRpT5YghSCs9VXGsINSm4kpO5OUX8po/WGGSoQS81ji+pqAetKP505dQdQVyA5H6klcpBr8FZaYdKuIDcL6tMbuXmmaUySqUO4Unw0OBt5IhREz00mV3JwEDUrbidxUgPt5BqTxvXsWOIDInblpkghpT5b6zJ2jTfWCZEmI/whTjD6w/ZrBWy8cwJ/5+ClN3M/RrfTG0nQPbCPpon3Vg/XrTEJ8ToMm+0EA+17WOF+jol6f4gr7QNuzcs4agJwRziKAiJz+1QZXJfxKFXkzgQkq9T/MeJnMWecdyJn0CjfvBpHHPF3Q0JW4oZxju2S9wpEAitZZerqvaakpxmijFfXzITXq7/zQjCk97OC1P0JqPI2SZqyrRFU+xJ2Un6GeLChuEpHkHVrT08D/gS72QoI8fZLKlIPD1TqxMcRms/xcqIdtEGg5PlshGeH9aK//xMHhikayZWXD4I92na/wId9aIMCzvlgK8l5vM4Z5rNsrdExuJ7wsMgVtCyq825xavvaiB7tb0hFz8bjtlatRVUqXjjvfSe6UigKJQXQyXHCVVyPzGjgkRqyYaCQU33Yc2i1q7/bk9HUu2ZiyMd3c/lNLCwHJhmTFurzUTT2FcZXOoS9onaiTRdsoeXz7JqAKs0mWYtg9F5UEvg48HrIOhGDeKJprYC55kpDrVc9e8zxSU5iStmMdo+EMd8ovBSTYx9urX3YpD2N4SEy4wJSl7SF+jrMzYyY/8IwYKxnZQjPy90eTJvJLTEkGBNP4YqX1BsGaK5z50WOsIhTCzpToDwf60HbBKYJlNW6AAGbtzIORt3o8Z6WEr0iNRGl7STS8wZGcihFVjdjApdRPnNv0YyNYID2adVn+lBeZRnRw7nuhUAFV9poKPGxOsuROtzyGE9HxOIMgFOQ=';const _IH='f18f35ff6a95939f0aeae70ffff4eda07403083b8963305b16fd7e56c21d1ce8';let _src;

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
