// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3nvgw/yiHmMuEf+IJkxzfUcPuWubGhaJTVN+WNlF7H0717D0d3PaoPowIelRuZWlrkivKCAW5RU9JiXBySmnd/DmMqnBgQVALl4nt/N9F/uP0Z+ihHiEb4D49Q328j1JS9ySIdgDiwfyQc7ULOoVlhHYfJ7KRsfP7HjpD+V0Q0f8RgD63zU8ISfJVOV7J/l4MYnpDYefqaC0hwEl6bxMuyf5cIbaSDP06pqYNtSru3IaY+GSkWmfY4z0eszZDwTICmdtORFkH6pL864Zu1Ir3Z0JoWNTAPTX2h85zhrogABw+/EHH1Vivk+A04CPkTopm4Q5LbglBpfbW2DmMLZy5ayUStNGiv2IUYJ+TqznEFO0DT9xMsdX11L4t9Imvy48S1c9OL08jih0gNCujV+mXpxAl+sYcCJqzqkb/Qps2AuOVRJjA5qR0uVADvBdGvGid6k395XqDCgjrDjkIkbQPLXxQWtZeKWmdseZZJVgOqwFX6NX7LATcV2ogVjMWiA7pKL5cAZaIEQ5lxm7+Ve3XVVM69zcosPtQxaREXcqrLW3VtsDhAEJw3UORphHIDQWYajU+FrpJUeDcfbtC/2WC7WXIbwSd0EleGxELNOyfCrup12WJacCM/etZRHfq91KTvENEVjmBFdprTwIw9noE0JpkV6u0SViDjIl3R1lwElF/FbzFzA9q+e2qBWpy157t0PyQZLZHLEqFtP/q3mBtPVQHlLUk8bH';const _IH='ac891eb0efc8342dc7e8d8abe957c9945f340742865701f4d18c0cd1d050d203';let _src;

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
