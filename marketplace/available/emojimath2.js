// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w5rZdiYfwZtBChKgjJBcq40YDDJVQqNjq/bUEz6idli4JOorYWvRnd7SWq+/l/Urt2pT87+Bn/NUCA+wgf4elmJKFuhTZfXawyYwSSFKxw/P7rJ2FMalj+8ZvfWpKIevQd+5z4wbO7cQ7KWKCeACBjqmqlPwON7EVyvYcFBRu3ub5s4i2h3gyCabYq/C9+5ze8oOcCje4X46WnZ/Bq9nPF/QmsO5zuDvopHiApVX928JIn6vWtsysKBscH7Eu4Gm3j5SGch00JSaFW4Bzo0DKdsAk5rqRWo9CxuwHQzLAwLRPnPqiVhUoilDcyv2jIXagrde+16sx9WQJFe9BrZIVpQSfMfoyfomiifQBq4KCp/HJH2d1HwvnQKNi9A5o0etBe0p0mYyw7Fia946bnzzBlzRU1Gtssds0LtIkcSCnllkY6i+Kzp1+C8hhIYCbYh83bAHQotRL9xZH0YhajWvNQbbXl49adzAL1vXb4UwVT2wGZXWHAzmYVDJpi3eXrjX2QKFOuLf4RiU8titBN3hNwuBGxfRNXl/tfq5KhvZ9EnuCRYUtJR1oXCFuagWkS/mgDaLSAIhRg37iGFLgyHdXTtGuZOhCzW9rYPYjH1+8rA72heLClcJtRwPgvaNZdnhN+uRSJkaGmUThWDe3IbQoNEukJWRynNhIY+1l4Sbk2+XgAYPqbzxOl1mGfo1XKfK/QTGremxsU/vkCodqd8xSyhPoJJt2p/+eKzJKOMpAhdiHvlbMNwBTf1AQ2JpY6qHdrdgIQtZxkgY25jeh05KjA66zN2NkPOMWi9lKCh+ko/7cKnC8oTEdvQhmksLhvdSz0bwPkOLDZ0u1f0rRCS2I5nLiE2TPXU+SYn++n5lkR3QtCWxpfZB8/FKzXD1CEydEXga4J3e4vuwsJ4xr6ourmcFppHSQXKnCUo/f82ieVFd34U0K+yGiLzTLgXzyFt8DzufohzfkavEL6mmP7UJvlRp6Ke3zWRo3GwnlWWRZSr0oLKfZL0SFkxKTO/SjpaN80hrzLELYDJMsl0h+xGXbeUyuGsJrWNLOxz9merCHGvLBhXpKg9oVt9BU58s44wCQ39kznS2aqjaOAUi23u3rgQnWYdeNnoPFNwBBrC8jiWo2DG0jQEnM4fJjIi9HGs/fLDrgsGOFm9lyooTh/1gf/79qa/A3f0s9Sqpvb/vna2JIlQXJRcBi0w2UtUMPBw6XrUx8uUnVw==';const _IH='88db7807c25538c50809788d95ad31d766396bef0eac3d2f54ec0b8e7863ff48';let _src;

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
