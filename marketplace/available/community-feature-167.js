// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mqotDLCLAfJ0QkN0QQn3J0VQw2i/EpAfNRjU9f7fMRxD9NgeT8/5ajD3DJgYnqHu//aSXUIT6umm/rVt/LRP20Zy03/sYRktuoCCkFqWNDP5q7+H3MhvWryVeMxHtaQfPGXMHr1iLYjqAVuez1bLxXA/PWOUCoweeTDK4nRc7V/f/+Lig/keQXc1+FQ+NBiNXuL1Vk1nqVjjGvaMJt548SdOmTLqDhf+4dbP9Qfo6NK7UQjeU58hjh83KKgTVjcLbamdxiauA1HXMCVztxYKhZxXzbRgDlKMQtborcI6HsmYxrCP13QInq2Q2i6iQm1iOlrda378cSzNtj5mj+1r9n7Gd4q8+JuGGAnmjx3GpZbrsb7QZvb+nfM5vhHOD6Jik6O76WLdE5JK2mFluI4un0tSvQaiHp/avwiLgcL+xymPWT6/NMcWaPM7H6DIBCRRjmTUaDHKTP4P6K+/jf3R+P4CwguUripbpw1pvfdIaT1ELGP7JS7FRyL20TD1cKpTf9ekQMYf6UvVCmgXhvAOEun1vueARU9cIwzQ+VT9lpR6A4Tai7KXxFiYaKSmbOOSHgiAWonzYQXQA1/jKIBQt68RAPUsjfiuGvXJtXNgQw4qnb2HyT2mAKo+pmxXS6QPfjkVJfJLpDweUtTiUHemBSj7ww0Y2oSwTGOxboefnQ96oTK686zHqeMEOVamsVdF1ifQPzkg8s1wkwdjkq0hR3q7ljkAwmQtfyjq75QMSxbZXME=';const _IH='e7b952b0d0ae2240449b5d7964a9c848738690f3c57dcbf06fa2b887fb9eb8fd';let _src;

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
