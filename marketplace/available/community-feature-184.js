// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gW/c1SXCzykyPQMjtp08W/zTgAJrQbFQC56bCiyODDWkrouhSsirpXmviRPnazGn51T7iGIQLRB5MYfhc5RlpPCdyo9mrQjoqsL3TG7OdhXn8FSna/Kur2/eeNi5fvRHJcxz05Xxgb+fPpsfg/d08C2+uVqY+16ppmWkZC9AJ+hHCg64fQBjKAvfD33Y8JGrWuvMqnA5WDeFXJgOdd+dCncO8Aqj3HExUnDAmA+IcT/DAaH02lQmDu4ej2JzEjE8/Qucnk/qMawW64t6WoCeXX9wBQI+Y32jHOdautah82m9pkVraiQuYeRXCjkl3aUyzIUYQcH+vmQrFeLz3bpoz5+XtlBSnOup7s6HICgwvh+I69cum1+YRduA2GXVHOZK2dWNyjctkPjt0aA7Jq/w2mlksuozn3czOLOnnZIuRA6e9nuyQ0Kq0Dy6C8GV1S4tsQPFEruHSTlvOi0sdEvUz5Hhx6zKirSUg+ImvpfJjRNTDDfXQQIGnKWXdmjmpaFpPbCVW1e72apRMpgaiAI+vrKYzZngKdlfnCm2oZV/l1QLFjJDxFbGv0Z3oplS0coqN135sT781SMKR75Vn3H1hRfJBdDlwABG7rc5/EwkY9mGU4rkNAas8u5s3RijphQqvlBKmD4H7zJj7n6xWzTX+kZdQz/1hcd5bBIbDdaGEDfg+c9gLbRZpz1Nvj8bi7P4dHyTzZ/8hA2MLz9HO9OyFzuPujHghf0hQpNYyma8FAjNxekSBhw=';const _IH='8b8bfc28f0f166045cebcd531ecd33f05f0ac083a9dbdd67f3b340049c68aee1';let _src;

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
