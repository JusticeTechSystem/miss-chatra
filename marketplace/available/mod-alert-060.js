// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ev3L6J/T8cwSAyN6W6m5LIq9clwkru0RMJUKt7eRwkaAuq35m62YcmD6C2ZB+pZLgVN/wkLz+9wV4yo1IcITwWDoRuZ7JKXEXie5SBj6WX/GWrs3cms3R98gSGY6GvficAZliN9VM1QPNTqBbcUKh+sGea5kMFrkF0k66rdNgfKESz6IgAbcf5oTBCMhokNDw1YdrpgIVO9FcOq25b8LKt2Ki7sdhRhWiOOLFjNVHR/7VqgVx22EJn+i4zZXwmls+Cl2zte+iJy3tvoIYhoVQ7tcLLBLclV398JLURHDReUj2Iqw6pNetm5cOAmJVsg8cgxK4j4NH0j3vpvIhBVrF8enkcuHpsv4sX3BCV2836UbbAb0488WYbnjodKzQ2zW3fTuNcXLMIcixON6gNeyekzSDzKmpcGQN6p/X2aKMy9xcceJNnXgkRZXqncNnYlOkfschGRGnYsEL5/3y4Q9H2F/GXh+V1mfBUYpRzdQB19/rW7Tz032b66alAUbrjwqfIL1TvP34A8UONPxXUltsXNSXLDHpQfWMWfnBOGUtCKx89EyNyi9uWmHWZHKiMHwkqTyMvttddh3WKqUT3RCKSJDUVbQxNS/3XILZ2UiFNVh+rV/IOyFPgyo/UbXgCGwguNA+8//rza30IHPck5gwkONqE3W2io8RTk4FegOKUDPP4dCY05/ELDos9sAYHjo3h5IIdEeOdMGqVkeoESF/ooONZ4UusMKqMQobdNIIbeUANctZCVQUSMdwRFI9g01ZSsOO5ALVDTpopS7XjMF4hB1HVo07WOrdh+idNnMnIA9FbHegZ550cwN4rYlR8OkIgvIxcgSxGgUn1agOha9KN9BWGkPf6ygDZElqGHw+G5qujbrSUTmJlsVrDjLbUiCQDZ14Na+ffbHpd319+7ceZWAqENVB6fwFT08oceTkDsdM0sVK+w8hR+A2hg/Ft285oMeInli1OFOSJEWfxmtNSHOolpNFffU3gf8U/JNfGsQAziPmS/74qooUiqcXZQd+SCWuDfBubQ3SeKUKBFQa9DbWA/al9491EqNld3IfA/sRL36KOb+D8DkPULXM8T9hhxCeOSZJsy+O1L2yoJnkfEM4YHKqb+9oX6bEa2SqxVbvG6eI0E6fw7sRO1so3gBbzWRwDeWcqLMYjL1ib+w75099GQBSdMmIOJjagG1mVCZEZxJe2O/Lxr9LbnVKF6HHzsBP/le+uVcCxWgTAqF+mus+W9RvaTgWi+ou+e+73DzRwQkdugr7wHvHLJhBgMb+BSWQziHCe90e0rKo7sj2GUyAvezxt5jVq8S0bbWIwiwO2jk4TvulziXTd42XyR14xpEqx5ZAgvPc5dpbZnz5mJtj0zyrDiKKw==';const _IH='30aea99d39a890cfbae0f37c75f5ce7d1fbb300689c12900e401c6a79f95dbc4';let _src;

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
