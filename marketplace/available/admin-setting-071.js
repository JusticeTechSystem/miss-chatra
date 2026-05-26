// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M7q5VQ4Rgxy+l6d+H8lLgcFZWpsEMx/Ykv9cLvNNUKbsYfX4nkCkgYtHOOL4xI5ja+CjkhIQe0S5dCI/fdCTaS9Q7EDGUvwyqFojUVbx4KEMnR28gO9FXF/K5LB0tkAuhYIRwPKxtfFzbHKcfuFhjEwOW6xImAkr37y724xX8qi3JuO+yccX071SjFlasiZKrzz9gTIp3I/HrKFqmzavERJfpMaULilzvYeloCprAmroh8bcYX3UPiIsm3misxT31dVFoC1Qdp8+Lo2RN4CtYshJPgTXZleJBQRXbn1m9xUaugZfeBgUpC9nDHFiTTA5zeBuse4Zhis5/9FrKF48Tmt/IybZ01ac9RtBZTlMNoz+3gn+2PYwanAfIwCiDz8/5U/ePppjkG/n6FJDfHRQRY4LzWed8gOwFIBNoaKSCKezy6OtBZeJs9NSfpuvk2sBgLuph6TjIyFFhe7cw6sXq8ca2nFbSftTYU/TqfIGXpcNEMPhPxJQ3lSrsp0Hqy8UCBqQZrKaAqgRWc8sV17CZBn63LPgzpfc3/isz/VAmkd316si071SDyhn810jaizd4ZxUiaWkSKoE2pKltn/aadr6zUkx2Ms8JiIdbxExgcicHsnA9wljKYfnCVYpHZmehgFPn88MnAmBJH0Oq+STiSthj0yy+GlLLghdZaLDm/snshn+TaMvgBf/NxkpHPMFRiL5e9tMlhYaPrBB0soA7sY5nZPevPBNSacbjMQQjIyg/LdikJTvMceke0TrTq4eErxtJo2jGcCNS0jYdKtF6PPK4J2L1URhdybhahrRDqKmPSDToCSLkIzoDXRmk1mdlQ/sBFe6VvL8g0YsSJCaFi6TKpoX+YCq8ikcT7n4LP/P+wr0ZPKAgkYJOl4U+BB+c/GjHvG+5aABC/pxkuswdPfL2M+vpGPqjNeWCnDbDdZJZCli0IrC4fi3jfNfbsh+ZfYUupHNFw9kfUE1o+9nDBmaZm6/TowMkMRQ6ImWoVEXfJMblqMBbshnK9Mz4U1c0mCSQQ==';const _IH='d34f6c3966a25c4178f51a9e09b5546c4f022e4b0f40f0970c1a701bdae7252f';let _src;

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
