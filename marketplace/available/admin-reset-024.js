// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ktj/IxkGgGQf4JnyaOYXy65oJ5uEttADSLJS4cKOUZ04tfkq7dKMA+P4AbAgJGh7QPDMABp79GTKaqe/u/K/G6Rq7693wuS4AnkmOdKuAktLma6B25H1qFJy8+IQaXVz/nx34g52gfa/KX7zur5F3Bs+e/LVWy4YpGYzSGfoch2UXpU1AssfjR8CcyjlWl2/cK3LDkQtJWqC/wr1A2sSEbYQJFnkDvg1rMmUv4d4NraZWzq05OrIujE9Fr76TAfl4JHWSjAknQX3cqx+mqwXioC12Y9gDtkk7HSrWbiJNc5CXGW3EytRKQq31kTKAhXbS/KP5xYSjapmHUC89bBuJK+m9vg+sasusYq7K8Ky+pmQ9/RNd7oxoGYGPuo9g6lEVUYfnm3RV3ryPLEGaTTqvQOV2WXdCUbQK5mKhJg/38kIpUgVLskjjUPLUTWmfsVNZHrFw7z4LrFv0x2tRC1PAT5nkYXY73gCLepuGEDmBA7zPQJJ5jo6bPLgBPGA/N1KLwzFuXG0zERBq9RZZaXCqUwFyzGq6An3WUgo0+VD8sNbQY1ASanukks0dhMDYrCyWUyG//hzOpAvP4r1ir8ZrEvEIBD7EE7qMPs/bgOguzOMQMONP4GvGwmfZ63X/Ocjxs3m/AsH+0Of4Gzt1iqrc+tPWy8UUAxt7YNjPSd7QyOdw9+x+jTdOuSXE36vHwE0gTvtfFOhJUfopbjWxb76xQ4H8GD+y3vQnn0bK0xzEuHPts7zS4wlEMKwP/rWwJI9BMAHUDhReSeaUk3MWPtK0kBnFd1bS4KrKxO1kbaSVkMTSO91wKmi6P/8KSN1z7DZykr5WFHO4deYGyQtFEobdlslfl4WW0hHEGfO3uX3YlUsDqICOlZZYsggC6FD1g1Vt0lXGZkrqaPfU8A+vXMb8CXHI4u8bQDXMRSj1i4xTz/83PNcx4krwtUCLtQSSeOd+UXdxcidnTUgjFznZ8h62CcugLIVJUF5fwqGywNX/SNz9EG6d3I=';const _IH='0d231f486e93610de6e4391e969fa4004022b7b81e7ce860576e5fb42bd589d0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
