// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSONbqPDVm//GlqF7uzQvmow9v3q9oRwGqvs5V/kkJIdRCe061eqvTdWveU8p/wsCpzgoVfX8C6BLlrP446jIRvKRJd1eDjEQMi+oZ/TWqYLLQ5hDCr9LbbYSI7xYWX8QPKI1R7hao7Ky2Fk4sCMyqldiY0hpHxA31D2j3a/ZP5wz1nOs009OnqRnuJ0mOvDQLYC9eU05+Wo15mih+h7/66sipKrbznITnAd0YT9tpvQ6TBPC6XrAJ15qcDZJR/2a36vzBPOKgdPX1tyevon8cNmFpUwJSoYs7hxDNaL/UOm53kkdDPeacpe3chgH9eXorFV+haTR9SRFItjOVqu5rK8/Zb5bLQAvdLNBiAul1ssW3Vv4XVrJTY8Ey6hR/CVndh+B/9OyEtQajLpRGsU7lvRc5xYqBTewMK6dpi/ecdDh6vH5w7sUCdqOyt3OXbbcaKRrX9hPmuEyJ9YHqy+TDCUWHlypMAxBAmDe4y+OmVM+TNlXAPg5Iy+MmIoZ2FBiMwxHcPs0GK91Sk6LLG6d1NywMErih4d19kS/oQDDZJ7h33VP8y+3/d9J/YY7BLJhYmQVTOcNK7Z9cyq0L5G/e88CJ+y8mCHkiYdEPLRU9UzCJTyUseNxpdVXlb0iWdO33F8aIyOmO4Gu5Rud3/Piql5ZFohY38aaIw4UOt6En9+qm+xMhszbLBQGKq+VlnA/rPVjOA1i1UwnNHbFlEd0eZZmg1LeefF5S15T6zLa7/BrSlxZxpyNPAseZ7Mo38ox+jrSFTmkWh7cDzXYbqjmTiiTVqHwXXXgiDoc7c5hpK5ypAfOgy6yvb6Vu/97VG8swY76ES5zILpEfpBqVioxpoIUKO5COfHJM5X2uwuQR+FhjvZT33oUeI10acg9Lh6MjlivRGlRzjEplCtRwAflOfTVEf9aX/5h7SqAXquCRIHPhk2bYRdcKPhDszEe16AZbReuOmkA+YV0FfOV+g8EMnRe7JBYriM/GhbnI5GXPN4X/NcM2v/6mFn5QKzc=';const _IH='217f807f723d306c25c22ee7024e3f4f3382eeb6362da48a0b33dc7c2896724d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
