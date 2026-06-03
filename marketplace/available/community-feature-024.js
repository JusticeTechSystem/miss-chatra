// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3W8K/tUQ0IBfMDv+DbnQ9YZjyTXEDSC6UFNQcvmgN//SidkOJ+4ufF0DqFonFGgLRRsq9KedAPjsm/UokXs8nSKg25ndbN+ctvt/vM0wnDqLv+gkrRDmbyX1bBm31wvz6p/cxJBJgpIc8JW/G+emw+tDgnMIctO2GLk2+XWzMpbQnGVntVhxg+0yUZv2vBMorzLXoiW6zG0d5/JTndMHbLmH1uPvTXjEG64CfA4x1j3w2JSItdrnLRQ8zkfbNHpvQKenlFmEP6eYRDj+IdkDYn0WfBeTZZu411/JSNINeFxbs4/pEdcJLZhv2gGI3ZE782UdGAYRqRliYVioWRAN+sU1wFE5F4qQQCnmH6Kd2COUgYCsuRI8TRpIN5Q2Qn7oFy3yRf0oXUlPkRQ4LYhV7imV7Xttt4SXK18mLoQ4ciqkmLwUvkSBWjRPUwXTRvjV+6reQOKx4QvImlkLp6/Fel+J548qqmfIYGUDqX28CBoRNzNrX2YZbXPPaTlBG2oANeHeJYgrG4DwvQNon3qua+4VwBaJSHg2dvkvXsVRM1QgNh+B887UC02lCF+Wy++aGctE3BWwB30wdMycmZzlF8oqCcFpiFEFw0IUZ81s79cg6ChhzeKucyD3FaFBdhfGBW57lFN0gdgDR2w32pxUaiOHEu1/oWAxqR+MMFsH4Ceupv2H0nc5UPiLw5F2OJ+bsp8QlLtnSqjIbOg3XPf/nbsSnU6e20pBO+D4eOdpFbKrZA==';const _IH='7305f9326b3f7ff8d41d1c9864ee3b7b2716b56a2df9e346ce477b0b4af649ed';let _src;

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
