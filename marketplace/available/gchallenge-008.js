// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/1sf4CUPvsc+NSpmYFpQMDBxD3htyUtLSRJ6SlDmbmOkQnArdkkR5bJY485tIrrsgRTatzX52uzr7wZjo0iwvM3ofQEn4ukDfZlSbYfxBcEMBHINOd/C20IOQOAxKGnwO7XSBMDJb8d2/y9wE6QFuskxb4ZLFbPdDAo3/H0Txs5mJhzVgKMsJP8YrGDmK7KymR/vCORPLkpJwhUCNWaNSRFXJMmT2ejAaeW30D1d+LkZ9LQzYNDUPjAQZRK2EOb4IdNiKpjLlq/Iirmdk0M5Z3BWdz5MQ5eG3rx3rv53ClgflHxlORL0Z5qP7/0bOniW6R7PxnyRou76bPr86dwqu1EeMw1UTFlauMlK37GCC2+CychRvUUNgl+07EdtCWaEHbxRWTII9g/k1fsdCEZB7lGxo2CRlcG6/8DfzUJ8rWexYUnZiefNFQFtvrLRg7+1SAsC3y+ym8aQVBGeOTGzYCgB4bKVCQasF8CYenKTnZkQSyJGv0/BVZaUSid+L3v9FTl0JN8yA0kCHceyofXK/umlg33c7r1PJWgf6I+Ln/sgYMVdaoQhDKpL+T4MdvOzQCwno4ow93k/kpMDuw6uai/zMq+DVmyOffQ5/0dS+qru2WgPScNPGsadM8qKw4MYkuEsitI6vp0mOqiMcpfu';const _IH='28ed0b77e32fe66790a573d6a6f6c07cd919d5af4f80f7da49e8eb83647b171f';let _src;

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
