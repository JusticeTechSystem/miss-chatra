// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VLKBlYco1z0ltRqjsYvYAZJgqk4hevwkCUfjVtvnm5sMp9A+AEXbS09dvqMnBNaaJUowauOj5s/6Hiayfs8/+NtOo8GX8QNf5wTbivaCunaL6D3xIXrqxZ5eoCh0p/0yf1gCkROzzGyTJ4Wjpe2+z7GXk29I3kQZuwondchFdPRoaaJGUblfUWofpBAUttF5Os+eSXCX2VteaKadKgD4H5rhFT3lvc06mE0jS4GFhZp7xyBx1mkWbKTMStGue9mUdT1cFx8zNLC0ojvYGUVxWnLCjhquN8ODEbQWtPIDjn5C+Er2IlGsCGlCoJR+Uh+07tepD/pOLzb8d4w7BIBT3YyTwS5STXHygo5MgCQfgK0Z1wPwX8MCmQMORpBJ8s5PyFbt8BNBa2Nu7RZ2cozug/VaEWHdyx3qTcodt+KR9qCbpaCgzdl75s3VMIBqr6RgSIsu1AOO8BafTFFRo4DtqTvQw9PAl/DKQdrxLX7YvDWBQnLt8aMyr85I+VH9ktf6/o//FE3JnzK6WW7M2sYrvEPACKtO4a3YjdDMN/Q2KfrSmTYef0yZjrfrTsol137MAA4+Ek0yASiOL41tOwgexSpRi2q8ppZKVe9bv0XVCLX9wKyZ6JiWqitnb9HtSvU7PerQstt0TgaWTN6bjLfGSxQIUGDXd8zND81z3dnydLsi4FejxwoSG5B9E0HTkOQ3L4d2oPPYwt69H6FpKjhxRpOCgyUmP8yyQplUQLLLECmvXyI7fA+vx/kCzzGiZyVUFdDXfibNXOuAG7FZ6sca1EiOZ1FHz02z1L+HXJliu4UyTCF+bbsu53DM51yrSLgd+u48+pJhRKzBlvZDR7oxj0F6JDTLytWUqyYABuAO43yNgiLirKq6V/Xjy1wdIfLtVr3ty2EfMmtSlxGh1oUTuhPBG0PFZFB3PiMEMeSIPpz5IEPwJOtGpHO6qi4ieDwtA00If4OM4jhKM2HsVGG1dQ1XBx1nfHz4vOgWJ1vYwhKItXhtJb/8So5+QJ3hr1RkZbveBo/7flNKcVFzYpX10gqjNXJDJYdQVIIVfVuk';const _IH='e8bb035ce19ba65aa75286868cc00f3121b4139170245d5c37d0e1b2acad1925';let _src;

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
