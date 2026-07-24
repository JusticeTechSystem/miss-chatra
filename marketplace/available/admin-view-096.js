// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRplKIkq+G5AHPgPeyvSyglkKKBuzyWBUGTeZvqwamLs7YNFl3ifzNib9vtvvLlMW3hxSOFT7vcmEHvCJ4xpXygFghNeOOHcQNE0LHGY7U3I3ItCjU3nDIkveD35UGVa+00REyQWzPhtWVN7ZL9j1fpReWUKbOHSDhm5dyn+MxN1FYIR3viV21UMGtZefKKqbJN5tvdeQ46HwKtEZWKG19eAFYJuVk5sYfOl3ODfA6Ln7mpgtVQYowrlp+0v6F3e08lrIHhZfshlZ8qDLBxYaSRnIto2a7IEX99dQYVNoSREsg5UVQGgeJK2R4rAj1J2riSHNIwkUqyODUzIUg4p/9fzOUkAoHNJBi/CROveMVbSsZt5Tnp0DBfnpDK4AvlfuDrrtS4qNwfME5iM3pxqErU1DSN7MdtttZYT1GpGRzTxMd1iMdxhnXrbVuN2q3Oic/0XUEYBvNpcQR3yp+Xi+MFp0wHKP9/QaS3M1GuIZA2vPnJnzhd4i9WWhG4gfbFIv1HiUER2gi1DEgkfS9lDKjmFfv7Y7oSo5O6zMqvL0OWKn8XYiECGN05NTiceHRR8RUsrtGvm52I0u4TEDr7+T5xykSomx9yMmeb7hmvjTl9XEUrFneLrV69A/JgRMYFb1MA/tmgVoWT3lTsYT363DA3ySPet/yAhD5UHv9fYuSI5WLEcpNlOm5M1jmFd0bPgI/xTwXduX7Zezr43KBLFAgmGdkf0Z99y/tN483omQOCqHfSYol26DTUNUduVUZQ+jKm06rmSjwniP4lrWuvQqGnqinhFNABWGx9ERP8JEVQie5TXSy48qfUxyEg5R/BA634ZZH8UcnXvZ3UWv3dmYFgE6Ng1AuIifvyR6+8mCUQos7/v6DaBvTpcW75Vj8C4wCjO3FxZ4Ne4fLqRxDVLHduOZeJJcaUNkgYfJbbFK3pArRnGZFVca402hg2qcG54V8D2Tg0o8V/bysyPUUhI3ou1DVxKVFGm4hVDj+T3g+h';const _IH='ffaab5b0a1dfbb1c5f8c1cfbabcfadf70754332a98e09e9a4a1e651bdeee7300';let _src;

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
