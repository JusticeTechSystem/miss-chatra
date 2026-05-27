// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cCRtLfwPAqZMahOVobfOMGxgCBOnS1gOatitMGUGjrqxsZX0wyFRA55ab0h3fU9GdT+/erXTNcjbXMfCzHhhyoqaO3P+013Tde1qcElUDgvohD06tTcu84xCHVt3foqnk7vUzqwar44GOr5ds59/b59B1pTDOLwsrsitROO8yFtBabg/unI4tRib4BN0ut7H7goEVyaZfX/YRWMVwA3EUYJy0XsdOyuQBdA0m0Ilu0AuzftIPEnFh5lbliReI/54SXVG2Ii7cEfPJ78NDRnXw/7VGpqg27e4ebSsKsToLS1qqLmJSeRCSGqrF95DCUtbtgHFupHjRn0ksPqkBeag4j9YGRFv8dKMCZmMCRq+DZzVqpJVUBr/Z3Kp2HBC4wmOZQTeQ7LC+AZiBCz2t/lYAR5CRQT3pIBcJZYDB4TI8CR1BFDvgbusDTKotGuGpdlkAhSr/lKcvtmFtbnmSqICM6cEWe1H34ubvcqFLBex+fRCCGMUetZuq1W6Mnagdsy75liMp9vmmC4jLkKec4+l/8Auu+ujWDlv44qON+QHl2DUwnlgaJvyLQGNDzYxmq6DDh9vlBadtW6ghU8ixim4ra/aVjMHhMqMEHZxXdqQFBj0b5M2p1iRb3c7tt3xSMjtRW8HKgqCGP4UI60fU9ARuCqo6dUzhm7SBBXl/pKKjPNLIxYVeXFzHD9H/KRkBtKclWd/qVwg5QeaOIflPe32CpmgzrxmPSQkHdlwZe0FE5a6VxzG8955VqhG/Nman1TeqfKa9krq3D+wPT1fRx7DEv4giVgEyjyMgkqpAp1PL3Ejgj3agJqFGFDC/hy/JxlcuNuDD5Y6TG3HaMiFGa2jd4YDT85KWGM3Z3AzWU65QoJhblR7swcCFOMHjuhntiEpz1PMKExiVXL5HMUh6iM6JKCVuGvhv3H9MHTfDREqDIdyHsJ3KNJFaObTF+yHFZWyHeV218n8b0vyBNko924CQ6MeWhlDakAvbl6AkgSfu2kkOlUkktCXktCZ43f4GkLYGhaGlMtHqx5UMZUOR7rtTZ5DQ9eLbXhQYbiykmYjMvmqNnQEUyV1lPORMUE9mJLigSOxK6iMu2VTjgDS6OwrOtS9wbHtFmPtW/FwtlpDqynkmxENfV27a9xPhjARoCZGgnh7GqK2pQu5Yq4dHENg9T4hztaIJR3CXlynFxG8o5+FbMBLMkGGbsIRYk990kQMyogvNlkK8ZyrbMfgVLpD0KUPl9KAUkOZeT9Z/Fj6WjPIUnRGJ8WEyZsVN5/O8Q8jlnoYqt708Vvfza7qIlH8qQuy+dkSunI79iE9b2g2kcprBTqfPQEocavEjD6ZZ5McZSvuYuy0fOR28rJnTaXDvGdYZwu7aiOuOiIZTLcG';const _IH='f947f60cef20c22fadf4684d610b6eda3b82b930ea004c08d478be3b36ffaa6c';let _src;

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
