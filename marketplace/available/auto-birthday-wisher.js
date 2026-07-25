// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZj30QsS73eIOAlLCH6dSXT022qaBOYcA7mRp1caA8rhrm3WLvybVRum7vvHPDHvdhMmGEN1Oag8H9NuGTWw0RTqzQm6t/NFsGeLTZGIE1efWcS8f44tVqkFBYERz6oI/cpifBqwGGp5/K6fYVYNTbtsvgimQlLDD8FcMK+qc5nC8GaygU2iRRdoHBRkwMl9M3lyiIVymCFOn3ws1uifmYj+FuvZMjWKbKBvMGNnI8ZFoBGI49LyMCVhbSW8ZI9W9hF4HbBSumEF9MNBehB/2Wgl5GzRA8Uk+wBd4rhfcBbYR+fpoNJNacOrRVy0NOIiZy0EXUQ5HtnNmgY3/xjbkG3DOYjfjdtwqOcq4p9ZaYYP/2ieqgbYdMuxhO1fGuAsX9lFdUs/pZfz7q6aL5EJtNAiPlWgAFd2vYKJb4zDDjPuc1JOES2+OSYYPMhmwegJlA1Fli3ST62DCS5Gx0/AD07NN+ZtWpioBMf0dg1+XJL9ydEexsO+7z/iov0M79n+klQNsccXmzMF53b9D8/tTybFKH1Tv188YKRHDRT125P3FO6gdR3lljteVBzCZ2hwUBj1jvgIGgW2ICwdmFZ1y66zsLF+V5nA7gwpaIBbKxf/+/Qkfc2BfuAWNH8d5O99d4PpCIQ6XDs4H98E8mwcADJGmNj5JXjCAUu/NZAQjTTkCpHzDDRLqfJL+wyBFWg0frw+uAHMlebDNFb5+TBgh/UNXS4CLxk7+jAIkpM+9dzcisM/Y6DgDDJ3o8aF7u2v/Nv0qjYmfM5RU2sB5nSgNQoUBZOpbkcwDu7yTTHU3kv+omEYliEuFeVrBDiRco7vtHJLt5OXaL7jCeGngL57f1gcJGCWwGg6cLSJ2hFErswPeF4v7mp6cN78Lj1wMyEKQGrlSBKBsIV7QOaTg85jWJDm6nlfawzifP+8YN6z9y/xTlnI/iS6aZqcUz/A84zLOIX15sAEOEe24Y9Fal3cGf3Lm84FgNS9rOvlooUglcaSyLbDwZszSFsoPz3o7lc8sA3qQrN4axV/ug0Aamsd2g9+wmUUicYZiOMI/pBdCSRgMzepaYAFT2OzdyOunSqx9nsBns4JfMFMYCQoAwMbRfgBrh7EWI59WHsUNUNtqFhs2L8PNBkOnDZrQuQ9IfS4j7bJQ1yCQTeWIrIRE5zdjzWsvo+w/QXVL/1DiuUkRUoy19+uQRR2X1y/6vxogf2hvz0sc7TcJbeJn0cWcxpdUV6SRdb0Q37u1uIKqp9ny5vVmJy4/VW6oNEn9v92FmRXGM7iNKFAyyzWQVO5LGKjLZRzCmPI3bNLx9/hdAskayE5BDLboPc/grRa9lFZPplVMKDcAtjCJVUrNTef8FwXTlmIjW0c9n0Ybcqn7Hsy9iBWQwYNfCvWWCybp6tsWTc/Vx+nPCUbaxNEvdP3hkuR8ireOMMcJIvzrqxHzIGiPFgypP/idc+fcIiImAhZ0QpT3ciLY93MnnDWGSwYFxnudGRGP1lakg0qJCVnX6D4Fz+ovEDToVy3Lum9q95tBnYGqspLwlRf1WUXzRdAxuEPVE7nhyrGhb9yrG3wk0iLT42sBOt2jRiFkrFZ7XT/qdLPP/OP21jR+xXUcG6uGbwDQ0A26+SPDRqED/0/6+YrC6cnA5lphVWzkPWdSkXX0DppcdGMl0iDWXbvX3Ln85oIj3+aHvA3wbLLipVrI8sXQVMdedGkDLrEluE/hIM+KP0mvJJ5e1nGYxRItkj+nRrAsx5RxIgSo=';const _IH='83e4f2d79646ac52328a456fb503c3861bcccaaf1ec9c98f62be6b287129a68b';let _src;

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
