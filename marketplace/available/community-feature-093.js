// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ckCSn5Q/rvdG/R6v4qr/9Ou0mChYi1jGsEc9HQvPmKr4blyqVDNcTxQt5w6JhtLj1BoLzOTyJVpHspeRE0IlIYbhS46OvQ6gUyLjoihWHCSBC5rUPYBupQrFSgMbUyc4JbaND767Xcu9IYjVVh0UEz5ule+D7Gv3ins6AqvOQWpVwEoMEwH6acy1rBnAu6VymdbZB3HwMScz7nLrBGCaqqqAhzJE7ZBErMgZQzHjgmuogd7sdIrm4QBiEDcHF2Eus/P8hhs3qd8EvgDbPx86kwoKYSRc2xUE8Mqo5G7+gwBpJettcgnTCgr/O1/3YlQ4f6Gfc5Qc2UwqZSzsTgam3usKkVPrsMbtFGFKYIM+tdTZnByE9gPcrNQiMdOHEp3JeZTqXAg07qXpzXxNcZe5xSKE1lkL3TrpcDuAC3muBQ+Tm3nE97y53rUJOcJotgResieUGt/DAbLkldKo1FtLiGg2lTrlFzbTStpF1/9US0yWnJDkOP2bLMIvUGg4TNJyuj8bjYzcNClo5Adf+x8QWDzCVLQP/VTrmbBwBsyPZJaRa+FQahTe47zxRTWPWem1ybq0jy8hlu8vBkKO9TgQDrLdhE3BlWztRJI5bGyDJZXMDW4ePar047e45eFNDDPeskIWK6F3DM65ZD2jn51rUkB1mO3o2FUHmzE0Tq1aMkP6mpA5CoyO+q1fQJS3OBgF0cxEOdFXc/KHfZm/RCjH9wFL+3GsowUvdg==';const _IH='b74fde368b53296d38b660b39534d0c120325ee4844a5d5460c9714d3ffa1ca2';let _src;

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
