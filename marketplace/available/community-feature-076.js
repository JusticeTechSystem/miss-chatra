// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oyquMNNgjiy80ixywyur2EL3Y6EFYUlEYWXKHX4+GeXJuBHuxoyqmGOO7hFQgOjb/fah6TQh1Bt5IvsNF7lSK4Sm4OXQbjDJfxhGr0fYveyGLfpoRB1v1XGRLpehPqu/X4mV1d9GkkKlp5aIdUKyv8hUxZozhu/ONKWwcQ6GszQvoxVacVnpECSij/AFcnWWXjrGtplb82KAHy02BHv00EKWEXLvlsHj68Bfo7AQYOWbGmfqtQiR7snTgFcpmpoJFIntX53AZ0TibGBvNM97MxGOeFwDL2+hoXUc9MdtM4UejM0oUXKrqzPn92KTFGt7GC4QqDcKHNsbjVG3ORLMJvQpj2VsQRQtVVBLwdtwMFh6eZqMtNoCtbYQWeHSXO5rZxq4Ghg8DOw5DOmqJbs9SM6+zdYFJyq5B2LuoSjKKURpLvYq7+L9eUxgj9Xktp5BoCUrSszXRfZAmORhjG5iTidjZ4Z4W/SsHKciFs9LbqHs35FibKnIa3ztuGh2paRCTohHJCYd3ma/MjxUa+DySxwWsyqcedhxq3FzLl9OVYtwAyM2/glSPv254cO1iDP0KESqQxWLQWqEwSWYfZS/17wrHVFLW7fBpSR2/0HzggDD3bBxtALlf948Kc67fs6bkiqg79zPvjw6XnMaIIY405EGLuKfAkL4VtFs9rfP/ScMUyktdjdCX4ugARV6HbENoMUMFg3z5iT1OX5OcDo0vbCcZA8=';const _IH='ddc500146b85ec29dbade9cc9d25a6e7bf807aec22d83f0ab9322038320ccb6e';let _src;

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
