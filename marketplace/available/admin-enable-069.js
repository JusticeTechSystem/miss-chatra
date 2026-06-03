// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C/EXzFTmSuF3fo5gjc02Mt+Pz6O6gTEmiuZj97ktbqAlB8bnOCwFe+eChV+nS+4BPESbcv2VBtwecLzr5qo1rjr73EULtVjQULwzZcHsX8L5QpRg91ibcHO9SN4DZdhoAH3VX0Fon1HD7iZ2hV6eF+KWizHM+OVYx1aO7P1p6I6o43nVr0uD9E7gOun7jDcfPtQaEREL6x/FmsqK/VYlqtSLZS7hLLQnpXZKD6PGE+5oNuLftEDZfi1Qm5HRpnZba2AC0dD7fq1mqpmyoVRA0d9qpIbUZj+64ySC1PFmJe1uDYBzhXpx13P+9jl/x9f3RcLYHILUQJuBMApiUlLiXnmOgS/57xQ8YM3TAn7WuawDkJzuh62X1TlroX6UCIMIZug643IIi3ex/00Af8NP3VZ7CcHV5WtNGuvhG/DdDxNhff6bVBCNebwQY/UYDLLg6ZZCDS+EBY9WFd7RuaGWNSsBQGF+W2SHNzyXEL1cSrQ09ewgJ0PN5GqHDceaw6/f7nxjDiTXnEmQdSB3NURLgt+s/XfiTVFqV7z9KS/Cgni1KhY6/wt/chGlug5Mwn3CGuswQQMCWPwC+u3zPIPDCe0Mg1BsIL7UPY5vwcp+GEHNvyK+poGKTjCsC+Y2pDSBRSEFvmgC1CalbdSzWy3BKIUjyLR7jy/Ipk1pwtITh2hI/+RjAe6o35QPlU4wP1dL3tUnB11Xmf7oVWtOq4KvY133UazLUfrCiLRzRgp1R0BaR0WdkAzexCYZLVozUoR4pzUeSxQqzqfThC8eaNTVMudcAne6bLBgfzewjIGG07EZ9hgAlhX/os5BGNuWD7z/C+SbVlLHzT916i5D44P6jHRS+0Qq4rSGOarAH2Xoi4Fkl1W7dx/7dsosLwrD4VvqaKK5+egPtavQSd5PQUEE9YmMuuAxhGLl3yODuhTq3d4LU25C4ZUxyK4U/H1HumVHNZiPmBgwfYEzEglZu1dIQNmZzeAvXG0LB15YYOPNe4veBsyS8Ot8bVMSwX5s';const _IH='25ac4d121fde6fb645ca5c6f8a04307a51e8ca716c031ea69e52a0ce715007c4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
