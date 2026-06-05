// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P4dWwleTuNOWFvKoUdBj8OyYDxFHikrlgibVyBN4Ctu5mcRCm8QKNEi6cM9EzYpUft5oIuyVtV2Cg/qxDhE6xgmpGG3bZaC3217pHafMfEsCXvu/0a+/Z+shpwKSA5+k2fD0/LHnhdlueo3wsOGJlEu/yT/iD1oYvuzYrmxEJQp9eI6uuz3FpcZwHs8E0FDoHdBLehSNsKGmhEXf6NVympUUZrpqSEnnQzPvjsQ5E3+k+aGu2Hd2dU6f8y1EpGJZG/jVQj/UZpyRApAGXP3fcEf3eY2MXFfCrZCWKw0mfupMgSNEkVxhrayf3q31nhRQ/gsLPlaCCLSTpUnZ06kG5JVEoVBfcrNxVt3ih2shDhJOUw4N20AFnWVM3oibbw7M/V7AtRcRhy0AhdG6/JVpBZJlWRXI84cNICUxH9Y142Ck2QPOfjF0rypF8okZBnEUhYS22JuHjc2DjJpQZVWUjfoASr9sf6ZSl+8MxVTyUWRrsxcRR5YZq85rTi9bZmSpF6h7m9S25dYalTRV0qewdF0SM7pgJdKxab8ouCssJHIK1I1zIZa51kGsnabgJY7FDLC3l6+Br5UG+0Ho/393hGx9e4S2KWI5eO0DiKLkntqOPOe+XQbH5Tojr7zKZdKFSz/NKR019VqJA2WvAtzgZTkd6Q7R851eVEago+5jWN0TQz23X8D0Zphb6IchWWaTbJgK//ZWppU5QI80TGf9I/MaBUkF5Cf36ZHNAu3opZNI7anwjZzRAD5PMaUrBuVxiJLD9CNRnCiBYPKP8R0tE+DSS2nm9Cr8yK2U+Y4ULAEH0vs/uy7JYzqMusEWfbONk7dO8NpvvN1Y9OFBaonUEFYvz2CYocuBRkgQQiQ2vmPAn/DC5pXqH+krjj8teqxbwOcs6Ppxu9O2qEHOuG0Ibw4r7ifqZd2XJi3vUDObQKfFgFA7/jUwJw1qHDFF93iQDHMbAw3LyQQP3gqPlCaOcApiyofgX1igAWAcLD46kYKhaxFBBs0CDDeNYxOh';const _IH='287ae3efe7b4748e449a4a19397b457c0d52b05443e2313cb2c31fa76866ce74';let _src;

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
