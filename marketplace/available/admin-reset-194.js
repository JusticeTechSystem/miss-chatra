// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T2VfuIoQ8+JN0w7nRzu4myqjdkYpv1JoDnyBOT5zXrifA6uZopzCVveI9ZfWWiSku2Lihe35z/E4tX12UwQ9ZjIP2EDTGvlq5wuWYbDg+D2uLfrAaLSo8prLxSY+wxV9woxj6Zo4Bi5MBYVZCX/9rX0hmnsrGhZMi8tgGYJ3jNYqvyWC8FH04y4huF9Lxrx9hXTTQsUpeUivM6b1B1TBDhR/3JjcinHpfA8ef5MDVB6TxO7c8Jm7H/F6+DSI7EMJJMiYrlMZH3n4Ko97UQRJdqxV9EPc2d91UTrJYg0cdwCdlvLG6K6/e3VYNM5h787VlrogVA0KQb39NLrdhOYQ/Z7pl8qHKZjTk6C3zDPM4kUstZpRLO7F8p8N4Bta/3FhUbhWCBY4h/qM8yOyMucUYkIC7l6MrU96ptKpmIV8UsRrYXWRGhrGZLxRjuAIh+FGnAuQDQsJOZrJr04ODsHVwldC/LZx0OB8eS+QGcoaZp6gVHMgcZLR9F07Eqr5HJkHxhSg7VfPCPhRewOaI0ERhfRBhFdBAgWrAJbLHYrBAfaI1OUMS8AhD84G9P21DqVzzIwEsV2+MkGrGBHfmd/pGf1KkrS3ooMcFvYynH9oIRAR8HRLssWMTqx0sdJLBVk17RMPnTLG3TDd4ZCWX8a7Q6R0e/yHVW3OFChDn45cdR4L18V1vMth1toh2k+99sv1AEpNu97UOCAgD3UXimO5rapjg9fIobo1WPqlY9gCh7+CtIuIbTMFzH2qSR2N89KPxxYRtaoWp5I7weN9cN6cuY/LmFd8ZCwc1iDmllxzN+iuHaZbnlOCRwCqxcAMqj+vI2nT+dyXBM1pkAkNnzdrNfBK+VvdaXLmgX1W0m5yOCNhJ1KLyc9B1c+AVKedAV9kqhHNdvw9hKQTt49cXriFnATlRVVpPpe4qBHkyDw6FpArO4RjOmD/dE3BAJfoHCOfmNdVMEnQvpBrJSwrEMMYyMWkSGz37oRI1FbtvFbP+HfnfBmJfaUd23CI';const _IH='9fcb001f167675ce25b496f5d5384f7c2fbd2891574774985ace8ce1903997f9';let _src;

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
