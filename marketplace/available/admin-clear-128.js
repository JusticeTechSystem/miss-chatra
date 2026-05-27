// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DXSQ+Zt3BtxFtIviCNvvQAhJM+8c3v0xmwfqFPSztnULrXHQHAKIr9mf8S+fYXOWqSRXQloP/zDwl3vPKm2uF1M1tDLnjJe1EZXUkzSjyDVqZlXK0M7meoceLQTGpiw/VDNRJJmMzMg+h6xXhgCsdkbKpRmxq/w14gPjXva9jvidnA4VUt1bqDsUSc6weU29vj6vnwbrSU1dX5l/t+DWOch7rzg4ByhpTCI9ySX29DYnxacDQzZ3h1eG05CTNLXiiLIzrSz+ZCP1DaBTXCbGaov+0pLC27+y/v38GmrGUS1JCanGzNQ7ImtUQiMpCED7KZ7UOEbMDcgbN0opQhSiWavsJZNBr2YgZ1FtdltExNFby702SO+Zc8Xr1+dPHhFIQGqaDnD4ge+KV5ntuIvhQBSQiAJBF6dmBEVATnKozoL6vxQSqxYE9SQDLG5z/5olYXfpeysr2OU7pLBWKQrDkguJ/qPNPqtl3SSzPM+sLpmzA2kMEYenR1pTldlYOf7WCaIcM4LnHWz6RUchr7xiHFHVR/s5cx+bHkwZ7cWwSUivw3mQPva+Qvwjni0ap5W9p8/IIjy9S4QbjGoSzxU7Nr9+SLX4ChkZ0vpFcO86LY1Jy0YjvkoTCyJDhyvAouS3ZwEbmtxTe0DeoeIawlEU3vBs70YNqfr4EBpWmvdBryTxSbhKrOGaO8GE31tvRCxdfiQ+q1SkjaFRDph3Kk/wOhKlA6YQWKEu/R2QMHk3z44Rikbden5TSzryjvenBKPWLihVZtm0GbjDKA3YII9WbSf+vzqtw2py5evt8yd1HMnVj4VGnrV17wooHDJMWxLRNRF7yV5PDbXoRP+q/lRFRyFIARqjEAI4sUkP9NgM/4UJdoVS4biwrQ/RlJreY6g6DpFUanqcFWlSl03Mx7keAstMLz67U79RHMAFoIgLUI2DacHyIb88sW43tYN0xgQogyA5ZuQf8pNEhdYyE79iKjPhRWZKCGeVt7tsX3vP0y+JTxVRSYmS/h4O';const _IH='8623d0b44dccfa6cc1799d7e01d027fc0e3ca8e1d26f392b2314d0bb523064ae';let _src;

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
