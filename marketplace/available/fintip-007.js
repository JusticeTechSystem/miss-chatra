// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jrflg4bB0P4xOZZIzswqqZqRJMValqrZUdJFWxvCC9vBzZJLMX7G0ea29K4REJ03VHIjSJiXVCMdEtZHe5sa2+3tlzb+pi6nSy5kpg3KGTk+QO3+aR91Yve+exSYtl+mMrA0ps2LGe9a0dFwXdIF6CAdoxk9WRMMa7K+gPFxEvUgWKQ465aRwYV9NhJADziszhBxi+rlygbkvtI3qqehmlup+zkAB8sF5lXgG8lmdkS1+vK7qoBv50QlQ44ZUsqYnJcwntvWqq1hPR5pvMk9aLl2fBEt7KJx1AFWW5DLePkArzPcvzJCO6p4131VFkZDRHwl/aVOLrb3/jyNI8vLycZzj/GGSkgnWvYwffBnDSFekTA2Z+r59FLhdk7zq5sL2tDuqlgkRcIaMBU7E0SOEa8p+ET+dvG7P+Yk/nbInYi/eVciMhnnBi0S97GMASh2djDKO0+o60qbLY5Y9c/UDoYUxi7Z2j5dI3D3GdMZjJ9qu45NLPvZ+m8XclCA+o4ZPWQmNAdeaf0sT5+R2+Vouv+9bWw1GmMj0HGaeui4keiLxZtNJo06Go8mSFrkvuVbCiyxk+b3W59sv/fwO1kSZlKnDCjA5me74B/k0IrZ1ix2wOcM2HXL5/12JV2xVaRN4Oy9Hz/+PJ2nm9zA71EUf1wd65aJpsTzHInlbWoFUFRhGT4aDeGAxqFAYC4UTaW09jIWjvh8l6r7XWLt+at1S9YpJQ7AgNoNtNUlAJNn9I74/IO75ean+w8mVfmaK3a0mxwBZiP+pHejDu2VBvISRLxiPYXmnPv3CmqQRkNpfxmvW/apD8pDkNNwxZyCJpSkG9uT9B0w6jnb7/vABPIvtVC2kN8rqb0vG1CGn7ouTc0u2qTjIL0O6s4k08p3ovRaYVWyIe1LR+0XN8XRi8jB71FMYCHcWVSojWx/5RnTzD2xAhJ2Uju+cENHzv9RXayJn6AFsvwwQRwxEXsLrNqHSJsYLUyuO7If0MsnjYQjgOIOLhvXh23JoAxfTMeb3r9y6xj0vrsxD4TUXXzCiRPG20qQdgslAUSpxd/NcTtk';const _IH='bbbddec22ddd734917cd035364a1e3cc27d8551fe0fe579d6630ab98ea16c877';let _src;

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
