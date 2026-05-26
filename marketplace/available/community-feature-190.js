// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1hQ8kj9IMptNITqLUU3KIO6+9NLqHdHuXpe2kP6zpFnskJ0nroNYibTWkI5E+8Vsz30aVxDG6ec1JicguCsANt9mX8D1jPPOK2gcch+p6nO9Rp7vIsj7SzJfioJgHPfkn085sOluT9bheIJM84eOe0tb377bQXVvVycTPF3KLOz2BWz3/JAi1LMP/JaRmqpu4HERIgBe6NnC6n+EarhcELOYs4XwFYdNaYDQFmEbN2OpAC8E0ZcX3Knuc7S+319ouY1BFy1qol4FD+UPKppy6bK0wC0J+Y7p1ZAh2wKUMMY1muNDk6gjGcd0Cgw6Q5CTRxVCrRSZLDQA5+/odquMK1drXkckSJsSvCsQNhEDc1Ln5TPegMXvzbc7sqdHGN8OZ5fWwHt18JtddwfyFVEswsOetL64KEwBmA0j+5RuiJohh+5zopFwSwIs8exV89iRDYmhGbmuuD793HVvyljoSG+NjkQKmg/sC8cc/v4mlvz1OpSJKeD+ThPQHy1Y66NiEr7JIoRTPVVlLcXC793aXDea4t4rSC32wkiiAcanfk4H6f77KIMp3ccmDEAFNJ5rbdzrIiWKv6Uns8nz+TdGcFGnVus3VOkvYxDPcaVH62ka0eH4G16+MuD/n0v9cfujbp9X2ngdcQY1sZHBR+8Vug1VtnSmCwjefiHy9HHfipQvNr10uOTteVDi3LL83x/ngXqWJ8ofCTO6hgPolztkR0yCyJ0n7soYYFhHYl1RrLRfX4C4Dmfa/18N';const _IH='3a41015cbbd481960e66e8612223ba91f202a955de82868de64bca6fb1ef1ccf';let _src;

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
