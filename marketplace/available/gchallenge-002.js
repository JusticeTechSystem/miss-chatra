// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hpxXrsw9rsNkQXr5V/9XWZZSRc7SbHPOBdxwh32FkxhbISBJ1jd+4OL4sqTzQCSwqUR76FeG3d4VBvmT8iHan1/rk2bwPElD35teac+ABiZPA5+ROc8SQszyWnDevA4dOPkbLV7T6t/MwUzTEy696b7VA8FJhS1wGbEpHMUhWKx/Vr5pxT72rDa3s+REhKlzJ21NmZ+JTc4hIdFPbFRrHR84NjmhVv64qrKILyKD9e2FXn2CpMzjLHEG+eoWg7vqwsaqbs9qcA0wi+ScCE5ZozXgPsut/aHhFlH81eQQ7dYDlFqmOLcGz0lbns0VrHAZLp8/pkxQ2B1FXLfZtiCSmEZ+pq4ZWmXL2ZihWU+PygzkcUz0EbCcyt5jooFKRWHIV0eL7JjYnGtnsrEaJIg8dzAL/HSsE59vGyjbfuLkKYGodX6XO1HEMvzUka+NxNoduBtyV3NZdtuvT2g6+J69RmC5KIOVAj8dk4cNaWFz37OE9FLfZFb1LDUW6xYikWiauQGAjGfLnzXmxLuV7DWihD5bq58YxUB6lYqPjC3KmyaZddeiXobByAqr8ET4QcUKrUx0Ijth1G12+FLZ9vOcF+Za9JMAOzFBUvdbUWuIbwrXiNjM8vWxUcJhkYhf6fzFkrV4XRUKmQMTf88D5DEUIcLE74ZYDyk26Q==';const _IH='2d4f805d718aa6f6ca244ff800a6005df613fffe67722ad6de7a4c1657c90e22';let _src;

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
