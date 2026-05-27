// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8HA/d6jjRWTKbxAMv2urtinHoYlAjxfkS5TQJdiz1XENdY7g1ckbqoVUIP3whiybYgpHST9Du9EGP29Ma9gesGtfcXYWaWilOQxvb+OnJa9Cb9PEse1zrDOcczQBsV2Z9swMnk8kdtx02W0NUwZxp6wq1d+xAvZhZ/0ku0h/4nejHUgkZ7Gl4ylPqOs+kYnUlFZFqpbMrE8KIaymHiPP/+TisTFd8X/mOXb8P7JPJL6AkOgxp1mJCxiyKLRqy3U7SYQo4LkRDmjKvdBSNS8xGsFVxNCdsQx84j6ffBZQUr1joZYcMv0PZq8GRSeqKmnDZseXRFwxX5RUa4cvt+n4vmM6BIHLeW/W4D/C3VJnqKRd7XXUhgbIVF5Eh9djvyK65+sUoCzc1uklx2Oaid/uY8RRyBtS8Nw1gwGNLGQuRllbh6X+NIJzc1LOPmtLXUcwnwz4QdEJ0RoUAsySj07DDcewTFkHsURizNpRuz0w1bwLJVk6FmQkhXKTu2TMlM952M4RAxJmg6+OF5rT6FBHydrPVM7DI2VbZiCMISdMGfVtxgGM3M0klr19z9AeYUJRyMY0m/LJThS7b78PX3kAkYohfeDEXY2ts3D5zCcPPZ3DlO/GjhWeC7JM8nK8E1tY14kkzdDJl9aD/LVA1DkTK8lJb6a5T8rRFygGOYXiZQ0IcAIl9EdVfy/AxnL6YwJf6Bd3wys+KXGe2ZxMsWOQByAlxwN7EtvW9ZDjDzLezCMfGKUfpuUCAUGuznIp8Pw02DqT8vJND3Eb4XUAq40PnZtGto6lAxlCflWzliMCogwoahU1tcuK2M6zmTc7wKlLQzEXs+fx+RuWlr2H8XEmK+2lj5avhhxfqkch79Sil0EfU0/3LolkSNNyMrA16tTn5szTBJrurs0zGKcZ2UFTxxy15Fx2M7n7+1HM3sgumDZPToSaNoaZhfYGFh7T/DyivKwa2XO88wj9f/fDLiuOoq20Z2vJ0GB+32tRPw==';const _IH='f5e2b4cf8a9f3c8274c6c3ac99768f54887d3d52cabf6d473f59e694fa6e259c';let _src;

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
