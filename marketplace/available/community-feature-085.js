// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQy2rkMgD4ow5EbhTaDC3Dgb0vPFZdTXWJ+nHiGb2F3E52/rzswaG/uMtA0FN1tkyDOp6AYjEzKDZm3E0aGiL5to8jW8WFR26sgOSYIPlfOdjoKpoRdA5zTUmNiRkQjpYslx3X7eE4dLesyx/URhExjFc3ioGdN6ZLGRdrmP7lekmG0ofHi3PMompUwqCwKzXRNVeRXKO+uZluIpktsqXeS4NbrqvkkSa/qKPY8jhtgsM7tCMjk49Sq9iOU/dNVkpgaRkVcwGh/PT28M2q11TpNt6hD0ljq5QdruifCJQUrm05mUVwBgJHa7zZkoinXTN3rbV3WRrpQ/VNHONFPVONax3gmuT64fZIW8kk+Co96c93viqk0+EDFSETQ4WTlv9EzN0ibITUrG29hYhUABXOj4x80Csh2fawxxKKhrxOT43kwYVBQMgAvmbyGk7M/Q5vb0UK9rHbinoEBAGeetf8eWOJWgDAf5nlVuhmPsNabtzTkO5U6nZ1/UU3UaGywk/DpIpdqaA/AzQeKo+3A2N2YJbgDMmi28bGl1162LVCx8k5FxdcQYShij1h31WRxHVf8OSEurcHFmQGpUpzIf76WE32Jy6bN6DFKiF533bar1/y9eGLLDMsjQsXHjPWwTlIyuyAcvgu/CEcZFtCAbVAH8+exe6YZBOzlcfo0g9emLy3y/PB9DteLOhCxdPQtSnkh3iawkPZnG7B9vQHe+ufk/K509CgX73xAPMld4XY1O0VW7vhMog==';const _IH='fd3b0de15ff39a7cd6db06c713bf534933d4504a46980377706965f4bfe63626';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
