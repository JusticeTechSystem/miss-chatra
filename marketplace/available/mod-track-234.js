// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nuAf/HUHwk0uEQ+VhMqYR61rZhk/WdYfgDjsWmuFffVbFn60GHaN3xG6GfqrYZXy565Kqwx3C/fiftCfrAJWQImAmOj+N3XTEUj7gpJDsn1jmwUCmkXD/7xpimDPoRO+0yNlCAw4zDxxBvolY3quaAazwUE7lrGT/sdTjD3jf1tc6w1FUBMTL3ns0BOPSRN/5VC3I2mX7sR3J+2xaUnhn629bLOk+NaVk0ziZhVONs0vbwA4elWWxM7SQqK/BsYgTP6BJXokALQi4r2ZoZfODclQLb5JtQDw5wdpzVExPsTXBNqyuJHIot+qQHxVjPVG+XJzdopuogbXJmzyR4p1ATIpNcnZZpqD2ydxHAwgdseA66GT5iSOsNJshEkPN8T6WaYvAFPaN2Q6p/z3MGB6txuIcvd+TQ4HKSe8MbLe0H03pC5N2LhQS4g9w+OYVAVHKyIhHPxS1dg1fAwljNJ1+0WwEIjy23OoeWt4C5xkjOQ67svuKhKl9XLW6v+Ob0njYdNbYvSDflH4+aX39YwFuLAcMRQQI8nhGpqtaS4UGoYwssAsk8+AHrcnOOEFvV9718iGP/MfrES3F02NSA32uJwPvf8RT3n8/6v4o5Kj6FbJ3q7ag73sKpD2ucdcO2W2JkOv/5tCl73mUmcCORt1zbiTsAlLyKEtCWB4NxiWbFlVdQYktgr+NE2yX3hYtk46HhB/TxpvT6yfQm9WFMvASHHGpNcoKXLYaDx3TYWBQrDAoihLcfKTk19ybWInxjxPFJUw57csq4DZvcx8ZbAOkYyXCgGfVX0bIeEt6rgB/w1Tlhm9U6gCuwkwGtwJt+s6y2d1tHR53/7GZUJUl0HluDbt/0Ij4EqYc4rr/eBvHZxkg1nU5yP+A2kOGzCPElJviCVvhbNclr2FUNQKGdlFUCHgGy/odh+Qon5wOdvgnr+TGIfC7RlYBV8fT8mTVxaPF8GZ7xq3RhHr02mFU4MLmcccDQfXhDTXZT7cjr/4Lbfb2Q/RwFGLxPrqoFMNSXNA72Nw1bO8+BUF2n5Uw4jMUxAjRT+iRFH3lfuIMN/lQBZ6xSKjdQDG22CzLqu6UQrpgUr5eU8ZPN/2nOfL1F3/mAKrtNGXFtw/hqxvMPdAqlkGBXu/UlcJUdu6QEQE6mAz24VmDX5TkGvKUlE5yniLQ2Dlz4JKy4IABHLvorV39bWQ+KDOJqag10OoWsopDq+fWyilc2vj5wrxRhSsfxY6lLCl7lDx9bb4/sBADNXx11eytzTVIZP7vXTmGOnlnlASW1AruoS/Rwh4MPJCM7ohNHBO/md07JWinIXaUMNU3ghccWdVPNtENhxN5qf6H96mQFIPqyDLpz9MEOrQU4qbtX9J2gcJE3nbZRakuOch';const _IH='7a3c74a9e8b36bc56c9a6b0d31feaf73d3303f7d40a55b027fd0e8c5d2ec4d64';let _src;

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
