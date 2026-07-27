// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrUDZ5842Vf6e17Bajy9elOXQ9nWfT2k+hT24sonQguWw5EX3SLKzW5QkdrJ47e09HHvICFqEWuxuSTqVTihSQSPvmoQ3dd97Y5+LZTECmRhfEB7WXbJ7kwDLMzxgj6NZ5rUK7QFHVD8vB+l+2/64vMC4zB50RHS7K+Y4kpaCEX/QBew4XEXMmcPu0Y3FO0tmCxCCO8Y7msrLrZmiOHmvtysaDQ7wCAmVbLKE1mcQEcb5ZZ+icetcFosvOEFZc5V4HxVbFyi6ZKSnyIP9jkxOujq5sZvHmxa0GFLWPSvly88ZwH+TIEMttK6pDlY4HlCJewcIBkZoCZpjHTis/+R3yXM+0E06F5Yo81hcnZ3erwN8sUEy+PuLVdVwa47HWpkKfwdbSLydzfHupOu0jQWkvYXexWqunewzQ9QArKhRidlNoG09ZqHtVh7DjmZaxczAQYCH52FfznMQ4CBeelN8PVNK/6vP7ZczHXa5hMYBApm6F6Q+LhA4EKsBe/ZRJhz1ImLEGqSLwkCE8tbfm7+fuS4DGvyp9pHb6PEjcMHQSV1sefUFMVNdRs0LfkdlZkFsy5kv7XCosEOIPVW1HxvQBxXSHPMpZqCzVzLrnciHJQqukYl4bqET3mWTl5C4c6dH+yD/Xr/AJQ1qJ0UEQCl/1EGYYv2raRpD/1hP62bbypbJbWx7Ufk505rZPBgogZoCMBNpukVaeReX8CiJyY58Ciue/94Xmr3wk2qpso5p42PE03he1Y9ocnOs78bhBp8BtmocarVKsD30/lHsHGFWFClJFrhAVVrG5066/BkcugUqudCJzmaDy7PTIXp15QjJ1vAmdfXSunQuYiSfXsVzDujaqPTPWRQE4nn8c1EIouXUkTL9kCxwfoz6a1Xt6wUV6q+erjaJa57f8mZIDgjrrWOLydSoxpYTyTZQQGt6d6ZKzERjR/GJ6cpwONCcSIPD7boRytLF05wUOEsgEozN05sQbSPnnIwOlf6tcyV4Ivlwkc4w+W+MKf9OkfJcZooiklXU2G4tEQaW9AEVzDmjNbY/3uASTSjB8qGqcBfkdqDcl5BQhGvZ/vCn9pBen9Ki6Ft9Kyt4yKCAaJ7sUdUgGm9Nus5FcCEMKncRcrrm06hP6GTWwA68DiMbAKcyy7ySVBx3yoJe3lK/2PtCSnRYniCr2+oBHa5s9+jh9FnH+thfu22M+uaNqLO6GEm7mny/SbQ4=';const _IH='1f7f19e75bb9450ffd8d1232b32e825a4c51c484cc04dc848a600d566b2bdc1a';let _src;

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
