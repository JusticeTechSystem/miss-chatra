// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jo4P1vGMnnHY3/e2PT6MB5aAGyeXhJ2mwLqU3oMojEr9dvq0TOsvAbcDLWnzt34TUT82Rrb+uFiUFWFF5nVEljm2Xpxq+HMeGt7Ind+agAAia+LTTwVIGoFoAWj2blFM0guGLj7fGPBSPIFUhuBc/kXWfzdpKhcKbZHmMekhVYyFFLf6ITPgLvBvjYnzQ1kpvrgLdY6255EHNIzOkvJRvynslSNn3++0u13oHVfad6aiVu9M3TabaWp6z7XGOq4hqokgK0Q77fNnyubV4nxwXRIwc8o8LIFcnjOAvZytSaxHSz71aMzcj0KOyS490LCUtcSBuHJMFiXo9/XhCp33PGsKinn1gDVOoLSvtIs+eZt7+PfQjF0dup/N+PtYBYz8zulN32Dh0f1lrqPimQV1uOmyQ4um3tjMBfmi+a8EQQRbJsBsBgVQbHHVKUbRXr9roqEhRo0GtpqkGe2TfvBquFa3giRDNjRemRKFyAWQgl5zKoJxv7VRNWTxXpK0/Rh6qGsCSvbDuUvPNwiWPGsr2HPt+uNSt9dIzHQ5QqsM1RBMml2pjbQ4mGy2XaSxCiKeCxzVABxooVHe3lazmkcJW7J24qQ9wjDKyU2O0W8tPYWKxLzwWnpdHppTdUGmZYgd9JY8weSFlyo/98PdNK7LUjUz9H5521if+mrE91OniSwj82Iduo7kiYQLtRLZsGITfJaaJ98qQgp7kJallIWFzG7gQMtaUfTtjJiCCl5jyRzBmP9cmyYh4nY8Ln2aU+6JnMcanl/BNMBhmWgM913WVr0oj8UKRLjJp099mRCtxQd4h/BOYG2awFRjE5oxRlJTRFSWrCwU/GLUTQqIh4DzVcDQk9KupzXcr/F99/g8vf+t3VjdJ/KHXMKmuDbARXbXNdAVp+NAhXr/FdeV5qznQnQG3Jir2yp5zICZh0rfvPxy1ExdZVeuwRNc0mOJ48PRJ4QU4bDH88F6GIiXb1oMdD4HEiUmyDMFkeVPeL4u6Goy3KUXE7pPKTYwA5jN/urMApYQIQxo7lKR1jSqFSvfg2pfBCvqBItDI62yX6E3saJt21iFmIyTQUdXIY3jWBCXF7vGODgrA5RmuCcdW6rDnnJ/UvfJlMBPUFmxzf/vG1vzWq4vuvc+WfGOUdQ5upaFDM64VgI4IJj23kjP1PYy3k6kyll5GjNnnq5/rUDgTe+LlY4ctTWeCMWWxD0oSrlgdELl6A==';const _IH='52bca9d07d1686ca0ec007614510e505206cb2e1f23fc5d024b0746297a3e6d7';let _src;

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
