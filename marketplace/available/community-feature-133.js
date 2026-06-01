// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/ZRPEXoS6nNH3atpJwNv0KLZA9UqNZdoF6ozlP82pVMb1g+O4z6/kvyPwX+1bvanDnnHCS5EoVjtN6CqU88X3SCTl3yNbIL7epGm6gSfuIRKlQK1Z3Dc/cxa+6RPqM9z3L42wzy0qgyAa6JbEA9BjH+vN6NFAduucTxK0aDj1RBGvf/egwVJU+E7VrsyC07V4VU4lg5hHlb1JY5UFAy5LRVrJIHnTJphFhnPTummqR0x0tuHQsG6w+6Z3m4kaL0YAAco+rmDDZLFfQQ+0zarJtvEiVSwnyg+be5cYndNnRAAvFnD6VadnJ0gX78a+C3/j550y6tVx6YJBCmvI5p+t6L6isijVOCsvyTcgxMxUfv8qSsqBgOpAb2jH5qsoFbW1GU4zU0+khe+hXJbMI9VIXsf9aXqU1rz7lMrUQthW3/9O28XugHVgiy6oEf7FNYAKIjDqW3DStqky5aX0HYpDkG941VVFNz7ZyueNwli90g8SwDhZ/i509nf3TudtViAaGpKTLtsHZYLr5GBY0fP5+WYv2tilm4RePNLxeuKz/r11IprSA2a5VBZRIoB1L5CvYvthX5TVKXzJS+LD5+H18UTy9ttCRQHyQkliL3WDDBUOk/BLV5MY6RRTS293N9yPOzJVDInnlhHrb+Ap6yQ9LdVSweg5bMjiUonuz6SGAh246p5fqQbBs0KzI8Qg46zb6znMa6awdt8i5THZSAFrh6xwefw9WNS0EoVPsN';const _IH='a511e950338b133000912b6eeb1c20b9fca66653200fcf37264411326e29fec5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
