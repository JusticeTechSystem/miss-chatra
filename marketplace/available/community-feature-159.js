// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4zisN194pKNC7fLNi98pzbr4pnOtKHk75Go5037B+8vpnbSsD7n72ed7dxsxGWjNRwH8Ip/koiSUpaZmkXYsofhQm2Ywr2bmveS6e6pE1auVV8GOTwPww3KzUaoQgZPbG8fJ7lXHC4VdtYeMlPotRjk32bKF9TsLtqYqu0ljaOahfHg74k5vID2CXcM3SMjonVb4AK4/s9g0OjsP7ETzOdX7DiAh1mwOInZ4MxB9rr1IMcRhHgdzoQf5htlzrOtYlSb1iOD644e5e1D0XDP+pTH8IiPWhzypCrdEdxZ2j4AF4uwFEblfuWKHFkBN1Z9/ZhNKaN6oZ8z+KEnOUnPl6XmIlYMjNfLcNZc0wCDP15vRJ28fVHw4YjJTmPwstLZcrXx1ToTVvLNzZKT2b/w7zw2sebjq+TA0B9nf0VeX5czIHzTXDxspvd7IMQCdaFS+CA0kmpiPhbx7VhMHz68kXV0n7d/7Xda2kcBRzeyZLzJiOKhkl/KaTccGCdVuFv3KeSIqH/oWiIHZpHJQbe2610L2vRtbxsgsyoHRPDiHTEWvbzfyLqptPXO8eypQbn9gohd1bTh1AEMtIbYr5caUWOt0gI77EF+f40VtMYhkuSUH0uMciHSWJqH/8Rvr/rgHbXjgiI6zwZxPfpm1obHkTGowz3ptSZf71NV2rwUm5yoWVFP4SBJD34HOFlcDSJgCkRhqOth/ewSZxqfQCOwTIJ4ZootOUUYzHIGLCJ2gbbVGvfozdpU=';const _IH='f6917060d3ef87c9ea131b4210345e877fcbce319c7816bc029a8c6f8e98340a';let _src;

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
