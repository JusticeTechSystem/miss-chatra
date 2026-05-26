// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6cq6SdoBvFoCr9X+PDXgttzQfC+RfAnNDDnReQb4sbCC77jZ45Hx3qmCO4nMFFOPWib9WV/ABH+XpYOwcjm7/T4hKW3T1yalSrcg7GJ9FCf/dA0JsbEISh0cS8fl+ZfmvMm27/qiu6wMvBvmcItiHwsrliyWAeQL0vcbAHs0iqPiok8y4WA5YKZ3ZYo6jH2qiOvFjjAd5katqts4f0thPHuuwYuL64UJCyREKNGGluWV2cBOfmMTIrXy7f6xJXhInsfhOZItxr2KjidYDKeS+yA0s/wAPtTH1UjzVidWkENP9QQtzACc/sGITF29Yb5tWOQLlgmA3Yj7U344N7c6SBUPSu8eoZamXIZoCeDcokZLjwKLPqRHxgBc2aSW8oxOxPFH+GLrOyj+N99CiNRrPGYxl9Uw8qIYh47Eu0cZfBQuESFxlmyWtbn/gxmQmHPgRN4lxkARF98nVD+BEJD1cBUAgsE4wr7iQFjCnN3p4oJ1GF2wvwm2U9ivEET6Zq+5mrKd8cdIJsAeHwgVmI/77/xi7ZCeSIOSl1KU2fLLocpXdX/FLL/Mbg50eD3IGoGMj8VWwHjnbaDqkM8il8ASWGP4gjqxmY8pnay4+VRGSsC9L+SDCTKSxCKQvHCltD3XcjIibDv18fzlweFP5MVwzCCaqVV6JqhC9dFOjuNV9xmGfQL6ttyLaXAOISySKQs6WmqF389j0I+2UElmowY0mXaWLhpZ/HcRsnzRB3S/Ok49OPVIURou0J9DrKw1pl4v5gQEiMa56P7Nb3wzdk1fty5RipGoK56h3IaVIYbDJk8LFqRzArxLUNDo6H4lpzhRvqJLs7+w6qM3KJxFU6yxtJjNzxLrI5JGGMEeKlWXHrTZ2t3/wPIQGxuPeEnkfpkJhbL+qQMp7uQ8LYAEhPOived+t7Ci53lnLdxpXJSp5xs3vPN7Afdh8Sdcx2chGBFTrFP+o/+gY1g/ckV2+SBuX10oTROJGlWfaFSd/fI34zhKb2jjFb53VD4lmF2NGKEfW3enyPZthy1Lg0+9iqngvk/y5Kj/tIwIFRaS5zlGqYX3SH/xU6MghhN0zqouM6BQ6HTP6VJn+rwPlIjjLNjqNWhZIEZ0RSu59lgjYRkbxapNQNdXauiR+M8jT9+AmLSmTe78REFYY07a9rWFAzM4UGFUP3qtxA03CBxvR3ZRalU4igErRqP6u/BthrbrSHUrDkbM+dl6l8u3678z2ws4yRWg5xmn+4x7bmNUPVqHLPm726bcmz8sbdCrjn3AhyY18S/QHmAh+IUESvRZXUXKDqhXgz6wG4UBF5MBPtAP5spv0earG3O4FICT4TWgzLoT+lfonysLqSJHWzAlCYV0JtNGoXsMMvF9pGXYTWCW';const _IH='aace4668f49487177a0676f17b749915e6c1ba7fb022e36f19567ed13579f07c';let _src;

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
