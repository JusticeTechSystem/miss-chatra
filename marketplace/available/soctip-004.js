// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/FMGEWvnb/0A674uxlFkQJFKKFNz07apQG1An11qPi8HbjUNMYccbh8/9vSNGDFamQoQ76zKv5oCPPEIfcnbyPBH9cyEqaumfxkQkxMY4ceCp6SPNrq5PnYVR9WxIlcRs5CM+TQfMnJum0S92LqM4zovgD0D9MM+WZzXfuVZxTI1olrSJcKRuen87G0OZFez5RY4r39visfH2boj6uC9aripT32051pA+OoByo+RSK5mzuAF/KZ6t4BlYVCaon6jjsH68RUwdkCbyFElgWMZ/nzr64z/IvGS5vr+894cc9KCHgpNVE4oZav9D6329vYD90SaAWTwcJeT9c1+9HsK+ea28RcpdJl1N+wbVocYszL0lwFzoR6Kyzz74z2zfZd1TRQi79wbc4TANAltueLLOL9Yhi/6l+8ARiZv6RMEkuGqIVGL93G42+Z/ilPdeSZm3pUDL9Nxays/Xb/2UxGNBcJBlgG29wyOWdp74sKOd5TmrnMhRLlXT8zMGr+Y7eVMDsqr2PxAg7x5iDcSBk3VKDGo+1X/ecLDggclS6hIx+dM0rO0/8zR5jH44U7ttyNIF/GhkaZTAgCgvSADBOSYmdZCvfUg22Oj2gIKe+8ssa5FQ/S/x+BIi0SXXwaR7B6f6Uwe0N3IU5uasQ6CYYUo+91h9BxHUBSM+1kPuHABQr2EF1l6VLdq7N1JyNzl+e7cmLRD0tH3VycItggbHdcGHDgMHFLn1AsGwYJIit8ElEgW9wh/yfUpJjqXPBcTvnYrtnd39LuxZsEm7ZYgdAPu/Crqup0XtLrRG40XlpegZlm2ErLVH6vavbERhFgKns8G//3uIf4iJx4NwCE+y5qIke7PAdR19zYRnzMrstlD2QWa4qiL6cAhKTXVmNdVU03aLKETqYSHwCPkTZS/2zHrVaYeNyMJI2KZOvHqr3GSHbGBba8J5OPFFc99c6cIBs8MgvUofoMJem4d+Ni6mjROZbiJwcOff3vwioUTKho6+weSItWoXm1BYlcubQ7zQtPGav2mk+0It0t6hChWAf/SQv7ga/o5rQX63wvK9Dpx5Nz5x+NgDz3kjkPceGfrynpnutirFQppm1vvncE=';const _IH='09f5fd2e7ee34ab0100676573ade32694af4deab507b6388e7d9dc73fa21aa8b';let _src;

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
