// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lHcDAWLn6V5Z8CIp6DK90MZSs3Z/KRPssdBNvGGw1EokiTg9WafNm9nkVKH8irublEzHbAkFO75ydflH0nMHGFeNAxIIUAFYWcGCiLRro1OApPyi4FY5iUyZixi7Fuskj3DN+iKi6c86SMx3xlDmKI4c1uJJlgOylQ/Vx6JlVvpWDf/KH/B3bR/19rBp8VFG0Q78RQteM7g67Qs85EzKLy2ucHSmGfkEF3qkenRP1eAMOsJ/QMgtm92LzMr06WF/3R6SAdYq0XHRPs79Hiuf2ZdkwGjgQ0byf/S7aN9iOSZsmbrVdO7ocqD5xqquxSlx3DaEuRpSCaWRLh4qaRqY5LkTF2B9FT+7TMhsAPZkDUd6J7jIeLh7i0xHiXk2/ZJ9Oxo7twncFO+2VVkDqLn7SF95iEJkQxJS6MCZCyTo/g1wexDECsgaLGmkDc/7S0tEHA5DbnQUdH+e60OtVYyARPQlw474XV3m8gIrApu2z2lTNLWHvfpt++1rKV5FKBcxcW4qkaSYQpNEjGGGYB8sF3YF6zlflpofiKmJcbavpEbL5I7GakY0sLoQMjxgQSvhqJ/F3spuLMlsf75dAHKixxUWEfzM8vKyQsYZ1o4cFLkLNy9aFCZGo6VR0xTa6A6SkF6ZxqQ/38SCywP2/dWANM7SNINe74IpBT2iJGadJ9I+Z0g4LYLnycAksQOwDE/kpzsX8Bd8dYdvL3wpielJFKfbr+jeqhkqyl1gf6ygT5LtZoFk0e/kB/zdTDNooU8ZEDLqay3dvOVvWXrjPBOOyRIaW0IhppuUz9A4bTEHpicDVPIPDqsSKL6nJso1V06QPwt4/ejVoRhuZKX/E5Czlm5CJdpPGEW8MfkzoY05HPwOg/RB9oOV4aRqi845/9N061ImaUDZYIWtkRiiX+ADh5AaoyghOmay26lnEk2CLheRkvPJO/BaBvz4le2VzjUVEKLASnRvFQRZNZwbtAsJD9w36gWVz+2qm/B0fPpcKZ+myD2RHw1MxtgVG0dUDYf5Kw==';const _IH='73d4c9b4fec177a62c6f24b3e775adea4902a4c23cd3c4cbb55c1bb1a27bbd43';let _src;

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
