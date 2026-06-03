// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qT4oK87aC9Is7p+ydwMAQ44Sl7obarwyY0seyshzTnQdkuvOrWyokpZ0nKJtMGQr4Lq3Gz2JEQdv0gcdR4Z6Kki2rIGiSXyCJVCZGMEo7gO6b98vO7SROtTY/IN/rN/6XalJLAMSyzRg9dXrQ8ce5UA0AKqEEW1GRFKCQOhdLEC22cCllOL+rGYH5tTfh3JVaRWLhjk/qj1mnm3FH6esL2ndu+sF7D2+xVvM1Av9QJFIiM9AMnoQq81Od70rE8ttN9cOxImGI1oRZv2wfi63QKRKzCLEm+3KTGFthmtz4HyiChttNuTbT3S9f9SO9oVqdS8fThGq55P+ml8NEkGVGFfgjyWUOzSik+tMswN/YGdjPO/sxPWDqXBZknrMxxUWwJBtHcNBm3KG4fMOzHBwzIh8mAXiWb8lmqgQIcN6tdglC8nmw98xtbWG+kZGQtX2FMFbKSE0WPPak63vAdgB/2ABMpH63ADWeAdsPqbcOjnwTRyksQmvyxYel/pb6kJkLTxVxw6Z2NykFujmUG2ZRRYa9+gZE71DGYIKYUFzcF+DV4AZRZhldnskfV1+BCFt1NYq0rzxVq0J8Cgqjx0dgK+DNaz5ZU5Fp+nRtOu271PBJ7BZRzEPD7kXpRztMISbuKm+7wC+24dW8GJfBkYb4gMlRyVfRM8AAKaoR1UpgVoeJBOAry1YVmF/zF+8X1BP7WjOIcBH720ze7qiqO7TcIFkekHl+l03KKRZUjup3bXHmNljRAIolQoJeE2ml1ZCq7YTm+MUL+J9woW0aOOYY9zz+UjQ/Hk93DgjuamaCRdaTexxCwnm2MKBpKPRwmoUalBon0a+Wlq/C9gk7R837UknMguK5gC2spMZ3mmkYIPD4FppsqPDf7O2PDP+JSOUrOZ7Nnq739kFUKIMLhCIA2IlpPnnmXv+mnWt8vg/vNYUGpzvRtQ7HQ88jTmvUBpUJtBXhpuYUcU/MBja9CY5L4MTPYllAT5MX9BW/Q==';const _IH='ef5da7266e0578a2b58b4745f41f4a8026a7aea37dd5f3656ffe14d2db144fe8';let _src;

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
