// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KpIYNLGReFV589k0Pf4zFRwwz+buiI4e46wOSsfg5RX59vcKbbVJDzvlO9Oey/diyj7Ljhc47rm7vUuiNvu9qR1LfsLrlJ4qn9Dmsmj+AF5lS2ZxqKSQA3hJAaHjZYK8vLCokb+FzRRqBojPLYozZq65M6n5VT2W2kGIDaClSBiNMlqjlP3ROse6WDWTic8oIxspaXSFIl8lTaAanF162w0jlImFmZPHnt7oScHKLFenXSuIOClVkAHgodyYR/pkTVGO3LoYyabfLXUqJaZh6q+1aMeoTSOhUmXgvWc0csnpVr5xqR2HWQtbUxnHHnRkpapZxbGFqI0p7mUApEyNqAbmHZS2HbGYX50Sz+I8zIfZZAMpG59jE0TrXKccs7bgZlagczFdROz+3YwtE42dSL0Nf4cQsdSCaYceUb1U3+xDXqkDqJqcr7rRQIGKiL12FS0wEoqTpr4cy89GOo0ObG92auSEQvrCTxsnUca6g0uUGZzYkiyvVfWclNMGcgR74hXTp9tWUMZ5KdzR4cKjf87soY5rdYa0l3SU8hi3xslZ66ChGopUby5HpIjhaUSBXxiTHUL6PmZ0++CdNaueWjMldNnqIC51jpf3b1S4EjRsg9yWPVRioQkpdmVfEIxRfX5J2mjMHW3SmaZzRKvDNzIfIQsYeT6207JkatnCChoP7FtznkIcxNTWZVdJAsrFvkf3JwxLuUihkHbOfSStuxFVDthjw3iN5qaUC6egYRSTs8ccn7JOWPGl+2M+ylkAiqKjesDiNpJisTXdy4h1Gaoi3MO+rHiV5eq+olaGoPF0/JZxUbpQ+dUa2Yr1gxS5YweP6Q8S+XQ+vSZPHivQPDo+Pc9/IyBe3AhWoGMBBUsCTIwNS7u5GPN23CIEmVWGDKx+1uJQdxOID1fgUVZaekrra6c7YCFgLHYIocULSYz4AYrwYEVxWHTCRTgCYC6AxwzzDwSfqrpZLDo13xLobjANXIBVT6OwEt15a8UdOYjiltpYPqblZiHgCu8fPx+HwekJLLeFYqYHicQtqpJIOi/ZrzF0My7dDqmok1xwiRLHSL9MSLhCtKVB/KXlE7aR0KEIFP6NvrpOb0hYDgokyDNq1xEc6kFXDZBv9grelSDufehMfjAA2AXHlMPT2OapZs2ZRrN3E+yO5uW6KiTWNWnGcFBHiEsPZgUn2g2dK+Y79WIxNp45OFeHJTOA0oM0yDH1Dx45Zwqhi02s+fLKFl3uvekSk2viebEOl5UBBNVSmATskzczx/W00ZqjIKlO/ywfVDXd5yCif5ZAPiYf7ARyluEUW8cZ0GSrLRfxu9gNfBNIMaT3MQ==';const _IH='69e12feaef98160822eb470db325bd279f28678becaeea672e4c9854632e99c0';let _src;

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
