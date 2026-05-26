// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1crDzdVCc3scuTgDv5s32utS909gzT1dg/hnHTo5rMrZVT0FIFwaRpb6Ad3xRGACpirZOA0VLpiBiB1DhqAciR8NFgZXZd51gUET7kBiLZYuz4ixjPEPP64Eim+Y55B4nPeSRmjE4uTrKl+nwkI9gGrhEQwOyWxiRvsOgs/5BoQuVe25EWiVCRZfqwQe7JrMbqDDMs/dk5C5R0yv8KHAcXxx6IxCkrHNB7nHqvK1cQnCklGIn5QkBQ5Zpv4rTqwjKdrPuFh74n5cWGIBlQfczD6j/Yw/eT2UhSc5r9jQufagFn3r0wKXNX09BvAC6Evd4J2ua2mrkf6u/ZReHDPHC+ypCb3OqmmpmPPZLaHf6Vn9jw2LfLDKUGG5o+LcwXLqno+98N+4BARNVgfa3YmWL1wffVTOTJAoDVZahryYHnSKpKM1Tth3N5UBQOueYDRZm7bayChuGU8EmJ1VZat9MccAQvwg2cciYBl1mEGvV0W6Str70xhiziJ+bpX2cMa5hmfk8pAGsMdn7oQMoX9SpYUV1EcDQk5/9ZosvGfzSrbHnMrDwcfMmHjzDsPjD39o8h92bbPvq8yQTlHvuwf5k6oJtYkYfQ3ftXlwtWoHwZ+cJ03apfFMn6q6wybweKbAlqqYXmOt5jPI7ecuU1+BDpZRaGEgBc+RoaW679x97lmX2wdawemBu4TukiNAh5vC+Hhk1clMZzT5AfbaMnlFlOu94NLGqk4/OKE0dD/bk1sPHUoy8ddN5rcF2CY6xTcgtF6jE7DDJrbqCqWDbo7jfKRLFBOkH5H0X1pEsxQ6LnhtbzVLgZg9ccUKirgNIdEKD+jXxt8l10pL5PbCNssg7yzWM87JNbIwXuFX9Fu4EGSVBI/ABlOi97B1St/5NTwGPfdNWax6V04GCrjAxKWFo5XTnZiJoSOx1+jRUH3yyUOvL0lL0auP5cldawT/fre9qC1BECZx9qFMUoWpOERH3hCIgQ5UC0Mw2iSrAFMI49VTOG4r7akX0dLBLXA+';const _IH='763cf045fab0d2534b60072633db7b4e741f33f55631e5f703d4f1a260e5441f';let _src;

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
