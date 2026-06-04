// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vq7D9I5qou0kXbFzvc+BmWbOmQLWjO72v+xfF/meE0Xix6Rr/syBjzS1Q/yO2xEDOTGKgSWFIUqppDoYQWVny9OwjKWX4rojfc2rLbwGlAQsBhga4A4k1VIXf37RlKBut0F3QM/mHOGDEh0nwmL34Cm/ts1vzKy9xTAmToeiO7X5lY0i29Cfws2+QhN/CTp8uejJ4E0l9JSxtC6WXTqvccFpLSDxOKCNxlPUe6zL3ecN+Su/UA9YUqWNz0KGl98mJWVp6UVSyOqWMPcAockxnf5wxvLYCsO+0LY0wKJY9lNZamEc/a6xobIbrg86WqwBBhocISKp/hTqAHZYQrge4rHMIqNiVlqmM9jqaWqtsmL8TtdguS1Eo7zptsHFfnKduFPNQA52jxgp8a48nVp73Gm6XUmoJkrfQdsCqgLuSng1Gb0+1DyCHhSm4QB2+4y4739aPy7ih5UAuA9zbux+wIFydRcOk0RGDYmUS+vVIvbrMdIQ+YR7jrLO1GwbIYN4o1G50Pe/le8aTrDfK5uarflMmdOUhZhIMCSOQDbuJc/dyoafr9Wpd66VfFj73uwhJr0qteTcMREr2pcKZAEeca+kvDxe8m24dxUe9/kVDdyTN9p32AqdvpnNRy987/aeMqLwI1SpTmz5eH31Mgz4RontJPpFPwRy7gPgL2sekDvqHjD+eRgPLRtA2otncoaDj0Cuc88gaoLrvm6C93k5unQwtFDuMMzRfITrPS177mcESxW5F7gxa1fKoKxW/vwkd2AR1/wb+76dBjj1UoFNATeW+GV0QjLX8kclTbkOEEhZLxWKEE8EQvOrg4EXa6nR4tw3toGDSycPDNA9qrjbjZI5cXs9MptQK/dYcVFVBppdJdSBJHQ/wu9GV9elPCA6lHS4YIW8hjc6o+dnr2W+bKZtBufcMUPKmmagSw164T8QI6Zcx4d8X3emAcqvRMqR+fyeu1o1M2A7xgRGnkNdy8qDkuN8uV6T860MCj30CEnORF4xHZCgAUIfUUXUnCPPzvBh3AO905UzWu0c6eepQSJ4GahbG5qJuHxUlI8wjaBhghia6gniL5wX7UlL7e5DbmfHZqYlxnJpzWrlRXbDbWTV4WViPgm+RNxnzgJRfV4L9W+MuvT4epGpY1efrBb0Mcc4qqAgzOx4WvI2qeXf592duUl3XCeYuQd1HLUPx4TVpjnOl6mO8uAxMxDjykkfJ/cY8Xc=';const _IH='b2004e4e10963a6b943a6815b9b4ff1c34c3acbccb5c0e0fed23d34c2ce1d358';let _src;

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
