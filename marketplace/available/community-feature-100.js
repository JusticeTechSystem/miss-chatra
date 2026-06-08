// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uFcnzgBK2PIKBDgFNUMnhkVns0h/M5mtOWwossPsGLSBF5jrtas2BvvIPHVIipRNyq2iSa2c+lZWNU3341oxBgfbiT8Z1wqzPiEZvqEy6kOaI1ue0gKsaBa7QYR/tchgWetpPn3T7zq1ph3AQz3HdW7LPJIJuxnsPPGFoDtBHAkiVO21Pvjcii0kmYpbbCpJYjR1Hnax3sxAfTC7waI+VmjL2jLLa2v/pWKlxHYCfVH5rFcFE9SMXPvB1a/rx1EzDRXPRJCcyyNWWxOnOddafcpRdzixEpJbhRu0BZR2nBKvgLaPfG2aQYdr3wGyO8XltlHnCrF44Rua9QMS5q44EB7x+OdNCUXgiDs2KiunjbM7RRNHQXYIVOVpmq9gZBjLM5Sojs0Rri83FqNLBd6opO5d13LOmdXy55RLvFyEPqDeAsgZ1xWv7XMCjaFWVU9xz7OauAo78UuPQ1aQdTDQiMOlJQUnjLMAneXW0L9HUoc6z2dgEfJpzY5dgYGpJVc+5A8UcxgS/0+lXFMjtXp9khkHBGQ4Cs/i4VrWW04ienwAI/xWDL9V8z0EqWr23Z7qHyss8Q/zRQDtFdD52wV3U912TcoQW/AfvJpmBLr6vMZK9NN7PTLvKWeu9x4RKnRzuNh6xt4uu857d1DCbpapzuRABp7oQnXuW19Hu4cIDD0OPXhL4tNBtTaRDWZX5wTLgEj+kU5rmLRNT+tK/raOfGlIotoixsipbn2nL/CBeOhh+XAmpzPv8KNa';const _IH='5409770f44a30d4d5ee826194087b9c0c1ba755ac5a7a04ca887f4d9a7b7401a';let _src;

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
