// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7/dmqd5dJQCR6Bnk6qPlcV6FwG2vPmoHEdTx5OsijnSuV0Sh7ABy5u166vKQrd+FMB1js9A4qEbEA95FTWIEHFw++1VjeYDLbEPs6Fs6xWt4DgVpbMauIlFn0e4trGewha7x4ZHhSWPVWKdJAUHnT6UsiFY+MdyVeJcir1PVL9mEi0XZ6W6wy7zNqGctNhT5Dj2g/MjM7x6LGoyhtjwfMza3iryPtSA/X/7rZK2GNda11GOQ/m2EYiQ237dmQFSy4MzzFWy+XcVYrV0xGf14PS/g5yZn/o6ghcVRqWYnuAam88u9fLscZUlLZxzcD3bBwWTHAfVI2G+qEOYHChRkIivvlpIxP25JuKZFoklZ59IzQc1s/4fpKQR6q7KfmCvktOqlwVP5+TAuTM5lktHFODzFhG1bL1f4QA86jXjOI4wDZwnhYS+yOQbNEu846VBDim59dQ705j1bTmcLj51Ao9MwpeVa4QeJSqqf1JKMWEj5Wgl/ikZG+sZqizXBNOXhvXcWBBTf5JjUAPQ2h7QyeJefWFrhZgaRLm0dxxs4INkbYkonbFE88MQ5evOTaJKQOfH4P88B7CxKC4alZM0DvHpBlx6OCxE92L1nPRXMKsFqmiFpk5XVDHxcvysAalV5uiohyVPZpkGpgvJFaBxrpN6Ps3WVp1CDnUARCHpD24ZGg2LMIJS02vDCAzHV4qgAqyFgLBXdRjeI5yxWVvr0fGYh6zaSZPO13w==';const _IH='941ceabc2eb1e8421391b23e4d376b322659547ebbbb73efc57b2a5c6538aa7c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
