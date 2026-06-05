// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EM/Px0Fs9SDaO+pAc5sFPx12Vt5Xg4eb0IJIWPWo2K2Fg/8Vd7KZ+TrBlGYs4R2VXoE1IC5sPwHFYngmXByq45wfgHPtqW8ObzamA9GbsvlI4nwuCOhBF81wUTI6SmWnd86ZFREPav+yrsFq2tZ1cHQdCRU6wCJ7EnSgu78dPn2vwmHPKDXHS5gsJfeAzppCdkIi6dBfA7CSDRPePirGfIDwdlrY/BfI+6oT3G/IsQi7W+rH6XYDmbN6Iyan/hlfwsil65bDj9tf3MO76vH0edSLKFrA/rtV/Lvgms4Z6eNNRuxdOd6njc4NWKrFaPSvXMN0wkNw9taj0oeApunRAWFZsS+Z0wsKTS9P1z9ZKOlS+P/Bmr2YRUhbKvVn6xpqCQwjZvcTTaIQknLebqN35xKupF8Yt0USskDO+f7rNLnQ0mEekXMhHJtfj/0wABH0tvDF057EWagYn9Ppezft97rTKkKr164YCsTXb9VvZrCmAurOPfBuqrw11xWrBVOZ0qoQWyDSrF2FObYT4VQuXkLOtYdhUtbxVflpikWhbhr02WrqeS6xbNq3hn+Gd5VW2LP0AMDuKLiRNGEFN2rS1A1aqt4rPYcaUG0zHb5vnaLIXlIgbzHF+53uPyJ8MSqfXO7jDOlDI4csZkEa9LrwduT/pValSKDh0JzWFZrCwD4OFSwu9mLGuuXV0pOIIwOvKLiWhjJV+xvs1skJ5HxbwZxNaMdS4i5m/dcE7cpBNxCLhJ2pMecOvXpl3FsJMtpofCb7t1nA/qsIkXj+6G9Qh+0ifLn1z5pOFB68hMYLDsBsIkyHVne3FdKVA9NPVdF5QQ0c3Pj5ri0jqKGF/QPzuOzOfNFuWToo3S88BVSDVeX3tE6haKv7cs+CidxCH1SU1m1veQNbgLDJevGlYxtwdyLnWoBKoN5xHoqpI1goXPkqxWZgPoDuDxgX0lUugMMPuYBCd/XhOjPf4AWTcD8E5eG57d2lWPc9BEg8o3h6z1dx6aB+d2k=';const _IH='1c12efcbda5eac1752b453cdb7931fcb768c8e79b9e61381887535b3db27b5d8';let _src;

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
