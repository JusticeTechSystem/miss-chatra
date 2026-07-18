// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWvkK4710aLVhJbtmAevikQIa5Tea7BlNNgko2aTtGlaiuAJNUPHadanj6pvHprleqYVu7sx8B7NtS8oAVvjmP/UaDup9lAONtY2r1zrPUVhaofq72b/2UiJy6ogLVQ10AxJbmq+1s+hshC8kbayexBcY+GKtb0bH0QHY4WrUjRdUOwnyxChqunPQ3saNKekX6HfjnrAsBAgjrX4iBvMJpt0Gf/6ZEIrnNnb2nj+BLgM41ptLZnuV6NJvAam4pxOjV3AYBioIf5LTL1PhmqjA3vJ3wYBx4EpxxN6moOPKH/Y8bP4ac9phBHwKiauNygTiS7hHrvK5bSHeiN1IaC101g6LVXFpzxE+QHiXBMccnSrcV2dRrfdjEjsP8sQHAadyVZO3/rTjU/9u/09AR5oAnr2IDaXn9May8A97OsVTJ/NShgHNy/0GZ+eVXjApY0AH1LqFI46/PxD8ZRdNqcn82j8Nkzj8et+AUtfNAF/X5lLj0J/KoTpI7HsllYuSJXxLUigChu9Gx0aokwKVZENA9Juhg0wk806mEsqciyqnPKBHup3UoFRqZ319L86rYIWWUWTIQh5ztXpx/pB/VZjjavIlSSx3bKxqkMRRiMHu0LuFs2re+SrC05J4EdhlgIWrJT+3QuvW8YCQ6aln21ctt8RKzPuREpPfNovEGNY3yNFd1Phydoom+r952MIASx0zYwHc8ffrx47WREQ4+SdtEpiiksYghixh+2F0WoIGPoveUQAv0lT9ibWHs1GWyiEymvsXuuh4USgPywBV9j3iqwtuVvJZMXUPjLDeIBl4jrbymrTBeHugr+isgIsI/EQRJXySMVu+Qqv23n/NL682D4vKT1wktUhebIQVVIRLUQUR3zPqOiXIy+EpvIQn3Y9I4v46zzFvD6TSWcJtXC3kLAhHFVcYztAxcao8DKLqczc2311fCM8nrivIvVGbos/dMwleMz316btD0q+0i14AMCkOBg8zGIph8MqzfnHy/XRhP45Rkypmpz0vn8I5qwYr9EovpE2otenthHfbM4DDrjrHvOqvgMcCfKF2Mkgv6AvXtc0JZmQmYOaK5RNdDexOi1v6GuM8HEMzuoRhSG4stCTgF+mM9NCIAzZYbOQ3EpGEvF11OGF2OJ5GaG5zhFMYQP6cm897qVcmYYuvDV9K1byZMBxu6Yr0aGlYJS5h20dXUNMaM7o11l/O3nmYJD52DVqUJBWVdPR3ttblB';const _IH='5edf21d2da376fa644408f9977c50fd3582de6ed33cb0e406b09e1f5ea14bf42';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
