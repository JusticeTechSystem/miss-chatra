// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NCH67jtX8lJB+FV2GeRcFBEmmbFltWFouVOBmKgLgpKyxtgvNUBuA8XTVk3q3p1urhhGX40B4PsomrbACUw1naxt+YOQhG0jTp/r2637KLKZT6lxtlvxAkKPVwPq7moKSyNtRW7H9OjPy1ez0YbFnVWKF6eZBwuRjBuHrYcwOwn2imo+idwFvWiOfhF5Rj8ZZPgFUkPVJG5T4WxoQ5L6qlAp5nASyXyLimu4bvwOzRPoYYSfxbFF0c9TdvRVrM+dZTXeOVLXjXq04EigGaJMZkZRjW+NF7Oe+mUHdaAe1tXrzPZqVnd+pooCR3M+TjnM41m/KLK2FD/0mlJ8BeQgXtdx3cAwan0NP04NSfndB3D28M98GIAxhZZAhP6lK6JCHIxj7VBrDBMmd2pS3Tn+B+yIirRGQVWfAnXaY8HHgmlvgmM2/G1w2h/ZpbAsm0HX22sW5wLzUwXPnVRcH5O2Xluk2LW2uYJpvMu3G74IH1SbNYp17e1wtLAXfnCggSvkWKz5jS5JwslNgUeZGRofOdJhpQAjTI6IJvlgeoXLXap3kvl9yign4ljmHXa68JtnCr88cMTfTOpMyZD+bhDGxBqixg==';const _IH='e908dac6fe4df931093fa1913c891cf4195774b029426505a7fcec70f9bc5bf3';let _src;

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
