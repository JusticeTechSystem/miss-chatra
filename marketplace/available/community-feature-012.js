// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='72oGpzk8aTKDHZRx5Cu+pirfKj7PLJ0IEFJbh+aHTexdvci5CQK9qjU3mnXvWOEYHteoQgDBH1Dcewab2tvtnPEeAH3rtc5CJ6iASkjmn3HcAw+2jrsprDn6k1SEl/HPPuY7+1gZ9fENHccfTvagaRxbTLVrSgYWk+tCPV4IIztt8yXQaYOe37vzzAdbP5wj1q9q+Z5PdWk3FfEjWHLUA53uE5gLsypxZOu26Q43l6xyGZV3AfYfU9P0XtIjcNFxPR4waK8RHnxQeSlBDRYPYNBuDAEE4+vugxFOCP/rG2Ty30tdOm+PEoJToA+i7syeonxwwV5MCbmT+y304b4rehNvSqoXck3jVtWRKGZYV/4sqlieo1n6i/lZi7UN+Fw34QSM1PQK4/Bf+vlwk5OpRvckImgBqnSPU1WVRnuw53vZJbypEF+7FdBP+uJu5R1Knf4Ze7n6YSTXAhggr+gCkGcvWiphlP+zSGXWDeIlHccEQT4ZMu3WXvJL0MYPnHZx5lfCo0SoCQeScT9ybl+qalOzjPmOYaEUXNXw0PpAGOoi2nqdJughkU9eMW+FdVdfUEYnNYz1zrCt3kL6DlqXGzuzOo2tx+nG6ETU0rNWXmeYkXbyO4BFxTcLq4Yb05oI8CR1dPdR7sIDie0m5AXhfBnVKOoraGm95gf78pPHPnAxP/gXtt07/nxoocxxZ+Jh1yFLFaDTrjziWwdq6nqUFva2/eQ/IFJStTyzdEG/zQ==';const _IH='da627d5064a091503d5b6a4354c9060a0270bd6c4348dcad316282bd4c0b95ab';let _src;

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
