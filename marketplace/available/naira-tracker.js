// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qXjlQkBZz3dsZZjHXG/bsF6FBX9QiHxHzSVFB752D+IonNOx4FM/z4H7h9cm9mCmvNGf34To10va2ZKoVInMMF+PGhzbFo90hx2m3rbb4TKJCH1UOyo8sAxGwc5+7pguKOW80FRmUb8DfhhMbWN5LX9v5Alfu/WRYmFRddAYggn+bJqGi7jfZOyorQLTejWxNeXYebic4hG0HsbRwLCgVz0MedDoUmzd6pxIZkm0x01H9cjhyYrv6s1PDYpVf46iGxv14oljwQINnOrrmAF/0K5t/6eNgAHO+grtfA02mzoaQoUhnrf7zJKGLeY9Etbhl/rgF+HKVzzxMAgHlcY7I1vXVdfB1op0hUiqQspyD9fWZtalKeQvmTYv9N27vHeGsrHi674Q/jSPBM8en3GI3V/5f4KHlZbN9iJ6fvhfcd1rENXUwQLNhK4QSCOge5JUmPQqWOW7JPXihTGferPX9TPLZj7A4jD5E33VzTdYPMRmMwkOee7lTSfdidiFZN4rs465/hnJoOLz9x1IDcZ1hZuqorD9qPSkpmF0cNs1MTKs7PxYAZeeuaMMZ6GYNnAgmd5oA3UIYHOBEw==';const _IH='03a65a225bbd8374b77f63f61ba211c030b26b9edbfd25a25b319165a035d662';let _src;

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
