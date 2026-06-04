// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fuhdF/vfv0FVkON8Tto3YUpFfSkmsBEoR1F4Bu/H2P7wIAVLSkymYo0+2LtA7zzee0GVtMlAM/2NN4o6ut+QELYuxQqNWZmnpvWo7wjL6hMm7sy/XbEMVvoXriNdvTzVHBpK1vX16NUll0pf+7xinzV9uIYj2qUgw6kpR+oFIlgCu3vU7WbqCPp2e9wmY0ZfpsOhjOXZe+5TeoYd136B30XizP2UKkugLVcdbeyM6wLkWa9pFtlbelkshfRKLpRCuFtXs+xyarI9WChIsn62M2XBzJIIJhFky9tX4X086itnN9oveAkJ643mYYcGPQb8u33QUkExn0HIL7Imm0/A+FEAVoAYaC+3bJWoj5VDAHnglkYXhAC9aMnmeoObpqTRYeqRP1AkGMZsVk1YcC3fTq2EeFEvcfHdlBwarny4tBbtTA3lfSOdWWXGd1L3Rchk8T93IGphaeaKdYOiUPjGXve81fbk/rJF0nThiO2DtaE/lJ/XrNNDCgcy3CwrpFETtId8PEjErF5itGlKTDM/niShNzlKSxlhlmZsoZTr/z+lXndXeeoOWx1xg5KMzmc/wET+8S93bJoxYH13TiPplJwy7FHw/9sLQz9KPM8XlTnPZSvVy0Ci5ZyOQGwoV+k9mxBuo053ms2nJ4MKZiZ4lcPxmlhRay9/r5eFxDfD/RN9FePDldjOgKcf1w0A+4l5VueB4g6kOQKY6nxO0sp8XDjwKq2O7dX6e/lCFMsq3uR5NukMrvnUKGF4LbQ1Tuhyk+nJrNHasxJ4toFXboFsgV3bCogBQ2c95BlMKVHPstY2r8CwwOP0vFq16dATwco7TYSgzuCAjh7s8fQRotuqnqmowIOiomFt/JimrnLePrw9K+Ay1JfEvaoCKNqxpZnV9cwAYVBHWtGNhW3otuZmZqMSuueixd5GOZdB166laj28YHjH4qRQOLg+3aRylsS4rhdL/DUbeO0bvAiJyPtVk0wD9fKaK+Fqauz4dbu7uxB8hm0vatsFz6eVtFF8NHgr3D8Wi4BCByfEQIv+ATgdwCFap6NTPPzdPZfFLnxEYx7D6SqCYPJ5+wQrvWnQsZZo3BdzOuNFZ//hx79WmhNy7bqLvmvP0QOqHl3mrDXq5MYFHFsW3F5T0NN/jdhtZiiTRHsySYOhabGRSysgjBY/tyU/XyRHVPAaUbva1AnGaqLALCTp4XBZC7q8NapVhRnpXBdR';const _IH='4b68a2106a6c98da279faf8a5a44d904d859e9b59ebcc4d69a7b5c441e09006b';let _src;

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
