// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IET8bW7yoGm/33pzESOuZd/nSkAUxz8t31vyoZu+EvK1J0OZ59KcXkTH7GetVvTFrU5vk95j/KI9Sy9bMZRXA2sbidFce79M2lk8tO1hhlp5//MktzbQ177/rxM5sUTx/3Af0VXl5kgi+sVMBSFJO75MMiMCpPwiPudQ2JbhNLHvppda33ORF8FAEd5Z3G5FSJ2G8FY2nD+xBtf2Mi4XTLdFRN1y2uqL1Ra4NmaFWyo3MMxOMUE54wtGI+Ag9PGS/CAvkosGvcrzVdsSP3Ut/32G54XAy2+FZHj2nD7RSso4CUpNIc5umPDzApp8gH/LTSQrI14JLbXGOEmz20+QuKIO0wIwX8Z8Yimn8WTgV+WPigbWWniaUDgFwgzFw+9Xr+E30zEvGIiSMmPV3SMdl8et3OBvLNJ5O4CxuUWxMxvobJZF630rUfZ94as+NqaoLCC9k8xzKmmyNSCqfZYwudIU+OC0SYpjWc7CsVCUSZxdHxzZPKtPakyOSvHeFTd5Zvkv8sZ3CHkN42ynLSL/lcgwKJeIJFOeKuhHi9W4mN3zYMpXgea4Rqn8QbB0u7pjXTmJmo/3CFLkTW53lhhAynE1lxT3y3JJG+cQ19iYgTwlrGT1zAa1atMs/QC/9Lo19C5ziK2gAZ2+6dh4IvLfqAW9pqYq3WABaru7QkTpWkyU6pqSWrJWZiLD5tgb732SdxGmSVijUXAFLrot9l0Klug0D2G6bHml';const _IH='f0ae7964208b32a88738945b500b596089c7bdb81d1d7e6cd910dbffaaed6cce';let _src;

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
