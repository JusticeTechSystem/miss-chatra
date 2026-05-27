// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QNwnxnd8srLMqk4MCJIfJ/dTh4/fcQfm9Nb38bns4AH2vwcztmPxAR7Ov5IoAaURbHckqaVJ2pxpI75cC7e3DnuOb5qqTMLtHuAOzNIy/7U03sH4oE5A2llGJkJ8mLavX5DKlAtRqLv46PBci5tXRJj3VX1viY7GNcbgdyTcjeSaFs3dnelP0Vlv8XmuPsLL4zCisTzGesXKijGLU3exsSTVjhhQG+BEZJwyqkP31qhQvrkWLjVOfOaxmxasEYnXkXyQqGlItcrJymD3/YPnoLQH4ZtD0dUawVbM6KkO/ZGSVBho/i+x4m/nIjSphmnJeOJMitquYndvi4F2g2M5Hl0q4ZYZE+ZjGh8h78RQwnGH2QuEt+fyylYCSedrsTEbxLiaZVmSCb2N4X8IMXYvXWHyNR3gbDE4i4iP8XGL1UuaRbyOEGzfenpX3D/IkVl/BOWb536Q5O+6jh/Sd1uFD965J69DDdESpIds/HHz86fnHhCvDoxZTkMbZF/HtYUZu6b/nJZEOifdpdBnAKgTWuGMZMF6S4NjzOx4RvkMQylYBbM5eNfDxWQ5zhiRxF3dKv/My1TKVt+Awfx2R9Q3lEkHKf17eVm7EUw94UW3xfR5/wQ05zMT6Z1q9fMnFmp53TMcx9PfqJgvm6ZupRoeQoU945ZZJHjEAJNU2fDRINwii4tGIvE4NGAzs3OKGqzoDa2Ci9OiQbeWhKYpsFwZRcf4xIMPRwbkiPkp134thx0OG8KV414sZa9DJhN9gWuDmrwYz2Z2uE1klKOA5YHzYkyraSpma/7GctS2h6Tyv3AWOvvAIvxlfYnvPCnkV7buCqtRlY35ZrNAUKxWvlh4z91JupTkLP8Ddj+gW7+dWR7C7DAXI8PHEWmCxy3GtD8qXIWyHGGRAK94p6OgPU0+CowilxWnwOuDR5VwPe7ucG7jjlQeSt5BxBa0xsEowFEhzc1rDrwiHczZL3nFn76PPJe/TIA0BiDnXgFTEdeXAIwv6ckv2l5aagc9v8BK';const _IH='7c5aeaf3e43d866da1720d84d42b7003f29548033f2f324d0419802508c77fb0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
