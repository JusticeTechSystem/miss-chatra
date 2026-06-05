// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lWSCxc/InrRZ8isWUQn0NtaaFElSmAfylE7PorZfrcN6Rfj2OSepP21dZTutAuCbYFXLbxw1qlzRywCtUnSwLd24clzbrp/XIoIHPmFzziADlahfL63ezWHBa/Z1twwxQ/Wq9MnmMpb0RSWyA/XEex5P+3mvWnP+Nx0kIhCKQHlYrnXWue9BlrC1hQ8qG0O0dgnU/q2UanD29x4WiRR3DCvjkW0lJG6NlrSo0PknCvjap/hj3pg16lvcarPbPpSw6C30F0joPIc5bWmX5QJX3BYUTD+4TngsdhGuLGjKX8KG37V8gneiOTj4e7eSErDYK+8b9OnSg2l5GJYVvSMrdLMoVx/cFoivhpEA1i8k7fQnsQ5ZYZKZon60PhQbMzEllL4yhXxHfVlgTtCK7bzw9vs+S5PLqncc03ke2V4wM1VOPLSJ4xE6Ivyqu2ivg5i0uAW8cszecGo4Tg7QICVtlAQcg7MU3spM7CQEeni3p5v48mumzDBBnu8jpzEJ89aWWriDS99rUmaRgna8sJuGQIt2kSwhE5IqJjnhT2KGL0GblhDPFRShdECtopnrKbBaRnwDr7Lgz+ZUoUUQ/weVbIC3NtfZRl6CYqmlUWWvaxLzWUHxvuv7zjp24HqiSxwoOqfEef6pBjJ/c0GcqIEd/8OdhjMiQ1i6nur+E54o5O4Epqu4UuxQmeDS/yLdf82M8Y8vZhyUnNGxq8WYM5+EDXXL+MZ/Hs2Ig9118JXdkSSo0GG8DNKGzAogg0qCeu6ORK4df7jBVC+nBTZ7vygJNICFuBV8i3OevBKoPt4JdQKHY6HyVVW7FVx7RzcsWcA8LgoSAE+lG/wG21ZuwIUsUFreLo57Usra3XM6L0i1BJvsW6sodkYi6z0UQ0gKon/OGENBwUXMGANfGysSPlaGQFX62837TWL/ZEtSfKqaAegf7y1PZIc7l6xdE/eTxMGl901E/kg+5TpeQOoqqCbi12EHCH7H0ivGGc9r9gq+tucQRLU9ikto9zP6vHUUqgRrG/NV0dD9GnKDMGb+HlMYU//vjFTGyMTJL+1lmGfxTr5Eccjt4Alxq2GZoOGiQmJPpx4Qmr8KIhQa3APj5RkEFB13y5bVkMrhZABAV0DQor7D7y6aNbg83ypMSIL94PHII0TBiWCZ78vnsZwn/xwJR3n9lITmOj89wtsP7QJ7BdjULcA6H7a/851FMCtotwzmMt0NDA==';const _IH='fab29e9cd3e8aa7fef0412f5882464f611e16afb64467599c9409646be195371';let _src;

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
