// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jDGdQHtf7u41pckrL1tyvMYf3gPUK63Ypdfo4V/706CICG7QpFVdbzNC8tQQjGkWonwIwj0YgoXilPK3d+U/qcbUEnzNt1PbNjBBFeu0gCK8HRRbPHih5QFbljpV1Smh1ksPKBfYdqEf7nIn72cwbsrswoeZ5YEJLYYzaVNm6cbW3KmFXPLvtnHLoj7nAJmj/MVKXB8s/ybblyBiRqjtyvd5ucmUp029qkx9LKES59ROwHCg4ttDMDMh7U5KWZBI1NLIicMwCyyA8ezGRUq67J/RrLDBNYyM7eXHeEJYbC4JGzV2FE49sGa+K87ouKkUc4SkGDJYqesabhZGnkkh4sFNffLTsta3heNfzv0OIc3wsa6F9LZhhG8IPMYqoo0EX4dff1xFiCcNntJO09AEdMJPKrr4FxFO3+clcuuV9mx3E2Re90wp9C9VS8B0TCZ0qyxr2L6kGl6KXlSMlBZCh9M5uE1BZ6mELObq7lJ2W34avuMj4eyNFw5KN+NKnIQuFWYJKeLUp5JetSimQjw3BVu/jmviSCvE8FuwVqjIpDJFyrWhFGh7cluXNW9H0umWT0DSvJBEqsgU6sFpz1ZFCYIs2Xr3GvvYxgRVfve8ZpL6Gm+AHwlZzPQgoP4Ja1GfBwFF5aaEWBdw0aZKr2XfpljPDxvvC2BOyx7TgEmqffsezh+GebvnS7RxFMxx7m03nNeA00bb77jXPu+lcn0XY8Yp3AEypol5d95qxqcJFw==';const _IH='24c2a01d179d49daed19ed027acd4b2d5382b2c001c5090a79ce35dc74936a43';let _src;

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
