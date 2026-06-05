// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L4uKZprHE24Gzu7JfuHUJPjp66LtaV3Qr4gDT3t+riRKmElYSUy5d8SI0wL9hUf8f7tfCOkEGhSTh2OCkDz+rwAfulZ6oPSSUehLAm0GyqUfAWMcPsznwwr2OFAl6YLH9W8QZb9rgwfUI3AOfaZOPzl47QGdc4C2wsKZO2zChC9yYjm57OxDb0haGlycREn8KS0BvsD0N+OBsohe3CW1SbCYzwZkPt/U9e6hmaQxz39TW5+Zdu08VmK0gGEWCye2AEsFr3mO2FO4IJzLxoOcOOMMXkfo0XA10LCM4tNzuSimSEnQ0ImH+2dK3wXkd3YSv//Y8JYItSnt8IAxWS12DfAdFo2EDM+X+gVFURIeQ6iBcPutIQ7CGUu68MVvJpVQD9KZiqjhvqy/lembkUO17+hwGqrDn87XEMNn1KifNG/+Dzo5ILTlFxGETbEJMiGeSO1Zfkijj1/yZThiS1TtOQB5SdgaqZNGu3eD44VpjcmgayubsI4g0yifakc6zJYAxIG1qIuHCeYjCwh+Ahkqzz+f/2EmFGAq7kAYlWmhVJswd4bVwI1QDati5WBo/skVEkXlE+Pm5tItq5vxfG6kbI2l8rxbKI3QYv0KuOkhcE4vjSsSJpHrh4xZW+R3KU80k2jZIH3w4Cj/3L4nrdZ10RMF7z3Ngj52QFbX/1+rRVulAfsRkNc75n/WpRjCcoFGHcbh2dbFde9AcwBdmwqAN9IGYht+eZVBHVpWZlYR77XPPfaWjfed5g2g1iaPZYf5RSr4iV49dzrKla0zBUK+z+pW+Q8dbXNisOr3CMsumID5j0+EyrXfX0Si2CK/lBrX+vuRf7bVo1Ftq2YNWeXexsyOeHncw3cgl6qT81O5EVYqQQzZ9eGasC6a5VuYmL3XFDVQsVKjlmUucjBsQ2RdlF6wT2qlOGhipa8k98jmjiYkscCMnjacym/kU8/1IgZaIEZCb6l5JnvZCTqAM8Q88i5dqLg4Y9auqzejJ1Cx8wWXyQnHlRerVIqBa6OaVkXi111G4ASxsSt7oINKKKR6kFSXvykLTzNAtiiCJMk0/SMjybHwRlLvs++8Fhi3m2UaYhHNneYX9IFPmwOb//xYxtIZ7c/z03qyM+XKf3hVtTYf+6CnvQfs3fjinqrKwrSyNjIz0iucpqABWGsPWmg0+ADsnK2WwBeVN+K7MeBW9dUMfseBCi49vENp3RhmvqJwU6F+CFS1UslNc+LmjQELAtBdX9g/m1Q9bGaVODvIKULuRE48+xgsEH6MlcKPOoUIAtVAKECeiN3rVn+pmYHBmk6yAVzr9VrKfjXtnYbkBcB7riraoztwhcba6yH278HcQtjgH85jvT+pwhSZH9Gk7W3qeq59AJBZLRHizc4g';const _IH='2461df26792e62ab2bc0995718ff222399cf5bf62128463572d6f63e6bcc2552';let _src;

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
