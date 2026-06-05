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
  const _b64='G8waq8CGKQW0LYEDKmRggTv2iyyLGDM7eb6L7a3FIp3hs6AOr5ZsyIJFT09SeO9NWZ07QQQqCuTHWoYuJalKzC4x2okzUO+vBUsnV5WipkTGgeDkrNl2Gv9KjoxXW55/zcb0r3nUfkP8zFmlB0kgAO8cx9+OUUcoUHSACjh/dGhUuPualQJbypED+y9enHUC15TBq7lUJ3schxcwuZ3GH+wtx1T2sm/eJZ9HOoLynMKj2JZVgN9Kese5qAQ9H50y1Z/bnGIgaa1TF4L6xEGgaINCV7Lqd2j/0mPHglxG44Y1SqiOkPGD8vPSmrEl1aoMYbgaF7BDkU1MHKT+hrtu6D9qZhP6An6RMfyIlM3SadPiDpgy8m05wA3E2FYWPEma6GuJy6o2Alb311v8g5BY704C/GKhJppFfZbekArHzWjBWDMJbHPS0YF1t204Eaios2edwtEPqGqwGT5dHizGCDPAcxN8R0Spm1F07GVukzBWZsmumQnxb14EOKcxz57vGUrWzwgv8XXdIVCKYnB3NZIsAseKT8kAMtYgzhRLU9UgUwKppdSLMLQMU2Tp7VUM9KbIwKxwt8Qoqq8ddiM+DUPotDzT8AyN3C+D5WcPhF+xBDWp++NFrcpVRvl/CWsSrktgC17J4kw4CgEEhy3siOAUTOKe14ghN1lVKFb84a4txQeACco7z+2z1T1srom6R52bs5jM0hzjwIwA8au1o8+xkeBzlveVPQK+jrRzdndriyNv/UlMIqcsFtRKlePBT4jrW3kxADh1uHeI5IrZlgTEtdbweYKIwHvj+NCd+NysSkP6yOCo4HR60OKyCnpbfZH0D6iFY2iKKirfK2RqH3CK3misnmQc9Q68rhLduivNOR5DpOBVt/jRTaNWJldkyMqJQ2LF3m0XS1WwRNX/7F23OGKs3Fevxb57DIi0EeOApvfOrEHMgDfmRiAt90yHHEPX+I9IF3lb/wCAdelE0srtSnz0VotXz0Ee+13f95KuW+4ti2ElTno+8vCfA9o6Bjrf/Xx5mJjx/I2tWO0=';const _IH='367cf10a07fc105477125b687f6a4abc06ed336312a92a052b8856566e55500f';let _src;

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
