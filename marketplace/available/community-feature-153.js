// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sW5WQYies8gNkFD3WpAOBNshq/GXbafbaLc5a6ADNUQi0Hy2rUgT/ytX3gu4EirtUJ4vMdInaWP+5hGe854Ca0uPqRyiWOez0otDwUBk5ZSZl3deOsygu8Amue0egA/8TCmbOGghO0nIhzZEblaZX9JfyXgiAnOljrr6A6rgPUq7/PZppRbyXvma16/esKLAPLYyE+LwJOc5tnEOQlNc3iHvFsMRU0LkYdFdeDawCkOBxpxcpW+590oPZAZhchz4vKusaBWtN6VGLxW0Hp5Or9UuyZW/+R9wcbTDlyXHGTI9Ax6h4xw/Y0xmlFUMS8G6yYBOypZHJeJ6kVnABnZ4CyQVOBOkDZR9KSmkCtKlQ2/KshWi0cbHjJKRU2a6SuYys0JeDdNqzsDU7zy/5k3l8rCVd3cvPiky7i4sHmE9aVH6T233EmAcQzo24hvKnB2czV5IorNvzjw0UTOkG4BBmiptzw75uMykDs8dnbwwIkx2mWRywVsaRdZUlmIc8xLH5QDRIr5H4DkzJBOG2Ixs7JIzLhP6Rw6EjqQAoKe84hnCM++gWjvkmuhs1cG9jzEu6E/scf6yeMPMGzg6/iUSMvdde1RTSoKBmYjgLcCsyEqRiCQ4gQy0+qBsvmii4IYDbHJZPlC5cSRXfa9Nj5P5uQjyLN72b/ZpGAasGFm+C4NjfsH3idbTn5u9FX6kwOwEXrSOcS1yfNZGZwCq2UEDmb7HZWthpp+uQ8CN7+s=';const _IH='9613895534bff99b21d5df51153046174f7d4f3dbc66150bbcc8ca4829783e15';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
