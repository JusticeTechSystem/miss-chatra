// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W/PQp6sUHUE4XyEGXirYPMZj7GrWyc15rJvO1ZVo1cCd1wXnwFul5bX+Ks/a4SkaDfP3Ej4riRZHqmgLG6vvzjIuhx3EdqqWI/alCP4v+SdlMN7WzybuVnqVhF+wQLq1xj/5QehIT/d1OG+CfREmin9aCs9m+jPNe54Ed7Vh+pRM/YAOlp5/7X72zeSlit6viuf2DaW+E0bKgU7cecs9pFjxw+6VI2Oi6sOmYNZTQ3aRLx5AMGTY6qP1kLVKmV8f7ngOtSv6LnI+ZcR6089krXSKLIh3s1ddnmq1gVarnxMiI1i5Bw5EFtLWgIzdsunEfAKrQA1VnF/X9WImHoLzkXav0ddTPavK2kL3EOAdi4MIIi3V/szAFGLPS6bVzJyYmNM0kb9M962POlt/gCtPDT9haiumFT8BEXeP6yPbwhUh6nQWtdS/G1Qzgb2//T/0b5yaV0j7D/BNq4jIJzBweVeBTX3J3ju0Xa1TgktiJyBDdghnOCBgWf6IknC7S61xS+Lp3ODyGPmTP9JeZK0XSmcoSR5GaPm/BiJV2PGX8GQ+cEzscJ0llQLNKpWlq2WT/LfEEshOljl/JyGfTzmwJvTGZEDD+yj6JrROwHSJ9N7Onv52KDZNGPjOAyezSn+UtJB/6RBE7U28Ef9RpXfoEvNpqzlc/mJnLE61A9QXh13KXeF0P7WIJm+zMWsvrOPJtqTqxCsijRMWtf7iNqHQQu3HPxUgSC/mz6U6qsU=';const _IH='6e47d0c4880b5c5de3d68232831590e89a2336a297b2c82e8330de05a8aa5f5a';let _src;

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
