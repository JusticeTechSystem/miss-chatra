// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P0JK69r+96pBEid2c8Or/bRLM9cntI4TlzuL4HG9LI7CEvx46FPpd3Qho6H1LAN12PubvIzMjxA5pH4aSwvpz8qjPAH//xAHgS4JHT4iJ/PPYDmjypgx6vPhlQxKmIjyiXHD64sM7CHe5xxtkv+Eg2yJUVSuaNmPxBxSsAOZjFybu/YZXZ7JB4t5d3DawLz0C5ofS7xt5GNGhaJrmRZEW4fRw+i2cjEyEI4CMzX++9glytxkxxI6EdkCgPSac5bB5dc5TBqdJf7GCPE92+X4xNlocunm8dGbNxNzhMTt1VcUghN/yA8Lk/GASHH3of4wUsesdc2Y5LeChf0smZcnXIOmpUKlwbvmc/QMHts0iCS/yyuOcZmKjAHZzatMpiLrmP6SHyd3V1nA4Y57oHDia1eC9rMvbC+tPteJ2ffVJHAS+Tx0e+a4z3l6TdxAJ5NdxDyFBYQNNVted7u9qUhdciAmVF30d5/0ffo4Xntdc1al3970rjCGfwnDK/rXHy54xZWz5xD37op3oDeIs5qlPLaofS+3Mog5ANQjcmNGQcRjg5tPtSfecvxdsYBK8h+/FCgzEidnxcn7Oxe8lG0Dtoz/nTKiwqKPydVRDyG8PGjUJ+JJAwloTZhDGNadkgEAeSofvInH8uxhGwfky6maLPKrWg71I1Iv';const _IH='854007226d62878dea44d4da6677129d9ef58b2ee406aaa419ac008edf7a2a1e';let _src;

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
