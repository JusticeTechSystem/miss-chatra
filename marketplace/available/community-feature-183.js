// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fgHL4IkGS2c3mmT4j+I2qnBekhyYkoNG8s+3Q7mR2FsWxRVA0DLw4XZ6ohpG93mRsnitHKAPELoYPhKN3Qgp0ITY+l8anXFz7ByovI5PytqYRueimIFKTG4KmjPp5GTsSg7IpkL9zKIi7QWOPgtDKPf+H7LQFLXKtRRXHTLEq36QAnxiCLl6dUe1eFE0OGczfmxkYDR5QzXkD9g6fj4WmISA1AwNKXqufRbLPAVErMI8K6h32wk44U7qnaH0XC1Z4/QURhAyDxDCRAcV4tofnjZnv/hIdMA9Q3flXZ1QFJ3DBqK1p/z4Bx/cVig5Ox4U/Pb+kcx19ipsMqos2eKGmRpHtl7YwrqSGTMbjCQ8+GmJl0gjj2SvLkZaDkkAq39TGm0BNPKMh/19CHSoqiOAy08x+Ji8gC+Lcr66BkpYUoysNrlTGe39siOoAozuHhiQXAn5ZFZndts7pvi4HjC22rg/rW7c/1MrnFI5SwxHxWy8kMbS0imUGRD+BVb0jZHR6vS9ZTP/NqUWyVi59Y/ZM13KTuaRR4PapoirGqPiKV+yu9MbbCg4IhqdzgOi/iMESpqk1h+XAqOXZrSK/IL+soQQ6qwe1yw7FqfF3sSUOJjEDqfgjDunmdOJZjZOHgTVFvFY6y931u7EAiZ/kpzjM5HdMPYa3QsbLMZj3pqH2XOgOqS1uRNRq9wsAN3Wup7GBuvyC/CD1Wcv7D0MD1vz2vat5C/vEf99JRIxK8o=';const _IH='02405c47d2984f5e671ab3d5086b8d914ca860878a6cd06ecffe91ceb6f6b853';let _src;

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
