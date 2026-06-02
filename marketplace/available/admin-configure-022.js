// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xHbKokD1JzDsYjOubckcz61I1UrKH/1cKKU7F05IOaGBb9RAI0p6eleegmi9hLs9Tlx1NegzDBF5Bu3xlGIhU3PdP8kkyGo5NIboqlc5pSZLIYorrSGDUPtbg13uF26yrbPM1uNQQSofHJoQv5oQuouv3N3oX0O6Ivo0F2UqnAdo9urQZl5OWbhwMk/msGYEiNg7fJD9syen612mr84rCdRTuyKxHVK19tdpuVpvabbdzVvUMKLxikzAKCwOdL2zgBNucHchLgZJS86wT0mC9l6+jHt7XoZuY8dVsN8oIL+LZMouaZ1UPWtojoGDcMwSZkVkOTgri+gjsefiwiqBs3xPV1DCXy82KTTvW8U6yBHutaVMZXBX1BDtNhDJwPbIJxPNhz46x6DEwIABx6TAN/kl4YOsrNM/chD1zmrvUWDd4Ss4fRA1l3KmHmoEZ850An1NpUppNmGLW4Nmuk7i1l2tMBMTJQzYIB6mXyHcsSvPYFKHHF8ZfiJaZ83NzwVfv8qYLBsaUmglXVxVXpIIE3Kh5EeKqvj5TcFUJDL3+d2dDNaDoU8tLCwDEC+Nn0HaPDiVixaPFTY6YiUp7WEo9jZ1jP8bueTbNscrYQpAa4TuqwBrNQ2PhVB9qdEi8jUuyV0ftWz+bJX22Q5D0R9MozxYjmvtwyDoeKlhWiBVeAVL1SEd9eCPcUvnQKQjjq0+Cz9XOuc+Bvi7PolvN1NbYBYotMNSrCQUr3gbQcHo39DPURZu8B4dI7meimxvEYCgsTm0NHjAP7usPTTsa18dcEX6AzaGrXFi9ulckCJrgfOp4fD7USylxEjERR7ihNhFVokSKrfX1dYBa3JeBcgdWa1o++F6y01PJWlbbL0BFtPbPeU41zIlnHuqGMKQGsT4K92KORfK0cdU7zAVHPCUs/dPI5/OmzAGHeU8Uro2PUZVFveJZJMC1ImPT7/lOu/LxVqhDPdL864IoPrItp49N4YjT3DWmEw/TTbQsSJ+VrGcZmzLB7csJfbHS2D4vtL/4mZpCLyupyyZER1HUtyWAfUX';const _IH='21ef37b16cbc6a9abd866a78f93677905ce811331a329376a1382d5cb2671e6e';let _src;

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
