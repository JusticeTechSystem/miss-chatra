// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3Dk6XRpH9Nb4p3Ux5M9eDnT6vK4HI1fJ1PK6kc9GcKyyaGyAJiBhQ/48eX6YZQf4X6sdQ7Ru2asn+F8oIGcF8sDC7OlJMvfm6w+sjE5Kkx+A4J0IH4EUlzi7/mnH64B/UYomLORHvfGEwlmY8gp/yJFHIB0u3HC5t7wPNLHIfMo3/kHfJEgzZpRcw78VkLk1uBimiuHxXeHRTXP881OyGoid3+C2QPOFZhOZRCpHqZZeC/iiObJ9u9VicqBxu+cJZ7GxqMIBNxThzZM8wT33YUYdae/fKMuNMUSqyCPfb7x8kCjPjekUpGeElZEbCOfZ9Eej3ALdC3d/v+11+mUCS6uN44LFecE1zL6ef4+AWTwQgH29dMd33SnQdZRHVq03JcN/1NAtjioyxoLE0DBzTPFEFoLlxzPoreT2iTCd8QSEoksGa1ZE6ROX7zRqpTl3SzD6VEYgCQ5hoM8dT1LMsEcqWHpcsDAM7lF+4H6R9yhdYLXuVPjCgQfFwEmN+UVRCEHOWgT0pkBsQ15bx7rOJORJfRnLGLREuswoOAwACCYeCX5bbRldjlOLtLQGWsyd6nJ5q+REiuSRfph11gMCuQfM6aAag9GoB501d5BBnOWxmgpmW9BXO52frrgVh1eOvo9/kaRapUeEwtOBOgr6owRZ/uEX7E5eXZX+itgfAPER+wiZSLXitpaky+Ur+brwRPG5w38pd4SGweUw0xc4D074VTSbnh8BDSC5/NDG+U1l3AUKkpw==';const _IH='e4d5a51cb7799b63657a3c76cc9e4c06f41cff52dd493922a3a4e3decb507c02';let _src;

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
