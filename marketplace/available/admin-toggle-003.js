// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7H093gbNJRsdY87zKF6Pw5VPeTpFM439WR09reBbEq5QqziE5xA7QOGvpupmsXrIKurbT3cq9y/T2OKbjMsC7eevPZXsLGHr2V2tyOIQ43T4BNhAr45vg1y6Fy96M1GePxUstGnhSlVY0UvE4mfrZFDPBmMj05PWJlUkGbirjG1l0UKkBlXcPlnJirLYytW143KlPWMnnbr3pPYYQ4Ida5nUm36MeHBYInu2WttyHzJYnlnf2LNCLfOlnLKpl5g0oexIlR/tyAtoD5a8gkR7DpzYz/pn89RuQvQssb01FFy40qRBCyBKYEXh5LTuC+UoFeJ+QammW3rRYVQEfSTVZSl9tFMh1s4+izBHa5rplXQoDRmSFvwRuhctWIot3XOG3QXr00n90A/T0Q/SD4UJIv4t4eHCAcfzMSF43Qyl9/B9GyTgJeMBDk4ehMBaMxfUGqvIDDgZsKHDYzBzm9FPgK0dNjTRnUc8WR0qHL6DE3lwbRDIXC+014NQ5irLF+HUZ2IrcWmT396XF6UPKbO/5f+hC4tqPbv3FRJNZfYLJu+HFzdffG3pICLwFv2vVQXOQ6hYEubfL//nPMmJIW4/6qIca3cn5NFhTwyTooIoV4tTLXxu0JyXM/o/i9DY97/z0L40m1XGq3ZJsiYJOxOMdm2mINliqvIBZXUhIMRWrD0433j5D4HyZMgeg1gxGwZ+n8MECbHqGZUFum9t9BTfGaOhQFcpwKuC5zInwtO/JXMN6wvz+CnqE+hIw1thWHXjYitlDZcFChnq0fPYSJSxmt0jbyc3+6tcJJR+Xo63JHu1it06SNyc3z36ycgpz+I/1XxrcITjZMmIwjje6xPQ2X5WKpCe/0EjYIocQD5gDB4OMmol09g8dlsptTZ0epFIo316pDThjIIzA3VFkpyTtcZlmo5yOMnMjUfiYxpRSRJbVfcWrfiiJWg0ooF/Di9M+7J06PzkHMfH3nlEbjUtEdBrKNbg0MSNlrQX6f4/p4TaqqofdDOWcRY=';const _IH='9b970826745d54a0405a149def07510171af79f23c7f35408b85284577811234';let _src;

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
