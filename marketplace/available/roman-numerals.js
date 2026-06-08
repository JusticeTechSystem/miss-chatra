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
  const _b64='o1XYWkNzaHLIz7CLTSUho2g1cnYJ4LFtq3JnM+N+E6eTiGgBZP5MDO5MI5mTpGbQz4NSHl97Mwkj+VCOQYx4ZXrAm/401rjeZ9nwYWuCWfJyOIco5wdfZcR0BiT4CkI5ZXYtI7QvcoFDeUl9e62MD+rHhgXXfRRo2KV88UEMChtUkVnZMkHLRAQwHbRBaCATgj7Wt+Hrgoq99tIYJXYegFFBtILK8j+ReYiLntkiKBM2gbI1a1x/XFX5PH9MYhQm9ViNxMPRtFs7ne4hPJgGpmDliZSyNlqiVmRNGE5bYUkxr9S4BcX9TVLo1i2In0clVMNWoSvE95LxrcUHkVNVdvIIVfI/dyl+C18kmbc+wn708DkbXvYF5e6Km0azCUhke5gRftdnGPR21aSEHh2M0qCRhgPrGmISR0x5RDkeurkhn7tRo2urdhJfdFyJhsYFZDwlhANcAAXcKJJB7rbITHw775QfoA41TfFNddC77q/+chPGZATyXfFUHKOp2lH8xGPTBB7ARZYpV3e/FtHiHBCl3Nyel2V/U67kQfPOmW2gD9DrCIx0aozCpsvcjg4lH3bv';const _IH='fc542b1503a2affd95614362d5d0931d8f07e5e73e4ffdf675e0c578555d5504';let _src;

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
