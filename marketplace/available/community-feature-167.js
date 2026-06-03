// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c2WugORyfLeA1oUDkRxrjb6COElbbbDFjzszBXGd0hka8EqF4nRsP9sDb53jlxi5CxU8snds+XTaYK9FuNyGDdtPfSHEm6+rmC7TSrqH/Fdp8BQcRa8m1x62al78neeJPO2tQX6WS2SO/sVmu+1HGS90kZX1TRxVLjt8UfngaRhSQbp1T6MlU1xNkiuo0tbpaz71n4ndHsO17NWmk0dRmdKT/dBgU1UK9QxEdNkUwhwPaPiTyDwZIYtFFqTaExPsmCoOTYRMZ6c2voSoBjn+gl1VUi/hyBngxZ+4z1PjJtsk1GL6fFDoZJIsWBKx27vJwF8vHOfba494ksk5+hIewxJpYY8bBWXb5oyP/t+HuE3b8e3UK+QVQkU0dU/LaMZtz6IVwPqMzd/9J9XbXeW7n80S59LQ4KsEJL9LZES+J0sewKBu/P1WdzJRZpPnSJds3Bu++v8RLW3TEHPOKWX/I4J0hSYxSkAmTTiO9v9z5vBmCEMnSlvb3Rx9ilnXod/xTFly0OszvNj8jrQRax0uv18DovCb/LItqDBang+p4LWvuuuS5cl6Q0OQqDM7RZcUprSHJ+Dlba8QwsmxB8ALCj5w7ZmOcW4CwSQB99eOT642cSc4l3gqqmMGV8yLwvL7nbKeIKnNUpiS6fa83XOuNaVCTHK64YYqg9wo7qLYJbA8cFSrqyAxqXLzeCPnhoYR+bbGC5pKgpEQ7jbn8FcQF865rh/2LItGuXfrds/SMzG/+Oc=';const _IH='506c0fff81417e492900b04665d14402c89bbfe5238e25582935efbe62623819';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
