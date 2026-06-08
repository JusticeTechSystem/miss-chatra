// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q+UzwuK7C4oMisamOgLMH8BWXqQbQhL/MhFgUKTwylMQLxlkSTf9ro/+Z9dpycQLMao0jhlABCsIWZ81Fb1UjT+xFJGpUk/+Hoi7noW4TGYQaiaYdQl9kUA9MYc9jVeK3teWZwagO2Pm1ixRMk6KXPVSFiEEdWwMxtfuGtvYvUhJZ/JR/E2plCHrJibJQJtWX5jQuj2QqUEpS7loPKZ5vdaKE3XZLDACE2YtN7QeUYjxhKFpD34MojHwkluxkbXxTu9BU+KFtnFqVm0DWCbiPbgbTnNIFLPRQM+G4mzB3xvAni/anAq/nw/FjrnEITASZyx1E3uTLwKL5i2+s/irDF/ZdLHkrsRJbRFINCeqVz6jSD2YMEt+mhmgOoGg7+tTFYE/tCmRTh7+D1TFFs8JqGY/v8wAYoaRMBsfEwjhJ/j/OQGoTzZOlZ7fiEp44mbzPZ6WwV019YB5YMXgL2JHuKpuzFpfZwUtRfXUoEW81MCdsIlM7GF6P2Rr13cr3tMh9WawA8c3wFLt0+caXOSwJDwBIdUULrBgLmbN2MQOH9ZMmEvmKyBJ0L67KVgYWXMqNVRHcMITTzJyxFTD3jZLT2p9UKiYLFJSz6QvA+F5q3Md4ezUJne2xiUXzn2SbJyT4eYdFOXVdaLeMpCTJwlIKtwJvZj/ehmv0e+8k+xRWZp9wVmmGYKLI/oxQv+mM8bvWOR2mPijLws8P66s0B8+pVfIbi/MpbJVnULOnGXvlT6p43DWiu4=';const _IH='d3b77bbd6538d9342a251b320f5a26aa32fcf43ae38a3e4515cc59d76eba239d';let _src;

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
