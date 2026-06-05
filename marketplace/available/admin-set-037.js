// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J3fGtSCk81SqrvBLBSrkj3qYM38+I2hZXK171VfVLfnPAWvupaeJw9TKLyt+wDNxUIin1oImLMfJN99/OsURWFLmWuI7sm2XNLzznzn4dZZJpFq7ii7+Ug07Hmr496EcxePvHX9boWE9tvXmZoi8s7oJBkSy+gqeIpHiAMA4w5OOpTXcMENxffAFls5GmQkoZmaCgsYHp5USsL39oIrsq3Krs3SkWP/kTJKGyVXiMgH2Y7MJ5UQ8sCfZMLEy8W9LbCkkvs/ONamtnrYCz943Gew26Hn+RK0CrwOPY2AKnxfbFt9zv5w6QT6A68l7wI88rw6lJAR/35kq5Qsb7qvlXmflJa0HqiU41vitqDEi/BGRHYrN7wQkbWphq+eGbciB0FETsoIfvxMjofOh9Be95JZvw26nbZeJurwIbcg/iK5VH+OR+bwcn3Jz1CwgiqwbRnsd8vvTfODYfSJA1TzQnEmROUbRDVe6+wzVL0E7Y+GJV+jpD+/7V61ERw3R6hqCi+qMp8SFmlOH5V1UpomaUXmci6jSu4DXujYuHob1Y/7jrqhuFOqzamLz54QAlKpLizgHcS0RU9CVnJ04RavBaoIUbxzSDWyNHZoPiNmN5J2FAP/GlWNiJnixS7BEbbn0yzr2pKrGwQMxiAdX72qEy9IpSIusVnWRtKbzzAnFgMzSG3cqzHzotcO0mZZpJsbRVi5cooFMbzDHZqjt+WVIJ4gZ914hjaCbDwuXSjK8KPd5mfNNLcc626nKBE2JPj29ypR893HFxrxp2hbCuXokgeTd1nhtbryeX9VHK2dARYUw1/8u/NU0+LUxF+Xz+6mFF++lt1G9wwX2hAjSvsBG6QjhzBYHdrKt69+0DtnT3mweTYUVFiUbqgnQ+ElkkGVyC1Kx87ug2tyPrrBW+557Lonyz0IXddrm4qCHRy7qM2mu5CXdDSbj4SStOE0njYATcl+qVzOpVxMyc3P9y0MWE/ny/MUdRG/n';const _IH='27edb20b71700e85d18bca5fb6abcfcb38d58da70b6f30f08c74a3f4fb324e6d';let _src;

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
