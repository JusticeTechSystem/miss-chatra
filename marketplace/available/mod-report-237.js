// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwIQPBNJZWv2a/K5aSnIMQR9XwGsc7/LhRdpY4s9UTHD6qQq+96q8OeL5LEL5UKVIUxmmm9ggrV2ivmjBu2sTX8eFlEldPwxgs4hL/23XPUol5jz2xaJ8BbP7fEGaG+cvMmSsYBzqo+mUooxCMEfN+/jFC2ImiXvKcC1b/1IMdbUVmUN67DVbd3K/XUAi8qm23OnJcnSAysYtnv+xMbH3JT7ZnA5Z+nN44ryWRz5772MUPNA6xC/6SnxHa+C+b2lofZQHmSs26cJNDLf3jeAGe2SgJCqiXRWs+O0Bab7B/2UgVeRVvWMPtOb62L2+Nhor0zAptSz1RWW+MqKl0o12JXk+xmWAirRNdcPS8Htcr1YHA9K/RXiiv5JAcAoxvJTyDrQDh2Skqv46XPmJo672Fw32wQ1Jo3LaI9yXwwiaIuwTWBw2nJHqQFE6D0MBIiBoJ5tPkth0NYzdOVPfFrCI109RHSoerKFhUzEYDGgQj6LDSlFuhAScRz9DDoYPnDu/5yDLbh86yIJV8OwDzsWJpCenYROB4W+jS3urE6yoomYAIEYzhlIP/mQu90hrbyRbjuNIa1+j1fQIqMJ5OkthXvE5NfOUyS8vp9ctD3Xla4Dxs6/+p3XXjTkkvZ1v99ogbofssXz2XwC6z92ZArBLG2FrvWfy+zfSpllsIeKIFJWhf7FRkzNztxIi5Rfpqi4e7Ao9EtDp53oZEK+dhLU9IJ730wfKMFfjrv6iNocwloCDHl4lJ75C8S9IgBIv3ERtnbJwKdJGStwIxrrzduFh1ij8KtwnvYQ3EcxiOgsAWkL7kv5OfBzop4Q0vgixqDznp+++BtFnzlLeNQw3i6vH0og7WH0MezZViYGLSFAdASpOsoxVfjhIfCapLNXDai5Y7Xr3Jiy00CKUAiMojEDeLTheakJqhckyYTIcJ4VYqcY2YOj9H1gcr36f7gLetbRgjgNtiXRHnF+B+82pwSaT8QzubXMJSSurUoJKL8OgNqGEUF6ot+9gJgmTfFIypbmAeeE0hBH+mcN/9EmYewFtbB3QIGavRyKaNiUqOg8rGmd6cEQrMJJU/KVs8BEYQk+Djlemq1/0mXKR3n/X9IF63Sf9ZKnizxGQAEarLmbohidZJMpU1ftFo2bijGhxi0WnOEnuvxh/s797HKsZjYZ6w9Dj+1Rh0tQXn6HmAyecNLseCQke2d+1ToZFCp/IhUcbhKKQIo7VXPsYkPXyJOnxYGP108dKx97QYhqdN1aBb0rKMdmzvYx1jQxPKU5ZGTBp1qgFL+wQe9YXnSLk5QQnIxCRY621f6HoeL4lxwskpDASO4xsf79KqWa97VVaJx8LoeiCo+FrIfgLUSoxZYsEzNgKg3ydNWDv942Zl0BSEy/3AtRAoPptHs=';const _IH='1c6bfeec14d24d511baef50afe763d0cd18d58367b9fc6ed404d162365972699';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
