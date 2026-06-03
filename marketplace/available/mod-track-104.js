// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bem323OEGZ2ZUHbJFJ9whAxu3AM+YrETlqmL2l8VGHue0TljHkzpjUFKBhM8Q09SZd9tFKBCemMlthMqGMknD7DLdo/zXsu1zNtOcZcnInb7gNG8Uc89pP1rcOtOg4qbomofKIT3yoGWNnQrAiCbg/UDvp3bDtQvREf02Jb6aSWvxLKaIle/PJRT6vaMQEZux1Lh3T0e3tMt2lvmsOOxxH4Sgr1yLe63lV9fzx47SGlcLtnmz/GDvww4cs1ZZNQlUAj7LJ2tcygTtKEdICer+oKOeoyCOz+u4BXlljSembo4yqW/QKwtcIxVw3pUE2uazwXiPnYicYTx3Sb4HoKN/ePBQsLMKKkT8dMuwKE7ym6+wzsCCxPBaXaHOxTw4nm9FxG9CM4/c1ghxwGUbYn6cLv4dBNoeW4Iimf+/jXgup2P2bLbKMAoLShxqTVfqcnswkuLWp4fylmH7Xv5RDQ/x2qHlRRZ0tPDJF8lrFJfUrNxyJPG4UbjWoJ3wie3G2UjKz3kYzYGRwMCDQ1jtD2Yt2jzQIc6eaeVVXG0E5s4JgBXRLjBd1GumZLTKVJrtebm04zfUV92W55bwtUfBwBkvKeq7MdxwgNvkXLqhsvJA6i8JvoiNiTq7szsPvy0jnPAc6y9/pBd2+iUG6M8MpWrySqenZSya6l+MNYtErkMz0CiuWihzWr+kScRWOWRFkpxLNHuKqG/b4G3JGtyku+E7xCfI0bqfKxDL4LWJKk0Jhnhh0IAv3JfQvMgY+M+NHVctQEI/UNALC1l3To788MdgpmhKxcQqF00Mx3PuG7faavh6LrtAZfajPv7W1fAfryK6+FD5I7NmJiiNT7uq437kSYLKT1SwjH+8QeWPd/Qd+7vfpJs7WfgU5C3S8Jebkwcb03C8DlDE0qa/NT7yhyy5qqsDPlSIIClJ+xi8zhhNTnydrDAsnYAdQ+Fq3zMjddULQ6f/5uMaJcO2HI36i9HzpjFI1o0nJogJPW5sjLV8M3lLZmDyoB/8D/vQiuNKbiGUTA1i8SmPf13q+iwb/ACJ5f5KKm7hIdGyMjpuSRG7cCjxkeW6c/7K0GexRBRAEAgYXcy4HBkNIZPRwAiMgeEjuFw5Jaow9mRwtCM9kE6YUAirD44PW3XqWauqEze1dzYIp8+Mnk1o3q1mDCpubgYoFzPajeZdXzBZ/Vf/xEc4Tf2MwTZiKJpKH9b5AInsr1FkiSFrDSdG1iJLiBPOAbiGLC6z0MBWoy81ysw3eplfvijpCOQfGfc7X7/8BHJjSzjOIeVJ7viILY8deegrkfBl/lpNyjDWUWMuGEOr3ZC9/w+vo4GDeYWUvxQDHMtQl2X677NrVlSyJmTvRaZHDqZOMAj85FCp7cqLVfPfnGR';const _IH='0ec8a2cf8ebd33621ef274b7905f18ba9fc9c7309a373719058629ccd7fda181';let _src;

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
