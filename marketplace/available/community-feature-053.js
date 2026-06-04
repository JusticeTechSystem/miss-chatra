// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='56kut+I4scWZzt16ER2BSocGNqWojwxnBbUJ02puyZb4ZgGAaTPMjWKXvJ8LTjwlBQ3BPwYKkPU0BVwGWSkhTqwYDx6hVGuxuOsqK/C8bZuDaKKyiW+NO+uePCSaqw6V8hKgpc87YX7kQW8Sw9ySDNzk1NBQOYv7OcbNc2oQWhMUHrbhjztIJEwCu52kfl2ovMATlDorMTSzb02HsA5fUoo7ytIpZzFAE2kHk4CewgJmYqI4ui6sBZhN94DODgL+k06kyFRMojFcDwFVWuqO4zpbeuIYsWxJThQwDTcp5abvLWvTXjY7fRBfA70urxPgNZtGgnegvKIAKIBS+kzkmnXK4icz+VwKRnrOqXEwaRPkohdhITf7aG7rnKkiBVdII5Th2ybNVwl7s4eQQyF4Ff12GI2Cf73qlsUlLXwNsxASuQVy/PmrxfbLMe3wPzXQ7UkiNMM9UEWnZdFSJO1dmrOw2SBiYL3ZxNTTMRMZtc1+l7mtK2TSCs3UXiVa6/ZJMvtZs4H25MBFLNPa3UqA56Uoj2Qjj0f9hKD9XIjmk2gHkOUKwzevjXy6dhOjgMLQsFkZEH/ez23oH2nRrXhVqhvLV09vdCJCnNIq2+Eysg5bBA3lGS0R3mRSyTKiXgsmwInX7PwO8sJ++o77eX9O1FOFdNNiTZ2/RV/cP9hq64EEUfFTv5Qb32H+7dsYG6Lae978L3IVQ0+6ZoV9Q1ombIRmJgnjspHqEw==';const _IH='b9b834b2bfc7c063272932a0122ee612e222ca72d6481f5eaa693370f1885b0c';let _src;

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
