// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVwKgPf9TV1fILcxo8MlA2ZI5RlT+Ybef+PzmI5ckoAfP17FMnu3fJ5vX4+iEyJX8dkm9hkucph3ysNQHot4eebt1BExzsf82HRT9mByfQ4nJBXQMi7u9YtE2du7G77WXDxya7FKT7s3sxk1b2lH1Cdi/wzYeUxTn8YArLU4lWb6blPZf8SW8pBy2lVfJwWhi5UI0TIOkJv0v/dUbepzfh/QPf1oAOm3qTN6776iJbxd9jnAM17l9XE87qfuvY2h1ELrfnocr/93C0edwQkhwvM7/NQBHWRxyELNXkBfVU5ziXgIIz2z6X81S0ZpvkNJJn4Feu+h7dyyplepdndHuy4vGeShGu/nsIguRSh7ZxWsmGpbLhbvQjcITAsJH+yhkVjHHY2Xm8mogXeoIfju+0YiB82b68PpbGj4zdTLzLWIBQsOOf8lNxCehs9qAGeW77n8fTZfISrFBxMRYK7dZfsdWx4wU83CeC/tzt4fiPZNkhPZVNyMwD0WRmp2WXTjZYb67C9vd6LZIEhPstia7Ua1xssn8aB0E5vgkcmnwSmOUQ6BhjMgCJKvQAhsdUp7jTYzqBYfBcJ+TTMmPjqhh132Ky0srp6CRzTFPllDpHvj4lVGwzZYDrENnJxsPMm2X4L/oI3xDr5jLgQY1auE+fES9Ay/GqZajlH0egVmknwuxUTKObf87jKL7s/WoAkokASH10ew40+dXCUZwErpQWw1BOJRoa8BSe3iN0OCTN+E0jAtlD9QmzTZ5TSDQajha4b8yrEkTwR5+yEGrU7Tx2+JEex0LUs2kZN8qg9X2+7KUtTM6Ba7Wn1pwlGorHFNztne6/jHPryfiQ7tquj4n1cb3G2eBLL9igt1V3Ws3yEiCdPzUbqli+xbEjAEtgePHtx3dOXluRiqYCBGxe/d4NLn3U8pReO59g5ON2QTjLLr9NY2YfpC1kaftzWJySF32CANeIVvRZ17/5ZR5UiEeYsIi+vfAiBjnYu7MsTEcWc/4lD5Ag87bKQE4rEKDUo7yK57p1Xo6p915dRmd5sh6yEtde/9O9+Si2/5Bhz7VF0Ksfq1B+b3aE8/HP2MiA0yIIq5h0qzkQwNDU4qZ2o/XB3ln31rjlmhEwWhWUXmJhOhxznejBn0Dcnd/BcJ/BLAgL1llDTsEFKCR0uV4Ac/1wk+VIqRbMYD4cCRakIZXxfPdK4BNHq8z4oLz7Q/kaiWSVjhW3AuJwgXWbMALc4TAgbhmuQEk6YNaPQeZ2bHv7xqgnmxV5nNnH55U8u2mJVIEFuo34FKRZsUWk2zIB4omEaoGi6A08Lp5uhtw2Oqn+NC4buzCr+WEO9TTYzqvIvZ0eY9NTQZeYn3sdMfonRVGthIISmsHGG+b3CjsGg04=';const _IH='38cff9279cb824d05ddd5d3b6d4815273f9d545ad64a81022c7ea7818d48f9df';let _src;

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
