// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wOfvYFVpSLmYn+rbIAKmC0jDz3h4ntFwhOa7XKu6tYk5ZTz1bvURjpIxomLf59+x2LM4Bg7wexBJFed7m6RWIGx2SCDkqcFLsqMkCI5LJD845FVbfiEuSNTJ/8pDi06g4uKID0HOosKTo+AXJrhXsLJpisL6OdvAIxzhYrfbyOxpsE6UgwZKhMv/fG5xqVDGqb1D3zKLdHT5V5GeDKaQm/tmdilPNalDzv2/PEcvPclzIvn/aaG+D6aVS/PH+f117epZ9TXsYKkHqY1ESpq6PQwJIs7m//8yUArhOZPbZ59OFVogJXHJfpLnbvWz4Cg3Yrpxdkqy3ppPp+JAr/YXGBc7EHm4Wo5phvH/8HRfKeax/vL5Marq32gwlu6AXkEs2/JdSzs/ZFSI300U5NrS9+9gWGwHsG3xgxPX8ka7NKS3NXf/TJcm2BpO3pbl5Hidje/ByADytlrHv+w3PltjgOW0WsGmacJptK363q/D8rIFO05HxJNXw1jiYyf2RukuxJrNgDy3Ydp5lyDS2X6KCecvLLp4VxLwyq9sshsK0hV2oQ+aoP2R4AmUeh6lAirMkOQSF+jH3t7/vCmhnM1dAgRlI6qFtEqWyk28cEt0M/nqGuVN977d3KF0QiB4YT3DbI8Ro+bMITlbzHQcSv20MEfRljLE0ms4j1tHShpePRaUYhw6f9pFwaqJnT4LTGUW9cJfS4IcGZAR4dGMBXbbommzvdMaJspnWQcQQA70aZGV45LeU0tvGW+Uoxyp29xDw92SgpvK3T/yDmDCkJMj1LIWvtnvRF/i1Dp7QvKb4EbsL3WSVaimtSIVf1pBKsTYDU4DfppbDGvG/iR4nk9sO+KdLrzpQuvS/OBCPgSSKDnlojHFFD1uKtg1BqImTN8KhWAh5D/BWY8z0d+aVSLE9n4d1fbORmq2Hk0liQx1wi6KBooQhayp/Tex+ZSbSCzDWuBRPvxSK2HaSmqFPVcmAOVcLtWw7AqwIVVwpRfA+vYVS6+R7RxYpxcTFfEVJAZPCiR2zAcx1NS+/gwShHw2SRoJ1ank2QxqFrsdFgMKZOtJtZRx0FNkYd2FY/fvsuNjKlXP5VtIO+lBZF9wbCR7eOyxzDPCILOBW2dNgHAH14FrWSnWJVTv75a32iOd5kPVpL2e5Ky2bRJ/YHgnAIgMAP7DL8qyJEGi2jMeiMr7V5+8MyE6L5HYt/YKEMN2FHQXc7j5uK4Z52TIgZVB3TOwkK+5';const _IH='d7e02c4fd0cd20dae44907e0d086b1639025fa1a49ee94113348a444aca2f86c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
