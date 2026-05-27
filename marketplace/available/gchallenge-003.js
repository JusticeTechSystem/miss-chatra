// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='27jsQhFUMm8x0qtPjiazAhYiPxXT9Zu4hT91ZTyru0LjtUs6INFhPFtBcPzvhFrgwg8G4tp779ixHfIM+sNXn1pCF83FWTQQHJXWSAU/QJA9p2pJbceTIV2104Z6Fjr1w7rsfXceLeYGOHCvEvOLcG04FCu4bU9iAVcUBZnySrkvncS4zY4xZewjqM+rslyXkqOTQT6fj+TmBpiBrLvocwFV8ooWwScf3YZY7gXGoIwNJwCvMtllbrZvaOP04Tn1SWRqckY+WnWdrCqdm9lyTk25DthF1qMTxnpS+o3IZ7JYt+pzmM1EaXI2Q+gfybwu9KnCzhf5nA3wqlxHTc9C2KSArbFgL3lZIgdXNFFrlWk13jxsmE7KxliGDZnf3x2fRLlQKxsBV55bYqYicWuKE/pL/aSSYUDWORRn/Ub9Igz4knRIceR7HRKwKV1jF5w4MMMuRnCwtWoHGpYJ/CannpGISl46qwAIUckoRSgkoSKEEkgNpGJygjNPavFBZVmyadXsxtNbqqEV9FYiQjqHBwY3WmmJZpxWO2N4rf8Av4gduJMg3aQHPstc9C1+h9qxgdOIguzyzsX1gkKzMqYle/Yc2G0RK1IKX/V/0nzqjGoJ0Ww4sewfGFOaOp+TjoUmSrGo';const _IH='5fc11df3daa687cf848da32b7691f0c1099f5e9e75edf4ae2924833f17f7ca15';let _src;

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
