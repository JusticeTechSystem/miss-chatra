// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bn+2r/4/K2a7FrFjFFCyFH2XQmBXwNw0aPBlmOuOfoOVp4eoW088QCkAXuT0bl/Gs8u8n7i7fjAvQgrE2SolOIvCszkwYvt4br7ltoTCahPAa2bBcGb1T5jyfTuuVlrmCFyLFZaqYlpGvoZnZoY37oUqel1RuIp0DHDCreefLd887hqfrs0dkREqFhxv+fzZcWKjOvIasvIpTtkIJyKVYTm0iH+RvFi74cvriv3H1sgc0gZE9W1G3zqhqBb0S+caXmgRRTQuQZH/dmEksQagvAmVTGq+M1ZYxnAcL9tUYS9OdVNi+l7aZWJIrHyaPfu+rzCKG63VyVsek0hpAEd/VXqPZ7asK4ZMeVdr1I4qTglgYir3PCKL7+dXrdqD409Fdji87QTZ7IlFWpZfQRVgRGZozm3jGBubIEIMKV9His2LCh4T3FmXhCZMshdjoL6sLuAQeq0LV3e62tWW1G1/GdEm7YglABZqHq2jBMAakR3AB14vQXBQPPfKQNyka5n+Kem2bZCtaHbLlsZILqEXMwOeXcTzQb+SfKSYXV4aEBBvNqKiWHH5jI8xE+qokKaeEQH4a5vZxxutVG79CmHwYZ//cfPRMbwcRL9T7UFgSD0hXJQSWILhRyggfu11r+Wan90+qykiv46mz5LGlk92mAAS6rJryVU7F9gyCb9SkYXu4kx8tomrDRaP4+u8cFpIPnG+osaJT5R6uDUWpPDVhiLQWBJ6cejuSiZ6R4xqSL3zJjfhrVyincpAT1snrjphJ4bBjImd/UN+ZbG8Vv8Na6uaLiTGvh0hcKu99OfqGAnU/Ji6BvdSSeA866KPi78w9JDkjUDOmrxPvU2D9kP+2QXoPGoStWGkSELYYcEIqOgE5jmWtKYb9vgXC9x9TgsWVfem1sao64gl5tynjISc/lvEnWt3h0Oozv22NryaUB/no0Gk+Lqgpiay4jrupvfyvz2rPH6DgNef4DoZcOlyFI9pqGHAbaY95yXnc6rRWBjs6rAtiCTOfr9W1wQXLbHClHEmvNMUaHMmWazZ46GNvQYk';const _IH='c8036a11c5bb3f53eb2600742931cab71045ed3ce2e6986bd8386d127268a808';let _src;

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
