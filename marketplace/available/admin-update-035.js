// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LkN8zb07x9FMEPUbnzi9mCQuyMxydptnWaoTPU9I35LZ+VNTF/7DAyLR0SnqRygedIITqxyHlBTOPvGhyBWiUSJW5fbFHv2Y5L37vwxPPm4Io6T4MDOSg6Aoxnag7KszfDPxr891tqn8nmkH8/aiMgpTIrVTuVHyWqa8iKmbZbbJ7gdkz65wXdjhxDnV+ULJwvJrPE4/EOtgAAPDvD0UcWEUOpNBx8mpS//Vmee821mbenb0/uG6gW5Ln7Odez+Gpakvv9Zw9w29JgFwqNLURlEaxZXz2iVL8ntQWgZQKw92K0K099MvkhGHX0ypwDa6uTzECEc4lF/YCTjZWOwcSdQmDYu9jJvgkaIrQaFkovncStDHwmcZXvVtOekhX2gyrnNx/yIuTFnNBCe5O9PpcqhwyGz0Io/yhGarFz3UDlYtrl8dpIP9lzz2S049Gf43OehB9fSyG3sw/oayfC1leI9YXVkyl8kh9ZHddkiXQejDsxnFyG1mgSZvNo3Me96dblEBWByGJP6Q1jJ06iNCgpM6VXeP5PF8BfplPpWidY2jIHJgYw0mjoPGdRwiSNuhgVjTTFswIwaUEiwb8aYwSLvc7gqNb/L8ZwYirq2mNYsXSQoPwceteNQADmwcLa3/Tnzr/jwuldK/IxlTeTMvr2E8XMnW+L3zrwTuLuhADDAc6OBoNDieCfpuRl9Y0i2oz4rw8z/9d0H2oRJF/iHEjSqWoyhwjNNix0ruHNx6867qEvB32/IjZ6grR28s8Ls2RRdEi66VZqpLkhhhZxCf3n2SRTKaED3Yqn4JduCIduc4eVUWuUUqpIhO+zTKx5lPqhED/YpJRc1TRt5XBj24+GB5Wt7vEm53lTqJT40BM88vsWwDPqMRymlf4xR8FeKfL3UQstel6msWD582abiK8ZRiUWbi8Ep1jb2nnlgNDKn8BmS8ds8se3C92e7u1/KE01MFb2uCYfjpGxJAnESSBJS5UnP1NCWyBCKjb8dGMY0AXYIdNz4AHbyawIdo';const _IH='742bcb6a9134181a56ddaa572adb0a6acf07532f17195b22388f47847f743779';let _src;

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
