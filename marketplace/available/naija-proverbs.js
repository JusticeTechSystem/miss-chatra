// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aRVdmpYFUjZLASOt1b13hByfttVxjWh2NPwOgngn0ZzBHb+U4jiJZACIi73pNVE+b0hOKdEe2kqPGfQvSdnY16auL4KCdKJfAj0HOqb8jBvdg8n4SuU4aXICVjylTJ5WI0gl3x0nMib+oNg5MfyoJa6euY0I/PeR+AORrMlS3s2QZ0QVEqz749OCzMda9lmCeVqoZdLBAh/64eqZuP+bELN2Tkx4dMmQT569XiojNhBFZppDlY38jpxBirEzyK0Y+3tgpfFvx/mhks4f7G5aqiJKX+CfiTN7J2hArgT3IWMaSeUFU8hEA8nRlqEGufVRlUY572vFGygNSdUffX+ePGZ+F6neDdC/QHBnAwIBg4Y6jYdnLOw4WyL13tuqbdhQK+rR+fYGILl35w8YJfc26DyxShH3fIXZeqq48x0fUZPltDtWs94snFD5bv2lxYpGBK7d3fsqa5YS1DwSks7CIlD//T46UQiXlQb9ohL8EbzRrgvATM0p0Ywva/VHFlRKm7ZlUKidKOXH6DvtKpmgTpI3XaAP32YqZnw2JPUbNMbP1oFWImGWJTz+MecU6hJPKbSyiAM5EQKVAo1b9oHmG3eWZvwbXXOc9wfzTy1uhCGZrGV6HFb/R5EMssiYdqYYGhSu61pMO9uvNQIPXWvnjVLzac6JAV3qTQuvS/URFZ/++pnqmubSmDyYTfRV8S2K9IYNKUCp66h0y6R6DEKUP7E/ExNnI7NwQkip+CkgCkRDsTNLtGvD/y7HOYA1CCvOL+Py9lHXme5wflrqC0qQ/GasaO6CCQOyjHXUZeIsCmZv4Q37KJe2Lf2OJ2pRT6G9WiLiWyZNLejO7g+m8HF6O6VdFjECLHEupcL68nZTKJptmkxdRtUAJqRvBHe8n1JuGNYJ6u3vO9nWZKxONVnZhTFY+MR63eUKhD9l41H36goxlynaGHoKqk1URohISGBRSQCaZU0sJWUMvKcvj2v1d2CnhCqiuAkDlIkVdOjdKqBGCFS6NO8Fi/7Xb/FG7DuroX1iFPiFSeqjltW9ClmIX8elycGD7HidM9lUbos+ybgEBn8PjhOXnGmU2BXLwJeEp6L2eQ4aiW+kO0D+x+ZzP4ESdiGs1HK0nxm3GO4fe6ZbFJRW/qqLhZ+89XGnnPpg8M0QAS2TOp/+oNw12wl26ghc3+BnnLIJcgl4Jg902qMFDX32MB0SErtG6av/hzMl3q60//1GeVZxgZ2pKP6Cl/hGD+/knzzTgZHvI/TpSTIsvPbXmzX1IYTgd3xILk5hlpJ4IgzW8RwANGfnUnE9fi0Xza3A2dbQdtwGp+JniWsQ7I+9qZO+P9n6buxEGzAIFLCkGK9qI9ghg4L7/YJ5eebsAenNj5k1d7vtWEs7Ge3orYvHSrB4fU9iYMPCkZOFySb4zF4yz174DrZ2CyF74l1bbMNx5dvYWBWinEnj6AtnbYXDkr6M6hPNoP0N6ZpQkfwzHJwbAfev8Ni95HGxo3rxBYK2ViiRXQstEwY2olmQnig+QVrhffRuynOh0pvX5ixpXagTREEYHdNrk7qJbQWzmgDLFATj+oO4og3g39DIltL61XppM18SMBFeFJA4wmlLOYTiukXDWEsdheBSoFWXX4QxVKw8rzYQIMn7UOcMBQT1Pyi5eqrP8XbDLyRPUSU0tEGgUpLy/+krYuFmOWTdGSb+9sAMDui3tu9kw8luLGSOaBi9sA5x';const _IH='771331085c0cda385766e3b51749cfb8cb887e93bd9c14f875bd8848db75fee0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
