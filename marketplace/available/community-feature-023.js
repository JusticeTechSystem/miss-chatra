// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRojpWs4fV05q84w8ZQn9HSr9+dRoV1bZRVy6wcAqapSwFggYSLHqWD05V2TwpuPKffnJibLCcwXJ7hqr9uyHSUAe3BayvumyrShsbtN+HRSBciYkOyLgfCfZSHlD5l/SrAucakttwefvSA+hXbc0EphY8aNLmqvbDS2dZU5mNM/eRSX0ZYzI7WRQ4LUlKZWZsTn7atxWVT3rmhoEFXB3RCbYe6mb78AfyKkurwYzHoDUEJPivENVa+VfKMZIpUK9Jg3eRXvmeYmcllbqAypiQ+cxl4rr2HpZ+35J3f5xzsYq9w2KwVegQ7ID6zRxSRecLdI62bQXoLtvd9muCkdejtk9H/ZzzIhJSVn3iqZBtwvjCdAHLfo0+WwZHJwlizIbQYBMr3GDKZPLsXjbEElF5aUvCzwLLHbIOWOegZnwH8AKjGyGF5o17BJuS4ttRT+eQhm7iMMj7NTcVuTc2UVozOSG/KmS1HqUeGtap5e/kOVyp1fEnvWGZzooOJeCQqzsuCl6kAYbWqv0Fs+/n6xPJBWMjYX1YYRIh8Ct8569fdAQWIbM4Ct2sp3NJLkFMDzrnlaTq8R2BTs0DpFrZu0+VIr1wWlxyOTjPiAWe/I7gI2sqZDbkmVRoR20UOEiZYiklqjJC1CTPKVZ7pFZOL2Z8YHVczCdgMnn0w5de+2EgdPhUCzcsP6nNZ6xFlfysiV7+dBduuH3LKb7xFh+oTsP4wQ/eq4zLSNZTj';const _IH='635925e0e92695804346cf61145a03d6b8dffcd4ad20a32a538ea799f1f42385';let _src;

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
