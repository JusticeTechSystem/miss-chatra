// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='akm1ZxKJ58OxBeuLFxVkkJ4un1nIte55u5Gv5LmpZQYLKxuK+2UFqpfAtM2HnYU7XMhRzHCkL7+x59ScrgeLf1/TS5PPHgy0IlFkgh8UqqwGWNlRSivavsY6v2iVArnb/5e2Q+1PTJUtVykkeu5wchnQicjXOstzPTL7dBt3kuZvYgQ/nWeMI8TXd92IzYjRjJpJqdphiUQo0Qq6+Va6PvGBOeKFB8bTypqVRbLbTw2xGKf1EXvj8pcmAxL//dzjiLUFQCI39mV1yhLcbVc6YBWIxK0jqasqhFNoYUV/Ar7Ie4rxuWUP7A3FgQjum0DmT9+dhHIhRD/uP6aSD4mvO7ODoQIidGYdGncbUekzgjhx8W7dkG2HlfuUta4jI06LaTuuv3JhRFHVXaprlNxivNx/xamJk5ThQpHL/8F4wZ7Pywvmu+cA1SpfRwcI1OurzHQkWA4qENnTyUUbl9Oz9Xh+FqMyhHsrNwvYn1Q6DL00mTmBsc8G44JfZFer3rldQ5NRUhSu1aI11IQeo1WR+wjEQ1/gD7AtmrVvP1VyLwZP4Q22m+Fopc80I5V82d9bu9mfA9HZeNYwp+GBhSQIn7v1rDFJEGMGgQ06X+VBadPUVyn7YsRNIhwj2lMM5cIVfm0DGu65qVFM+gaOKks3fqwZWhidxtijdOPSL7w4+eLDXU0AYrCO36G8Px6qchOXyq78+qxRDz3WN/s+9Knsi0z+MqT3eqrMd2/5B8EDSydMhdVjvlOblYUFWSOWDZfsDFEw7RM8Z29+bOAXp/eKuuaT0klNzMCbIag9HtCsehI8RDvNGc13GmiNZwlBOnNzZecDxCv8Uo5uouXyG2Q6kK4oG7DGQs+9KpjhL0eKKFr2hlWCYuJrtaXdLOrCwSMAQr0GGJbuVNK76Xk9lJ1nZZ2FfnARlLeoPfdgfOIM49zjvU6SH9pA4w/DC8ktFMLmyUaMqiB90kZJeJ8XjisYXk0Um+6zvtVx/0rX2j0hmRiAC65iY2RCpu9eZ/tnkBgfRsWKz3rBVI65iOnxKV8iMQxS';const _IH='06b8eefc07f06a3d9820caf6a6f9effe639039e3a9d77122cc52f484bbf7aec6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
