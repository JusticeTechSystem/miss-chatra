// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AOyzwce/61WnRvXuNja9y4ZHei+7771JcZeGliI5vrdDX/17I1zWo+nZEe6bJc195LJT8iV4BG5R6Ie0Jk6y6DmrqsQtrLoHL4qfMC6LtLz68mIi1ZfFg3w+Z/9/ptJOdhGu82IAeLi3ZKzSnwZLwHaS+BoUrhdJyd8daOcm+WEhYtNXyP6tKRTBK4sntUaW7rfMXJfYZ6Pfwhn5SmAXvWaS/dnI6odkngUR5GzjfiC/MMET+U7kHZe8vC7QXo5Ff3jg6GsyBtTEw41HSpau2okqjjs0gT6CahiKaawhkE/E3mHNuKZr6uOe3qLu8fnUdoqf3+2e4SKJnyxkLYdH4sUApqYRyMwfn3MXnCthi16TKSaL6SoKfPT2wzpGclm34Qls2tNlP2UuGFHiDMy6TR3ryxW/NsLiv5c42BcxQm6o7e6nm7WwO481pWcnh8WMSk8loeKPvLmzuUAYluxhMYfDveCqnKzOEVByu5A+AjhDZInVh0nI3bngx7/hUMNOTy+wlqCwiGWCE3chsIctYD8et/TcBjAtYNWG6zZBtEkmTcdkoQoWAGW0FHWnckTyB8B6eE+wV/XBZeJ72l6I0nJYmGAW6oxA2RS7TvwZBnfxIYg83VBJUwRr1pBmb5j6X0Va';const _IH='8d9100afff847fd1e900dfa3d7238ec9bdee12d7034056131963ae92fac51589';let _src;

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
