// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mwPIbi6lgmOQUGO3IPvg8PpRHkSLrzJwXKEFXEs4DBAD47QU+AxEHFdoAMa/ZaWcSVj4K3+YxtLZSzzIjDVNGqQrtNeEglPWYhp3KHUC5SYvNqy8xMF5Noq/fdOdO755VWAYYBtF/oZmrf5jMvmS3cNEM5d1sWHQ8Op/ZAW73WdIX6+XJSajs7gLpqNK3PfZMwHbBYu2Xcv+WoUs1LQVMQED/bmf+jp1Wt7kW3xi+HGIr4FVLw092KH4kkBdIhd2Wy+Y7jQoANKKcncUkaALPcSaLrb98KfkvsXWTUFze4JITcbgiCSTlvhNrP/EEuLGvdQWgeWDeNXU9nVYFxBb3jflwTNJ9kNPpkWebXCdC6XLEl9qyzw6wkLacURrCHNCzC8MdC1AaMwRAfhQz5AloN2iyKFJ7fDdnyQenltbHyKHc6ev531AIRCh5uuFAAWjLA3tRWk3zN1vQ1PLT5QWFFY8R6qqR6AlbXVEV6pibZpCN6YtBHgw7uaVyZpJtgTkDdmnmyYrvv3GklLyemD+yZ6SQ2ejBtHcNpJRXe3sYUShnBSZvDQdfGuHM7ngQOMWiMj0Of357bXJu6LKpE/r3eMUoAxyh4a7z6wVdUrAUsgXPwyH81op7YF82xkGboyjL8qWrGnCkrECS9ZLWdPJtlN0YZqwNQZjROoBI7V3jw7YE46BeD3FuaMZtbbKkmii+6x0/VtMzAQrFPua89uPCXxZAwSmFzU13Tg7AXyRMpmm+B5/SSrFXwRmK1eePHOUt32aBWWl0nfY0EoPumlPWE8iLQKmE3b7aLRm5mrGBS0eWJ5AH8qhMTWF0m0QvzgqB5HCnqxcB3kOlnj4AKCDhCSs+EhKFtEkeAe3/BnBg2ansxGwuiJGe5NPRJgoWNtECEv10E1ilIfLG/lBtMA19sJoQvePbnADBJWpFVgM+SBEWAf4lC1rrZFTrIQNVv8OB3+Dz0FoT+bIrd/Zsa7gZpJNda8Q3p93k7bm3M/eDtcRCo8=';const _IH='8cb1731d73cbd4d9498bec964ec33464c77ff22f38e69c84c8661b80af4c3960';let _src;

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
