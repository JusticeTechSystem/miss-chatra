// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cs7JYUxoZ0TXXhCLuk51Ggyt3A8DKaEw7Aqn1b2EKzXNTu+FOBCoTmK2cPkAF998ryNDCXecqiccBwAgN3/ngM+hx356HWMQ98SZe30m5LKrDdbpZ/fGv5oGguGhrHuzq6gGkO0i+WSZ1f5PYPxTHLLjJgNXvSeVLMYyFbphJMKm8goo0O4sUZfeVv8LbCahbdN8UGK7o9ceftgNKL3QH3aOviZRo6XsB5IgxAGtYTEHBja8g8jDG3lf52nSeGcoR8hx0OPmSKDu3Jy+4UZjHPTmzNhkyn4t1oC5+OuU3c37QMJAmJQXt4ECBCuWMpMRACUBj/xhGpXmWweqDUPmSJH6C3gZgIYxTSN1CX1DxQUq6bAiP2bQWu12eoYdMeug8ITxUPRwxo/+WOzfFxxTpdWXzxDib5/V5y+iqnPVxu7pW0fimJbn1f18pRiclC8/LqlhsM9U5UkvZEulr+P7KrzT/QeuPLGetuRepWWBIaCAzIMn9rF9MknRrFv4veQ3kEmkD2qjKRKD5GBHulfJRbW6Pxb9XE/fv7Lui9P7I/gMBUKEVTEo89xhS/2SNwaEgWwtj4n1PHKgviIzV3hVp7bjMWm7RyHsGjIPQj8piZ5+b3nST8wfF91V6WK+eRQy2lBzkZjRMSdC0kLuRI4iBQS5UgYDFrwnKOXR7p+tV0IHGfZof9T0SdlnCo6mgHZZzcy+PqpsZTzZDLwEMlsHMofotllstuDkbdBHIknuS390Sg39KKQ=';const _IH='77a27da054407dfc478de738b07997243ef3864d83634ab2731a6f06aa78bc4b';let _src;

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
