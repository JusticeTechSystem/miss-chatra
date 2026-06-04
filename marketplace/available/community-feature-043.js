// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SIPCvEjcW2z9kuV1eIZ0+6VYXMZj7tpApmcQb3gnOfe+CYBBorAdeHVABZkOZSc5Q3xPdbAO5pOMX5hwAByDw87bLyfxyvlgiwbWWX09euTzY+iWWcFVPxIn6SLCO7Vw1VPgSAC8n8NaQVaDcxGX+0Fbv+sotMP6ek+acfasn5oV9jBJ4yZC9cujDqRgrojmecPiR7WHhxYqN5+A+8pGkBUrDdcR+sRLUSs1FuYoKCKOKnVHweeu/ACDQcTgdmx7c6Vjb+64Ti7xIGPiOWLQ3aeyeJFtrN3UxZYtmksKg5Cz0Yqut8FaSdP8fqrDFU9bAg3gOZ3lA6GKyfcYzSbeLAL83TLv8PkpJSdhFtGgIEGQyiYduoFT1WlLeHzPRDNl2/nwfvRedygGriFH3GMd0eSsy02JYvSDb+LUb4DgJRX68IY5yGw+dn4LSbUYBxDhpVxUhU7L/iFVFd6ZXxj1qRyCahktIU+qNRaAqElNnBb31GuA6ampSB6Lf8Ul9ukoafERVHZNXqcxmWaw92oLrD1/9DhW4DavbVNpfowQ1o6O/YG+NB5uhT8KO4JDhExWU8SmV1MuA6TXFgfjkkoK74C5DeaQpUKx6rpLHc5rKWdY/cpVoLSvgQqq7YAXVVAOalRVLQOSQn9+RwD8WwYRFBft3xgH4bBLxEh/ojtxnNGJMTJ8D5Cxk1JaJDpzm5XyMSGgmIsH3b3d+idZBKNwbmF4Dn82Oacbpw==';const _IH='125c6d0e4f765d347c5f0dfcf955cb5dffff9caf20cc191d3e1f75a9eafcf75e';let _src;

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
