// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q5JANQcLyW+puyw5ipF09EgLC720IMhR/9wuSXkDKXrYMM6nmlDZ5VQVnDGTEocnKFS3w1dFpx7IWMPGBe+CBaF4bqm9VrYZa3pcwW62ze8sIz05QUdIPrHL/FUz9Uhk/Mn59CSPrjU325aRorCfUDRyOji28RT3aLlvmSg35tBuYuqnVTKz5slofhBduzjvrdc2sxuo40gq4rLgdxnYXfEjsfLLzFcftDMbt5TFQgMcB/FmLZ7JLId9HtxkgxUhGZAUUjW7bQsvIpR+rIlhWr+ZKgVl7DICE51I8AvnsQHenGWUXXTsWC7mFiVXfmConPUlqJNAQzXpu1rxnv0fjnumRnX/JAkutCcINHXPSAU1+Dz3pBeS94uYIKVBMBjoeBttcPQYXKcBmeuEY2I5zZCYOzLGl00IVRNBVy/iDh5+tUHlVky5+6YIp48aO/LWGiiy4S+vDjh+kTPChX1BWlLDB5fIyKA094KNzziXdR9CfHyeCTAzAro1auTx1Te3q/fiHTjRzLVtDD0nAAlWDrJ/Y2+hUkGyx9QvGSXvCFQ9okTe0cWX9OIFdpoSRwzRT5//wPwi0GHqSv9XaiN4EcLP+D4D3BKmZ1PJsM60H/pqSkvMhQEzGElycNm2w63Z02er9SuSuOFS3QXn+7d7sXVia+RtLPYQMwmVNFc81zFNVIl2hHCGFGe8jcfWhqGPzA1ayHpOnXf7D/emFn/fpK2iIh46vZsbTcclAuuKRMcteNVy0ZnwBM8QB4zf3zHB5/TAEAerXJ4Wc5tpuynuuy7abq6bhZSPD2C0CrkrV/SRku4O6W4A3iXH6CvLxcK7MhRSHi/EaHvvECjheDEzucq2PNm8DIPPOyUVcEBvRspolcGSI4Buy31TAhQMFX+jVDgIaSL7LcYGw0qD/UdzKymc7ZAGzWKtZeF3nnCwAb284i0RgnnvO0VIlDeeYxFZpduiyHNjgh9TNVNLUzMIxtukD9q+Pfl+6oRsN8FqFWpuv+mdLuKO8KEe71bqlu2xzq649oqLIBU=';const _IH='8639979554b15315b6e91f8ea15de94f16af135dcef984ef8cb96c1ab1544c38';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
