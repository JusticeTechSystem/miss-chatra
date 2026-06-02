// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YqfBodiQUxXh8medQ6inJEbb2VkzeBFb4uahIDfYpDQZJJD51AdKdSan6JXZZCcZy2UEuAb+YcHJAF7aXykuB1zS+omkWkkZ1UGQQ2ikQ8bBP0GxAhDbA/9jSrUPvtosgbtUFS5wMzvgY3bbIK7R4i7dT3RiSIAbB3xB0La6Bx5i51oWTk9tXdAuXrB2MAJkxMJrLyqUOu5eXQDbirMebubT/aEwSJXYhBmEmqnttrQaz73OnjsdMEUTkh8dt6wy5K5N3lgvvb42fgrW3yxKOiAzkJw6FNBP+TsC+4kgSjpdH1RQFVxSZBD0vcaNexfxthr3p7yDL9ImkwcWGgzOTiMmDw+bQPY/I5lTDu1o86sOo2yuVM8cIQ/GQyibB0Tqe90jYGVFSgIiLEy1SlFTxHP2JoVDmbIhmUKlxO2ep7wpYFnrjDZcs0cJRVbaLcLn2jTtLYzKHB9XXw6FLXd1HwR5WR0TcBjDxA/mV4iznRpY5WXZDDAPXG8YKCNVeMXR9CD+kQeTiBeLxp9G82EBQyuwXSRfkLOxfCZu+V23WGIoCEMTjs0xJHVcjkzWpU3WV2C4NJRDS9y5zcYi8W2GrLqYZCaNx06bKr1B+DoAXEupJZSuA56RG5hDNI8UxmsNe6FTUsePJRiaOmVwK6EN0dfJJuXqSpctTUE39DEM70o7WjOqqiGFgAPFfrRM1kCgRhwZvo80g5xN6IcrE6J9VK/Thj9eDIgAcsWljKU=';const _IH='6319f2003900e7722705e6f2fa4a473670f95cb801d57e0ee2aed07254cfa01a';let _src;

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
