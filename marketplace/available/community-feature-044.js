// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T6ZjMGr8CoAXAuj92X5BoQe4hFKgWMG/QUOQ3mEtjeSv1QcZsoR4DndXjktU93E56Pk9WGYsMZOyIUuWn18r1/WKppX/juKjpjD4r8oEJ63LWockv1qaPD04bmKPY9yXYI/MEHQNK1iHjgI+6hJwbLOVtOFTrvgGFN9Ma9YbOGljSZOg2X9JT8J9xznDvXp6bEbZ+1R4sBaF3leUHIWK7uvpXB2va8FxtRthHiYC+2nhf+X3ibiy8YQg5VynI+ve25Qh4DfYRXGx64pm+1rD6LwAx3g+i70l9zTzHPPcMOuHB56OvvbCDoVFWaqeLpMoLj+OgdYJxZfhlyLIWGKCCdHBWCKTwOySIx5japY0v92k+IgAlvL0JNXlo0ii/E6YHrTBQM6h13F0W3L2YJR4/tGN/RS5/RxZvP262Cy8AAxd3dgtAvkhUmBEPR52TORo2DP0DHTxmO0Vfm/LWC2QcrNerxrcoahjTwxdW5KzDLpqtVqgOHY5dsvlJ5rwfdKekKE2X1jWCrY86wuyZmYrwJGGxJaDVsWbRJKGJY3lX73t1Tg2/OMopkdNcdzH4YSaG2JtnpGONDyE5fnYtcrY3q00jhMvgQgBCPXeb68qQPFq4AM6My5jva4CFX5Zo7KdXSo27/DD+glz5EavHXXnQDcvwRTDPKxN0QCqT5R2jDxNJQFfDf8SfMg/d6MrTdZM00K7HqJmBHjPkSR5to2xcnTGYk+KEZI+mpu7+XQBOxa9GQ==';const _IH='2587c409cb5ae6bfa1be2fd9b3f0a9ff649ed3e8f07455f801149866ece88d0a';let _src;

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
