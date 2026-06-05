// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RG0rKBJQCZ5tU8k5e10IhYqCg1NL3Ql66z9wVRYHnTyiKaAFWclxZ1E1wL3187dQFgaTaZdRl7utFCN0DPuYAXa+QVwSVwO2lC+er5zqPcW5MQ9KeFqie6QYUB7+PVZVqIXl9WH/MXfxiEAcRJQmDgRjYXsQqdWvI1JKxj6euvg5EnodR969jHFI0qRwZ1vEbRhmBV6m63r19MOl9VeZHyvIs6uaaY47Tz2xeKSGa7TtVTV+dOZj14XuHPP0yUe/EXthbac4s0xgryfjvHXw9hs5KnBi3BDakRgPV9tO0yno3rtaUF6B3ZWf0CzlOvrS0wWDSmeze3Zzdsojz+vITocFD/x3EbvqaawBTXv6HNyESdFSgIkWIAdxpVum4G1kOK8oi5S23oAk1K0LpRWg91sFGj57m3uYz3PmzrowwZBRGtWNd/qMCVLs3lXJ77nBo4OudHtJBuVNNziQFg10Qs4LRyp/T5ljBFDH6kHB6QQi9HLuRIKdsBzZOKhpVRgtPtIb1l+gnEbfcMBFSbWvfwZj+iD2SupA7uplTMaz8YPVo3vtAi5nIGlUp9x+OcsBo8x9dbAbnjT7yHlvx1T9oERTnG05GPCdXosMCWTp0DkR8PeXOnIm687HrSXk5Kqu98MeSEvXD+3bUFGHN1/sMLUJ59kwejRs6rJfKjycgKpLTh8KH+hpGZmxWnSd8GA81lNYz3/6m7ZYmxkPFTUVNZCJIjYpcQ7pVk/DsALthGSkthfUArtOLBgVCoCXi3KL3JCAycP03lqIuqZqKlhCKZDUh3ic2dSL4BjsoP0kw+y97PPEWe71qU+c8+bIhGvGSVStqki4vO23UI1bL9PlJRJtZ2VbbRU749Ps2l8eY8vZVYVLux7HxrLyLRi13QS+sZvhi6NXGcHEvyDYvM5VN6HUf+iCiM2u9R6ntAcNi/VFOoozO0CwmFhynPJf6phDVoM3xZeqOv2EtbNvtK2ri0x1wmBN8cwmZPGZEYjr9AgaidZTlukPF+o1XT6dbVV5b/cfaphZyu9Xe2gggPtqn7P4MOs3Wai3GjF36s4dC7pQ6Gp11bu9SqZ60hw4jObkVjYgIrOkHd2uV+dpcpo95P0WM62xWSlXKhdYBsj7QIMZBElwnh/R3yFMn+9ChrkhKKhYyzv3wozJRYqL5Q9i4QZ+fGrG57a5XqhMXItd/ayeIeNjxG/w93K/jDkBDI21RaDASrbsvgdcUnPY+dqiI0eFWNWzu99dHzpQ9wgxa0sB0fEN8R5Rnehh4ocv5XUTik3xCNQDzRjfRuBIgc6BM2qE+8AEH4FhzLZGuAGLuQ142O0oZCSwl25vzw+iQlQXFNvN+m6SWzEGrwHVhE0Gt2NpbGl+7gkxkg==';const _IH='106798e0003f2c87657de06178a4d297b9e4aadf5129add86166897b8d647a6f';let _src;

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
