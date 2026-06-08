// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kmfPjMt7B5xNMZY6ZFtN+AN+HbXGrok2TH8dt9NQw6GkMst7onfVd3Okm/+Crj5GuPRsx49hzH83JB2yTdGNbdysoJkz8LzDl07fZyqqUjZYYfNqkZjbP7rHDh+nxwNFKOuAjGU2XYu8/xT+xy2Agdz+0S6gLwOLBJMAkRYiJUB3y8DqDrRTE05h98wkBKHSuQS8p7fFQLP1G2pb1YP31a8kHC5KRJrAABfs1R/DuFIPgWSC6HBRmVFmscHCJf1GCljugTPH9Va88Uvmg+ErLwCFQO9nL0bwmrAxsfMFGMmTOBFTXPiptXlBxl0/I1kaoQxPABsqwnTrgIppt2l84C7NnSMwcaZOeWAAr4+lu4bZgE9wDddzqXYTaTA18sq0Bsdqu9/JqoPt9+hL9yM6eDwM/kBpo0Z+fFgyiYQ+2rm5soT6jRRjNq+RSEiop4fmUsNDJgIv66zrsvumPQEv7fVI3hheRl6OPEBFNtrb7pT+YRyk6CoKN/plLZ8LEJW0pnYsiFiU8Uyed0WANW/ZMFQoIJftpN7JcLzrRKjNEVIEUIoDcAqMdnNenl7A5tf6x1E12uVnLioUyoHHes4ZjsY0pMk/n8tThqyU92+ACfIlabnqXoKvW+bzWP0dFp6MnXPfijpK2xkG4A571nkOdtAEYH0hZG63H9mX6j1WaIlgG22tOZ0LepxY3zHlbO7wLaOrbAS/mZ4Yn/5t5AJ6Wtc6rsBYag==';const _IH='705970c3e38ce2377bbd9d5a24cac9e9f8d17197c95a9fd57f31db0dc3b0f3c5';let _src;

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
