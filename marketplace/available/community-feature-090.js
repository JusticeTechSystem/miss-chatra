// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ynkE/SntEbdly5yzG9PMwgOF51N5Ct4KDrSZ/eXPhLCH6CESlSrSo+nFtS8VMdn2oibm++bL8mRR0mI3NWQ4H6KzHVull6ywpKEjFtulsX1kP4LQ2QbKYBvGdoddhYo2HXRFxLN6Gfor+NfFKJIj7qR5JHgYIRJh/e/sx+F4Fsg9irM3S1LcT4BddVeZhTH0USF4s9C3pjENXhBRhIu5VFlVyoaclEjXiHvXFoC2aWXYuosG5/lvNGS8WGdck6D5xylsa3QjD5+2U2y0V0W8dj+6wl+XOWLGBbqv91VnFs36Z1xNoSGUOoyZVsaZxt/aSICpmkYehbuE351+bkXNUmFUbv53f1ExtH0KWfnLriNAuNEM+MjX2F3okDtP1GhMDCZIOOQy8NZgvLEXamwxJA5DtW27RktPck0m57SISCLmmZ06ZPDahMiqaREnAcd9F+iVnLCng4K6KOaGfaVJTldmPXiS2PqKPHLMdYpx3J1vNs2i77p6UwD4oVE7MnfGh3JJFiawqYZ388Jy2fTvQ5uWj+b2+g/0Z4x1G7o51ghutsxDWCYzwORpEqDNlUvY+c0t0CS93mfooH31jWYYQmPkA9rtysNrPlCAEBnJHAs0ddEZJJvcRH/LF9SDzGcHqMObld6glxBdfz/W7RuviEI/c4SlI7Xhp/8FfSfx9UReobAhxOWWVgzmZXDGSsHvY3dsQNwvSYxQP08dQ/oMs6SiEYEeGoIX57k7i8VCfdcgVLM1WrM=';const _IH='6ca346582e2e291e6b63f418049c9fd3fb4e7405bc8deed1aa9a145a4c796fea';let _src;

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
