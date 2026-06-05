// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kLbSwnLx9wDvbiknJ7JOBhFgLVpGZgHT3ulpiqDrI5sDUfGThYLAV1EU4OJshCPu21dyLZmPooyl7bkkhqBdaJWdGPVR3T1IprtMkAQtc6ydeLBtPl0QAue1x8iu+Y61q1QeLzDjNooZlTZvJXiqlRJS7QSTem7qL8e+S2rSZqnmuSqU+4kIFX6pChdhXjxhEfQRXiBq9Pu3reXeg6ZwdVfugGniPrYEYDC61nN8V6uj3IdWga4Ss2Log7btxPVgzWUD6j2WLz7OWXAeRdRnILWeO91rCpTFh5pFgmAxTBRIi0W90LFhKQpowuqklZf4C+VhwZ0whOtGB566KYUcUIwPYLzNK/GtLeVfqlFjCd0pn02edrJk8nQ6k11tJNb/8YQkTirC2UPnfLId1y8IdbNbcyjnGTVHvqkSwL5v6/72+zthQNL1WmDu1xHprhpWKRi9t2Znj7VgKl4KymJhTIOqNaiBurncmTnBNbWcMY+elw2ZptWT25swjCjbD1QS7TOeF9gSpPbVdHpA95CPngKT0jdA607e0L4BPvze2nsNMVOl4R6SsOtOsSWDQ9UMg1HbKiDSGG41eyOJy2M1FhHLM3tkx1z2bBvvKBiHMpXOUUij6puZTQP4MxGBDGoyBsb9DXLRvchNprEvdkLXb17e5B/JN77FDrBZHCUqoT2PiiudzdkVaxX4DZuEOkudYOhTryP+L2ZbJzpz8onLtD5wHSSDxAWAhWg6S8OTxbjKGYMrVj4xghFGVGiAhcg7PvXjIqIyFmxj0qyAMcXjocpE212Tjy4CICYvPfOM7J6uzwQ3cQAnSPyCgRjc3amnyFykc+F9klJ5ZafAhQZjRT4fW0lHB9blAvh/qO2h/tnbAHPZAFHpw8ylhzwg9ahbirglBv7pqR7VTpN+xnzmIEnfXwWaAlO1QcGZV4GRJEch+k2VaIXtvA8SbNH061YTMFDUPP/iq9qhFEI+wVRUfgMymvCybsCos6E65wMiD5RM0SWtTGkSxv/fsxSPRkpjWse65ecHFoqY0pcQ9NfbAFQKSMVJ7NslYlCtp0335K7Ecfr+hZEXymojTMB/nnpGcFbG86xjCDU5qFoziWMMFAmTWR+dv1Vj4YRbuSo0P0aArD5uc4zEgEtXm4oaugELwhVEPkcdFc+Qw3DPacFhp3I61I/7s+eKPXc+FjT/BKhw2D5D7m7hmfhf1v3TWlQgEdGK4LeX164x';const _IH='7673b68ff89568a4eb3553b9efa4e5cf3d9a805c335b6115144e07d78841ce1d';let _src;

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
