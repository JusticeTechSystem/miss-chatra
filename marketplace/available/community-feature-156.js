// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZE9IDPBynSLnLmNSRc1as2K5k4/KsDRul0yRD6ngtEKKK6BHN4InuWdsdY2ahdll6JBn3g/dexFk3yr3PDCh3CLhTg0OLgdefKgndIgsZSDsWKvCu3v2v88yuRfQJ4TeNhSTvGAc1Mou5zDzh78kbfRbVUwXSz1rE17G29z3D463lZglTBynuw+DbLUmzJO0afoxCWPbGfe+V9MhGaYP6SY7CGi5RvOzYtXQarg4sTlxFuo3hEQpQTNUwnLxpH092yWWpmNIRNOt69y1HhDvI8kh63YKjT7Rgzj2kBJoVWId9O3ceY0PF837Lm8WGLknlGjZb7tVctqgNXv7PtfpNFbNZbsvFfUD4Ri293FR1IM5SMRHy1i1FGADw9r/KNir2xkZJXQWm4dXsvGt27sTwclugSqxi9ohcEwjoaysWbIiUaKGHNtJVpvCgBneLJ/jjOvDZRZSZ33C4zBuhzv6GSLij9+NbBt946bSJFwf003Psyo1SEkuzeFMm1wGUbqMx4FV80Vkh3PoCAFgxIKuAlkmC0IiYNg5niAXAG3xDAoeSDBFP4AMODFFSvtOKfxSaU7F2f8IwEta8XVm3MdiFRd5zSwORyIsGF+f29Jyf+lw3la5N74S9wd5Y4MdGJha2jtjfXF94BfU0/bCdyCMzYhSXhv/NyijJGv7yERhXxqYH/rEVT6BNIib3gMIxHcm8VJUiRZoa1mvdhUv+d4x3ZAz1vA821kD';const _IH='2a17c2598012a159a7ac796c0f8971b748f3fef188df59e5297ed18b1ad98a77';let _src;

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
