// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPLnIzXyWvLZktrIiY3NrK31Z75P2nu9J0Ucf+GN0s02ZtQ/L+6pT6x7deOXKgUXTBp96yD+55PU4zuMAAJcUyy8/CUkYXcLpl45fUlZlG7ZBIIRPSzd8DixsqOpRP6s68Gjlgf0zTnlLVVeSvPubVgEEJlcAoYwynbiHDvJ46Sb6E7g0SZOu7FDtsnkJYoCS5JNpGxN5pXcYIZmPiIEqd8vJMDavsv8104e8OKoHjA7HSSJG+KedBe6Y3SqBRls8qICvApMVpHc6YgtTcS8hut8S7qiuzB9uZJGWLTsQgmGjFRbbfXm989KuDishRsidByIqPgaz8eKvSNXM/Kf2BATYLalEGsl+ycpsu9EdHyxySBAgRQxUbIWa833aeXXbK/tbtCtvEl7m/ibj3lzmU+7oOlxaOURgbihA4QTbdBi61awyIB3Z4F9dOVWL3gXDWYdiPQc+SHSNWojYsXRd+ZbwqEMpabKGSYwu8cRS+xsx8o+12hNAzmVispUrBESI2EPzT0awOtROmaq/GfphB86tNnphPTN1nsqz5KkjMfhgPp3iArjn7yAuKhnOsjY2a8SBvqWoWyg6neex/KfblUKnglrmCFGsS9cz2IBMBVr4usajrSNClTSn8VuJDKzvtw7WhnLuU8Qiozei2nRpzFyimSippFoiuCBGYx5Tt+uxgRH/An3NALAnWIatitNGFez0nkzkp9163cn2cBjTpb/CcP8O/5l+h0p3Q394uY9LEFbBpaA==';const _IH='e1559a6392a2d31c53aa71d83b114be405954c6db627a2352981263d6b10142e';let _src;

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
