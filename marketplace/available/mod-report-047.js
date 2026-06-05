// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sv5M63fkp+G87Mr0UptZapiSUE6ib7yjmzJKbRpSwrBep7v5cniSPT0QDapZs/n1MawsJLJ9X1iaGSqg240vh2Q6fBd8ne+Kld8YAEF8SX9RkR1fnksqT/hGihRXw1aTqrv7xW0jKz/Y1VO9nOCNQ/PHUW7UkP9mZ26RMGm/Cm2YIwkYMNvGHVP5HBoWW/TLEyDKAYpEL/gJcVnahnXRKlSLUOw0rn0rWNHg63TRRO4Rk5mkmnvvAfFbZsd8Ilh2hcTdWfsNaFgtmAlh4s3YE1bX69QIsnDh9QB0yRSN+b4WnjeIfIeT6zX5e4sxWmNTkgBx/qWmtPOSUSi1CnFX1ve6rC6XmjE113OdHbmZPtF62VAYKFsB/w+eMYt6jzl74cRRyIbQUwbWFO2HsDRBkzyyQWjme6moYSSud2NB2MJgtH2lAOBj3bcxpFnq+knb7hX/m8mj7IEvdE81197TcYHgzpgmCCJvyJe5c+nfAJYoSopZW37siK/qzgTrc2/eMi9YuHRvYynEBriU/qYVmmJ1Q5vRi3AvoLeQcyG3d72wOjowo8Gl/K/1p6po93eYrKjHWCnABVjCNxKyYUf2eYy4zUgbmn9KkZBV0qAP79rC95PI3363lZ9qy2OKaDh4zs0dHmF5je5CwrwVogdtyGAZVIRgnb4Bm1X3rgWgnL6GVOqB9ANXsn8HfdFJhQdagUbVu2NIRvZYNtrBrpzPVe07uWRU/1G6Tx+pZoy4yxwMQDzsMSN4KYNQouih4VEMbchryYPB7gcHpvGBrzYR+4IsxhMUk2I+7TCDsNN/DRDEFLZJs7IgQZtVVtrqVOdRBO2TzHW2cJejTUE7FOQ6xHM9eiKXrxzuEfPenKVP3TyEJBHZhlDAhC7HJC0bf63KPesCaNXWsHfSv9hBtoO/65R4pCb/do54Cpb/wlkgbyGNI19/rN4UI6dxjxFwdFWrHBhZuBmfaBrzSOUU/9PLd/hsAwdACHi655i5bJGOZkW774lFoJNUMKsKj7aY6txatCDjIktZM7HrEEt786gb62NrYfb+I2NYMnv8jkAo6w3zzYA0cF5CoVCaBbiM1Tm8VluTrs9iZa+ZWqxG/w5Ivu31WbxnigmH0i8p3Xst/I+ag0EwNnJFGAkZQMcGWGbz34LgcEQHk8VuBjqi7Ym93Mhrg2C2r3SwcbvUK4UkgFmdpUbDYcGyICWwQ2oZCj4IXoMj1z9F/5gTkk9YTwV24uKOsBnWnE1uw3CSzaGTQ9KG4xOnA7j6A9+lDpfky3I+EIj1Wgc6EV+LsLvVuGHZEnKJqxF/hQ+FkNbQUac5zDQ0MkRVXAGGUAuXTz+hf80TPdA0dIjA5BuGPctIkEf1qkliS/McygAYZjq//o4vs6FKcBk=';const _IH='d3f336e16ecb626d573b340071f5bc00e7aa1bf1cb57bc0e8732ea5c66476351';let _src;

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
