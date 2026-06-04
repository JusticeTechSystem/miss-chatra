// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0pL5qwnJvZi/QGZfCkl+YTHjNk7uUFxtWDQk4jCQhDnzhhi1AVcMm3eLXVIKDB+m+cAKaS4IckDYrqiNDXI4bLTZ4+uWaE+twlJWzwEWwIesEl78zB1QPi0XQSVP3h27Q6Z+UC7c2MUYsVLBdTrNvkL04EPeDy9z3X2MqRJPDIPPjlpeukTudiVjNjX8jrV0JJ1feVA7IUvJS5dTd9Ee5zdlSo9xUyNXrAQqFkqfwHSqjJdbHW9rXZgsu4nSVFJkYGQkopHICfIPVe2FjsuDCX+o5JjcJHjiRZimDBQfLMUKNWGhfvz7OxVS7IpQJKnlwd4ltBEoPt79qMvOzdFvBEBYgHfXBSm0PtrWTcBcstwT4qmtbQyDJL8z5SCAoAAB/VtF5djBrhvdcwFv1yzN+j5TqLeX4BlBmkAKuXGYToQSZTrova/u4YGMLs9yd4JdEXiXihrXsJCohpe5P5wUz4q6d8yDkizzZTVq+sFtYleSi/9Z7pMFIDtfwFkSjv1KclAja6ESq0PTtmrR/NayqxCeU6Aj5yLAUTsSBKWI3oF5YBbD6VqaP0gHsuDCKoveCEEHOOdiAePBXHCVBd/3g+W/94KKucNM2az45CZ6Dzy3cxlx/RDvBq/tHFMR/S/VCiQcb+sP/a7CRimo2B6oI+CJYLayiF3Ku1r2ICH7E+xU1Jz7/r+j2RF90CvwBXcAh97/o4oVu4gdhorfCe62vlio0ZqrblS8TzBhVYczoWjDYff2dz2hT/XQ';const _IH='6151747a10265a0c33e2391b81d6600e39204de9324cfa5addd7bf697f827b61';let _src;

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
