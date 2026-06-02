// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='19wWkSsfGe8P+vI8W0YCbQ9htHC3IyHROMLXATu3FZUj8pqdeoNdDLVy/X2tAeevfFAfG0o4NBV+xonipXfscMRNVroo5pNNSBzZa2et2VzJ4w3khNiAfds2Ag+clOycwripmWAhrP8NzseCYJSHtXNX69rSCHJmHLn9o15Z9MSBO3LhTpSLheOhKxBwFmWtgqV0/svsBz1sARXYZlIKjkaempxWbnxt0CxhE97HXOw5nGc3wzwX300DPj2nk2cTSCWxaWZ8iFeUnsJ9lyJ5vsUZqoPa8QnEKA9RP5JCyegK+bPclaPd0FU54PGUNFjkC3cFNw2WY9sPLwDIyD2VF1/XI9Ww/zcLMDsrfYfbVVK6c4U5R+pbPl24i4sUliPVJnfUFJ91FRgFwXZewQLWKS55VR5WcO4BFbovZVNYIrD6wrRhuvMCCC+wfcVsAQwFDvJ6g4v4DZ6t0cfFamlpT+u/50wESx2dSylX6VxvPoB9nbGGxojmATZAPGKwMu3aDOtVI7g3VtopiGR0bW0t4pg5WHP7BpQegDaqzqM28VG4W2SWnr7PQVAjYjVTVMSXGMy96Q+/46sMM40Lc6gsMN1lQtghVRjU1NFP2avDEOKJL3hVFULJPZkgHUM/YPbO0e373hVpmIuxsUOhQQl6Oo1r/qaevKacXnuk34waNSYZEVsiHGI2dgV3sX4YqXRBmdyxM0S4qEiXJQngNDkYIpvvwS5G8c/fQpgG1vLOa53XuX/EEq47OSMxurat8ci1JBKSBJ0bR+UNcqM5V3iCMyYVVoAhOr+pRB8nCz8LnCKGB0ZYsZfQfFNSCiGjMGe+Db6UqY3nL6R33jyaV2qh/dRCUN3JBAIueqnTfUx1py6k0ZaMzfZifClJxflC4MR2MIUq+rg78Z+f9CdvgLsDHRCpNT9+ifbd0GKx/o9MO+QkEBjtV9rr9DJkttzzj9Vs6ppZjyYZz17H4wIfzdzyaQGz4fMLpxgmqfjGartuwJv0qsqcaZK2H86V8+mMVfR9O9xzTQ==';const _IH='ef2e8e8de5d62b540745d34481e4955bda23193076acea646d0584623fe9f514';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
