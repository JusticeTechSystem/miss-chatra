// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fhD6ByKh1eRi6DWME7lF2NzviALZJCHlvsqLmsUAh+3Jto0m+SBhulzVh8/S63rV7nBe348mPc+WVh/IYEAJe8o1NQzNlrvtcyp/AYuLZEAqO+Mee+YbYNU9PiNfaTRzFnlqdmT6sptePnmgtjDWWJ1TNMQkh5sOxbfB+XOMQ0Ku00+VwSj8p6wWSfOTihrk4PbVEEC1d96A8+2y6EdbcdeJP2l/TkTRt33YPr8e6m+PoG8y9tbhBNEjIyGJjE+BEeqXulx/r7oO3huKvcIggY8V+P0MDXb6T+3Rf/aIsv0a01BK3bO/MECFdfCX2EJeiDVcdaZ36Gew06nZdM6/uoZRPPhIZ0faKjIqh/OMLBpHwNy9kBWcxAVuUepGtrT4XeyHhgqDhUw6W/5SKARoR7lv7wWnRoPZr8Ac9DRb8y4+xjT9wR/dV8EFLgbV5b/mWfbs8AQWXN3fvzY20yCXr1MPpzh4w4ZVutwM1mrbI+Q4G3+wr67zdJgictCIDBdfVYh3fCBnxQ4LeXLiZ6dcM2iyn70Vr6C5Sy/mxrJ+GA0B7huAS5Ag61BcU2BTdzRQOe/mnOiCuRr7rOwkOqee0b1JLCnwzgx/2Tz/VHgsnysQqa3Cu9LW7NQyp9TkztDi3M/hblUZoVPguPckYMbYuNC9SMfR+iSJL0eTa8zNfazn49dvO0o0l3kiHAlhkMYL/s2qRudiM1Xa1UKA+BlltDyLeiE=';const _IH='4690885fd18bd2c891f664edac485bf5c3f5a250804f1e445d7df4332bfffb36';let _src;

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
