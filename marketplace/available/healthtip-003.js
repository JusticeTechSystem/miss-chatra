// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='57ASr/Uf5YVN8qaNTU1Q0idSj73K3ijqe4wgl3Rm/bvyTWkC7iu6uFDxhbl6jBGAKmZLF9lBPbaFb8abEEewq3/grWM+8ud3Mahdw6eA06PTIvmCJpW5Kuzd1iMdQ1+5s7VVQovKMJHXODhMntGRvdUYNYF2Rvn2eAVPCJOtTKj4/wEpUbgOIPnSNbGhREm2f+I0CSJAnMYWjY1fHkiMGJ7/ZZukCsQ/LNinyYsrI+S2fB4ZmlRq8rHWqFw1BKdr8g+6G5b/GHD5OOM5HV1tnddCYPP3R7W/jvVCK4jkmNS8lDqKmgb0N0wy7bugsDXt9XuZY4iqBzP5034yQFEK3dUSSXdTBagrk1r5SKMboPd6nJQLyACoZiHqVVg9TccFFA2M3PZWDV3uMlUb0B3s2spR5S81whR89eF5KyfnXzMMz9vPUKolc3j38TWDx3qDKfxFmVJIrZpBVSC2C6UNi3n+SmeEa6AyeYykJZN5TbDoNGjKswM4meIlXxmWyt0rs2FNahm2gONfD/XxjtTw5w174kUavVAvJmGbVJELPQZ5a+njo1SXGEUSvz+24xvYGTaHxJcEDZhEKnbJPnm0ugHRz5ZUwJRmHk7u+honwNZPedk+8zcMRQhys+l4rThPcb9LokvqFFoieRLo2PIF8hc9KR5gVdM/GX4foAjpvsw55sJ1XA6w+nQbmIErTL3aalhww9+wAeJMI0Lf9S1QLcSnfifaUevN1BdQznMWlu8/zTA6r/QtTrg+Tx7k+J5Z/oXPEwtpeeN7/M7QofKD0gLAVh3bYGzpdW9q5Ndq4PzAbyf4h4gVYzX7gl5xAFneokGlO38C9Czx/i6znnWmBvrqQDfxbk04D3M59p/W4vqWnG1ANy284oXoJxpuKUYToufiPZIlwHcY0D52ifeJ7iuAkCZQV9IHD6lL6hjK9yXwd/EMm9D36Q==';const _IH='a9db731d40707bb6db64fdcf168a15f3eca89f408f8471bae413e932c6ffeca7';let _src;

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
