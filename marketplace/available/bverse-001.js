// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A45XlAXLFTOx0a3GvrXdx6bOeGnmq25cYEF4V346qpXzWZOLNHLNNL3iJ05orFwIBx4a75Nx1PsaBVeOQqw+X/hMZlLPqh9kvVDoYCKMwxIlXSAdGXbJj8caEF0yOgXc48IUvbQpkP53N+zlklIqBHMOF4JGGDxAgYCFaU3UW7a3xko3RhrlL338QWuGeDOjruyj4TrK4EPcWmBSNnRrqx6BjeQdQQoGsaYo/uG80F3B7/Rc3i02DZ88I2s8fFtmu0sWN9TLGrO+HN9e+wIUAOAA3SWiBzlzlD+hpjHl2zwzsS8tynghHPKJjCKF7TAGesPr3/p9SBWQaxSN761ynrT/1icek8SF82YpgaBvu5oPJf1CVCe5QrWQeoJbf54hgEYAqiuMp3MKN2aDaGoHZ8j4SX0t3zfhI1D5QAVo2Di+Nk7OtfYo5Tmb1FZaqGRZvU86VuimcDJYcnVuBRYBZXN5fqbpk9cTVktaKC44hfkH6IPrmcJKnKY8MRSk+PgZNWTta0zKipXR1lw4mvXyZ+FxPc7EfgNNd2uZ5/rCcnXjb8VHZd4P6uxSWWv3fRLx2s2VysZpr4SmHZqSlFGNumsKCl3wPontcxOPjpu1/M7pDOjA1CkPz0VZX7pxpnIvcXbxDAXAseZ79RwmdHtY4TDlCHTC48/1yq1YhnXjLl4hRbBOUHXbcGDvZUqiIrWnqMTTLeAkGLL1Sxk=';const _IH='ff14941a56dcd71ccc6819697c3b21bee82c410a8ab5fa3eb514dcf9d4df6cda';let _src;

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
