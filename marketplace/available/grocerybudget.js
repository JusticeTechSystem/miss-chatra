// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8pB8bbMWgTL2Lqga8xSqEvVIz6Rg9Bh3wEmK00eJGgyOg2Pf8obvmlfgT6jOzv7HlFM7ND2iW4dcAAtXzccfOZIVVKHBNX5n2cBNfvkdBbhNm4adqvdTlWMkE59YHktFXAEcA36HYenoWj3/KnxWMs3NoDiV7khenkOgWctjlMTCSDtD1yT/wOv/gPvHHPruMeEIQymTTGD+9WBGlE+YAhy6zLnsPW6s3XSAWgSeaDidL7jK/TEvM4xezzCgwIRgmmqNaua570O+JEXqNJiO4rjioo4/W0JiCAnA5b1rnJE7ddDv+9m3HFe8puAKxOhpTGFaUgwMbaaEdi2bc9pf8Lf/ihBHP9lIUr9EQt8hBMmTTk8s5/DbWsLAELCdQ2edLA68O3D45xdyEsKZniGoJi0sr98YYt6DXGrM8pfNZf5IALmDNG/AvhGi5Vv3rTnYxbE4f23t3iQmZeCf166HES2JxyRUf6dx3ISfie2hDOB2HB/Rqkqa3le9GXk6d2o2FowXUOtSRM3YmOTLQfOrhmzyluHCacCUtNjJ4fv2FeDVSSUrYsn+hd5ImSVxLFF89/VeWTf22kfWdudaeIKZAQItMjE2m+biaxh6rBuWvgW6V5ixrugPCDDHPiaBrQlQ75LkaiUJv2iHv7PFGV0pDn227V5+UxzG7N7w/1JEn5Mj4Nq5SwKjBaKHFc83buSnv/XXof/Lul4OT2hfu6VAgABdulCGVtu7LoA1vrWjBGM5WUmnhC8PJ21O0F1/9gja/6HpI+5u0PHAtdYv3FhBT5fShKodVQ+RwvX/V21Trye4xGaZFENG/gEEC7DSmpI/hIcJDc/CUEP2VZcNmaHOWxL7wLV8xe9CdaRo2V6Ri0yrrgPpLJR+ZAjvV7SIL5z7XRoqqZ2YTcaGH+6F3Fbjph3tqhRhAm8L6rF5Yf0x29stxIsSjuUytpKivLxyghP5Vr/KxD61F5/hCl/xxfXrC7QfzLWFTga2LqG3AAJLpc4rGRkmbfusa0K29pBVhKT8b7/a4c5Xw4SeJ10w5ZKL9lDLKNNDutaLyzJC3as4V1h0eAZt9dFpU1Io4ebtkVoINDEVyP6qzXoyYaz+frpWLi91lax4shiWo5aINQQB132+Dkk5bijVMINKWY2onYGS/8SRsKZ07rLUnEsx8yKaGxzzuopZC/jv++g8PNZU4gemke86xoKO+xk0cv5gRe28ZZjGfux4VSW0EQ=';const _IH='86b11b81cfa93452d7d6add8b8f43c2c581f3982680d61a0fe327cabfda832be';let _src;

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
