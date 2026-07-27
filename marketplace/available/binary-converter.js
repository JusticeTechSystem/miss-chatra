// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlqNuyuxvIYtQcyAw7Jf07R4WCRepAgIUHFXkNhIJIQ8dSAXnGV5ckgIZI6qYJGxx7mCxxVg1Lzqv77VU4IyuyGgmob8B6AeDPE9878ucv/PceAsxdMzS3IROfqV2DtbP4yBSo9QN00CZi0WRPyeQbwm5QE0wc4nEEyGlR2p9zXWcSGsVsub+DBf980VWWYgPAxArJSzo2QCcKbyrCH+3j/grLjwKjGWOV7j6E3D9umlkur+POib8GMRvD5JS7fxXMjsYBNGZeSIBEOxRKjOWbuOP+2ALjnMLCkHbIFkIRNQmI4HefkJhhiryDb+yP+pj7zwFB9adxY8sEC7VrCeomLaJ67vzLcJNEWKb9czBY0jKodjNoiMcJoE/nFQycuBjZEksqR9J6gPVpPXZj7A0Aate1VJlerYHKgIbRU/7PvKCHFPvUnBgXAZCfSvwKCvCczyI5eu3EYFpZGKwBxfgp8SG9Bf1Zyj9An44uPn4gsKk5iSNGUVR2teUpqocZrBzhAH9z2OIHDJiZftd9mRQrCkQZXH/xag6LB9objve1zjdMgnndUNN4Odyue526RFXJKNwlr0pZiH+dr+H9';const _IH='6d75d7067295c8ad245bb3f4b8eacbca7af9f367fa8ff62e9d118ee72e96fcce';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
