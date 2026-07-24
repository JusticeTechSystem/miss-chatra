// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdXp9bzoRpkuwgHgfrWNwegPmomVNbTGpQWK+jGVu9duZ0LgKfAsDrohA+qHNsuPo9J/fDGfxYhEJn00RDmNUC60rlexqfSIuP6LW/OChx5gnj5cizFXC4sOQSuh8+l4SJ4e71mUMafylkIV2Yl8stUpyaBRYqx3miVqAldQH9zJTj5ea0ewDvPpJZzyna3JwLckq97hkN1v4vrhGQR08Cr9EA0B/LHKQ7jRIJudy3o7QY3z8bLPTv4o5RrNUB1SZyM/W2hS09CUSWhcZnF/JERDHWwXGwSMXicMOE/C1KRrPUC6wG9ynUFgKfoe6XclNfWjnjFD2O13MV2//ehqvykOmmCxFsDjiKX+ylLphZ2GqFeJU95x+AygO64pE7EwzZ56sAPilmSF/9EeY+RN3RHdYDQI2XIun/pO6bKJUaYT8ibstL3Afoiyix1O39LqHNmdAJXNfDwijJ4Ieo02ed2TOTyS/IOvqNIyXf8Of4rmQ8c+uFZt0A4OFQytPJ+TL+Q/FqLJ/yo4InD+5PJTEA8pL8wPdb2UaheSPiYfC4oNX2ZIolOIhEcbefhFkiTXoSDMNUNYorGmgzDZDp73Uj4LpoxR9ydz+W6X6XMFq45U3EVVZV6q3wsOeOeS9kdCCU8IHjYOH8T9WaWKQJuLcgU+9mbuxzKiWa13SATDr0la2NDKJPBwkwBGvmCPh7UfPlqYsqGOkOXkOiqjp/Gixg1SC5E7m8SwvQQaRlTL/KvBXJ';const _IH='731f121cb14c3e971ee2396b3085d64f113b30e5ef2d0ca445b5d380be8dffd2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
