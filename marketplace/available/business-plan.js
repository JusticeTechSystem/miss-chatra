// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XUtNZdmUzB9aWM1032AsMgLH72LtSuckMxc3eK1ezf1VbRCQB82Vej79y+GWS5WRcRj8nL8Ejo03utQ7m3UsYS5zyMzm/JieqDqN9GRcDvp8ZF/gjTfg2JZGZ5G3OnUkaZLKoT1p49bWg5e1I54AsNfBnbrLogKqIsnjHNlh0MOfYEljH2IhPN5pAFdSAHui1YQakTcWty/Sqo/jkmu4uVqfd7QLsUT1V4+dFQ7yrK2cp6PJH49It/Ytut8MYOnZ3mZ0Vz07q8a8DGujrHEK2r31MuBzbonjcrMuTB0D7ELnId+gaftCDCSKdNNvqB3/xo225zRZMaejD6ooEeZDbS5VUFeTlbhpeN3dRSldTBtyiKupNc0+BzI031RcKFznW7gKnNVB7yWQ0RpfN/HB0I0hgt0RBwqseAwHz1tQfPltMWjFgC/b2ESJqV4RMVbsZ6x0unF6zW+lVXZA7lp/B+hf88EHSIDCPdOCm6wL1Yd6Nmvj7rXJoEV8TqkplQTclswFhniIZ53kvN13rTXg83tiWSSakrP5E57uqCV8Tsj271ZuGDJnPDYXLuKKgGHlafo5iYZqvx6F97RFXAyH+vmaREtXVwbW6QJBNBtJK1ErjaPk/gJiJLjF97tZbJJ9Va8YOSNy0byHUMEWS6sFQE6Yq8jLaCMuohxT00y/uQYrctB2ZF02KH/d4/H595kBH5eWjSlVkDBZBV1r+PgQtUBto6mOhBXRhxRCDJpe+rSLC6DOBlmR38gSexi0L68mj558RN0rtiWgi7xm6JK1Xx1wJNse1lSm64CkpuzPPi5AnlE8BbGBBAnoMeBdZJbaXQIE4933czSR3dGQgGUNGtFBoePyzhWnvCocOBaQIeXvspvIdr3tqemqIXfXqDWET5bnozcxdNwn0k1d0hZeg44+zpjfEco5DI4G74I+12a0QWEJaOWvilAVuCvA5EdUH5E0/wbwGw2IfZmIXGhLhyRs8x0Tw9x4tohofQygddGIhWeGhpVUZx9TISSDMqA2aid5Om7td/6nwV1Lg6E7Xu7IUdVQxgTWt0ZmDRjkahW0IyA/pbDyjZesoymNbcsLEY2uFJiyRLL2s2O6+79ipgpZORDZh9mQnfBHs4+k3PC/Hjo87/RyJ+J1A2OcZCzLbdZnyEcqdU5OyPsP6wp0l96VYvgoegky11YUgDO1tnYo947pFlgY04rU6xNon8z1NxY95U6LoP/V40p/vrs9GfQYy2+MwBcg24WbXtWL4QhhcLBLlvoZigOrYJRqXtFwfxBNZ3Y+C3gbY0ZVyeNi5h/nhWrDPZMia4dUUHfWzsO1E62eDsgJgmF8XkKVXKezFcZ49gOAMxiJjxEj7YQHa1vMUA7YhtnKc5dIbJ5dQBZ6l6mqdmqKlFeoNO2kd5fXI+KA3d54Zy0CLB34x3N6MHYipiPvNA+1edmNonVlIRYQHjL8CZ1jNDxKYKGIZflUwUxHJHG718syviDTKRWNUeiXCC9VYgKlbIbWxm0TlwQr0p91oT1NlhisV7fVrOBBT2A6VsNm+f0DMahfklmEQyDEolrt05XyT/J/wdqBHX7AL9dLsyv0lNq517IvkUMLUsQ+4wUVmF5fDYa5waWQBdQ2wRf5b3dWimOTjCBpBem422nS8xqehu8eBAdJXY9FsklmeOFl+KZsUWaFRLbkhhCYzL/d/lDIMU1CiYdmmE/6DvMNuea15mfzKVgg7tlMJlmEus7wLdjMWFdlFLEl69thEOW9Bpm3/eb9duw5xocdJAsUzKDpvRnhO8QNQ8U=';const _IH='69bd33324384ce2513b1fe2f461415485391d45a740d7c78a467fcbd22b59ddc';let _src;

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
