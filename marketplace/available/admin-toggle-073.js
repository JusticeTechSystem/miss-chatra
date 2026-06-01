// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+xA1UAKo5IYrHN1Uc8A6Vheo45zneYjyEnfoQCqg0MnyHp/LI7h/99Xq3i/GWc6clS0dkuR6hrY74YVUVMQmBkm2Fo+qwsL5X4fv88vNoN7bBf34619KslAwRREPDMGtg2sPCEjhmgNMD4l/bY2vXVlotxTBEzLmrFWhwXVg0bXeizOKEHUtj5ZhYwh+EVc/sKGirMNzfTNJ53n7fSotw3z0NmTFREfZ5bPbZh4uVIkFKxJoFYQnZ9AKbygy0Zebj1jSUIPzsjVXWopYL1nB2ZWOYXkO4clMDvmgP2ToMeeM07M51MuLRloc4oO91ZRTw79yS0US8eGD3ZQ5KPvE4Ga1+GD/d+dKtoZKKhQzs3HXnOIp+Z+M3QXnGjpFXPP6JOn5+8nlBe3FrLT9l8I9y6nzfjP78ZJecE4qjibPfX4JVJhDJnxKrfVdtIW9SmTOWGY/0irbLkhcyIiTmYsVdxaTKtvNwgjYv2Wlj4+DB7oMDQaDOVe1HjetjJhTyoifC8m6prPcCFP50t7xdJnqzy3nTdLt1L/EsXN8VPPA/usffG6p6NY+jIFidKOxNvhoxTBlY1cdmvPB0TMw8vOXyjxTzdAt6Tqwy7Xgh+8bnWYRKgwPgO9w02b+qf3KIvC+8K0TypmtszvTDZpma210A14excWKRXdPNDKdZEEq1xfAmgQ95qgY2M8yM4sD56Ax9LQjweGmDiZo8UBoLDn6xL00LkcMLvy1G1ns9LJv1t7PleSvI+oCvNbuhQ/rHslecYDP2gSXKgPsHpXbB/wAorLJbwVsYKMguZ7takc3gn/Uu2kMlnKlASzpQrDd0Y2cpD2I4WaziKBpyxFqpZz/3aq+YcgsWBC9ORaAa7q+0QB+byVc+7w+tl38V3Tq4tvzYQJMUVRrZUAvc7jRb3stNwNOH2Z4ygbH4VMV1CnrN2kahd1RWPevMpQVulbUOtUpUVq0TnZWuYxhXkpTg6sR8LTjToudSiclmrV068QceA7FfDDinqDwcxa1U2fSg==';const _IH='453ed49fd3732f9d36e67fac5896086f362b573d23a9acdd27a55a1bde3f0ffb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
