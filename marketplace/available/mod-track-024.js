// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6XQgpiwrgWkUrzJnQ9coBk61ILTIa06SsySC8IoZQQhN2y4V66OPXPuC2ArIaaRPhNQ78XF8RsnVel84dc0DRX3nmJ+vsOiWgIOVmyscuhw8gNGM8HvPx6imb9u5zJfXqZO5ysDOGLToAJJodUin6Lk7xJgo5T9PHSDDCuqsJqOc8CrQpAYpTSVigBLitF+l6I37ivXZdsCSJDKaysbl5o69ZQmeBmthRgOJfz7C5LWCpmTV+HgPNw/eCS1ZAUMK7xrdyzkwS2/a8U8+kAewrzxVNfUo6zFwatH4SGBmfVpuA2jbmRjZ19TiyRgbT/P8qDVwqmBBnZiNWIKO12PhEhDWHj0iwWeko0L7VsSLidRo/hYhMfPZ5L+JFBs9mnINXzoeCh3Q/VNtPtlf6fs4cDuF8gw5i/7RTraLoYfP+jENUSXEvMsykcjGHos0mfMtAH5wnPjRry/mJiHJySlb2ByQFoekggMeSaQPU9Zy1SzbjYNCjUqVt3nd9eSM9Jg/sSI+KCH60GPYm4arLTDV7vetryutH0pHKa/UbwRuBoWgP+eRPvUhxwjwoH7xAZb/WM4mJTbMPf3+ShK27R96MhwBdCvFVzsH0tuSGju4upww/5lanewipq7cqWaINjhplxaNMvPrUPT1cgHEOVDmtAjXriIA84FaUXoyOpZGd1ta95BoPe4maZkrLF6nHqRtCdAdqH+a7f4nqWaYPidt043TXpQx3YEyG3TkKeeR+76lxzvGJEPDBrWn67Lpp2U95A5MvVlqyaAm3EaxyvrWsaFjmm5EyAF12vJdlSg/nTeI2oVN5GuI9bnm6TMdDgcvJuqaAaE07jhbh9OUkpo4i0XGNLaKhxa26O0lN+DaDFOIgB9yRno9EW1I9+HvR4VZNeGyW0kCknerzIrXv8WcHMotWI4tcMZc+FLbYtOskPCg5YlInQkEEf0PHnTCEqLt58vTTlRHGTZLmVm7e4ycN1jn33De3UjvovBnJFpkAaUQk2wKe1P0LRfSHeW3tI/3xcjZVaiutj76Uoro7+69uMzs0qDebhcEi8Wqu6SOYF5/KrmbdsynJhiyfDwOmHsHhc9H+l55LSlr7kywsIDadt68nqIEOvrnq3R8LkUckBPVmgQPIMYhGvov8izM8yZU4YCuXNqqY/e7AR3LWZAZ4LZNHZRou6Aj3C3oZBa3d3g85URNZafHIXGeBnu6bdkfdwA0dnDeibpiH+JBOvhJrZWg0bB5ajItEUJ4C40N9utRVM1P8VqrYemHpRwkcbJ3dUznklplJhf66TJG+naQEEBy+zSCBfVpTZEwlTgLXN3LTG1wZ3sHxS2nyJl2De18zl4SqbuJYDqZ1l+NOW4mfD0JwDBTu4zKd4=';const _IH='126faa86bb516555a407e89860e9194e4c279a79f9dc2ed4bce1ded2efc699d2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
