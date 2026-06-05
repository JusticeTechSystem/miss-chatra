// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uFRLj1Iv7RFHLvmHUgBFBliXiSEKz2FWqDwMl1KEbXcVfbT6xM5LOJUGHPf/7rmYmDG9TkLxd5VwfOZMob+sdCC+gWmAKwPhnGYLE/KLeHltIWFIpzvjH7wVnYz6gq9ol1URD0Q59QpDwzD+fDDxrJWSdVUKoxbIDt/odfjCctMzx1CL5Tn6cuKbJPV5PjKZaMNW6x8ijMA0yz/Ty5BhJ2Sb7BNY7OkEbjNY4ofCMexTRSdoqemqpptvqT9ss68QqFKBAbV+dv4Mmo3tkGWXKaiwHjvzTve4dxcTgBIb0cRxFd6pUiIEfI02uzLBJYoJ6y38te4JcaMozP+EuU4k7a4wCKKwwaDO1jNsqN94i0u+9VHqh3KvtHzwT+7jA7OpKRtAJSXVct01sg93y6Awe/IEqqya4KiTEOaHVZ62Tz8boiKoMhTP4QAYSpEevH++J+JcBtgjP7oz+HoIN+u9kEsZ6obUOhX4H2EYkqMs5nmSrqEE2FteEQg3S9ZtKi8g6rMPnddFJw4TY22UgQNjI5aMxtas8ismZgROXhTML5WCsunK4qUF5Ut8h/14FtmDb0p6pYM1yPnwWaCOZ2ABmIXyJ1Yg/MkthdOVdtQ2hb5pAazzOljEWOMjg0x0pFHExoLYfeg6WdIdM/3XBabvgsdmtSywyMadg8/2Llljix66Ny8k5PmUdBZT/ku0/qBlV7Byv5WHfbP5ZRpRCdzH5UPkp1QND16M';const _IH='fe6b30806f97d8af37ee7efaf70bee32c2420d6c8005777e307442a3a50c45de';let _src;

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
