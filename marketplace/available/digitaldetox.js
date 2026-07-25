// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8EGVgUeGEzZmOD4onbm/fDUZyCrGoEyYMhYBiqBvIdGyqfwMQ6vL42x1YSNE96iC0CpwXOAinTx16J2ZRQ0sQUnsXaG1GKbbykkiXMv7/EQq0mgPtx0d1ozkeR7CWptbDT0xfCGoWeJbUJ6hdHv6X02G3tC/3oglTHSkcRrIvQZ+SHrQ5Jnwk7R4gnQcfsriyNtPPz+U9NUAmjIIROQY3S22EzHqq4heHVteFs07xLlqBU/iXv5JkB1LeDnEB0Qvw6XrFQr+adVzMr8kQ2V/A5zSvGQIk57KcDj+cMB7PYjdqY+V0hLqn/msLumYgY00i2S05fa2tfyXHCEtNE8TwTHPYO/LC3hX7ZOFlA57kqBG1lSEuZ2HpfqH5dnRbvWOGHpyLmKe0hgh9vVJA0AzXHP4G2yw+enEsBB+4oImQftw9tQT7ZUZqRfpgNmobh3oOu4riy9Dyx/lbiOLfyKPkhmYIMTlE+u/esh3zX3I9yhWZpvGl4qhzvvTkwwtpmzlxRFXAVyJhQn48qSdKyEWd3a+zHtdE/Ne9yvadW5lAD83eu4DfGxq5FIojSpW+o4NWsVATaHrZ25qKF8RTMDFKKHIEjjdCi00SJFoJ1zIGL5VV4ici8GNawYf5vKePdk0dkarcsWBUOqA+5UtjX5bfKN5cspZXTjl1l7HhktkCjy3hy3LPwlkVgriYg7Rf7wIX5Yl3p7jFv4c3Mdvd/pTRksLGrkDEYazUz3JK5d+6TzdxQ5VrQ9pe4E55sFXZA49w0KOzk+HXEiT7i6IhmWj9Xz2aDo1uM+DZJpOOoJZkgqlzaW/Ia9iysnkN+8vNQbfZhczSB4QhO44uSZBvztOV6FM/QHHy8rNYD7cnRK/LG4YTEiF3f0HV42/bCjVOQg+BnqkqPrELvJpDQ2Kows7LVlyEIfZuU3xDk2bfiqABT0uSQuwhVJJdYe7848WyZgI5kdpwCF4ZpZTlaGDHhhsCsNM4fZh2UtUEs6P7N62wSeq2CGKirVe0CO0O97TJVQfqTg/MVGoxPuSXmY/3OYdABv/akb7d9++VxD70i3SiToUjD544Bkim16zYcZjnO3wtj0o1ncI85L4gFSZW8P/ZdKB9vPs/mBIFKQx0hPfmPxPco/qWOxeu60drFPUjAy1q18CFZMYkulCeVbKk96WhpcD/ZHe4G5M/G65wJHqf/M3Wst9HPK5zw0x+357VpH+7qDfOyYQZYro=';const _IH='006a8543d250361571326eb9abc9e0e19cb1d803f1413633d5dc828fa70e969e';let _src;

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
