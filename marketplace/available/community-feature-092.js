// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='acqNIdUttZSTjjdHDv5o5ltUpaiLWADc4Tl2Hc2e77cscYs0R56CsjMndCSSls9r2QR/iaNiSg1lKFeVypirR3vU1EiEfQ2vo0rdemIPuTx1d3fP0uXDXl4hyJbZUZQAQD/Bh8csn2KQKEwPG2yLXYUpwHCFIGwy8zlwD12R8bSBAwy4s0zir91ppBObaXQsfW52wjVRKV8M5hpiun+szJUVROYjIBKCPyfk/5f099tlTIFIj5NP+EPGIHLKYcyvMy/qf8sFBKOkjFROwuyOH7W8jbfyMz6SvK0V19ZhnFgLZ1Q17i2mxa4jsMSjdoUInCW0O+xGQQfwZA38SKRJM/KVUz2tZUBFnkYWJ39ygxyTD7j9zxY0oMDQgtXOadmEv5DDIsrTQDCceEVRf6YiABK7T8VZDw2p/nR8p5kAuuk2y+yPehmOc7VcSHsp/uixSpJFKEHSQI5CAK59LlNQohJcukTd/N+fifh9dpwKLIiI8ONLnqu5whziHVTy6Vce1lKaqNjUgMjeK+PkJ80mAGHW3L7y86nZhJm/+Lu5INVTdiSrrHsKJ6iG8ZwXZXkG5MFoj9POcY9Zr84de6jR1XXXHHq1LqSXSFeo57Qwb/X9KR9+s/UsbSQkFM3bSrl72euxfr/UTygWlpjYAjp9AT47zIM5YSwpi2LEZ7JIL6LLekA4XYbBx2DL4++IhElJSjjGKrHn4k5t+l5PMdKhMVyw73jLdo9cvZAerR+Bcw==';const _IH='834f9be902bd637c3c2d7ff372dd0c64b3629d78b67839d0c14544c1168a4a3a';let _src;

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
