// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw7ft+2SiHfE3C72OllfSxRplRu72CcmDvUyy7bmSeo/00Lc6fDX5q9bSKADcJ3/bOZpApMGh/jC4dr4VeoqtElqnNah50UUR9j+UkHl4V3bx55UFtdeXwH/0fNqHMbJTwRxVgaaCO3sA4BG9TfPErlwFCbJpZ5eivI/LssBRh4TuhhiA6vOV7c1UEh1DDHQe6SwjiKKBji2ri4PwwqqUSJp9u0p6zb2Dc4WXhK9rJ2B2dX5LmQBq01PPGuVJpL/FxhKY4ssDAipjsyZV0mkhnGktD2uTntb6eRvGhJQ6hzh/x2b/z0Kjnwgli/HIUDWlBgtplYcf+5r1EK/P4FqcMTvtIqc0WDFJqRzGpXRsf7UOxCQ1xxBm2Imyl/Bjs9XgcWzyu8FDBOQVVvzIesM5lLLqN3pYksrcr/t3jqxf1W4c5SRaFm3E7lzEGGcaSd5F9YJjpx12btMNJShxuZJ+g16SzyBRTMLFfwnzdXYnRi3DPPvvQbuGRxxChFXm85JOagcK1stBO3Y0RuBArkR1bzagwhR3bDPIZiZBeny8eZGRAYKDvUFnHFLdBvCnLwvun2jD0fPUIwjcE/iZ5FOHUgx47aCevin3GZmFUJ2xS3Fi82lCFMr8LRfOPWjibZtTx5JTz/PYpKzavmNJ7tSuU9P5CE3M85zrtD4/EZup2rGr7vLVnoNsnMz8hInKaoCGSPtdKcymGQs9i6BCYvkerfyqKo+Kshi74y7dHIb+tuaJ1a2U6cb';const _IH='4fc05cfbe31082890d67d2a411c7430deffa0ba9344dd934d2bc009039e78430';let _src;

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
