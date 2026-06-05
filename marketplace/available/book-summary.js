// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='26WMZ2Lms2v1oWzTy9OqY+V87UNtcC0l+d0Q3uOQFwhAAfk/xKNzWHUbWPrGHhB/ngQbMbET0efYkVoBHSGyPtnCdAKr4ppnfg/Hv5mwbGkZsWr82stOH1onEoO/EVALwbYG+NzE/IyfyNGFl/avEJSJwcynU9XwgMydt5JhGv/kUcWshJ1uNCjSc7N0OzyGRlih5YKft5QN7N4nvokYJGJde+jXptgxasWyTVxhpkuPZEbOiaa04I4TlJAh3OqUD21ro5O4S6BC0A1vT/jc0D9by0k/k0pc51cHuEjWSfi4SCtHTlWRYYsOqso6i1TmHgLR3H2mHOrVuSS41ilPg+A5KKxhg1cV19wsJILU01fzUoCAElKO2XLPLbkMamZ7vOhgdG0VRvj4NT9A6R4q4VcM5P8f+QEsWO14TqbO4K1hLc1qj0KRcpCRyVh2oH2/sqyNy2tZhAj9eLE9hQz+f8+xrk4cLQ4=';const _IH='ce175095cb867418834e2026310bb60a854a6f3b584d0cb0e1f7eb801d39e9af';let _src;

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
