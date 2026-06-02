// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R8aYSQbwlUltJ3CpY5ol91tN8gpJ+WOVttOz1PxBZVqnHgBhFgERy3jJjH8LqqcCw8F7zmrM/d/pN4Kmejdm39InBmhMIsA+eEW3BF0YZi4XxEtE9GAfDhJOWlSXmKlkz0VeJNUEy2IQrAhzf3a9+NsqIIRCZVEiIYRQ64uBs8xY3SxrXz2YADn9nr4rkfrwjLqh5CgSiQ8pS+zEv1q491Xvt53TdH5yT8pweDjDMIzR2u5Il8Z3LnfTcunzPbqRtYPtHHz2B/0nGwROY9csavyoIRiX24OzDPjg85QBqsrX6I87FEP8ceBJhZVkQmDehtuchHPGZyUkmc0ud97zX2pBcGwsfH7JtEjnZPnxdH8ET3ij9ctgX3Rdnmdbf1wBHoCHMy8ojScsMnG9kEwRidpajqBu/T7lrclhQRSmPYzZ6rtniuKrZ9Z6PC/8sj4XpJSAXNyDvr4giwwYCay8f01IXgELHRfXgJ6GM/Be7NLa7Ka6+BQ3aGhCCUXjQ82W9JAF0GXBM8Dm4fIx6Ncb9ykINPP0ewcmgtMlrIC86/MfBeOQnxJqhYYxyQh/SZ6/jDimLwk18dgn2OOUoncKFTeGsTJcSpU35u/BTpMM4w9CEZqkZPuOwJeERab4aex477eqT9Scs4zYBuwGyqKI7Tt46OA6PII7YdS4oF6CEwnKqsJtiwxyzwM2fEKWKMTyJ+k2gi7Ge+EoqDsWk0k6D7NxUt+BKiKZcaLfa18=';const _IH='bf61f69c3f669391e48eb40c74d5fef89d5cfc6d27d3d67ed07c9875aa85ce72';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
