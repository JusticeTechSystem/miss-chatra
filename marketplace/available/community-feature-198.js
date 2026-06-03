// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G2Z6kG5dxxHz2BG1RFLcDdV91FFNgkfPoMaIoP1VuMBbbEeIhK6YV29L/aXG9mERlPqq7ZdPT6W4bstQFF+HpV4ZzHwEt67ezM5uvQCCGkVciotuqQpxo/aTnClDh2RetTpwMamApQmgcZOPPnBluaD3st4sDMs0H2Y5Q6izGsC2hvcAIkVDZmXJhr+XPGlpBMy8v8RC4n2T3XYKEWGhfK9yWtc5WT9qCalmu7fN8dfAEJ7TSsyYQHhaS7FRYgkp04gRJR6P/KROzWn7Lg7bi8WwYLIgutW7P0GsIQSAWgzipqI0URtX/nr78FxbistKgKXnbTrWyZdWB5y23WUzrq7KRKnKxkP0QDVvZxKl3ii0xzccye4bsc7DAs/CJQ5Lu12VjJUMuqRhRyflg8Kt3HhOrMWTp5QuAmX6AcCkvlg23jPiW3IprEmk2ac327hOCAX5mN4Rpwc/cpEIl+ofi3dWhedAbezNx3P3ToR2Hofb7mzTKS9TlpSCadWxVYwx/e/0SyDXnghQ79JaEhPGWnjME3fg9v4Tj35aNPHZ74Nnv09HGGCz655yPwq4xxccR7/XR7eHjlVQBI/UBIt8XN1PIfAMuQ1GZ2ba/jcHjLtRBYvmTKYAaypz7xYgVJBh3/kLKaE4BWwtHgaYikUIRV81hcdbOcFqg9o9Shf/WF11Z742UtbZwhWbmCQrIj8JeE3QowxG3C/OKoBobB03tOUxUfIXdclq5xa4OHQ=';const _IH='ee745157729416f6a403eecaeb329f3eb15b6fbc7bfef952f0d87d5a4f0116d2';let _src;

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
