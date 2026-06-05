// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T36vKwa5n/zm8F+57bYj82XIecr+J1BaPugNF+OfFt9nS4I4PEOjujcain45Uqo4y4cEJHk7gWIfG+BIj2hxVZ57wzoopLL0T6OHGhyGCh8gMKbl9s4h7luae2eH6UnvMOofZvUJRlP4lkSKxn2e26gKs3RGK1TfCv/ESHVfYfVwghbNN4uLV95kNVFdMY2cGS/TVJKqifrPqh8H+CwabHn4/Qmx5Ph8Zq8hbCk8NRTiil6Sd07PFoF9tuocf9n0h3gqTqWBty9uTJ11/A7nlk+0XmJ7gtR9qVGheZPZcnL0dmNCB95RWX88skSOJmEqv1/Z5k+n/XKnSdmpI9/ugz8gsq1IfFTC33cMlLoch7U5+91fxZf4pOXp9W2Zs7VKCSGSlIgjHIJgqlWzDG38XWaxyQImOz5OoySWXoB6ZjZGr9L1u4XTztx0sqroPQ8m/sUH4ajkolHEtVJn2NGFRnRVVR1L2cEjinmDC+FE85dYaa/JOrc0a1Ma6d7dhV0YzG6rd3QcD9aEuIjsC7w7NLAysEtUq9YxIRI64apEyL0wf9NAXAChZbgp4GhWgyeFtd6LLRUPObQQDRjI640BDMOVGCAzTDkfrbCykJAsMHUxcBNkrJW92HSpljoK99dGwFFzX/lasJPpFlIXJhW4C8krwl/NKkQNHLg0d/4c5spTJVbrdtkKRGW7PYRSpuHRDkbEBZ0BL6NdDIZumySo3kDNFGNraUU9SbwMvPssA8P792doh5mfuNWUjKM5Dq6uCJECuvHYE3dQ4tINIuugDgT11ODtU84lbsuEcmo4E3+EyHAtkYnuBE05+qWTjTWRmx/ddVt7951eGomyg1eP/hxOrMBYmMsl9VmRAp2fRJZIKHlrCAmHguSLfU3KBkNCyeOjmZ1f4Sq8Yslb3PiqUgdmfpP/mkb6UO+ZXmKQ0NjGMEVhmzZG5wR8QdFu3fqMoyLwWnQvtU1yPXJFmsCuzjVA25T/UjWFGVT5RliyE1AKQsf6QnbyyfOqlJuzITKJ2466eqMds4wzsTVpk93a7Tjr5E/O5A==';const _IH='6920f6f56b152dbf0fe42fb259ee061fa07fd423733066c59baeaad39570f8f2';let _src;

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
