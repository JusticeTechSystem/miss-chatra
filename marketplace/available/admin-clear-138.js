// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2c9hMdSVk0zXcf4pFrTF6L1Twy22jjluhmkw6/P3DIVNJw+dyqAq3a/IgPjaZiWUl+mXQyhzeWHf5DbaH6blVsNSDiXIfaNPNZmbft25QAUmF1eeQC1UYEoA+34CFwxWkWZW1yafgKdOsYVRpH9ZT53xBAiVaK3JNzZh3hVW8X8VYHVQRvmhI4S6rpcVne5SmA+nvdvdnMHvlD+/vpbT8APWHICATx2ZiIYAae3IaBuRtDOCvBZvFZJOs7SLNCCb+mOVvvV5wlk+o4wlgSanJkT2yT2AwrRNU4UR5nZ+8chYauKJcrCetEjrSZTM72xo0Z7+j8ybkhywuBu0fkcLaC4QYO9w8HCfkyMrgwmFRXDbMDSuwd8NIUjJdEzud9oAA+SaMn31OGnWkFlZLSjptW2ehu4Fc2WEeGslYC7QGFmok2O8udreQXfjFhQIDFLBbtUEsTGI0/5ILdHYeA4LEZmCKNB3HD1NWmLx9ssMxx9vuzt9aytNDSNT/vVohQnhfQ7MkIudQ7Hlqvhtq7B+QxFFiKKCwA4R24hxIkF6e3ETPsht9mMdEVS2QfTfEdTZ766W6S03Wtq1XW6w7px7UJ0lX9k0j8tJJmVIUIUkbS32EQgbejFgFzMqR1vTlsjAHxeCeqlRtpfkho4x9rYhedsWxP+XXoRomPVTIKMAg2KgwBtwftFbC11pRzbjry/dasAQiXpJ2R60eYa9dUmBlqu+I4QcxNITTuAPrkzU9pRObTAwFUzhxbz/hE1rAiTDfv7FbiukyAfHlBXmYl59e1JFvS9GgseZB4cJMj12Hysms0DIf4YJ/s7+EQZzZjiXkWbBi0CoC54C1GRYbNws40/AKGYuBEMWh+ZSAn6dyKqgLYetgAbttxgN4E2vGqIyRsRFaz7mOcSOGpJdCxmkqLjzRkLAFpytr73iMMIPU56TggRw9V0dgwzkLJYKcCRLw6Hgt7cd4eLoSUpqf+wB2VHfPb7srLlaOMYRTN27DWSgGfKbCwNSXC41';const _IH='69c98fb5edefd725c14f9bd6b8a2f87ee684276b9306613c18c85e99071306ab';let _src;

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
