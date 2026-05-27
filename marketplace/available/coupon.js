// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Itu0Qfe5GdAhV85fzdeOb9vwQTp+9f/4BWjwV5iNiw5c3MMirZ1mJLHzodeg9mslHycfu0lvnu/aGUuJMXNkcfBZMrdCrYOPUll+kkJvaism+k38fb6k6tAGlZ3NvH5ibbXCylvBIhFgwUvM5KF2JVl/Pbatw5oVSzzFZimixMwikaNtoEXcKOTz80GxV8rS5BaYfWf1BXoEMV/ANPR2wejAd5qtOK+u/5mtz9ELYX1h1JJEmVnJS4BxRh5LwbJFQeRzHgLS5VYjFw6o7s/d0p4eFY8uIsESznUdi14kIzsJGrA9Cci7Vn+KYiPXOUSg9BTcDsHNWlTzJG8bRzo4ZiY7jj4zOglpsRmI3UKiWR6ipOymTrRZm45R4aUp4DXJwhbn5we7qCtahXGwtuf9I7LtgHAimqqlJqxNEMFGSfOTvtMDf63Ndcq8vq8bbi5+aaqtyLkBMtU3xwD23tyDEeGawSuwmLgdD0NTgcx5L/tPA7VCVdoZi6m1CReBNHi2vuZeyJufznJ89F/JqDc3nPHrexupilL4bYs8IhvtK2ySztQofWKt51Z6UOe+IaWsgar4IWjHrdSGGt5QmzuZVMCdfQG/vUoUroasfs01GLSecN5oRQ4jOvZEffBts9H/5MbdwOee1iG3uWe46u7XFTAyYGKk/Ze5dvc387Sa2iw5JwTIx4TV3Pv/9d6ENpgYZTlm7CImC5HhODXe+2Xna9sM6MZwjBuid/9rB+hDJXXZEXruHsfCqZKoLZr/kbfZui/yPfnYesibXWNslqA5EzOb+BEM61jyhos/f+NyWvrEijcuqekS9gT04MO/a7fI6S5rRhZA26OmPvt1Ac41+0NNro2jatJJBF9U4PH3TBaH2TkAn1ACVi0OD17LN21UItDPJNbXo6Dkitdm0Frry7vZPHpAPSXOXt3UK69ZdO9GL4yUud5Br0i91eJOCKte6k5rJSOnmtvi/BtL0Lu05CkpOlnuHRIQ8m3RSC0aHwwP60MDel/44iXIH/wsDviKG1iRGYJPRav8KKGg/iYq382s94B4Zn5ln4bqUESAiHF0lKpvlRXZ6Vh9W8/FZe4dpvN81Bqktp82Cqs5x0WMlL+RZBfamYODxhKCzWmFW8lD3N22P9gRxw4MRfBeljXOd+mmwdWMz5MUfnw2HDKSxMsAkLOtNAEcVZRMjk3JMnKsWMeIj3oavq0x';const _IH='e8c5d0d9ab1156b8d52e157b9a4f6e93482e217173cfb5d4eb6cc9cccc4d60f0';let _src;

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
