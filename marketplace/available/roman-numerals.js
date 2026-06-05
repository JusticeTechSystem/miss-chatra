// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='796LR/XGqqBHGDyDLLdYn6cG3+d0yePcYyOA9uZsGfGmQijtvnOFv8xGnWnL50h3izvoSB10P28Q3o9VrZM4fg8WCsg9Knr1Lo9FhTqr31psefuKdOOkdqMqlEM4qUL64lJU72RquIiAq5+AjCopGi6Bup4FnhnWkSw4AYkXai5kv44dxa3a/jc2SCBvxZC9bV+LJmA0Rb/XPTujcUmhKeHcG4LwdiVrghQxYsizgbJB/vpFYRgGO3dfVSRuHxVIKMV5qczM0DSi6recbCzE0awMIE6SAh4Ny/jWenGQ/INCWIkoMUjw6mFbFxheFHWuq9Uim+Jz20TvI1ITwnq+rKexpzZAswIfkv7wq2890wmKC44zZ7aSdt0PtkC+lYCqiR0nXkNElvIxDHUHP83EjC0B7dZn7ANX5oT9UZ/yxHdm3NYxZcWUJaL7xAGxduXI6Bok1VankD3LL1H+nIcoyIUyrKfAkKF6KZPdvPEM1FPh1gQj37HLxH2NMCgDuaEBt5IF6LkcNOR5ZRIfG50w9hi+CwC64mkzvYEnw9ljCcGXrUkQMKTkfIH/H2iPH8ibf2Ay';const _IH='bc9bb762f651667ecf6fc020951fa8ef5dd5c2a2e9731cdd78ac87a7f388324c';let _src;

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
