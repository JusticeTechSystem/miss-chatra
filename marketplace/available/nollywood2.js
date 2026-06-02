// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fLVfefvgtBfQlvIehfALLv4AgOkBPtqo2Yizxhh9I1wzB03a7HmX+Yzv7mD2ZundvmulyVZUjwpfBqcVauyZgUcjfDLQ00FBVYXYuYcX43h9yt109W2v0rGv+tD0uyKlDVWVPJem0NUQqOzsKU22oQJPmCy3SPRDsyhANSCMB0fdcDWUhbIIr2k4r4Kc5fZM+yFnbpZW4UT9aY+jsbaPbydNGm5x5pUrK2iyEk6P6DaHUFkaqhAjrodYpCPckTVpScM0gt7yg20rtlSj//uKLjklJfMUJsKJn4rCNO0EDUwgyAXaMWWM4GfhlGMBcBqriYrU1KV8pCUeFVUJrIxjDaLaGXjr/TcvbTLfZG2KO4FMDg3ZkjjUH2CSigowW4OBxmqwhC6MLe08377Xci/U6+OGy9pIoDvVspTl7EwF7Ty7aPWEgkCqk1SXmue7iKDzY8VBgXzdjLBWgYB82UPK/UysoXfGe73ACGxmMUIU9mULRZe1XzexWDOpS6Nx9wUMl0d0pf7uobQ7Ey0dfoDHymdWsfdiO7Xno7HtBXyGXG3sOBp7G6QHFY1RsH+KWqPbtSZ8lZ41I7dbggvoWkmjeCEtJkqVmb2l28uSa9L0gKPGnO3RiIWnmS7M0GDA7+A8MGD0+ixS9kwXxD+49UzR2KKLtSuiwVhg/TYgb8q/1XVnTO7ZJ7d4TJ3phY6RO/BVRvbcLTzF7roxN2y56YhPCov4GSKUDLXK/OcdpcR8W/GG1IbGAmco36MEfSpmg/J0BR3v5erVAu9o8ej9xS0l1tiOj5Vs63Jy8MbHlIHGu18CNSIN8XzqQGndwXncfqYX1SE5VKk/+sBhwdXIVdYUQSRoQrNuNHt9OZJYAZwksxoqTeCiJtUY/58polKMIFiB2eHa2eQqby7MWlLt9/P6US6Uw9MLnD1McIixecdhzyGUlEsJVdGIJNLiZRqj0y7X7qf1djZohDiprKc1PvfWXbR3boqt/t8GgbcvXUsDceFDqNPL/Vmu5XMelgPQbGveOfiUBP/zpwzLrSNzZ3zE2T2aedQDwx251k89ZiQeTYNnH0FkFEJ6uJJuFVjNb2Ecwq5jCnOLV4GkRBqfL7dxh/xwNSCZ+3aBnEpN4u3bD/H6qjsGApOlWuzG4v5CB5xS78ciKUmFhmNIjDndUxF3Bf632ya40ClNhFQuO0ZJr/pe5l8iitWKnOwikwjUQulWhSbbxaXV5XF0SLSvlBs=';const _IH='7281586f07d5633ca82669194e87e2916d0f0fb3ccc80c506bbca0bbdd9ce906';let _src;

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
