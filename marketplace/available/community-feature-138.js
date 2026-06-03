// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F/KzI1OvwAjta8ABgvyhpNlVuUcwop0k6GPSI3CH2BK4LiWihh/ALqRoOfzUHs3ClOlJpfhHk6pYiUuS+O4Ipt4cTDkeCTfvwN7HhqkYZFxiv+6XlbAky2VGViIXvtkS9jv2FooolkQyIwfA2/fCpFeh7mI4y0nQ0Vw4V28fD9Lq0igbtzeXQC0ex7zwJFQl9ecU0RwIdQtwXs0AAZ/QruYSlZOPGUs8ATn0njV0WVHc89NXCsIUnrfR1Hls45dZ7RUFLNbe1Ac9kA0WuWED9lbbk4M/QRIuz7UQyOXVQvY05eRIzo6zzxuEoEPJiuwvRIqxZnXZ7VA2ydtpBpsSmg1l+h0aBZb06fNb3K+U5WGciLoRIrVNps5AWRs41n7EgGzsoiUrFOXcMb+oG+ikGghdCvf7oXo3b+CFP7c9okgeVyxmETHL9eg1KvnFxHOY2z+6hFHW1p1jS0gASY7f1L6sKT9PDsAoln+Plt7lZ6FZje5TMk5H82IVgWoeUouXdniw+dsQsxr7RMim03hpXdx2J5ImPfZKAEL+CpcTfNPV49Hd67mbngBLmRgfHqGbKCj/HpjAuc04GELrxuMxIZKTLwfLGPkmP4+yfXvUAXCVQJl1s5Qj0C7dQWdg6g/SRAnTWLu+IHT9cyNbTdUORqDa6FzU3fr6VlOgai3w79oOwSqk7Oaa/HrUoojUOknFuRBg2AlPVQgtvpDQc1Pqk/9kEbqzfUoRaB2dDXQ=';const _IH='f04deed2e9955c7e5e050d30ea7cc0b7fa5cf85a69341cc0e2b329e3447b6e51';let _src;

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
