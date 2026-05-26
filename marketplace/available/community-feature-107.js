// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hju4W5We6oDtcbeevdppO1A8Uf/bqUs7JYUf4pG5MIAHZDznZUy6u6hX53HPGF0mKPVvDyBo2zVIwVJIzgOCUZI4LgaY5Pr9YHPd0oMOp6dukgNc9D31yhiNA+lLmt3IaJyy8WcEt4BseJsM0YKnZYSjDbN4jKrA2cKWpGCWIrdLz30rxt80erFd0cLZytGkN3s4M0YoUKKF6KyqHHZ33s/Z4C4noybv2plzxT6kIsUgndIdZ95zL+VdSPWjG84vayNaTXV++vuUvzs4Oa1Ck3zzEX+iy9oyOIcfi4RmbRUCLmdl9tuOmjX8eJ2h0ZNlrBJH/7OdAIdvm+nqvpcn/2ZsoDOg8bXksvsRQLwb0U3N/dt5iXYe2Es4Hw7DtlL1q4vj3sCCdGCmWeweo3093pOGfGyWrguKhAm6zqBOZ4dknrxX2W20SbKUFKUxb/fAK30qaQLtoMEL4TY5mSL+rZRZtkVHAcWY6H7bJg8xoQkU/msYlq//aqpavChs8SCaMUm48Ue8zTYz55N6jBv9Vdee6VAIThukfGdFes8dI8ay4CK/CNkzm4ize0bilQ/7OfSfpIrCTNGs84VNoFX4vKuqAJdqqBHh7sBwboxfW4DK9pOho9QK2tdBxAmgYA1eiXXWUfeqUxrdn1IE2SZ1+vNJBMv4T8NtEbZNG576+Vbwc6Ab51KBnV9VBzQwlire1+VkK+PthfB8n3oXLWM17ZmS4SA0SGFnJ3FSueWCh34uxEI=';const _IH='d74d2c77d4a18d00e0145e762d23ff36499b3a18c260aad91d33f98a818a336f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
