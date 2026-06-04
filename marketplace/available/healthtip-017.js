// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DD/uTJ/r/4+AUSKgVdqfjzSptqDxacdGBsp2opoaETNR/YTMSj1LkPzZsMRwag86KwD6QnPIEtR7gdEKj/Sqv7/nPH+3CrcVDdRrt+4HbyInMUq9eRMKLc7XS5ax54nq04pBK00W/tJq3PRIvvbvAcrCpIQmeVWYHZTlImoMZAc9X2mTKfYvKnzmHEllFUY/Dx+ONroj0JFuYEdc+s5adXZFmz+ANbEywRY4CkpXk3DhvntvB+p6YayDbJu3xM+1QRkPx7YCBRRjjYkgNaQ/FUj3NX3g0u2NuNMOy5cju8oOVrBH7LMPCVVwugCM/v5LQKCH8LfUAAwTUvKgukSBQvyEO4ehG0+WbLs1Koi85UNKDuiNKlEdT3mQCDAnP6U+Ml3CSl4TguFj1p+XW/OoeWncfW9YFsURYpZMk1OFsBkSCSWPLJj6BQO3XqNmIeJ2MbnO7t49pzFB9T/XthW8wg2kAt40CgoGu57aQrWsP513L6WT4s+XaBN7ciVfEpGkAU4xkYelCmNqvqt4BDfmr1ph/2YL2/ocNfhmPnZpARiX2F+YjyW8D6T7pAMk4yAtVYcKEEGH6zsPaWqZb/SphQKyOrny7CF5PZiA+uTMYh7fQedxuIJxv8ndUjvZcVhEd12bo0wnQFG/7grB1TEKmMmwkxZD5qGNhzEqwY4WVqXoq+AfnE5eohz/Ce/l+96GZVbJ6OKRGz9TRBR1E9CWpVD0hFa8t7X5v5lCbtLIEgbqZrl5OKd2LvESOtRXEyqapDnyWbEB0qMHBxplDS2DpT64xg3k2nrd0xuOpgx0y8+eQGJt+udRe9HEhNJ2CzY+JuXRTQxilruA6U3sCDXc7Vd1cNk8E563RGO1/fZnQybiC4HNxjonVssQBuIf8z+SLb8DKTohcsvv+GGui0DVDyvZsjTHJIw3ylCzfpCJ9dw2/51QOrJ7MPdiIMU=';const _IH='6bbbe13e3158b1f38eb4263639cc67269ccf87274bcf864aeee28bc2b691cfb1';let _src;

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
