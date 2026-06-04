// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AvPdcb6rbyUxtvWKi1m4/rpgDpOWWMy+4mQ1lnauzEAeDqMY9kfZSVjnIFiUDQDkyGrS7zcdybgEwXTjqdBLeckWCt0f+qHoodEPGPaaMf00SuPaJ2D0k+gaOZ1lenN7rE5J6csTPdIobROyz5UfYBRs8A1g0BKPCPTlMbC82afCthYWUKqczBhMYr7PIYE0bjhS0ECczWZqPESdEenCDqDUWAxDwCbdkdZ9pKkdb6nUIKdu1gMJOHSsp8wqxyLohd9L8yKZToyH5uFPO8dJ3n1AvMAMLt50DOzFHW6w76Lx8J/DluKICIcLBLKIQK8T0EvxA/6ovpFIXp7eY5mCFuUL6IAZ8BcUoTwc4XNYF6SmWJztIU+zQYKWZnzYuVamsvqsbKnvDiBrP6f6tEe20o4PPaD54oQtGRpOmjT2+LO5+0gi/KNY3sK4DP4LulTjAQt96D/JsfXeHN84AJOCj4qk4Uhy0UtQ1zM84noy6uAscJRzWfKP2wDj3RDdl/ERZhUiGLP1UIjuDX+g1exa69FrrSdBNHofqRZcq/mDWOXKSmotUK2mQ2eHd7b+XyBCYXa3Xn5smYxFdHo9YHRBkNWnVt4WcgHYFBV4Zx/k0LYvoiSo050zq3VFteVULxO61UgH5Th484fmGRLk6cPEhw173WnA1fENO9bebM0Od/q8j/I2h4EdsFuwKLRQjJtOj9qW+YEJzkQbLrYijTn/VnjIgOV1dUPWfAUZBoYLkw==';const _IH='700ff32836e2bf18b6ae482af4374bd0c5d51cd56bf9739900d504bf7742afc5';let _src;

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
