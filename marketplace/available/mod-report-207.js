// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQAferJNxaazaMvsi2OdwM0YpNuPGo35hPh+kMqfp7ugWXTTCDcgqPMWwqyEsPu6xYMHV9lzJKrEuqBMVPWSgerD2xs4zf5cKmEUrJSy5P2txqqb7idQafGmlr3YzSZGQmnlzDOWDeOiBbXZpQKoEojN3z+k7sQjkUgqZjMS18ge+80c6a/QpFoYzXyQKUFHdTMMArYv1HW2fKNWc5M/OVHouHVPwiecPps0XZUORR2LYgf4lwgZWbFivsel+z57//xNnE8Wn3NjlG/HOGgAJeAyg64r1iO8Zg7eDMftv9xkqq1wRenNxkyuTzJ+RS0lG/6jaCoZOTBgc2KDZ2ASpkHodg2szjgBtb3PmwRTXcn1DrQfr1DPRrSa9r5IxG4aQdGyVCwrtwCz01jypHMSMkHUeSyiluC7pAlufgptCbTp6L+Uz3RHOG4c8XolL+QLp7mgiEHEZTzlBueLzyrXoGxefybYPdwCb/Km9rPdfa53VyYrereukcLhTeNHQ4Y4h/vCq8G4hCXAX2SQpUIx1s6p7S15hi3DPfyQoy7xfpr/SkAro9hHA9hXpOIF1LThVCheqvEuFjTG3p1I+MuRLSlpzMMwj8iMzNdZehgjoZvqaLjYeZZK3byNhuFX2JyKNb9UtDKF7w87+LDdgO4UgETp7+UkM98entQshFzktdEG38JSlUKqLKjmtxTLxcLOzJ46Ouc5yyzGwuzp+2DvRdLaeCeWLTOBnaUWEwysFtPfGXDp39nPZipGdQVU3BvYvZ0dToYbgddMDvW0lwsvPKUB665QKwpnyxDJOjUJxKGl/re4eq5h44C+qrttQUjJnQwxB8wXGe2wPZK3SCx3xdL5eeydARjqMQjOgoXgTcMvGKWQ9vRlKJsjEjD/R9urT4sHup6+Ur+acvy5VAwF17p1rlzqtA+KVlFqosO6wgBpoTZQIErejFtQScpIl4Qrghu5PPAKGHkL9ZRWYJFsMz0UZNyzVZtfoUWvVeQryJxKFlQ64wBRMnddTb9TPmGATEpRMJC3udIxF6DFvnkLcDTPsfX7KOrl00Qe2FpyllOe1SPrI/KMXbitbp/y1B3CWcefOEgK1h2VZB3CtD+IJKAPh6c8j+XsId4eNakHe4nSu/b+m0iS2Mgn8O2cksUYS7EBmihZSpfQNA+/QN2uow0euaAUF1zO8bQCWQRYYfykOtz6RLRxvDMzcUwJMOTH9sP2LC6EGqYiTU3vPNP+qPFdr1s0b9g7rA5v3XnkI+laluX6XqdEEPz8pGymv8lek8DBCGu5VJ5NeDol/obijwVKjeOT9kydoyJKVIIRYbIBTWhOpib4zZfrf+RmgmpBIXBsA/prTIDdJ8hXzMwoarA5HQvKtXjaPP6TjvKNQzz0gAvZMKNGoz';const _IH='24bd08ab17b0cfc7054bd4cbff594b381c852c53ed4a1db265aa276975f824e1';let _src;

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
