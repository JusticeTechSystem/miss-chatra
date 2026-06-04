// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dZrcmr5NPrRpDhCcDt/1tp75HovBUHA+jKzuSr1MK07r1Wz19O+cDGo45QwIYVsheUxAL3f3OhK66C4N2I8FYizaeS/U87ws/En3zlfQgIS9DLTWAA8WvnrsoE9HrHfQQyuKLRli1GiMEgJgQieuvpJS5iD35cOX3AOymWbKNby+7DzmWnK6QZpYDlxYswhfaZI3c7OlJBlC+IFmqZOdATF65DwRzUVAHXwEe1LgmtWpy48Az/SFEXDgDOD2zQFb3nB8IEHvq+4trQWlKYS09hxfmc6Uwv1icrWd8626d3cnPxBCqyLNhW28H+hSqVMcMXO6aSJTFhBS3mPy56GM772tsRg444v6k9Wi/ybwoGfI/7u/gJHGzWy2BrQ59YZo5MBLBUClkSrI1o9FE00tTfrp26aVJbrR8qIsemCoiGCwUfOxk1wnXUmxRfgB9ChfHx8O5PPJlA02Mzh4eRzVrSAoGn68dO05UHY/QyRD2jhSmEbnDeY73ySAwEKC9bDp6rS/EZ3pB2zoH9vREPE4/9/XYKRd3DTkZKaoQ2MR+OMyMm3niRW9h2jEW4pSjG0EPTEhZIhDAirAC8jWpkmkZXYgrroU3rcT412NzNpISCUReQ==';const _IH='d27154ce442a84d8d51da5c9221718c771138bdcc36d0a67a232cef2d7278fb6';let _src;

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
