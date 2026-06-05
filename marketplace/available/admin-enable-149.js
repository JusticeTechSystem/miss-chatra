// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RqFFhe2Z6YUu6Wx+sEkiFkqcLcxu9qGaaCcAGEYQGjQQsYIPSRM0xal5/Mhq8wzFA0OQkDLHPomlf9arUOVSiE+UoJe9XAqLPLi0shjx4YX6rI8qK7mbjEIPJLfun8ideZA3B0n4DNLXxfWqVVAb+X7RZpDnPp7UDwRx4+I2H2iPNf45a6obvArmS03+SyZHqFOzYFyo4hisD6zmTHYAv70jJu+qr47uMyhGbTEh2KQdb6MX9rxLEyWqEPsDwW45zFUIiMStGJ5skHP223FJWVsQYybd63gdVM2FNk91F16J9Ve2Woa+14RWZKyqZC2G5yelkCuvP2QR57Rvjp09IErOZiyIr1EVzjbAoohVdEPOG0em7ANe+v7t9GSynvu6/Qx/c4CA6vyzGjVeHBvaru9IkdMH/iL7FHkyYHc3FRAm2P4ToNANGhABssafflZ9OKY44sfI5f14QhEu2ht5f8qpPL1N6ESvyrOB7GCyJF+WsDcaCNM0rZgFUOiUYsPbKmbn5EAVOmOpViozGASTqYl/T/jARmg34grNK8twJb/+YY1wN2w+kp+uoFwmLyX0k/TmYKZjzCsgXQyNzoNYTTJgMnZTwbVE5619dG7CN0LU8r25iSHlSOAC/Z3+0CWpdjOZ9OSCtv8cttU0R9/0B2uStPSJnVd3bpyYgpf8xbGh7NzZNh3+7V1Pe1m1YYpTPwUBotrLWHOQPj9S1GD+9vQieEK3cNGX2mshCfCWZpmZpaLSbldIbXT2W6rTnhsWG02GRZZYzbZWRND9nr4cy5jXzL2zCMwohpgUiSqhLzD6x+HH6AWfdrfdooMQCyb12LJ312brNKS9FIAZVgH6FAWSZPN+uMqaRGEvq5+9vFuGVMkAfIKXNSNgTQUuO9JrJl7fKD4DmIoUi2hB/CxiWv1JOWJ8iHZ/kqfgkNzTKZI52IGWU2+wSsJyPVIREgzr8jqziZSPhhuhb2MOGMXqPzWqwPNDWO2BSEjmMiEoh4KP9Pwxuzx3QjsHBglLekmWhQ==';const _IH='cfb68b94841e4d1af76797716601acd4285b3eac89486472adc46801b6ccc167';let _src;

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
