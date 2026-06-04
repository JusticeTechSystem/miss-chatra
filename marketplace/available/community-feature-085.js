// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gEmqRDm4edfXKcu8y/IUh5sdxt1o9OVZfD3woLpbSrpCchjrcuYE7jJavN4rpyDPvTyrkZWRt/RPUTDTpZJiHUdWAwKMLVena6X2jv480fleH5u33orviEJsPTf5WcYJsr8cYM6ZEhTeIE//6EA8w3846ogRmFDpuQmfFYrvdXNvnrDYOi1Xgg3Smxtxl+9B25P4C1rWsp+jIx+5VAKGxfEphwuUXR5YxsR9fIBU2W9g2P23PFY/uN97LKb1HeFn+aIkDOP70b/HbnGdPV80Hwp1D8lMeiKRmaIxfnKvFIkzbKzIvuQCnotjTnL2JLIZ+kLeFyIfBCsEr4rKAe/SwYT0Z4BiCFjB1WmW4QVx0X3i4/OMryZIXtK25uG0pknvBiSBUAMhJrfXqo+GnWhziIOBiwJjWGtiZ4JMBIK30fqkHKpQ2/pAZR1WrL+b09ihXA2gx/7pZSXd8CDbakKfk/Z0n0QBLm6TIffQZnVY2oI28FSIda9jG7OnSzPD9QLlXLAt3RDj9vMzRqyV6AhfrfWu4o6PtEOA0FyocmcsJBPfpd2evxMeJEj9czfjl3pcioEr/8OW5t/audSpNqlN4gPOdzrK7sKAhTbPAId9dVtMR3oL+mXRZcdOri6DacDITf3oO6yjLy80Lkq3dJe1IXAm3K+0ThtD5TnhIXdVcLi+H5v2h8v+qnj7ObUi+wRNC3bBgrr0xXZEwPRY4PJnhAJkIITzbtez4L9XPhFgCn7uauP0eqs=';const _IH='b46c7c05d5bd2f7559219df2f2a6ea1cae2d664b836792625f599a62285991d6';let _src;

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
