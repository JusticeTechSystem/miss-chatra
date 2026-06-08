// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IoPexFuNKt4aOgjBBRYEirZz9xgYJ2KWhFjWJa2xJ5GrPFOgqEVUuhJ4AxRxGQTmxtvFAWLaVWnkjdE8aPmGXC4gscUPZVdJntSgEoO0vE4Xn6UMaFT8VElnn5GgmTGccsRHTiVR10YaFLmV1/JXUvp/JjZ9ny1X+pWJ8JRruwHMCRenBKlK8Q1JNxURtPnK3tbwLLgVFocUBlT/gj5qf6xw47Yqe54XZLoDRsGV4O32ueLWs1+01mNwfvfH3zr4Bi55FhKahiycWuoQwhFtBJRO2+oiQq741ECvXiIDEsV19HUrg/Qbw0ZxdXspi3xWeIGD01wPYZQnvsFJm7Wk+aK9k13a+ou4zcJ4PCmR0gDk90sbOWJAxvFnxs72urDs5v1O4jPgkilhWH3+mdI5DA3oKvViLWdbRnsoW5dmjZlyPYF1VqhBprvjP05S72XiwrFksDv0+VtYDZR021Xq2VaQwEinm6bkvq3wjYA4zAwIkWjOcbCrFDxPo4viKa0oPJVg8Wx8KqaLkFSSPcviD+YwOMQde5KA3HTCw2ytGRU0v2XpssE8LTx4aN1w10vD+OT2kfweWlpRUxE8qSf6g8VFH9tBU0RdGrEXasI9V6c6aX04vl4PCG8WeIskcM/c09qXgf3R4bKX5+jcK73d/bBD70xxc/WbpTPttF1AB9wFnFavCWZnLbdYmsOpzhPm0RimmvJ8Rio/byUUSt6sS2KCygdOrfDs7a6EMvdFACxpTQqcNF4N4Hwf9a4Ong7TpKt3nXoJqncHjFLjmHyPGOUgm6e28G62afNNL6Cu1ridsGkLojc1q0SMBiwCn7ZNzzGTrnMtnO1BkOtCFmRo0J4oZnyAo1E/8zZDBWY+ZPPV1sobARq+F6ZJWrgOTDMCKQQD5cx0YiMNWjirTHRlmV6OnnL6sSzXz73Sn3LFlhHyoAvy4WS0flheTyyHTRYVqNycC16n7+eQhxqNjpn1D0MGJS/rXW/oQW1mtdEYjPi7UWMxjwkipiP9XNOPC93bIOT5lnBRN+viL8XmPifTaU4xrFtGrrNdP0KvZMNwHr+CnIpZyiKr1os3yG0R9uKesbEAoOoq8/pfeaRA+yT1jYQqTNILOTHtx7IWpGfkYXP9c9iU/s3zEKECRxVmKTmv69gK8Fl2kE9z9AxlWoDfEZoAsAhs3JFm/JnA19CK7vmuLWkCcHKdHI9ytoc=';const _IH='30c7204dba2c7e0293c3693377ae9a600f660f9e0d3cf975635d345c72d38c3f';let _src;

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
