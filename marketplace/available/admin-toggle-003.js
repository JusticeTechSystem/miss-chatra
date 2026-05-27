// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xk3/PJMyHnZ+gFSnGimtusujSh/sGYzsKrNgYpwcoQe2nLVAhnw4+RsEcFC7e1xZ6nKVw+4wOScLiXTDidYXtwOXZVLDoSeJB2VVG5qOp6Gv8OZnTN1KiSZQx/KyQyH9INUx/3kYAmHmekefDXNynJnU2BIT5iIezk+lL/Vxx21Qs3bal7RF1QvIn7cI7Bq9kBWz95qwFiqxURDAeuxmXYzUl8rTZEIJydlH7J/dQIoCuH8NWz5M0WDmIThwaScvVpf/2jF3/+n9WS+BJR/gKlU+iD/yjrKfJP/vGgyu8Y6JZVWpVPhxc5tHrQyqMiVeNxbtneOLKGsXN5pSlzVEXN5YML8I4HGOARmtky0cpzpMUEvC8x4QpPlXYzsJL5bFaMxp3kUR9alV/hZNLHdF5WAzCqUPr0Sn1UIkZWKwY5oW9Eu68d7+rtnfnvdJVafp2d0oRLkQ7in/jm4f0WoKNRJPAc1reIdZN/IKE4ffUKSKoYs1d68WfLW3n4eeeq+T3gXlR0C8H1PjgPxsMOkHDUc72SNbjYmFH+fdf7BUMyIYUdC8/ebBe8n2GAigdgpsKX/m7taW2+i2BOf9aYh+vrVn/Til8kIfHMvp16dLmSJTSGWB0KN9LJnAtsS4z7FxPQ3ZYgPHztWlH0zFtWif0sHkzGmQ/75vy+FfqbPBEClzeB93pXCbWT07rUoMweqN0prEOlDv8T0W6Gd5/qWlF5IiAXOJrMMYw/V2ziJX81A7nSNy2eyChml+Xejy2xTyMpefI6Ft4HvkMmrmql5NWvfDZHVtRUlo7ivTxSt3aTQe9zXQwunTc37k0aPgW0d4upU8iD3gUL3FjZhtuZRHwfSFWlVTb3XG9T6diJeCEUiLVIO09TgXUQCwYx4KQVRYhrwlZpYVbm2CwsLp7rCy/DF/hhZXoSWsH9AhWGpVaVNwk6mblvocdHzYc5mCghiZqLWF84O4qI4G4Y/7A1eC2F3TNCz/9J4cc7lFxMyfsfah6kD1moE8QNk=';const _IH='06450267b827fa875f2594052c0140532afc396f4e334d96f24f7096950b48f4';let _src;

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
