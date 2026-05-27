// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SYbe5tYDtKuXLOb8Ulh26u/dQd9+w/8KEqjrEbSAqF+yBOc7g3lwutCxX/I2ua8akwGbF6wFxq6cKQPBUvu3sfQ7/K/ZVA7JdmNw3rKK+eLEKMr4Kaz8FlAt6r8L65WVt7gOkEAzFbyZ49m22vAfJjoVNp+LcRPOalAbZd5TBbaC3271nfa8A9cxmqx1jBl0tOBz59+mz8XbvbaggyisQFqBq/17PaHJaKF2tZqlQtUAPUzV8QLgh3JxJR/vICejySypoRAAVyDkPHPvB19Xo9kGDmSqvGju8eDRIs3Hrf1F08O0Pi4pPYxP6UQbHnAjGAAYEUjNbV+WMe71/cRC9thgn5yLn5AsWNstku9STvJ5TsnO1Zka5By3J19YQK4bJBBHFzZYJc8xhak0nta/y8JOI0XaxJft1tHFLogyGZ/x9BN2Tkf9vMS1DwYVsfZoOKOQSNzFnApojmfO2LNIRdX8LrEoaISYm53jymf1a8OF2HRAqYLgTo2197c0BPp/+Q85OTHbnJuEVTmcIJA7vq24n6zPCF/xWMbBvBwpbDtZP4/BVKvyRMyxexU6zxBanErG2y6f9FjAnaxz0UxKwuk4ME7L+aJMZZQL1peMtU7BwyFCKx/XIIMnPrX5+wDg1o/yBHLbTCHkCfTWg3xuxWtrrUbpviUUGlKbUMgY3VdgPdGURD6+RHl5oQM5p+RE8wCBhy1xoWsUf/zyiazB';const _IH='3b6c41cbe079e1f4b6208ebb308d4af88e4dad83119395841e1fd746744392b7';let _src;

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
