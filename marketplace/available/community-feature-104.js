// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0U443/Ds6soRAtqitwc/l9HkJRwJfJYyWcfV0/UQIYHjXyeApfZZgHEDQYIYC91v6uBVJdcsv+eKl82+ygnxH8I0+y1pe+iGA3gFehx6g+vS0kwhspSaX7KYiss0dsO1RlaHyNwsuiICzbBntHYiXh0m7ybAlCKTmP9hxe18FiPiJ13KPqqLmzawW7o7mAgl8eCGuUNp+XASRaLe2kjMPLdlHUIwDOnl5XS9wp2lit55DkD/szi9beGmhLc6JIHs9T9F4079Ec3FbnKNuE8hKPhwkXeDR6T1XD4Ty+g9VH2RywJqqrLk7JzMbiibI4cHK2fTIfFWSJJV79j1Saq3IrMIaUYvaaIVkj5EZru/OnMkoirpjTAA0osViXjLRiiV9009rTA5NNKFi+xYkqs2E/NftZ7vX8lY0swo8TuxUNwzqd/p87Z+qONVK6KtOhRbnZWvt5/9oAVlEYIJpduKGFoEmX6insQc0eZfstKLkhvnujSQ807FeK2MAVMO9/Czc5QPxwLKxmq3ggB6r/hRJf7cPlikMJfkXvZTC6hz7MkVqJuC5E9Urs44RlctdmqNbv3+8gJJQaZQj8RyGI+0BiWcOiOz/zVwuLoZ3+1WOlpnSEGvouHNjZyO6EC3s1MdUiRncNOJBnDDz9RA4ZV1eMcvLXGqGC/JjQJtzfucTViyWX3nDCuLybloQqMn86g/BFZ3CgdVoJJ4FiykUHU1tBT+3lTAuCvvZj2woqsbOmbY8pIe+wc=';const _IH='38ef7cebc529c60c2b3389509017d4aeca0cf3e3afc4b031ee90649392aad1a9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
