// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3hL6A2UvHCOtoIf5RksIRqy5YsuhDI459w7sHHxMfJFI4+vw+nxDbXtEk0EOuzpcCqoEXY3MgSrrrZPJnWsUJYXuOxnwKetATO/cUEbLYBAk5zDzmJ+kt/UvpCij0gzV/xFlYeyu76E0oKw40W7A39TBKx7ZpiM5rCY8vLNLA7INepdAJxUv7uh5xZ0zPdNLegunMLlA+6zfOFsv+3l0Tyr50leAiXmUKg71dcue7LRVfzQgN3LUdQslj8IDaKvR9WrIt+YVuRlDPFxwmYYvj8Fucsu+x2UsKJN+87zAdUJWDFaA5p8+RK/JfqqOQPCaoXSid9YqvC1QZhMYGotfjZt2yteQhLYUN6Tn5c1ETbEgV1IGxpSXS1Ff9qTlsEjoYh8UNv3vcc/cKXxTcWDsFooQ68NPMpASk6mZ+srwMWTunVoaMujxXVX3Tj9u8DqQ6IbQC94/t7/x5djZvCwtMhmL8Qcp0KEanTH5ZGFQfmNisZY1ojC9DDGkwPUwrvGiOTsoleBGgTaaP+gtAVf0pU3InU7dY9BtK9pHaQRD9SAOJ7sqGpG0n3koyjpK3himqH1EKxh8W6ns5s1lIlarDsQy0xt2MAL2THdyTVjalSfRT0ZhXurNHLiJnFWgO5GWcbO83qpFBk6kaWYwcBT+9nKLmJOzFZu68RhiXSfO6orPcUnU9qW4jKBjMkx4Yu9gbVa0Lb6SST8v+HU6oTPQ2j/+0QLTEaW4d6y3kWSPl8KI7v6T7TIb9RXvLumLwJnhu5arTebDX9323oC9xAFaoHoOXD72ri43o4vxOTMg8Fz5XtrHzThNVkVxS28/j/SpXL5eItsNAfbZPhMHHrdiNoeWKU4Ywyx90zITxmwdK3s9TkMJnYS7R8vpBl/YU578awEo7eT/EXb4Vmo5FIoJHPyAtqx21LmN9FYj0XtUClfS6QyPGFfb3tcfYALbO0VsHQOkWi0xnmSnDGvqh1emZoHyYuzVUM0upMKJbvDU9LnBOmFG+1wKIyUyq0t5GIxkRWBr02868zGPyLOQb1S3DyXAxPFQng54+ZcKX8JdNFWC8OXL77PqwV0r90vJxT0K/2m04kxHbBpN8UKgINhbznlzsdc5o/9nGUWLSYW/B+yFoeXO5mYf+1TfOdGcTY630xRSY2j+IdKjdCUozN9Pm2AUBQ/lcQfHpTODNXkas7e10KLCj9frUt0NO8mK9dOeczg==';const _IH='c7232ab310422447d907052bb32fe4d82d966e95fe392225a4de797433072595';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
