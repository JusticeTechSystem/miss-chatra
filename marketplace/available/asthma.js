// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mJ+YJbLO5SRfua2RZQDCJsWE6wXKqcNonaqSwKBLklkWK0BQEvvck3fRLTPxeyDiJ7y2/B9eyOTqUbleOFe3sGkvfsWDyacc702x/cdNxj/0CcwQbBfgj6ayYDJhF5fcU4EY6y1PY7Su1ztWgo+LiqYKQthJG2BqKea6VvrS/Hb0fP2ucqiVT9Xo/muh9WzkARPV6B9NZ/48OJ9oPo9i3UT+fYlznbAS8eknuCvMd9xHTamzZYWT7KAm5nD8JzIlw+wXT3r9kMuRELIQ9gn+EZp9muUSK3uCGChk8CHZSCPxNpDn+ab5DXTM8ggB7q7tPHDwdng5clHCEMeRLQ4zNbyxJSL1XTmfxMUT/F837GRSL93lc61yHUWp3UHorpJ0IwvjMvOZr2hcL5rMBJDxXeluBA4Y5/7u/y6foP2HJhc5nEtFR5fxSOWrZFKUMrJsJnlk78fPd0m8RezGpI5OSpdrjmoqKABt6Il0h+JJZOytw+rRS2EFXALMY3jsVI86OhYxAawDJsfQhsKBektk40X7iE22V4uIoTQzPXOV1XbkCUxbpDgzpwTD8ztojnzcjKt379pkjWhxeBdnBmbUyx7RNKi70/5GCxVYTKucBxpRmkXUS9foYcytdfjQo2kHTXAgqQtwH1woW0VJ28atoB4qzH7rK0peCxSuylGlq8Bc1YFqJPk4bO04gSxrVGtB9VzXEMDcVMcAaKiU8lIusOrsDSFBalhm+MtLPgopfQjmkWcABjK3jRNtFLKiaQmkLTMc/hNuhDqKENrq3VcS5IXP5mh4g/pKiQCJjvSGFWiyC36uSST1AJqvpUmjB9hTmtPhuHVDRMnWsGJ8s3VSs9S3HeLUamb8H7rPU31Tc+Y6MDQ2uquv21ZjOagQGDfVTkRNpceNez5y3vJqroVvf+XG9FP4kDRNd4KhKIVitP2P4cxinkOmgZZqUMD3Y5WGZT+RKU9Ctwk2jNqZkzFC2Cy8URz6qCUy1XxJvPbOb4KPqE77ttjuu/8Vw1rTK4D9mWvbtndOTI+bS3M5I/imrV0uJVOlKi6LC964j7leYb6eTQxjLBF9CQvCiY05nLWw8FO2lIo0YlztZqhSCPq5PwsK0AmQAEZYSZBaK5K+dtvBws1N6M62hSozBVWsKQwIVGiYlUVQJN2BW59+YIwwdUD4XidIDM8vs/x6E6+Jpsn8cOtERzjnOppq1wMH5WY=';const _IH='0fcf8d2b61f7406e2c4201f4afbd69c2afcb60630922dec0b7501960a38fdaad';let _src;

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
