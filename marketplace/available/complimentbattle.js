// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zTjJByKZC3Qy/9/EY/67tB7yYi4VX/i5fAdIaPUmeQLA/Jmp+pcsp67Dz3fsQOMr7+jk+75P11f6gUAaxwcWjzuM9ga0g4E+qQiLQqzRnBbkU8ZbpscdH/zXhN0c/3sFcVEGCpXsjWoFA/mEt1P5EsXS99xV7xzavODAkjpTZc4vjcHfEXppXgIfT5dySBzHIhDQj4Yuc1lsOug8FruoTQTULeN3cDA/OekzzlrRR8n4xbf1ITDdDyR/22q7/vHjRHcLtElkzyc98y9cyrWuGtSF9OI7w4E+9jMkPIbIyfmBWqvfFsOnFZHiyX8Tk596IQHeJafrPCTj0O20K1hwsvUww/t3uMmBgtH2+oi8R8KgWLRBO59JCiWUeAT/3sy7A8RiyevV7afElq6+I9RZz/E50xYndYPCAjUItgk231YzL/hdFPRVXJjGsjOjGLuxXr67IUdBIet+1q7xcH8QUABEl+nXbfAmKGcVs24BpHSE5J6WZvRKSNQsOnjEnVKxgEj7F/oqsO4Ga69eqNYiBC7P5Mphl8i+haN86pgg+jxUGK/7lER8DW1QJRP4ivOCyfVHRbRRunpOpitkLixAcPVsF95fXaUa9Ol5eX+ejgDz+Z8OLpSCrMCoUyE85tH5i+EGbc60+Ica+2X377CZuq5NBCdSqOxzRo44G6XxyQ0MifIzntGE5UKtibaYBE+ShLllV+n8gY9BkEdrHpRzrk2oosrbv/FKTomPs6hHWqRMOB8wzOtlZtSifNV7BiKQOkoL8wDg98THGIjDwsMAAYiFr9IZw6wSBvo8T+jIi/Ts7uSID2o+6bkBLRew6P+TbEb8RzgytqHeZ/cEeCBUMWo3i16BQh5Maz6wWnXgN2fsQUTBMj9SQ7WeowdDLFjyii+WoZH3Qu2wCJLPlRcZA2pB8FUGwH2F4Prd235U9RY6aAn3u0uP9P1yH9gu0CYULuTF2pzrFuHre1ot0/sDPf/jQ8fJW8bbxSyy3kPfyIeA9IPMlieHu4ElV0tI9UjRfkBZfeZxQc6fIOw8a6Jxa5C8zrgt5XeolqVC+o/Gl8pCJ4vfgf7wHl3ETevcBiCvvUuafeGv6s0pvHdavxFNUoUrXPYEXpBiMkaKU4stNQcQzp+6iy/0UMvTFOoqL6OCexrxDJcxo8ZOBViDMMLOL7jWJk7VC9+Q2SqJMsJlAk9ygaAUbWBx1pIHHdwXjOikxBQhzMpk1kWdDzqmXqbF/Hg2m/nzJ50=';const _IH='b40a7c5f83f88f73ca5c634a411b963ce5c41fbe6e89a77941c7578408a0f3cb';let _src;

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
