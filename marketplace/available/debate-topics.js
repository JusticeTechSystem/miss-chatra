// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0OYM1RYDcZl0RkcJPSbcYjY4Rb2M3X5QP7KJwCNcZWPC3+7cXm/KD+HEJOM800g6V7U4TvLkz7puaTki+r9vQtRCDEAOZyREnDj2X+Uj7gb+HVtLxxpY5BYbbqumAE05Q+77HMAJJ4pKOWduanA3jWHmmgbUKxsy6VKQS5/+keMAuAWgjtiP7XO75qNMEt2Jvzqp0yP3xWI6j0/pvMElmYzRHqIB44AW+VzHVqqNZA7iQGdLid4GhsqGrbBOJWMfR8gqNi3QcpTm99JqY9fdUz2ddAkO2W89HJMvDzuBNrpuyk/nwY8fLx7YZGuLdGQQA7sJcpqnHstABrwMAYkFjcrLsNEMk7OpLu0tTBSOhpugadLluu60NqDegIZjCZaxnLVGBTFt1p/b1sWUZkRw8CQ6f89DCeFfLFpIt7wzIoB2jJ1R5Uwo9B3Lt7XxgZT4Ox03s7jc0KbGSC+nPcI6yTPzhrjz1uvuBKJFkcFdqGGs8ejkKj3IRHILCvsy04GNCy7W5NNxgRRMzz2e3vASzZoWAHmDcSTdyL5Xewa7ClAjeop6O4DgeUn9sM1pSSkg+WoKGPSeBN43E91bVyqOT8L3Kml61QwD42KT+rrWCHJ1721jF2XTiRqHeF+zUjKr3MmdFQbXEjiFFrZzuothbCcQeUWjS9SKMY4swrsliG6RMnPgVV3Cc7oehN7mVG4uHP4hsH/NQkLu8YTy+K885aMpGrcZ3biaQDNn/awIMVnqkx+5QmGEKBZnGTk/s5GwXe0ga4fsLuapIkC2lvuww9alh8nTjfHHUbx2UeMVVPO44hOBsNaFF3MooiVaxxGvD0HZ0R3O6BoKpbITCgXbtiWvCiJUOLythVGG8lCREdjDn5+8VJTQ+x7sylZquuguKCQplDpg8KONyEFaA772JQaYLDVpYskgSjuPxLcjzTSRj0gPgs/5/A9wp4HJ1uP+EXvyxtWKDjleSN5sBzcrSEqQcezG3V4ybFlS4sR2VnshMy/8z62Z88HgKq64bO6NPkXlzbxT6M/21oUy2nxiNe3rP6xlWdfHsTw7eABx5/QAjhJdAzkDHR+XMCIb3lleqDayqCuAlGcQIBo2FEty2xyzmaTvaAsllziu0qkE6YWs7AdqQt0ytgwA3MpGasAnpOp9cGZuOvWRowFX0a25I6fRl/PL4oMgzHdDHMeh9uJq1nYcuQ9pIDwT8UnnvGbJK7gGArTbRgGoVga+YUbPu4B1wrExmeQSOc9XR8QdzUPF1v1lyuQU3YGiaiyqI0GH2qsqk1SkGCg9ojE0uvAw7TdzX737XdZ13d8uRTv/Nf2YVx/2+t9TB6HBmwcKHiPEQ/HrY0KAl/Bej2HGbNEn6+DXKrreJrGwEAs8qe7gTyxz1q20sz0vfiEcHneYYkumtzH3ACALT4HK+dxPCVAxO/hpRK75uL4QY7Vruvbe83aiPzTJqiZa8VpbKBINORpcsM7/CnNBhDldyyorUsMhbQro/nzXorxvYpin/p4=';const _IH='1e8e499673b3921154b0fdc7757ce67c9cd9577f2a7a77cdba62f7f01e0def95';let _src;

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
