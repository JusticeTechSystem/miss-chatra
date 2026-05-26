// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2VxcnGG3VMeJVMM9uq39iSz2b4NljYhGFp6uz/d1EgKI54nYsS4/nLnGepRUK+XRIgKGir/EdmQzq25xuBX+VN5n/yVFtj7qqVdRoE68iSe3pesOg3TJin+rz4Bh2iYUdZ2ZiVynhOZIrm/oQTdfUpt8UJBu195h7Z1YGUMP+zvhKo9+9C7PTcRQmwpva6mcGGnxHCgrxnTL5VPTSsjVH83mPwEJTcnlVH2ANJimhCI4WKuNP9xQ4k3Iw1jl6bCpmveG6u/xvW1J69k3t/pV8f8vDS+FLwAu2JfR+E8y/GE+ck0TfyPKHm+LfjD8bZZQn8jUrerqyo0WUH5IiQEV45XxaX5IJqEGTUq5P5gOKs19qUE7A/wuARc2Q0KI8BdoWAfcIjUKsNAYeCbqjGc20aocyZfD8pliPAw1pAdrqeO7up271UwYkZx4KmSxPk4i0fYkUKFfBM5CFbMJlH3+2e/IuK5FGN0R5b8wpL8MVKLKURKkqW9ol/wuCZUp+lb67VY7SGVAePKw+e9JzNI1QzsnuF6Q6r9dE+51B/ae6d+awiHUlIAvMPTeci4hlh6spW7icpVNGtf1y5FJ/ccetZBmPtlVkhv9DogQEOOa1WUwwlpxkPCfepkl3DM6+C6+VL6zpjNLakpjYv1ndlyqrX3mMqggQ4zQCuuPGbctGJYI6wMv53JPDx8+U8amIeo0NboHD2MLlNj7HDGLhdVU89jUseIc4tIxeI1vBwtGGLNqExaOLJS/rZ67fJAgrBiqwKOCUm3B2MAKND20XdiwvNGQnuzxWHU0v244gA9ZxmlFy3qSc7KpU2GLDMYyJj4UxuN3qbvM/pwvYYn2r0Mu2f2FJj1vwgCwQaOPgEJlqwHCaHphJFlN3V9tuM/r30fG7JA+F7Vj9UvNhLn6qmNDPlxSxypm+7sMhaAsP0KYMRC+tsD2mf7g/um+2f658M25kAUNDxrBIoXIYMm8jyqCOHJyjd7gJ8P1KcAB30WfJc052Vcx7hek6qw0LliA4TqUyZpaF987ihBw7gzl2Jaenw2e7qbIJGpCZJiKIGsb8F3AYO2bPsmC5xX99lIjO+UBpPUTmnC3UH0hmd4KfKzMseqRnuvRMP57P1H+Io1i9myK8QooMOiTHUlG2HMi26OGlSMRo7BUf6RRZsWxcVolA8b9Xh4LkOadNLp/P+xAKibtYXelBZYJ0/ePb8wiFGVXAxA=';const _IH='f8df4b165e512f5ef499a7bac94410d6a932d269e13c5743d065550984a78e73';let _src;

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
