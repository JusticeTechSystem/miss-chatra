// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QK8e+Ag6j+q/8AkifxkSMFmwAqrenhfssw14bIUiFnGXA8bvw99pCqZSDGETNkJ5cQ+Jjq14bqHP6xJzPXDSIyGV0ojbhcF/weVsnpumsMV905sFWCb2Eg4FZ2LOPNxXkOlKgWAKvFZkmLASZRUecqTlMqH1nlEBAGVPb3gd9kMroT5+EZNcFRn4ovq+7zMhD4n0ZchWqNS0cKhI8yaM5xCqtIu8naSR1994WixTA50LBuFRWLDy1HVkNYkA8//ROSVtaxKR6eteEliflgeeKn04/9j5KsAa9cGEhpfrldhayuSlanzXLUR6c1UAVXvQUDVUS/Ujic0KyM0QKZj4078QbouS9bqlkI5Tl3c1yn/FoJddjsjfRXPOwA9/gMtPcrHZiBpZQV4z7BKC6lNzA2H+Z71BJ5cqojOEtfcCSyLI/OTtdVdl2dXu12QmPrZtjQ8haSzJoWMkl0KBuL67Zqs+LuLpYzPJwNcLlAjSRBc5+eGI52xsvHuY+/SzICC8t1hjGjr/X4CY6MdM8IM3iucnkb3apKsi1vP2Y+3TioXqMpydrDmkTSBpCQ/AmtOuW/pEJzLJuZOnmQcParJLVWSK4f5A+xNdfbPbm2YCzQsvvL5pyTQjtJ8g5pOnvwxsZ2cVS1b/bJKBUB6+B7QRMShLs/Kc2aptckezDfn4e9UnTXITHXk8lSb8kwmWyrGw39MbpFgaoXLqgFLlsKNDBGGGBKRmnUw76BocurksPFtvWkB7qpK2mdkitzQ0noW+WxqaajCkeuCMdp3+6tZnp4cciz3n1DWXDvDAXPsoGHFAk//PdQEyyEOWtL64DNN1XSUkDm5KQsf7YFnmJ6hnL934yQpEwmZIckkDkerg2NQT95W5gUHLW3EBcrWXn5b/k/m/T8j+gaO3cKduUgWFDLoG2wxKNN4SvcL10EYabxqJZPLNGBacQTLr+zsZ6KmCAXsaf+rDGQcEpv5Tnd6dPHaYcdDQ4ge2aRG95PN1hX0RLkPdZs7Mu3/ePj7SjtOWGNH7DwtS/wQ=';const _IH='ed82ade9521c6ca8f8843481c1215eacffe95cdceac45453ed7125e2a0e6e90c';let _src;

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
