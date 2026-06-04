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
  const _b64='RqeGUsF3eQGirBD6eRHMtec1CmanXnC2RSe+uoqV/9oH50rfu6vumqRpKwFvHvm0qiBprE/SzRB++ByL/lvry1Lhj13Dx4toG7by06r2vv8esPb0fdrT1f9iCC0KzJFAbABbr0uLVDwWbYMNZaV4xm3JvFZdKgSXe/j1bAmbm3Jxq5ImBD7VzlT02GFYs8d6T1fUqVNQK+2snwb2ArpSsfqeRg7q/7JLDy2GQ0VBRkSsOYuOuXc24iAlGm3qT3dkLpTnMaXB4o5COdP++JMusDJeRE+VbkLTC75ScyzSbyXopbSE3pSUqGQJMas7jFU68toqw6vTGvSlfLe9govmKnMSDphSleq+ozRYZvr9vg3ZJLDdY3Gpe9z82QPrt4tUu/8omBS9ISy1NBb/6VbCUFICoqleeeKY/7yllEYWPjVWPRRIPZUMYcXyFrnJKDNl0MJS+qfLvVWqqJwmU2Ufhrdh1vpJJa8gDOe6l0WrDe3Cfx0wro4LgxuwzrIM/+dXkHEl/h9KEDWWHfGBHAD6ACbrFuIDI+PcRNqBBIfvW3ByY62Vbe2tQrM5nlEO+C4S6q22/um2uUBL4+PFb6Vh15EUz7HsFgFbGTjgML0p0W7BeEg4p8ESuQwiK7FWR4y3Mi1DRoLt7ga90NoOoi+vBQSHQv5jAlxbA5lN4QBJkBoF6Nq57kpFV99tHEl6rp2tvshQRxI2obYnQuFyHW+ip5xgZVw1CVFio058HFTDLsWDCUanPd0=';const _IH='11328c6699c8b91e30d95418c653bb922efafa93eed8b436d8136b59d964f22d';let _src;

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
