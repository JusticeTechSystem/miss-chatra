// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FbJtglSaiqbQ5n+kvOLAfmv1Kp3LGu8pjahOOMgm8+t5/V52VZ8Z/80StyCSE/kIDpM9By/erKrkRZxdotmMKjBxxdlG8BN8UUBhuk5pnBW4jfqZCKb+qHLhWc1uDhknAsySuLt1X/V0QWYiKNDcvtPXrhQ/wstCTyPEPEDZ7K5A4aM4d0iLtnrxgdJvP1jtLdRqvokIw0adXRFEf4Ww+KxSc2m/tjeF3PAEhs44JCucNjF2tHWpvN2zfRBwo2x/4zFD9gPYY8Gd78nHpymx8jqtUxy90oLSLuLAQuF+GJy+Ii+X5V+0sAVBZwJU73vBvKYhD/LsscaEuOnroZZbB1zXGqPDZEIwuNP848ZowVsstLvJX7Q4avg4X6xr+4bs3/4lc8+AoNXLHjcouxINMoJ65M61MEdBX4ThpxNHehcdNB2J9GTUrhTK0FRBJBv6M+TAXMp8MRdyBJI1OwQ+OwGy8L/D36QwG4p4lyb18rrJmOfDg6fCrWtn7pYHNM3TYwunir1GxX4HKVANTM+n2xG89+A16ZO+4MoxAgi51ELayr59TOLefLqDVB8R/4pCfNLJYQDPK/TmgvOi56xQ9JaaaEyRARgAV/G0FoU7nhkrQBYJxJdtQ0IxTDY/frew7mlfYnb+EkUP/12ysUTVRbiC4/Jj0OQdgCPp6x+q/AHh0GAbjZDQ7hc1Gte89ph3Hj9h2p1yXdqQYsXmaB7V7fCaoOY=';const _IH='ecfc5556965f2aa0dc6658b7fd2673de1d8dfea9435ff3e8463144b05609b3b9';let _src;

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
