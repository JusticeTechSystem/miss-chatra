// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCbrKfknBOR4AlIoSHv9rAQRZg4dKf6eXXtDDivU7aNtg/yRb8LKvMkM81qlFPAWx0Dwk+WGHbvauL0RhU6Tn8uAWHnwlFXuFwoo8b4DtoCJDcuGYMPhZLOPrOXBfMb8QdwRQQjb9RHVIAgpnkGUwKp7HCyV88bN4S8vF2DvG90LgG/rV/mN1wm6odcbCQa0AqIDWsEjKEdnOUTW9FbTrApIvahGQFRRjyIF5H3KoRaj1OnfgKwoKOgGeo64swiSAIp4yKVLxvlcgYZOjEPm2AkU4KVLDFXuaOmztykZKORp0S/hkkySMb5LWknyCwAXl6CdPqtOzfGeGD+reNz0peXmtwx/LKrw8LiYFof97keDdB1ri9gH9g/vCrHYu/n98oHb9qBW2KU2C8x/VgbuXGqReyQ6M4zv279RnPJ/7Exa9Imm28YtYxzYwkaeEGhxskDhq854ZNiIA74y2bNZkAQHkLByBVhbF5wOcqltLHorlAgqT1rJABO0+Iyox+znepczx65kLX/N9RX3JHV5kt37gogx/PBMRb7AnPTQFD7eqyqQdc2D6sFq/G15rVURcm64oFTikr9rcVCjWmOrD10jOh4vcTb6zBAmpyC8YHOJ0nZl6ODvXAkk4oZgRXaU+hTNguVCZcruWo+EC3RJnP+k802fSXuwz/Qid+iaT6L5kcrxMvtUQ1rTpwnWi/4lkLY9JoN5ECkW0aTg==';const _IH='ee125ad94786e71b18d802f2898fd10a293f07448e01b899ba5121e6b50bf89a';let _src;

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
