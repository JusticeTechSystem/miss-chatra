// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1gaDMBAQopUE5O1SgW7tnrct+xCUKUKZuSN5Qs5mhdvGNE71MKe1sqCWMIKdvFSGoF4qKT6g/1mCyPmVl9049oufovLMSPOx6e3QsgHblZJEX7XR9joxwJC8AJ2hSf/Bxt3kcyVyl4QivSHE26nDhnT6CzVgozbK0igEAlCS9qkCGKRmD3sAt/AZbnBagIDq8Dl9Gv9AuPKmLT9pgCSBL0kKGOQ1mz1OoGfL+qngiyaywLqvx5dNZX/dD66kfrZQkxa0OQCkoEMji1nGbs9VhTiLz7p3I7Js+fhwwACZzF4NAoAvwFxsS6NW/a+FjT6at5BGditYP7o4jaj/aRkawWObauFPdQNxBTlVM98RB/7ahv/l8yfnb0O0w2jXjDx80W8sdGUCvWPJcsTgduMlumeKI236XW/ar1p/if9BUUAX/q37AURx+Nhl7kfigUdpgDt9njfrgqkL5ENr39PTs1k+5ZJrPHkjq5vYRsVsm+Uvl5hyG4Fm/wGuRTooWZGJBQFxUI8foAuSGjQ3NPuRLxot9+cCw8KhGMjL5jUniC26kuhtgvpq7bxGmvFaIjo5HVzIaLzhrxQiLA+5yMRrBdISGF7MFE4T0QXE8lt8h8kPsTZJ2gXZ+MD3ngWxRwl5e4TL7ovUWfzmo8YCwiMqRbKFobyZS/ctZwxEsXkhhzxY6qWdzk2RMMk6G3PKKb6/y4Gm5H0l3t5TvDUF5j+SjRImw+aTu6vLqTMwi/GyCeRT1mN2H0Fr2oEp8F9kWUipBoF0G/CECB0XEvO4Q1vPrXopfgu+BYIFH7hkgbfJQKAr/kbVbbSIQX7KFgWsmrUjFr4S5CEP1y9mmaC9q5H+CjzUYWbvdNzhJUPOVhFSHUEPPOSlAb308dSczXiotUXbRDYCSM54N1HrC4z0d8ZF+/Ne2lYgVVIQB9AESlLLY8AylPR8wV4a4QE/NUP5epait07rIiipFa44RVpMnn+ozoXU8FTDXLwRmIk4tDZsVmH6jHzvh0DplnFnlJFr';const _IH='d23aba070ddf1036e42bf7ff7037485de567278927bee6ed6d90eaa7b30b65fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
