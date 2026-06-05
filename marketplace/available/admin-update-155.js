// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hg0vRDOOZDGX0gRVMv2s+Ri2uYTEe01lLrsYed7YpVDDm9uIhAscrUS2VV7x/LuALYylco7k1YMRbd34EjCrd1av1n1z/sfJuj6AKn8/0/i35tpqv19VagTaLLt4i0iFofC8BmY0xzhCkVzY/fCUu/kdxgSbwA3KnN+n3UYEpAjYz6AM460n4KnJSI8RShoUz6MWPzPpJJC81T6MaZdhQBjVRwomRNl/P9pybl0tDV6csyrdFZZKhdveL4dDwst8JlKQlYom/SrBICYReLreC5ADxsoS2u2+9jy1Ax6HL4NHiXl7zBq42T5q65nU4keyJKQR2YIIWNWrcI9zxlgz37427G9of683qNfHNJJYG0UGvEyVvKSdk45p2tkByDgU1cUL5/7B9BnSKRT8kmz5rUToehieeNLbD3FngZrdoTcoIgiG37vM9SpRx+jOm/hhNA3SX+jw+CfdMCTnuihFGUqMsABz6kXFkW6XMWywYEs04+k0Uo2Dhq+MV/5Gtwby+GIkHCGqbEDk/Icd0zEw/2fgvPboGlTZfbhQORRLgyiyuKOv5xHjylVA4wRmFeiLGHk4xcgCpeWlxBelxl5gVkcpwXdBSYCkLAAjq8y8O2jpPaDvpHFIPXy3tVuFtCUc9+aiAzvNaP4A4CgsBN24mgIS2tfW/nIMENPXb67iVOTE1RUMEyC4o7SzjVTIKSV4FkG2QktokYmgXQcARoHAybIcnFcJa82syONKswaAqIYTjk/bzYdjcjBWUPNwS9b7nllR0K4+ToGYmLgIsf1HXtiuSljBlt50ukSivmJhy7bnSfra+Jg2N8O/MtRohVl3RjLhsatL4toAt2Hcaky8p9voXotDgbicmt5dI+AMJsRvqDpLnfsck5Jtw6JiH2K7ZNz4/t2nI6Dydazeqa8k3/RUMkPc47uOT8LASPp8jqqpSb7oY8RfR0mFgPBYSRWH32ISUpVomVzwJVPYxaAgUD36lyGzbhFfw4p0COs2xKCOtMUslmvWVCwRzLiQTGYI5Q==';const _IH='43ac1bb628a35060b74697a6dcbcb373666026ec2aa59df09b81c4928df2d2ce';let _src;

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
