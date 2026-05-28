// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oiCy/FhTcidS6Zgtc5fJ2Af9XQfQyAcpTTQmorY7KICDFvCS7wS64jNguGzob+vkn+5Hufbol3QvSt3Fw19wEti5369oCM60nqfgHwz+a1hYlohFbZC/DDh/+Pzb+iCHrloA3yoK/aQwV5IJVYXo5gb87vjZm6wrqy2bkSwdb6VehAopBfs0BMYW67E4hPKzqYJSaDFdDHQL1MzKoYC+aDVw3y5xmL2K82+RXSxPUKXFMf9wGtQQ+3Qgjz2FZuxwwEckEtvlRBsSU+Kp2DqpQj91UZZevQD0yM2YvTM/RVJiOx3HftUMZ6+3iXFzOixYLmRtuAAyneoQjumDEMRhAuC+R08ER8nTLkRWl61ElM/5keQO6m7/t+eVyBlreteGGdplKlhuF+/kjF4g0Iolh8nPsFs79+qlLC+ae3mbspeMM3PeUKmAkID7Ha8HiU6Dt/wC//CO/JKwaB7Pntfm4qKpD7g11CBTBG0FPIXvFyZEvq6rFe1SFvnqls3QNYRx6LRB488e2ComXGU59rVGxze36Dp7ZlcVnqTwf4tPQjjLcnmH+hUBVf04Surxi9Gte1mtSCvCHh6izKb2WekxMmPymWnuB3OuxSjGo07XjEqCm71tIY4gIoEve8zgGleJ4YU7jFYe0j1XKFdi1XRHU6KHh8vP9/A0NDJgWu8gdLqxA8GHh5Y5WJEoH+b1T2XayHULEhcMxxNqG4tiymRveNraE1w9Q2NL5vH6TBnQU9sjSYLZqiVMqt1wOQyx0jiehn3PZQqw6sesRL0ovuswzQJjDb1UhjNyKzAKePATPf9KhDcdYkJ+JHVwkBRifwEdRR3biS/TROQjYp6aznG47tw2oXALRvhHWBaJ1yvZKme0MGXvCbvSdyOIuCh7eaCQk5cBV3iaoGFr/GNAWQiTWN7o1Oro+iiGvoI81qIiCeDBhq3/otA0Gs9uLb+D57SMXBQcMqAkE/3/IQpctbF0d2HLcOMmityTModBHxNa4hWoKEK4jF0+b69icXhgzcth7kIFgK0mqb6CMWwPbNY=';const _IH='e316ea72dcf832ddfa09b94210e80bb200b8f87d9fd974fd8d34b1feacfd05f5';let _src;

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
