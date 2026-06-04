// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B6NYZ5hBj7ClU7r6FQsMjuwmT/AhFSfPWv49AgaP8EQMVFIF5AzPwmdwUBHRp4RZGJ2snHgfbT7Cpp6hHkKuTMM10Cfc/9b/M0IqXVcrYcsXEmHaVqa9YJTlFIU5yRTcLFnvlOW68HUaFblEpbnj1BNt2HjFc+QF4xTqWa6ATfMmfbwEahMC5L+wRUtT+FWz20i7Zyk9Sv240UpBDEkhpnvOwr1mt9kDaNBXZ5Vf4njuy6vcnUDETY4JgO6cx4GadadbNkA0uqFsnXQOzA9Bafz9NJlmOISQi8RK1W+XyQmQnNrxYmCILRyl4UIIYDqi7V1UZeF2iob/QJuXnFv1Dt5xGq/OAdZXXDpC8A+Hf/9yoXUsvHQUJydLja6yKzlrUPD/qf+K29N/QjywYqg9oQsIVTPUtxqCcIEW7cWV4GAfR9VrW+FTENC2eEtfWZG6pl3LxqqWPPfCXq0d7T7JZaFqoPsuwZ6Ujdog5sK1+ytFCBipYsZ+AT7DLxc+rbsAJPXN+dxCzbJrwPy+zcgXbYQ1HxWlpg0I5Od12FgH947MrLXBGMaKx0o0/FKTpWoCgMXFsCW1xPXFVCJDyVAPuotE8VfNOqw6/LCQmq577iJyYl1YtUiZccXW1PtBwvngCI7jOH23d8P3nd8es2A6hAYlSX+mKmeDhk9xCmS0fHq9Oae81HZTrzvsKzg0QlB1Cs80BKhtNV/0WyXTZ0gvNyXfEFJ1m80GT5SvLc5u7BweDO/pTqoLh7yF2mA221hgTevuUDLDulsynoj+sgGAPDUp20u82bcdBE5W0qIrnT6ulz6fdeNCIA7gp4RvYth6+RhGXtrGv7RGaWJfy1zqRYIk8m/QkVWzjssiXX7MouelQ+yE6mpeLkZVbTPbvgznPaAEF5L5yIZHJ3JEGxbr9K5TUP5RnQwZ867KJnTVaMpoBc3Oo3W2p3QTE43mOIMAppab8dSfOlSBdjC9zHtgdfSP1fZBmQykMqz77soPL+8J4lxtCkX7AwOMjIo48JPtq+5ADJaJ99C/Zwmk8/z+zhSSji/hOzb8XrGqzUzV/Yk9FHe+bKsHg71vLYFlzOFEOzi+UYq48UEVwIdL9Mk6CkT1uJ0JrhhzVLqv4dsx9U1nxC+9Q6HeCoeuUrLHMo1seRfBcl4CuB5urInrtCvKUEkQPAxyVVfzv/h4xp9N+FPVOm4JRZypGuHcTScrqbq3CwD71yCspF58J37/4Jl7r8V8M4GFyDsebMDR0KiyrINT0ZerrWjWN2wXeJQuX8OmcmOaTOsCouvr9mXCv4Ye/tmk76mD1dSjL9oDoE+mIUZJK2RVxAZNbVoXyaOoT7Pb+bt8JH7MpHY9/ZcmIQjP0A==';const _IH='9d030f60452bde8eb7b06b389b9ea9aa0fe3dfa4ea36198e16ef799d4fb790d8';let _src;

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
