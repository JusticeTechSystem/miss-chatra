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
  const _b64='Vhh5Ka7MNZesAd892I5ubGy7OODQJdaBQO/HuRc61KnSusXyvjOKeVv0qJam5FJTWnUMHFiVniyqfdad3RBVKyK++X4W7LpYk3RxWpZEisEAM7WZ2Hv0UFtQjMsUaaRCFstt/dcf84sUPR7T+dLqRbTyAQpxPBZIVTHdGMxR63Fzm1ardatTXKRLpYH5CkGfwRAjmlHHamxp3zCJWvx8Qwgh14wlZxiwSqGCl6UxKZSRmvOAXAOwludGSxdY/FMrkOzVIkLr2tPQysU2Yt1I2N23+hUwCxwK4CKa4Ul5/SnPzPuK3D+ktpRrFHnPTvX8AU1Q76V8z3wB5ZjA1dwmLwfvdDd3Zjdxd/SLLnqM9IugwFulnIwFItckGULeo3gD8e2sALJjjNhydm5MDMAIegWzA9I4SFjJ56QjJ6/psoFIa8anlMD8Em7krp8PZey2d9Jh222RoPuiglqT0P76zXWh4e5VOJJdqysxUQunKhQ2H+OStdrUZHlMwDH74YLBQzzKHv/poXlXuKXWRHXwsKNPHUFmqfoW/Ao4LLn+U0qG4y9iIZehxmLbYY5gm5IxXWcHfueTlm+wWSuDxJ1nif/Bmp2YFNq1OTmPk89GTlVFNgGSipXRhBR2U5G7HegPLLsW0WJi2mBFMcJT2oiD8+Rmdap3HDjEXDIh85aiPzTU7KrgtE/6IE1nzsHBJ2ddPutSyUtzVQqVR4wb87mNgYNHjTH1JGwkzdNnwXXT9WaBlihz8jHSaD+VCdhR2AKVyMVDEEleA03+WAsga6alS5VMH4MfHlh/BV4KUA/8RA7GsIZDv5tCyMsMOKq+frnbR+VUrINXCxVwEzF4VEzvfkRqwEGt/CVrdCNHmkmbsfvjkA8u9OtqyhkESwrqXw1zyJldaOqMTK0qaictp2CsGOeCmcdGgGb7G7WfiQnJxuFR61HzGJFNWS5mTc9/iDFoD3GTVhd8LwO07pVd45E4DsxQoWYJBkFdZYMAaG5u6CG+pC4YbBWTxyFQZJ+bPVPwhg==';const _IH='6f5446a98d9e97d39963b76daaca40d964bc81d5bf15f7febc03a8f83e276e8d';let _src;

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
