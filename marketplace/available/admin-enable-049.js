// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VRRcoskWLUMMCzEXojK/PUHFDxcB7Ju6BKjemxaXwryEblR9NV65G0jHhDuUKiPVqe6dEqyIJgOKqWhuQR5bxhKsm286W4cOGdCJYSj/7HaR3GpEP5GzVihHl7vusQBkU2bKmugesGLI4YrrPHgxQM9P+H+VL+jGXJkwsfkgeDCzRKsocOztFJ4O+XDkiNwn2QMu2F2tXIhQrpGlqIeIrBIT77AUBtqwUTMBYp5GyN7hqHIRYmh0conyd6vmxCXVjLJrxBHHDUf9e7ffIE15ENvBPMIgm+YdfNx4cz/mgEHhhtfvKXLc7m+vslJDMcssL0CAqollX417KJfim2naQth9BvbCUPf/zLK4Yv3rlZgGizT3jBYC4MzpCp1S3zradpvLm4ENoAXYeuX9IgNNywKFR/VwwM/WEpim8ZLw6H4Ljq2EZOVAR8DGlFw6NyHNq08ElxUiSA5GfnBi1akvpio8Xoi24MRL1KPEB04fZ/G3F8icVq1EipUCNn/Jwv2W6X6B3w3kNrcYvSqXo1iUHx4LVlgRLxU0U+JtYz0/uU4KwTcjLilvU43x/rF5tuBNqghlvzjbEnxuM3R2tMbkqXWfxgbwUvFa1XRgLbhfkRc4uQnuiOQnyr6NsfDS69kdKjoiGpyAWrerACtLzTg8ZUssPUaxdXQt8OYH7A4r9JqtMIn/xSsfJSWcNXKC7rg62z9xEy8ZqUPK/Aj55hRMXIyC//URNXA/UW+5TMBVWfREYXWcG7cbNQW0QuAFYjHwbDVgR2cT8qX3AXVuoTPnjcVIJl5ytZFr3iwkzskwdgWa60TNX+tDbctECv3xPjFydk3QfNU7HoDhowaLBUHzA/xX5dLDzSnIw/AKA3cnm+CeOkpXBYcCHQ6YOHlmu7q2/ftfgE9U/O2imcCOQF6tXsuftPONbR2Wv1P5MoSlmlHrTj5SYcFwuoGV4N2bxp9XM8dPwcfMWMq5bMTaQPyjYFcxyG9FbAOOAenODB4l5dS1Eg2GrMzCOFLrLdCM';const _IH='be77d2d3891b92f0e8b16cf3d2b905e53dc28b179a97095e63e6f6a03aca0b51';let _src;

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
