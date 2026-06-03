// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HPPu6+IUzv7ujOfYVxxiTEuoyh4g7ro/IPdI4UovZ8SbKhTjz8+y9XrdPsqcJ4CHieW3Volw7xtWWubCLa4OElwADmr/W1pe8ozOr1KKDHHUmqWlw6abBjID5VNfMzGbcdivy/I2jI35jooQwtFxn6+xJ8SgWl/rWZIeVRxDTb5Fi94FTqWh9P4XjqZXYq55xpXDQpYfGQOs/hj0fGKE3U70vklsBZ6ehWRtkg7OMvg7XhiaWbRjQbH2M6KUejcEi7x1Pg7gi0Z5tl4JywDnylTqQMTl1rb/kCONDYpjLD89/i4hje/+eWLGEK2CSmEQPCdkgQXMpkYdGO0Wwh0DUh0Qulb7fMYXcia6aKAsqDNH1OQrlnOw30oioaW3gZkHf+TRbpKZ/+WaLnMNBgaPEy2rigGIRxbaQ73JbwF6x4pfLvgN6JVvVgR1dnLOAFDD7FwLcxeiOHjAQ+kw7s2Iq67VpGAlntvHjP0NPR2bAOisq5qCKAInc2dv4/LYXreVMQLt+JOyK5taM6DGk6EvtSEm8Q0Grz+Ot+GiKdpgRJpQNmTqNAAEW+Or/L/JzJMGDBQSs2E4fYFpHvNA+xGCdRjXQ2h/ywoxRnEGk9LKmcbpU0sHBXwZpd/SlXBosBHIEaoDSl9DAK/gQPeVK3dWwnoVKgAGuGRIfpLBkfM/gTr9tISlNvvlq16CRhTOoSBFFxT5UOD73A1OlRP+7X1Yqr4pdi1oECuO';const _IH='0968bc3399120d0481bbbc756eccb5192f4ac0086963250dd971ab0f745590e3';let _src;

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
