// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zd2K903OeHlY00D2EmK18E7cFL7WnwzW1Jeyc5AjT/CoB1BUI4Mmj42+2ohJL1Bb0Q9MfzcTIWUwFs4BzraDocPY50Q1uFuhllmX7NXRrhbZlrpV4lzzmugQErR2jeNep/ROuZrfRdTiUMoP6GUeXkvs2dkXYHDw1YagYPwwB4RU1Mkitbv6cYWlQnvhZjBH28Ah6pu46OYXt1dxADhPEsCYy2Lej/kWCcUQVcQJ+luwMKOFFKImQGqMBfQxse3nZmUy4Hwhs4JsIgEiPMaIC15KumkE1W/31D1Mg2b+oK/w4JhgM7jCm2niBuhH8cr8akzBDOOssTr4l3jkFrIzfzlEL0hdkV82TCYBXFbEaJz3aH6eNW184gS9X8BvXpP4RQiduWH/IqpTwZDFrtysnQmr9eFABESkx350kGV2zv6iLatDnaVL5dOPspoaugglSUjPE75O3BXZupMHM+YaDzC5Lzoxfl4EuSvkJr7ldEPUoVExOXFEkA65miGBsUUQwQeDwsTavNxSYjk6yFO+I+mY1NjpycmYYagwR4k63SisUJMH5OyiXNSL9pAEXVNoo8dCFze2c0+RpQ097Q8v11Dtu7Nbqe/FDzL5xoscdawdJwYL2q7mwZ9f3pvQUMk6PYTnh4aA0JqbWL8xKSpxwC8xUUa8OPsr283wAdJcbIyR1rnUuAhtVzGdftnqsMiLyDjQWNaAAQ4u+IJvKDqJhtyzklcnvOcGzeTg5cfcClGldjxSHU9/gY6gCdnd7g+3TtOtOlUmIMi7TJAY1INBbq4X/l0tgXh5EQ==';const _IH='279f4b1099c9c3412f9ecb4dc10e6619734723dbb3777f044788af4d7c641f94';let _src;

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
