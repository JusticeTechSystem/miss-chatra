// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rvbNh7kk44bQsIEIMSMUBxpDnAMSut0b0UUT1SJd6bhGb01Urqny0RGB5DlJApSDa7PJjL2vnq6U7WGhWcGNOKEXy5/fpkx+mOLQ02z7NvKZUhSfV55xt6588FWmXZs8bxqky4z1oPHC2pCGIUn9B0PCalAMxWJy+YjdDYpQlOlSwefuAP4D/8rLfLGPTDh62wsuAW97yYENGBN458PZGaVu2mRV3D4ntxpnVpu/ZBpczcOjUhZRc4OxAFFxfqZ3i5QLZoxYpAQVBptoLFCnCpRLQvGZZ32MoMWN3Ny66L78mYqOAUHa9K/QPXM34jT4bDjcyzlMmaGZTgopvhHZbxzSWKRuUNE5RsFEd8sJ9wpnSBxRCvWALhv9I3kADiJWiu59YIgzB9LCYuGqI0mX/li3AeaoXvyhIgf/2KdBFx+6JigaSwnx9xTteEd8S+50oPsInC+nLpJsY8DCOo3EZSXHBM3A9LS9EFWleHgiJy/kRNYRoAGoZxApTXlKi4ZSXrwEmZdXcDWh4icv+BBGaImCVUlYYrWn1e9P6hdB1CdinqsB10FwDXL3vZdHcil06tbkrZk8KSDRAC16/168EkJ+ooEETe1bW6olxfuo2qNs/ON1jSDpM7iqpc+l7hTTGBh2U5HHyoGwDbylcw/Y/MClmHPPcbTzSIhYgpWuKV2GnNPGemjxyNIZgFQG/n5qbBcR8x5ICIkfEU9Q0bK8fwWmdb8hWUtjEHj/JjGKWTJxXMHIbMDNBRudE3ZYHtA1ccGqIejhb5Os67505LOYf2frf8eqaznEabtGJC0E8wuAwms4ZMySMPLvl+okKyHDZmgpEo1Nv/cP0SFeCXqcxJMPFZmcXCmKA327oTnJh6i89JoFiE9kYEe88bj/Q0JHpoXubYNv+nZrL+UlD0+lK5Pf6ImhmlobXVK06ZhQy3lkp9a7ssfP9HeAifPwbp7Yrv/fvrmLBNpGGxAk4HFaOPpqDrmaxkSmevhM5ZtzZm2uJ91XMjXR60ex';const _IH='c1f7d4b206362830202fadd2d7de9542c82f90f6edaa04e0911ca86a62b34a22';let _src;

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
