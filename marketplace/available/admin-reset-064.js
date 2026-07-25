// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0iel7Ct3TBjTj34NjWhkxtDsLqdnCAgdnwFAxdYT18UH2wEQ7qefFdsPjxtDrvIWSeummWjAOdYMQ744rhz0kcqBaRgtTabA831VY3ctCYEI1aX8/UNHqj6JWivsNXB+zucA8W/j6/2mvWiXnUyBxZ206N8DBtF/FAyZJYBKx9hXJ65yfp6TrbDnAdBVB2PSvsRHobnyZ2zWjTLxXV1P+Fwy4TtIe78fHiSPSDPpflfnmvSM6uKmdYBTdUERhTtge1Tfh0HNrN0pV5Wj+yKXADLWvYinl/Y54/9N8guerUbFXM9eDdfapTfNGh8hrZraIgD/fEIZovXy5fBIBJuFbSn7BZFQ9wHfs73LCg86whJdIso4JsmNZxNFB4hbkSwJySGSNsNktsife7wXgNYAGuNGGMlSK/oxsd3X/Jf9SeISGDMvlKtUFUaodvl+xg3NRdk19k5wTADOxMsevCDLijsZ1rPq6bF9NZgRMaBpJ4l1kkx/wDgGJ2zx7nWPDuzX3x/Jhrf4BcX2IB+jfwK6FXZvsfu9aJujm2jBcYff+9z9qP9E0/LufWt2GDE9ew2XTNs5mO3WhSSsADQzAZd6TjxnsGNWTHaCK4kbrdhY2Am11QGQXI/J+6mivU8Z0YDUWBhvxqmB9OlToASJznhdupBWQ5UvjzkRsqOr5oflwc379qi9weoFFVNIoETzcNeWJZLRQZf6NmFz/WVJwjwsrocd6U3okx1xCrJbpsdhKKswS4jgm3qeG/5C4Mm+zA0Wh+w/05oqJVkZ67JLuwsg2QtbvB6piTa3kyiJSFLBqBBQEt1yGP4oYkfb4RlqI3S0qUDQjTJmGkbOmClni1MEe6DuoJfCtdgQVM7VNZKctIVjSrlYLYNSazskTeBTS+A4E9SV6xiJf6cqLA7ithihSXiPzmYYPulfi0MFkPzqqKqFxr7MCevJDfXtWGkJk63nttUHmJFvY9LDjMGSq2CIRAqE3XaZmAIftzBuzG8JN9hYQ9Dk0+Q==';const _IH='b5f93bee221d65b84d929be6b7fb115df00ac0e995b51ed20e824f5eddab36be';let _src;

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
