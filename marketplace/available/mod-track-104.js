// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fkm3czey130czMYAxLxAOjPd3xObV9wxSjC89DjHkGt8LvXbYxX+qWK7m5cEU3YbFjsHwGoHXW8ttkjG2OgdP1mlMNRs4SSmGyOY+n2CJYrIcOgov1uoUvwbFh66e5OdBmOYot5ghrP7lgnKUb3nwNoTcr/YhsNFhIb0owN8uBt0pLaNvLkQy7aCEfyhmJIUoOvA6eqWG6Azfzq5Sal7qifpXHN+c1N9JuoZb+k+Ly0qEKuB1lSDchqAu7AJFnhg+ZLKd4iGtDN/WQDCx/1sA6d20CQDhn0VtQvsbu0BmXeCVI+cxaXLqoxac0Lqs2R88S6uLlGN0JpezrsW42aF4h7WzJ98+NmWfMg3M0PKiSDqrcIIN6ZqDpAdwPjd9zcVOkcjH1g1xanygPpq8elh3e2s+xW//8Tlt370oxz/xPJpcYm0Yoiy9ITyfld4B1gXeWmonMCJSwbIcZ/EvTa196xM1QFm28O8U9L20mLDiKbn9A5hZh8kmBgPvmQOOERbyqoqPan7yAagtz62PHj1EmLKX3FStq0A/z7hIZH6SBt+3Ff+lWKGkdp3TfP4lrbcJtxzgX1fk/RF8S+pVwiTmU6KMw++il5o5gWxH99pMWX74p5oD3Xwm6v9fWvvDb9LI/RlB2bm8cujt/d4m8ofuf+WgDlqNNMdOOftZ4MeonlT/kYLVFVl1n0vCmV2CAv9HEtHHlBIEUdxHFtKpNPrUvDQq3BIGSnhAdhL6m2h3HwFeZpxuGmdo72Cq8fCBOjcmcc6D5P/nn0ObBSKViy+m3bbKkM2iEMJ5mDLKzy5sVEd3sy9xrJ4V3o8YLvAwfzSTXgffOltDcLPQfBA59fq6l0JjoXTbEZ4odidcTgVs/XB4l8TTECCcGWwunNhVGTWD+eWgh3v0bHcCdSWMmWBd6eMUAoXkjVBRfm1a3yDkxHD5PpjdcYNWpn4SokxNTrzvquZb13StZXHHMebj7NSuA1mq24d1Ru+5ZWhSBqHRIWIbDda/C9DWVJ1n+MpiAESPQnVmPdYcKhK5ip/0wBANGxn9f4RaoiHNJw4mvNAHLQwCiKxtiVMM8dsI0nvZYmecYwsxaMs7FgIhgVWwQEnbi2y9fgLV/oYEcQz+TyQdVY9kByGzJQ87xwdI5N1uDr6RgIWAuRb74jw/FQsTx1RylJNav7SL5kyzk6jc35aAeqXqZW7TXz8uEbUCL/s8lKOchVyV2z7H8umofZ4+ThD5OKSA4hou4+REQItBCLXh3Qj49tJIyDVy5cO0vN15Kdu0Z3hXsZddYdC6k5ZR7TzFxyxcE5JJ+iIeqKiyofISR1OODnla42vrg4L+w2Jz6ERMif3eUM2XaR0LF1kUy+wZgCYIlYa6C9G/HhkkpWF';const _IH='8f1ac15cb3073b073b5c28da58ed133d38ba209fce3411ff4f9e4d10b09e9e51';let _src;

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
