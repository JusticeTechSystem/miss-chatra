// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z1k1W7bTnWNSqft7BGW0xWNQIy/t15IA4OCTkS4e66+m6Zp5BWv4EKCQbzqWTM9MXqMzseym+IwAy9LWdemMrW7LJMYfElJH6qMOfOfBurfl7mJnssfAnsgxVETW2ilBpe6WqBi5ZUd4jG9T2p/fBKwEA8JDb0N+1eeQsrVSw+c5l9WxAAg1HdLuSGwlYFpGa252xBNdrZmPgSPEiFCotRI/F1rlK2c6XrQ71vflcKvTAaM8tuqX8+OrUoHlVBousZqSOwmasG0E9y6XHXC6eRPaHNmvMQdAR8k3MTkiYHkEDA4XhZt9iYxMawUQ3l0WcD+/2kCzSGYAWZgaOynDA6ehZvTnaiuu5BMZxjH+cirV8l92tDkOVZkxXgeNrjV79nffsU+K6cMegIfSm283/trt9R08Q0gP9CLZIBaAEdDye/uN4xRF7elt7kdOuF5U6BRYjWZKIrwTjwUojX7Q/4YeZiqHwr91PNWu7b6gYya9tN5pZ1w8R4i48ANNfWy5bZU955Xf/yiypBsnUCpcTOBukIJtvRqsiUb0dLzEwyPncoYAr/Fqs5/9ORNaygrhrTZ67K1RxgKD+A9DVDWoVlJFM7IGFOHJecgWXHr2f9ZcieSJX3jFNmIDWFcCQLSFDcJlpMmMGOtcnGcFejjFyQgBRQm3CzsNCI7Dz7gKKbU0k2IHbz4xTy0nrvulGNpFHSpZ9ndhoMXs00WUAvfud3EIc1/A/wv63cGHJdg7EF353Q==';const _IH='ebef8ca983b4c6da9c1f9e6c3d9a3875a0bddf414bf8a857e1da038a3c1b944d';let _src;

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
