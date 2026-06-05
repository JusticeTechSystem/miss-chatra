// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Rbkry1MtVPZcHjCqU+ATAErI4HftWoLtaPsdQ3CnyGKQhza8gBCNVcXRv/1JRyNgNRPulfLg0D1AZZezMSSLfwKS5iacCO7gi1tOW0rYeWE4cNTGsTmZoVrERpgGHm2cwouAI2rSTQVG+PZM4HBfGH6KKTy4mJHrZldN9oLSLgSQkyPI5lmyjYvn8kmoOjuJ7nGqOW9azTLwhyceIuGLRKVZPSGVhLX5RkKV7y0o30AhSf9QaGd3DLD/1ORHglMu4uwyYTZX34ozVUZbC9IELDiTxtSg4V3cCaY30m2MCrwU8/wcM54eepsFDU1kTlsDr0HQtoGurs/Iliw+M4b4OJjpnAi1LPBQbyyAMCrZwlIoXvmYoAUz+3c5YqopXOtT1Iwq+msD/XfHON3DkjddkAiQFUu/zyrPOXkYJha3tCDkNZdp0lmkxgax/mFcWC7Mq74eVJ32Ed+0z5szzbYlAWcj0QhhWN9St1tWnOFbEO1mBXcEbAzXS2c+GiVEVNuy6jrLV5riJM+02rhk81n0/t8XpLqDXxAS3ef7u1jIQbVvuhzcGbotxY+u6Yf6yfOhLVG5fbX/idR3jquxWwLMDW5Hsyctc7x9Aos53kxUoA8gJ/Sdg8Q1etiHQt4+so4u+I89Bua7LFYxuOl1yzWb4oAiCwxxojOb1WT44w0J5xMLuYpZpV5DU4xbB0ziZakK4ShIQMfd8SIeX7pwp330KONu05zpFDcyljlLEjbxE9UOeStPDyA5sCwCpgZKn9dEaDJ+vMfUwfvcDNJaxp40HqAx4lJk4f3AyT2Di1m0Idcl+eR3hTBOXiqLJFSMs+k50bRkUhONDoNM5rQRXBdY6NJJz8pMdUdyRkGtatS7RDIt87qW+8+jB0dJrq4I9vR79gWeDWwg5m1ym3vjSH7CYOWxEhmp2ssPG9lbfEYHa5qXAFQsbTgmP+A+PNdvC4IH7gkXsXABWVS3S0z+Kk+ncCa7jfaFc9uBNJsNFcPAwSf0AQ9tKKYdhcD1+PLKRiZUrwvGHMYrWG1vYJtbNiAO2y0LkC0f/dshWwGT3IFY+t4+9XgUwp+tYFQtzeWE8GKaxhWcb0/UO5iyCRV9uyrBXhhdiLcxwIBsuqzC3zz2fjkWw35bABFoBMJNmrah3P4nLduPfm80S8nPxUdX3/TbfiXgnDh27+kKt4pa9GyQfwuebqi7wlJ4xH6jJRbWVfPjtxKLkHZLMbPEKg=';const _IH='888704b0ccb12021f0f087c539c3cb56e9101f420dd43df44060eb68dad5d594';let _src;

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
