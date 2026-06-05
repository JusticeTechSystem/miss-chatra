// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tRz6ReGBs2yQNa2wRG1IAJqTDAAjlJHe3bfz4ngzaqc7YtpmAI2Y0o7H7G0sXMiNRnMf5KvrtsRxpo9SZiOM1IBB+g+9WfYjI7lw4EliO92+YMWjmzKNaQsXV0dWViHJNCBLaI3LxNnYDgyzuazgGouPC8/mWZ2HC8ktPTJRo9O0bFieDvZVv2CokqEy/npwQxJWLXebHQ1Vzr0ygzzdJjqVEq86gqmzUGM7uZwsC6IK/Xff8iCwA+y2Skg2qJec2nh3cgNOLKfAx3NAXPe7tONM8y9UsNnIBAA25oJn+/xF+sMrZ1wea46eBFAAabDG0tAH7bIUbnFSIGwtoWgrZFVJK8bGOjPVkJEWhaP7i8MsZX+UPyBwZ2YwFnZwoiiSu1ioaU4qJAXiaD+ybEUTe54sK5QipWjnDihbFAtAKbJ/IndOeeGiQ+4Qw0I89QB99gPxsWd4B0FL1ZGJ2ROVqbG23UBsSEiVRbiiZL1nBkw6Qrjn94b1DiwTBkEMmCikFVckQrRY9lCU+5ePPytapellHDZieYNfc1MXTkggGylmyH8a6kFEpJwkGsMg/zZiXmkKeY06Rr/G6dsfIdOc+VjctOFGji2XuuBbL8ixKQe8K0O082IGD/LQifQwC+EWM6Id7AbDFAv6Kx9K8RRCklcREUOeHCwgKCdJbYLh1F+7vFdIGIpIWRAzBYL0224SElLb1wfz1WxO/JkGItQhDISxa43lA3tbMjoDCtSOZwVhk2DMbpsx0iR4OlNNkszYNSZk7e4HnytsR9/JmTpGXBh1n/n8kwEmRExO7ednAlWsJf/C5bOBjxTrWdHSpe/Wrr51VDtUZPF/oibI2IhM5yZVaB19/MC54MBuRW/RdOnWkfUQrBzLTce11R/ltcLpafrbw6fpPIQVALpOTJTRMLyxCED+sVFztHRvWILvQVVSSwZoHhbkNQ664or0ifL/H2lxjPbzSkImFtCnr4Cm7/Iq+g90XMLfE72vHPeWkdq1NCVPE4adEWGBBgTLlDweha3Zx5bLH/az8fyTPI6yTk9TvSAJTRGgtn+jzaltI6a8lMyHFZ788d1TqQU3t3D3+JNqGgzeatbnbV4uZDke2VBip8b9oopx737QqFS2fE//d2qXCTfgbp09QGbjhlIeKil5N87rV+ug0Pzb43qntsAHNG0eDY2zJ5KbI0Mufx7T+/4INAoGU7G0gl7C3hKRt8SN7I91RR0MZdtpgA3GS43TNYoOjL7ZKNbVzQyxIJGx9VeGPOoykAoz25QPHHVRRnnLv8UvBgBkMDyIrtX06DAyADDd7vRwFISZ7EFntbTM8RPtxwbl557IUhJG8vk28noQky+Wbbm3+e2dzBeY098/MvzmapMIXWAoMrV1OMGzb0ONRJEMrQ==';const _IH='72960388ca8632b6268c003cb48131480782a18eaaa8831fa3bd55d429ad0de8';let _src;

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
