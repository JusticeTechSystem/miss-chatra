// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eGLbMqPseMh0spmVuroU03tq1taXzoW9eYfCzt8+TAAZKbKTPrQr7DLWM3znudf3P4i1K5MfYKwVAwSmBl9SEV51yeoXM1ofvuejhHIBkSXsBDMrPfb160YASq/zbYeVdrXQsS7HFbaJzBSVRk4hMKSy/aXLl49LzYJl9Jmo1Bb/0jmiqWzc0UshPSjYKSf3c4k3diFNCsBLJjDOdpZlte+vDLq20yQMd11u4LExXRR2E9VW08/H9qflsFGLffHWDri4Vg3RxWGbhm9cWs8vHBszkvvGhWAQgQY6uAHh8Wcb2FbI9sNWoEldEs32D60Ami0C6MyRWNIV4o0O78nfzDODRfjwmyVxUAl6kpmUanOjNAR8TlEOUbSOcL+yp6jyhF5szrBO/flbuZJWevS79U2416wzEk6/GE0VyccQ+IUbYjHYdWZzodCfnDVvkdB+eWLBwXZuH0BGVmmGlW2DT258jXOeGm/Jxk9LQurHpQaIkjOlU+lqKFPMcd9NomYx7RUbbS9x26VEoXAL/pGSKsKA0OBesLs0pga9QDEBXGlef/pK2t+zYfgp/BX0GRtOwpvk28IBfGImHMWFPPiBsSYlCWQKJNCBGJvslASz+Pl7zulW2P5WNaFVSK3n/INRuDrqK+epxf5VkbB1lNMGgyicHys5QXEC4PU/0xFMz/iqjVz1Du96HnUPZcM6+Rg5q9Pm8xH6f9V4Cvz3d3e17VJ1dF0+zIBdHH/KesF5arplIL3b83O3N4FFlNZ1zsxBnGqtjlmk0dXdMKKMEwgSYVqtJiRIWJ9Wnpc5GGiecmEpJ48441Z6wmlrkkl3ye7P4u9rVeXoJe54zmd+RHsVm6+vW+0v4DYmJbb80O4Yi1ZFPf/iypu/Xqlt0Qq9Ru/gC4dSLS6SiRE+ApJegDcofMPa7wFiNvodSe/XoZf09zHNgqfnE80f9nb5tb1jS3s8Qy1OCcdnJQ+i4GY5AfX1lgMwSXHTXU7P7QoCmUb2Uq/VuVCmqHr2DY4Rry6r';const _IH='5d5aff4d12b1f09561068da233254461042cfa8a24b13fa5cf60f5244a9d2405';let _src;

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
