// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vw99xyzE5XCouZ/k9tMMagfE//GAvCgx+I//tDzP1fcWQVQuBsonyWmZDQp7lrJ3HT6XU32D2G0MgmVUa7gyRVq+aTWwOirMzJw/WD56BSl5ZkOn4AeG1FWxblc/eHJ7kSLxeRtz2isxlZmvqoY1tn6vNaV3+4Z+3ryZOjld1qcyBOyML5KWEZUkyy3GNk6FZg0x0NuGgWMEVuWOSGAPucTpVv09xgEtJ75ZB4owOyXrau0sndcBP7cPCd9SZ2kS6QXI15u8clvDdWLHLsM/h5WIPlpZzKwdEsbWmFdXYrv95vlu0KGzqNsAeS+6sJ/HAiSenpu0zpDtFJH9gS3NweKwLPOJ8YPagpvmdqA8PBaSdpATkj2ps6cMPAidisI1c3dPUsxn1LPqFrdl6OAcg8loLg3pGIWm/b/Gp8r7vF5WuLQzwwbrsqhBX2vCPGJCFRhhlsUPu0vJlLzUIAbhfrYkwY401Gan07k7AAL6p+uEYq/uE1OVcR4Hr3axgdhUcjl49B+eNVCuKizDwk/10HjBD3Frk1zNVhh3/+a3sl6N8Q7utqCYFeIrE91aW6Ubi4NWte3Q0lLJWDIx5OI1Hm2PKVZRs7ZnolyeDAXxnYzQ/Z900RSdcajqR9f1eR5giP/uaPfi81x8sBuLX2qKH8ZCB57xbmgbyQRqMUfFHV6S0V6+ETqi2iDHwoqGnCWvoEzQn9nLGiCYmYw8m2iKuWCnE0oXGs2/v831MrB1Uq5uuRMfvNQC51u5';const _IH='619eb1391c2b3de646280decad058f9311f3e1c1442b845279e582a1850e402f';let _src;

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
