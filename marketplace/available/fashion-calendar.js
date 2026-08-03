// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR36MuTecHPyOQG0qqvKtN7mTyD/Jo1iDWmjdXAujMYpHzBbzWQIWOqnu2zxvQfNa6h95flOu3gQXjSpgYfuPDvYhIvNwUkJaNEIC8qqxBMU04bwcz5ykePnrGKCdNCw2tMN6KzLICQsnjU5iPCMBS0kAiVc5wVMDnMhEK1pFqW61QeVubzycAEsDqdLH/AaXXAfM7gqJBGImjEZ98JGbMvgO73LH1wfKb4NlPiVVne1pOhAfKwZYnF/UcRpBrxl1AcVANJq3AW4O8X6Twi+jOnyLGlTAo5XXz7o+TrHDnx/0i+6XAgRT/FCL1GIvQx/va5NtQtJycjqAbZSCsWCmySuqkNQjokKyRel5Iyh+aGwjpiKCNmuFmfTk/MuYeBzb6sm8spW/0dxnEig59XPAqkBbLpmQelRWQ4L5RuHSJAKMTncubw9bsqrW3G1a8bEJ+YpPPKFhPzU0Cp5OvodEVa4N17aX31IC34/dC06liRUE89qNlSWULKaJwZf3sPfDPnoPOraY6GEIbc/tUZv9j3QRZhlRjuJQxgdvEs8dJeHwraCh+d7NRZVrULqwoS5pX68P5iVPPYKqORkkiYz8wamqar4VKarItLThjaQmYl4EdVIPRvsMtsc8G/G/sDfCPE0z1ItCUw6V2UPn3UxoF2AwUKsHPaFtzX2U5bOOecXHGSfT2VXnaSEU7vG0XRYPWQ6z9jq2Uv0vIIjRNWVnt7jN+LJuOca+8ntUQOqTJuKMsWT0WncsdUPdu6wVrciJSih8EpIaMFQeOZdBkyCHSg5X6FzdbGy67Qkkzzm81ccn5femTpcUoSDQ+ev/FAQIYjy6mMbsOXHLF6PC8T8mLmSDSPZ5IsczOOGchkXgXXrhoyBDM0UpcN97diCipfT3bOk3CLQs/Pe/R8ccah4oPcb2vyZsbqeexnxzBdx4q9/WZYUhPSuwyw6Z8gJjViOohHw8pVYJil7hifx6+bvGcjSUfyd6X28iOrl0r12BiVnGQxTI+73R3nX9vnLGg177RBIiRm+xSPLgM/m17bEDJKGZDd4YaISihPRPuTOHrytVod5H8ZckAlMTJE46NMIKh1kmCfHC/YrluFzfj9jZEcp62GuF+hxddPo+i8Oej4m2iJtv5Pi99iHmhX6mMkH2DUG40PTkcJKskkRhH1tTujAVY5dJ0nHMOMKloOzF1AjLhNBz2+Tuf2bBteJ5nfLmyslpXdX10h5nW9JSG9W0UPcs3Kk0Q=';const _IH='70ca3d588826a5d51a9ec2c7a6a2f47e0824606082fe4ff81013607115b34502';let _src;

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
