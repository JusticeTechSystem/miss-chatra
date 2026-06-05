// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ET5+I+BJPuSLBaWfhzPBAcctpzZ1BGbTXGngtOaaj1r4g9ZvMzaiPYxfsPUkXPemzTLxrky8uPm9qh/N0ozA2+W5B7igDKrSHPr5z794zE+yzvQWKx8S1ZQd+QW0e8ZORoAhfKhxRBqZ2c9WqT2JPKJKxI5b2OA4WS2xtdzXYHmM2XIxzL73bHrZ/oUcWjcwTROoxu8/31N6WdkpWTuRDCA/CteR8Id4Rm+f+2qPa240oKo3qdcytvd6eRXHveSOai2FTYwCbH7JKMk2hddk2H5DpBnhefH+N//i5a2n5lu3VR3nbjeiVQ7CT03/vS2jIBzDIyEizISyeJRahoj+g1a4shdRvpt2unwERPoJHff0s6brVPrrp8d/yDOKrB20o9uSPAskukfiBUElWEKGogGheilLoI0yusnVabFLQaPGy6WN41t0SCGuuz3rr1+/XiYOyQDYIOAOBUStLUjkwKQQegGsq4qix6l9/x8R/3vOj7ZIJ7voFLTbZNqAHVRzDfMCFZMM5HtFARBJTPdA2EhWyUAwb+EbwxXpl7ffN60TvUPB0sgcTZw96nynWFkOPScvGCCahGaVoEnC5WNstzytOqSg8kefDldOLQEI/38ML3zdctUipqBwrxuoQ3MPljGIW4r0BHtyod+lgAWOiKdKzSTH2JZIY4rLKaKg/MRIKYNP7zAHAeIe62McE+Q/P4cqw91wc+nc6STcXf4zBDWTy3tJ09dY+YvJMkaiAchiv7SA5W/Z3jvtKpZm0Lj4relu4lHPS8L49OxxXLDdR5Fhu9ySRFj1VmTc+m/fjWILqdUFCW3miX1JSB2eYnp92mU2+QNm2+BHQHTe3Muq6PIjk6FZsoM29CxgnGp+nafxvY1Et/GPSKzmGM0RKOUZ42HUH2mQQ/N0VOSJO1MQ25yVUDWMfydTHfA/teGt92vTRzWpA1olKSVSrMOGDaWoUyRXzwJ4P182e3Bo6bujg+8wkGxPXEpD+yeGltfruA==';const _IH='21f2fc3daf9c5f951c802f193603a939f427fcba164db395c2c079d6615d7a71';let _src;

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
