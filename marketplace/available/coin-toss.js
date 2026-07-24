// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRH5XlTU5KA55jX0VxxLOIe+fwJc3jVHb8j42QHbYP+asO4qaxeUU/xPf4N3GF/eQDccB2rWITZqWhaCGl0utlQaL/K+ygYUsw2PLkOE4PEfBwWE4Qz/EdNdWKlOydy27jQQ9J+qUYydutlTjd0GEECL5/XyHKIaXNExVvbbFoUEzLRdjc6IlXKSvHnOohRseXLhag7ZFoO1EEFyxHMbTIHhJc7lli74EmCnTAm0Ny/u31m3SsoAgGq/t/8II8vpzNaA2qykydLeKXbqRoh9tGWb3znIYtpupbqzR9+XrdV03w20YERzkGmhsYjSzQsPrUJwRQKbbPUG2mV/Ws8K0XZPcFxbLdkadmjyfbe1UDhUfDGzwl+3EGJhk8DNGHsH1RdP6LPtzP0cMBH+ATGS92YTEVbULLSGua4MvuZQWGcqg7QRc4AZSTK25EEW65nSrKzOdDDUV009EQc9SBE3qyv7Izr0gkRHcJQxfcxaZ3OW1g9j9mbpH65ZKbxEYdUCdQYHKoyW3//EJ+NR5eVJc2gZL25JW68Pv2QBNLIv6YaomlQoBbTwyNIGzLe9BiS5ZQQHbpJYT0f8HxsEcI07FTPABDy7MfMmHnORCR1ZtvpHt0/vnkTRIgB691fm1kUkI4sAyMgRQBahEh6k9srn5wd9t/aBbHWwx0VP6EJ1fH5vDW5Z7GJmb3pkhMhjDf8ZwgCVNjCxexqiMUTbQcPY3vcGy570f0jZYgFH56ETdR9Ck16H5fp2JOhzMbmVetCkHo/IQkCgC9oP/9l10ERqetlvUSVQqJwIOhk';const _IH='c35f4a66b908df8c7a83fe174b544729616a270b98e3efd628e6a95ceef634f9';let _src;

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
