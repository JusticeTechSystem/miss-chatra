// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jOZt//m+NMXU7n3JrjXDcdjlHGLWk3+mfwkzjYz7pMvsyg6XI9Di7fBJuqFiJjE4AUwaMDdO9C2QnlB6iIFB4cxb4YFNj3gm/rJSOO9/wJ/rwC6V0ARPb5L3GEUPlxCGrNgxaHB0qZpFa2ch3P7/UUw240z/t02UCYUJVzln1mzBIur1inLa/xaddxwOUrfKcmYQzQqEftT7zPvM3tnNL7tzflixvV5+0s1PKCYKCF0NWysYeMMFXex1W98gqVoW4SCZTLBgN9MGyXFJpxUlIz/8FrjQaDB5yREL0qNXPs3yTN6UiLr7KQJkli/NjnzkpA+pcU7XtpCEyVpCAAbudqW9aJGCnliCCZCIsotvqBw5SgarxuSVimcd9KpsW4lFJfN6PnC1PBMlG9XJi/5rp+iYphACH0VRxuhbkBaF95jq/M2vdDKzgdrkzuLqoABJ/Roa470UPS2LLD8JF/wAONgUfFefnuGY441O7zCVzCv/bwB/S7YoTNe8YmXcIt2bYuVHmCRF8NNzLG2RFEErRu+nTwk3PnSif/1S2aORQFKSqGPtQFJISo3GKxezrS0nSPX3pWp719qIKuPoDl8xGcQmBbjWa0NQajlyizOsSbQ9okIAbPP4/WMvj4kEI7BRmJyqbNXKNaMY0Eeg9f5RKoRWhNQKqtTQRWD4LRVGsG/cdzWkSQ63bO9YF5R+PqMiuOIos6/yeSTDr+TsnVjWqVM/ELp8N2c8jg==';const _IH='f7f33502328de15bb13291af4ef8d094cbf4a8070beed24f601a3ecf8547f2f1';let _src;

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
