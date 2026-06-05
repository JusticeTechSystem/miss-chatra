// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B9z5la9y3O5s9K+P1PlBOROcl6W43xp1c7w9ZTL9IkkD7kSoKJB2/BRACyy9qvS0tgZSou6UcYLvrKKRtV1YEHOWbLEW0C5/fIoMDXzeADX0wc6TS/96xcxuFWB0x2eWTOMCoPVw0LVkWtzx6qjkMHzXAsGPAuaJoofWxBSljFcw6G6Jvi2uHGmIhgL0zVLZbXKeE/KlJ6pPeGV//JetBhQosqw22DFU7pzSfilbCFxBIhMmr1FvPn38leSk0OIdwzxWaC09bQSyqrURKUn38AvCrqptH+D2OIDvvakGGBYIx06NtrCgv/yNoO3PLeZ2YRSYxa+SQrIzpIw0srNhV1BtdbGGQILFQwootVdDHDt2bU9HAzDsjFx7hoSbJQPYsOehpyghs4XJdjCItveolXuDfOOdqsbD8fNYkDKZ4fgZ0Qx+EsNrmDG2k4woklDGSdawdcuu877Xkoc0Vm3D34PpRT5cY580s8jWRsmSruXzGMszlQ4/Be4kQo5cR7LQcwSFvGJ5mgspIfuUkzcr2snudeZT/KYXxMrcvtPzmE1vQeXMX7aNWagKqsAaYQf4yM6JonTD5BrcsVw3dNC6ltC1KqAuK0ndRV96KzAionygvSfaeySztXFAOEeQOiDMRbGc63Pki3NSZ0Fm2F4hgZE8WMOrPsLq7SFUZHSd93wcLg8hPWAtFu8odcaVl3uAQtlqxti4rCGeusbUX5ywXUD4LnsbfthzY5JRs+s1MZllQeu80EQehZlP';const _IH='c29a6eab6a606bc748766de92d8b69da4a27bdf9f828b90adac89bd09603b73f';let _src;

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
