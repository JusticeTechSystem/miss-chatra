// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6sbhqt9XNvEVbXRZeYhmObvIV6vqd7/j4eRt5A+uWnYE35pnLdGFXxspsnLO9N58pTRQ993KvkQ2WFt2LL0+cAJfkgApskwgp2vKM1FTSnGfK4H9L5uOTnGZ71mnvJvqKOIJ8uw71Zgmaf3pHEfLW4Y6y9SDbJUQCurZTAzTkCobOikezPS4RCmMc0C4E5yce8ffQZQ9OJCd/30m21LjrcrXGpaAMi2Mt0aZtlkSSgF+5908FV/EG3oYXUTANlbNJTAseUdIc7u0/PR46VwoMpE+GLq4lGSK3O1a1b2Fizb4jSZxj/quZ1qVMGKK4hlgH2HpWK6nQQkfjK/mmVRWW1zixMHPu40/TYuwBe8wHTTt5MSvVOv5CL0JZuVkVlR348n5ce9aw0C5CUaFUdXHwemAu7RZtsKYH11jDCU7qL9TngWBUV8EOx7HILenfUnY6yp3QHJzDPh3ItdwzWRj9gAYeHAaqs8Lth8uzZD2fYLJQhha/MpdGFhhXo7a7Bv9p5DK7Tt3iz+3bYkXp15kTRlr7aqQa/EHbPchmuci8VEiy7Ra3rXTK7WIJ9mNc7n3qm07828tKICadfzUoAxqKcCOCYgn3mIo+LjZ9k6dpbEAE5TuZWFccrJ9xbdBI6sHlbwS6WViW/cLky77+V/yCym7OEvr/pjAUShfZNDsyZc7n5aPCv/0T/DFUAg02xEzQOWIxKCSikg56wmX3DXN2u6BVp4b7gG0QwJCdtESN0uq9w==';const _IH='3e66e18832a39e9baea3d7f52cc7df70e8668a51eab78562c240420d6f50e3a4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
