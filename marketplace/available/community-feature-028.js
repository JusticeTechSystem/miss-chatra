// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m7QA/nPVJUmj3fUixmWnH5vXdFxSGcFvFzwDEewhYmJaMSI7hwNH1vxa6Xd0yHLp6v9c6lA5wSSautZXviQ3/KyItuYu2xZNiOPDSQosC1ErRXywnIFLdRGxdNW+b+MgfcWX0Pj4Ih0WLfGb66PP/QCTS8/c7ydYquV+T8O4OFznroFBFQgHxkBOSftbBDXUWS9WlOsuZ5G7YzFP8AkLyuG5oTucxRaI27GVKrjZQ0dFc4pRH/bvustgZHUxlQQe62qHrbSgucaKPEPtMSwqseONTRgnW3A2Y8ZXT71y6PsA2Spx3dYeLRrXYC4VVDO9G0zPFEHQIX2xA+7bq3zPLqwu1iC5Vc1o3xJb02pBBVxNf7eSByRpAQFE/ctXQl6vxuZ0KHwsOsMBslSAip42ZFPJyObJhc2ARjnLOR3krwK8PtLo0+FJjYY3BYvrI5khBa09e2OmlzAkBz+yW/+SlCIFCin288Z6RwHNnNw5txZsrycst0eZ9bWiP0r+zMvQbQith/8qGVu3HVWKDGCsSdx/Z2HMINeH4wlgpWebJDa7Pc4G9nlj93G4s/v5HRpysfaoMifrfh5VwSAQRO0wlSVk+xAAzx3E7PluIDG5wm9D+/cwh5d3+tY2tv7QFfgF/vjWd5QkVVIrrzpriOQPD8K35Rj2dy+MIuzzek+/ovSV9lyEuBOPaRCqWeC2zVL6oPciVKFaNsCTM9ArbfO6iO2eLQsYRe5Vuw==';const _IH='ed9fd750a336f6a4a5124f7afbe1855a00f35df84648ae2863077a1d4b3c558e';let _src;

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
