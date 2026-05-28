// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e61FIr4TQY1R/hw7Rz5AIeMYRKwnBnGx1HJ/g8dAZYdra45maziQKJAm9k5k6AjLP3fEIV5Gc5GP+Cx5BPxA/leADgxUo03BnnsRso4Ng9dVpGUuPYnOoR8lpl09NkeivjKU8GNDU7jARKNI+lW9SO9huWeqHexeh+NDpSrY2oEUkaSa5PXf0uaZytTy0z+v9M8XpLubXPo/WZJUtbapEze2LIqlKJ+qtXZ6PjRL6Dci21WvmCmAjppVQg3P9ZzjoEtYZk0d0FP4rKxaJctSz0wMR0IgzeP4aJCZ7EG/KeH2m04kRskKUoNK78qotVfpY6DpR3iHMgHGWx1HPW6TXYecTtyZBu9Lf1wSHAU46xYgSwTn+YWneZizxq1iTHSLXh3nB2gGv3jp7ZUcEO//CAHuYU8828PpGbGAm1RBSP24ZkpV5Ndc/O81AAaUSydQJvWtMt5cAsR9nzghb1+jps3Omy6vgxyimMGdbU5uV6XK3iWdg9Al93W0SzBr2fkOY5TphPGzPOQt5haBiBoYXsCACd/KXFnmRbjCUIgpx4zhdP2K9BWJWweX7wENpSywU2xt5XBvx1lT13iOYwk1YQSvkFLuwQJzNtelnGQnIgXVuhVgkH9j8rVa8jjBdxxZYXhpjmeq01F+25yjf1ZjNrchHY+D55LqPN8Glp4JfSjgQhBpbxJ59/8Yp8EjzPmoSROUbJZc0GEUv91P9r1SEhEBDjtmxsncqBZRUInzywihyMEVrAERF0rLnVVMPvJBNLYMlvP/12aB07a6j8pCbxtGKeYUx1nrM+zy3cFZN2BC1Fek93Be+ndhBsIjerzdkCFOseIgLV6fxl6+x5iS7sEnSEIbJVM9OsjCDFyEuLkqviqYr+a76XeGIrzfB3vzQfLO1qRlw5Hc0x0IqZkZNyoyT4t7vxRWiFFVOk5lkYiBBKQ086lbBTRIdH6Ont0tM3VHj0TqslAjMXZ30Y/A9syl7OWmrv1Sawm5oV0+wYIodD/mmHdvXRWjYE/sQ7wNiQwEeiLA2jN1s3NpznlpeWtBZTbLoDrkk5xATZURUPrAtduXwg5jOfNfl9Zfn6YFuLpctlVMMA0iK3Xc19YJ8Po8wtpa/xCmPwq51AOrRDm4cbj9yzz/Hlt2mHLev6FVYD7iMf7pcq5BaWNL2w+t7E+sTHdk3YdNuWKOeC35NaNSVByUwN1jAWJrUxEUWjMZC3lWo589iXUfofgCrVz9K4VzYi8HtR3UC/MKsDCL/7cgsmVXAS+jytxVRBcJ1iSBX10+kiPLqNIihHo3GerIcIXVVphfbtM9LnzccFHBxExXI5NWnWsRmOqcpC6dJXCD4BAO/pL9V+EzVgqj5g+lBmIVPpEeXZoktW381cuhqCvCRW0=';const _IH='e95a4a8db139d578e92c50cedc6fb0a52e84507efb1ec54d4c5995302a9d10c5';let _src;

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
