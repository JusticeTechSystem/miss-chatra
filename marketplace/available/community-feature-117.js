// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sNZMo5hWwmlIGzmdNtxarfELh5K4VwAaGP7PzuZpurO7ovFMgMhOJEm8zgikdoQBPax8h4gevQcoX7+sSi2EIhUg9FT2H3YXdpzg8UQkN9l8yMyu1XTz+rl0hjiHCDxKD60uAnVCI0ZwkGPGkGOSaOsx9HvDWYTYuNgwoimylqVgAJxTQsBvsQKGEi7onkLYs7pvALWK4MD4xex4NTlSfymChKe0LoQpZpkAa22ZNGw4kGySpYx2nBz9UwYZ03170s8rpWA5G2rxd4Cn99aRkjEn8+LE78CUyGU1KUIgShHF0KZS24nrr8xiEpLQb4VO48U9wnqthX8UqbdQvrzj8Sx42VVEd+ZFNMN6czZuZXoCzeICF7afJ2a7ClSphOZiedj/J82ICMJbUxCKtJVyGiuKyCS2tmv8D7xp32EnX/VER71zFKfqAV9p2Ng5Pz4vUeob2vudNL6FtDXHU7afcefLORf/dP8W1st1IGrGccfTAejtvBQgiyetQt0Q1vYMPOPeDq3kDEwAL3v+LfqS3kirOAgoi4zi7uxSiZUEzTX9cyBi/PaIo2IWCu/diJO6oIzkX1BnzFOuyYThSA/xEPpd3LAiZerTEcDZ8cQYyLlC4imRq+cry9xjSKVYmrB31il/MycjWucnqcj+hhR7Q6s8mLUhhib/OMplYSU/+Q+8qIuyHSj7Hx7V++qgDU1JknA2AfjM7z/dH5JjJbw9O0BCSmYYXs3kqXluNcKSfBCZnIA=';const _IH='16ac9fa42508a3e7a6fa80fe58e1750aada859c4ba00477f557b63767dd4d107';let _src;

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
