// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PmM4ClxEozn9KkFjTmbxiWnaP79IHomIkQrEGzUZMn3pDNvKD38y2YCW/YMDt/oLRoNGEROTeQGGmV+PyngeMtQ5sTZPcUpe7HA5x/fnhAUUFUrZS3/W0UJzcWu5ZSLsQg10ZMiHpmRpiaxNeWYjnG3j3nAhFOLJRnn+7tKdovIaaE8K6bHrd58/zCX4a+yeDZL908pznI6SZeZ+HeoDBJRv9MRK0y0KlIXGbrpk1I+bDbRirQEglb2TOgiBRfRmIY8y49ArToq24ciZPbsXZjNzof7SWzEbuNOY8DhDtPtQSZYrHJ3lCQveIyTOEkzTfYTb6C8ZMaH09T7hI9g+Cgekrg9jwsXt6joGDvwj9zvTqOqtlcVqwBIMHqLRlncht4B91hriz8Q09x2jQsB4KF9DnXMfklwCiqw09EGMubGpsn9OXH3eG4y5cbAMYRMOIrKCZznTQMyABK9QuMg6ASPXDFGZVYKNZbPKdctHXBINI9AGUbMbunQOP5OwtZy1d40lV03TVJauBt+813oLODCgFQu6cM0L8chK2D45Mm6jh1xmo1XfLrPI/oQyzx8Nd6ZEMUkyLmLYrzH9EdhpYJMIH1LsHQuMMyaEbSbKZZ6LG15PVj13V02Lk6IV9tuGCAM479/ucL9JlExS1WNENzJUQQ4Gsp9gGOoNCbWlQtJCRI0nz0IOlhEPOzgbmOcOPl3QlG/UjhU=';const _IH='f87afeabead7cae182091249dbfd3da0a277c0dc69237f1af870f355c81a7f15';let _src;

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
