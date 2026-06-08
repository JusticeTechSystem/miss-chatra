// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m5DTyZbaqWsHJcegaJj2ex9wDG43nvJaQseFm9PA/XM1BiFQuamyHKSqoqoLehORxjIdONx73gE1c+9f0JliPIdlxyx2zKfqTn3ufuzhZbSYmgea2dLWvtCYBBKgljlcu3ssAEhzzzYqrLcRNTMpikZz3Wzypz/RD1OueKN3ZwF3urVAbLbOj3Mfs426RoiYygS5GE0FVxSwMzlCrsmtPGKWKunMuD7eM4Ce6gHM1Kw0Vhf7eKFjdhrduwOCZEjuY5Ap+cmMt6NmTFD3BRACnrITQ4CBqYUaJ9pD2XcoHQUyOtIvP8xCz4Os+FepTPD3dqrsulcLY7eScvIYosa+DWzHyEtwlpt/TGbn4AKwtsidKO/zLTkJVyRjWPW4dg8rwMfgDEt/OgDJ1N7FwLfnz38ol5a2jo8FZ0OYXMpHzw6BxbG+QX8Way4GKPe/ZTY0jXljx/YyBQzaR46c868E9XtnvlajYvbCE+/3jUkF+MTiJ5813dlttvrLF9U3Uk8lxkrVTBqHXg4oIIv+BDWunER3swIwKv9L2cbAUeU2i02oXoXJhtpMDKJAljY/Mqbvb1yFCLCIatzzuF+G2dZLLGcCRiuNxfn2VOqZxrwoJbac6CzWhetHbU0RCbImiksYVfThzypZPwtxp8oCv3dRPImrhcAzyB5/J3XEgPOAj4bLYTOja9jUwgaRWTd8kl5U';const _IH='87b3b3870941781ef0137193236b403f330706c86d38dc5fe26f91a7213cfe67';let _src;

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
