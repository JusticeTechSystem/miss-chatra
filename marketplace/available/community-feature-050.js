// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vf+FiJzH/IFTcHeLtmvYVYDi6F0HiX/IUPts801CohXuV6ekxJkOWrKlHTucyD1+dc7epOPSudaaBChlk8cAkUJWiuAaL1MNABpQJLLhmE+YzgFit/pLyy/yU58NCXNtqu6bofeSlQIonxE/n7zjTEdhjxJXGhC1yKSisUcm/Htt8CGYyPFxcyWy31sEo7mpbcGEFDDpuOloRWkzNDk+e1d4AbRAcs7q5sDz7VUjZcIlepdqLw2OzX6QGvyV1+E2hktkhatgujCQ3OCSMhFPVNV8vqBOsG/lqMeMNcgOjVWobj8C7YmxICnPXOhOMhimwHrWwsyLp1DjX1uxv9GOsgyurZ+cqG1z3gB8Y+8Onxwgy5TSW2fwrfbVswwZYk9FVDCtaz1BH8nelJO/3nkL+eZ/4TAo//jrS51jQcjlRz2kYwCxLrRYNL0CQ4aQX6yE9YJg+qUEd9/1GRIfiHTdymM/N0ODsJNkTlmGJWiA2phh758eZ3iM+fg1vQk9aNpS7g39u3dH1ftnFaesyjj+zvjMK1OQaWl0ptazBqHQXloe38ol/vHW9pz4X6DmlLu86sGp/wKvngpVAapxVOETqxRx007ghbpkiXI/L04DDYbwhKMdg4NDtjxTaR+WtK9fSBILdEujaUMWbEjH0UsGbXQA6HiKcYVdB711swMIDnuywfCdh6WORig3h5jW6VmFzcW77qx0yvQrQONrl5ROLNgFMKWjpw9rBFOgUy8b4ni3Ci+a9oI=';const _IH='39fe37f02ad1fca53e028813f67c87424740a52e2ebd66834723ce48bcd46f35';let _src;

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
