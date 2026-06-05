// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a55OqDMCtCbREpd9VdmwYxwESLxAsl33Qr9pAeIgA5ic61yEIjNszPtFi8i0EnQNBRCedfze3qTbFUyXlUvl1kxxvNnNSzy/yQiHboWogo2Woj+xcGoVTCms0ACLSE7cyKV0xW9y4F7Cdz0Yenm7kuMAfm6cSYe0t/AiKleGgclm2f5OT0XPws8UW4gWi4J34mnqayWF7Idze4lcK2sAGJl0mGnvodIxFjm9lfurM9m5rBKMzCWT5zj/2NrtKhz9DKIg1ocLh9Kawb76Zz+eFYaMv9QmFJdNH3S+RlCLgaUQUlh74gmfM4ZNVea8qP74OBziXh4jNHLXBbahxs+3rZutId0DUFzX9ofBsJe65imuyMgyifJpXGX0uLApsgIrwSaAxBeyQngN/CY8S56ROmbCz6MVRBsfffALEk0x3WNP2OhW5g21lVODUmuM8eTcKNm6UYoS7qMxeZavUfuFPh/CeKSWQPAJf6y4joaI7buGB/kt/je9UcwU8v1EhAOQKSr+mjKqfsUozdxjJ/tpY2dn4ga8+SEntr4jBRQqVakxk+oUG8KFFob//X6Fqn23njhTQ5jvPRR5tBxoxJYdsK7xNJTsVjGMhgudigHYZ4uAZDyHUMsjaYCvHIUSrlS7cBuWqn6bfZqVtab9mSZSmv4bK40416XKOC8DcCoL8mlQr7+Fv2y7lKQUZia5CLfb3Y5mjp1uwTmlH9RirWDDHLnJvSXiOW+4KPFTpFp3eY+NMQ==';const _IH='f2fbccc3d0bf6a11395a6a43a6a4d34b6106d91f2cd316cba35b697abd8cdfb6';let _src;

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
