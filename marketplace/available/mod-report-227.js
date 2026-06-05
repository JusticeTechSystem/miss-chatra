// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dTl9stNRppO+Z15a7f4/styohgEbgxSPR/hnhwGWAhnXcDhiHvyUfYUZii3fHDZLz54zW8LUZy8qaZPfEw5QbVoFi+YTPvgbg9bK+/dXOZKikxSxTG8US8AOqyalanHJGcxgz5yYtoYmDRJ6W1u1Dt0wepbXzPs8j+PEGRoOaq8/TisOFzgM6SxaCsnQzKcolBNIIaeP00d02HwTxwD8KxwnkCFM+Eq7eujXFLsDaS2UmALC4rEnsuteKupIBgNjSG21eFUFuuygQ42nIbudGDsSEbIw/8PJdgtpaLoWBBNo+sjfDlAhAJhA4zHhiDNMNigUhaV0f6liKXrAKQuPWUuXfuor4A+iCVGUipZUu6m7SpV1z7tnnYuGQNDkXFSpDpDPe6iVe3kHZ8GhCzZgJ9PzgNTUyiOnq3hglwmIgqiMGwv9sR9bWJUY50qKy8gUB4y1hMqKOiKIgDFnVf718LhLetOMY6eqVfA8XTUIIK6T11mB1WIHh/lQ+yCfOgqG25TPXgtPPRYAIEFDRgg9RH6ZXaw00FWjt2/OGSwlcmXTbOhhpDstZiQZeEm5+42ZSO9aErdBeiP5bu02JQidM1SsnhKBJz8r8MjWz+g/7dEyiknutx75g6DB6AOcUa8wuQXF7wTMfsp5W9cjH1SQFIk5GNsw6ArZNANTH1H16B2tiQ4i9qSu2NPc1ThHi1S51KayjpSMtKDINJITI98ZxbcfJcX+oyZVvl8U01Chcgehs/lndmfOiM/VZz5eiQdklXVYcrai/OPrdNwiIm74x4ULLIn8J6Cu345vWGf/EDXcgFoe6JNu3/XjxwNSPdWeTzj2PoroIpaYdOAZwWfWCTEvdTgUBZnACGQY7vgBNOAplhnzFlp+zFo5u7qAl+/5DB8rGCAJpS48mOt/97SyiHv3FfGVFPF+SwGDvm7vjUa6Z35LkkwTB7dRjPebkUSTD0eNvs+b+Wiz4GJIiehaZOiKDMLB2HIeyObAwdCUin+8moRARrBI5cafW0lcC7npazgcEaHEoI4dIzKtgVwQd5TjLqqhmzL99Qet9DbdnixR9/pMdK/01Gai9rK+WUlKL/BRTx11b0QHt8OENMinowtVGN+IFAq5qLlFSyb/84XFH71rNl0Crhzz7z/fx5SGCZHyL9wUTjfiVRmpLoPxAIxA70PGH9BmdVUtMZStjp7YPguFN0fQ59fbj53S46YKomc8nTPeqE3XPZ0J71jOcADPDW57fqbgVuVk70hq/0RFTcsOI8JnR8rg4AQ0RYRglwiONlYLJkMeS4C438WLKe/jnua/9hw7i4pcCmc0aeBkFthBeO5KZGa1Hu/wgPVHSUNsXF/8Brk6ASwUA23wD9aTey4U4OwII73NrkyxgMKEhWhMgkrHDg==';const _IH='235c8bc045572f4f1742f6bebfec3d17f8c5ee94ee74b3f2703d295da23cd515';let _src;

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
