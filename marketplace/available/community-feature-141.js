// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o9FlbbXiGcXvwTnnb18eoqAyRuFUgQh29NUjhZVCWQ9iOa36bh/Tp+0khA0sLMvVgyzI9W3PhXA4SRJnI4JIIqBGAqzlUhYH4TQdqdR0s/poahEP3AXTcYro4Z9yWtNISt6fjEOtNcN/CwzjCOxTMwakViT8IyqCAQfJhwU6hgvSs0181PdgS3a3i23m156flu8MelJFmSvOOBdtgE7xYTP4QxJsTOoZ3ypUQwCiUWaUutdRHQ5YhAf3+OlnB4HMMOO8oQJxHNj8Pb32PezGA1bicyvMSTDB6QshcKzqgmy8Hh51fPsHwJ6I4tULa4sA3ixHPQHAzWMY8udzenOcXjoAKd6iRvWEhTp+JhFWsyv/uh/ISBnPxOxv9VTBJqoPghJ3hVy8yusIJXYkIxJoz/xtcoOFU0ibFBvuN5t+UNkqlvVQgYRcZcycn8jHGcCnuqygWMZXP9ScjkP5kEk0oQMKFNABjPmTPVh6gNgwNpGpJMbKsNiMJtfY3efhrWRMMBnu9KSecSpG/pokp0An5aacZ6A28v6JabjMA3NHOEivOjfECE7B8IsS9X0fQIucw7hKTtnQV9GejRxZLCaR+68yAWFSoTyuHBSsIzY6tdzfmDrgyUlNm2GIMDDxoXndahkrmlKaBKrLFaXkD2Dcq7ZQMgovbXZKgx9j1F38bge97pBOBP3PEATQPDCLoyiqnr3LPSwqPvNAxw+eC9ptSU6E6RUAv2Ko';const _IH='ecbecdf80df2ee78380a03c2e9ab4ee9a7a32cbc9b53e893aaaa059729a65730';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
