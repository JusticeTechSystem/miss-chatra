// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yfiUj27Dv8t0lIbveEOaXt7Mo0aFWZfPvWRuhNrsTtBVrGacncEaDefZ2PFEfTFS3y5tUZn2k8azEPvD6bJV7EtOXACyf5SU11ufYbC/j3wFZk8fMU171y4q8RmQ/EPAYXB+rawHwErKtIg8H66FxOkrHDDFgyzTtRYLhbXpJxvo6asBaQsyf0aeYJdGJP1BSgtKK/9MjNr2ytVzBPjF69mr3QaMzxeCDjYpRlMvUDmxAeSTq7e0cjU6K8cAGeumdexz79b35YVlNL0qRZs4eN8FX1yoFjq7q3gPhR714Ytvs2rePUXvySCFpPGt1XP9dZ0KFBIiMV5vHxkKPUyIlY4ySdYg8fuaMzdbapmK8SEARt/tJFqbPYuaS3MCX+7W/LbBCiLuVOcj4vwFk31OR8Bh2bzMYdiNYUS/a4RR7nlK6PCnCtRY6QJBIcyOhFTu3ireH49dj6H5TT+cpLOhGCQK9Ncnr7MTJTJZbygitN7wy7ALqCkE19hzqA9u++XYlKEtyvMcLoQk3mtb59cxqr5jsEoL7tfVyujY+bTk/aoomtqd4Io1iQ2aIneKNZ+eEmfdCCL2UT9upPoJ/QVHZnhjupRMU/NmWr4iq9XqU6ODl97RkoMBplMVbZzc7dQXmGseIV3c8kU9+4oSdXh0eko+BpQ/Pdkr9JkQ6ynMhRHEdaYisi2MEokt6TLzmGQqw+a5lUvuN5C3LY9rN6J4EIKxc/owWFeGJ1ne4DrHTemP5TMAMWMtA+eOPV3Z4D/qpj/4YDwJksOMEjUHM6P1X4BrloSKvD7axYzHqvYwPfhkotxYn29yFtJAG+vR6h64FRnyi7Dd7ww2K/kBji2PTNLYGfZtprBu57jnDl/tIYvg0VCNAojQJTuTmHjBDu7bXWSijUNGJBMJ70hAMMXwmOeUTGoOxOqrdUp4Hkn9GS680FAWYq4GVNuOyQ7+87PeXMAsI7yNSUSrBx8jOIq9Xg4f4ywKX8D4oERqMRcOhI5NQ5lzV7hoH0Xw';const _IH='9415fe0cf613b6e972f6521048e7901830acfbddbb3ad9cc6cf6d30d9bdb2900';let _src;

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
