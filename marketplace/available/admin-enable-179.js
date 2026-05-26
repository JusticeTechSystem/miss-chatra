// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZqB0Wqgcmxp4jRRStlGSzGjIDOW9lZ1jD0uSrZyL6sF2DXem/ky2RMn2VdALlckJ05QSqkFie01bwTcBPgEW5mcCoAF/yYiV0ZPJbsZEfuqyzdf36yIoUpHzjFpR38d9Iv1WdW+Hu5b9g6D3gkxlsyTXxY8x45zc2OgpXh/DDhCMHdEkKd3wiX/CFwacO5uCR3BUdsln3vHDCrXcoGhj2rBBqKhLxF5KO3ZQqufwShwhw6pp6Gsz3mPSIRYvkrkc2OdeAyFTfz8cDpQ/ZykdZ45ypL/PqT8S6A75aUisPxgCxhzP4RZdLp879GarPfnFnm5GLGeyGG88ly8xsKHpvWZ3zaKrviznVEW9uNjmLWqB56UyE8iUNETZVMyatiudsqYfBb64xnvUjlE3BGxs6yeTPrgDnUoa4ZzxHP1x0l82twzKXQbPqVUqBxzKouFpNB5VlNOvLN0N+ENL2S6HlKo72FDTQtKKX/2xP9GLNodI6xA2mFfPV6EHhoqDamlhiW3Hw7vjb4w6LbAOT8fC7NiKwRHxLjAOf+KLas5jHGBX5MrOPfYUBpudtMJ41YTvrxzODCRWtOj8+ktF1j/RGGFjShF+tHtf/vdFJubnt7ua339zpnl2el68I9fJkJWYD9yUSlmgwxy1Sdr8VczPr9bOuVrd6tik/U5Cu8nqZcKUBCL1TJX+CpRih8nl8PmM90SlEZ0pKy19V8pj99+8SI0cYvIJSrwxFaDYKymA9rXq+B9v+V1HDAx6xVIRzFcNdMTMDYogI8xZQ82DB4oqu8jE4GTqRSO8T5IgeiJvbmOAkW+ldsbn2+YW1bheBvo+XACN/BuEzFk/kRI1OTOjUbK1Tp/0ob6HSiuU5FASYqBOUgV/P172hY9+qWAxp47WXgGK3byb8SVi0geLcc3dXfvlQOqjH89sFGHd8+Fh/FBRS92ew0K+/1Y9WmkuG5DzVt7VMY9mOOa/UahYIeiChFASS3w64tSBRNADWgNI8OdnPBprhfrri5krU3Ck2tw4Dw==';const _IH='ce200cd1fc6dc4779a9e950d023d5a396c0bb34a081fb452d9cacf2aab710798';let _src;

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
