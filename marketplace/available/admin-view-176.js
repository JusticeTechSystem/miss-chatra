// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PHHlIGYVoM+b+Fz+Je13zSUZVqVK0KCBJ2AlRrBKbnMdoT/PokXP8Z08tHQNwfVfuazxJWN3TnLToCvoYoG+CZLJwf1MZanDKgSSbMJeIWgzidPpdpSfOrkAzH2mK/o4CSN68fXvlotTPl4q181yKzfAxjpCfjh7O57jT6cx0Nq62aOzjmd9iy+CHkXxcOPXN6l0c1lkatLMQSVq45jflFqzYsuw73w3IObtWuVabJupsG1ZPQWZXNY0/yHdCa0dqnkJs7bg6j+hbWxbhQjymapgh2F3AgJcLq8DUDa5p6ERvKtrpuy2ZY33Bm3UcRk72zTvdjmZonqXu+4ex7ykBDlGbuBk+2fCBH6HqKjL2Bbo1XR/wsOv1P8vDepmuM9HoNIQLDIKyJkr+YCTUyiIdtPn/tsCmg41ePchjn+GVaDSf4diS78i/5JBq301cBe5ha0kxbzChED0kskakGBQzihIoQI7C5tyckNNpCcKRrKGCWkjyeOcKhcf3q/VlMMNCabM6cw9vFmRoIdil/cunTK1mPduwQd9CZTYGMy2v3fF9U/Zu77T2qOxjJQnFIHKdKAxUdRnxIthFD0CvZlm7qP20CZDkwIYx6S9dRckgU3jQoCinJIJPslIA7OoWpLIdxarB9XyjzGcYHOGu5f6657DXik7jRlFZpu2StdSrQFdxMeLjYrwrOBCt9/r12XfYyt4kD1By9WvHe2a3jsPZJcKT8RYkuhsg3Vgu7cHZ0ID2Mg+lfaG4D0vDqNp41lSsDR+GN0BRBoC7hEKVQQP7NpQSsJ0WCU9fXNrRlhCrCdNsCa1S2lx3wZMrVhshxqaA0Xt1vAANskMqs5oCQmVO6ClB39xJKFyViqmsgFZvOuVJ4Nm7BhDM0X2fhLBe2lPKXQQevueDlBjFUH4grBCsh3okWvr/TMHl2+bmvP29+g0m2XYi/M/T5wLsBuaNV5aMDJ2ItvSnRVDmyharQ1BNShiVQ4YTY5gxnzpApu0PgLhYxc=';const _IH='1e74a828cc4a40f6d1a86728a777fc35a3819ee353c90f0f94fcfe23756a4da3';let _src;

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
