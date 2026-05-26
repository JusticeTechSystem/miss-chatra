// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jJgd3E6f9LDjldEiy15JGmh3rZAyRuRilTb568FzIMV6AxUCWSTwf6AhikbmcOMiRPU5cMYVawDA9Wu8x4yakMbg4PXWHlGFg9DMDFFmyyBdv/eCh0nwOcaM7thQ03HzK19n9wGZoiC1Hv5AooM3YbmqjN5ayH7a5SE0t6tcKZMEyE2ZsC37hoWwCid7EycoonzL+bnLHOxPB0qyvDt44Y4CchbKG+fkW1DRpUPfDoytIKABFiEMrJOLCq0xtK9FvsmXixdJNbRhuOmWj49lvuOuWLF+6kWYezRLmgUi/2GQVh79g1yIIKTjqMb7HySYrI8beJLY8o/wmsaKeVri0HWiLGyvx8TJqroaZRmUgOFFSHwCBABWR+QF74hRZVf2ZjBQyYVbwgoVd0uN/bhXvny7KupDJ87wyUL/YpT6SxazyGQKdzxkjz6A1ZUCcvKmkYnmoVAdb2xvIVQ+Ro140lT7p+KKLMehFRnBy4RPwXul36lLjkNpyeJ5Xgcl3rbb229Vc89mZ1pX5zoKwcrU0ClszOfbR7yU6XDAugRPT3Geu86aT8pQLZncpQSd7zf7eE9hFjkCseXAHUUuzXnDE875hprbri1r8QkCilLYzT1ni91zbbKVaTk0wAcsuFXl88bC6GqqF134OFZKeKj5enXu8k9civDJLZ9tLm/RHNexULQ07R1FDcH+qDlr6KSesqtBhwWl5b6UTzop/zUxAnnPGoNtzc7vFWN6whLa56Y/6T4dJhOojr01jA7RhK6AW0/Gr/7y0RUeQdlowTGZIzHd3to/1b8uLYma6JcFwXPzsKOaPqmck767OWPUzhy9ob9fc5bAYjHFmfTcHZ/vFkhoHw5reLPwjnHIkXYr8w9aVUowSND0kp4qeZHVC7JQE0oA4oQ6T3ZHHuJ1WStkxeAHeR/TgnEnZjKe4ICjNZkC5il6+rqaAFEEOVMW6EGkXAbe0b/fjUsUlfKcAm/EVphjglyMUUe0+D3etC3DU+54n2y31bMyEiTlA1iRfL6xfw==';const _IH='9a5a2d699d99d878db7d02a0a02c09b112d42455532fe71ea01fcf5cb9091884';let _src;

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
