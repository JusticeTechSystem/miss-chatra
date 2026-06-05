// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WWdpsKaR0RBsv5b0mvqBjGJh7Lx2DXyFgDltjJc0dbtAPqHmMcDzIXxEPYOYhUDRS3OwbGIWwCFAnUbq8uY/256IFSEEEloY0SnuHF2l4BHLvK3udjvannmLiXPnWRW67KKjpi7l7MAUkMjZBdEDQAagSt23xk2PG0V7iItDQ4PVtDMP+TNVd+tCX4tQy1MXGAH8Ar7GD4yR6wfp6ifIXcYYMGVALskstwbskXbdxwUa5OVfFCRXpYSayL0/iKH94qyKht2z9aj73ndWfJBIA9ZigpOiahvZnjpj5r5ptn/j3s7fFcq0FO/hTrluQrkCK/gU3ryMRlUKklTIRkVEha4qvEl5+g+ZdLaY8Y2cr1ObD5ysx/k2DPmD58es/qZDQbf5NJiKdJasxYhSL/dJ4RY3SPREwpTTUZ3aML0YQzt+PYpQgEiw2JijQ07oI/tANiby8sGu7HZcS8J/CxEDeFWOsbM3V6gtYmP2nr3UyVsdxdBbI7qzpLuRoMUWcl9XVVY86Qy0wvuVyhij6sRuedWChb2NcEc5I0o5gdmhlg1tvTIWQaiIXvRiIQzuZntn9k+cMXQGaLJfmcram/uQobhCNJ8+9t2Hq+HCtaaciJyjBMKhufjnyJxi/uQu7uU2gfC4fMIQXw6cMxEoQQ14L7UP7pajMnZ5C9aY2XsSuCHKLTk4wM5hxiGt875mArIm0BHykjgpbNiOv4mgWOYIOlJtHUucE6R+mrjcW/A1l+Gp/DAf+GTtk6TYooTcecBSEI/DHKkKYaCMrXIxV3HgPGkPAgiGKUXyH/NjIahZBcBEgnCpayhcVgUk9NBwFzrAdC/pfgVxnS119vWmZU6lyN3JfppeKuTNFFOhuuCWoxjwpJTWCR/9qbpA2QsslgvbjM6UeAvrdgt40xfoJllgMjenh4xpY+4FTBL2bg0jvS/C0EcrPL40nUWeu2XQMneWlRqgDql30ZCIarrassCr0k1/3cRk2bAkTQ9VkmfRWVLPGjstjNaQxN2qhRygMyzZGL/shBquQSbEhSqJ/fI4f2oRkzEMScX2qTPgowuEKVu1JpQZm+b0ZISdyD9g61EJRMTRNrJrYNPkg4ME+UY=';const _IH='7c5f5fe8c04fd26e89f9392209f04fe5b749b7192d52d2c43829d497874712a7';let _src;

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
