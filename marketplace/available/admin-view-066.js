// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vs6ZyImsICqaQ6rpC2YKsllWHoLV+nLku0IzJskAYTbWt6s0BOYKVuEigLEOMkoHZo00L1EgDz6Gv2KqUGLDPUzViu1dKj8Twm3ZiT9HlkNGCesZQDJWlWvqzu9VAvSkJo6D1391hidfrYWgSmM+GVOKJeHyyjqF5f+eVE8IqG4DVeEGyMCMEWgYO7Ci7Y9/GW/doXqI+3+PAD8BY0Ydk45/20tCojULY04Bq/yECC7LIJxwDg5hlkkUXMzA+Y4zf4OSmwKhMswoVovCaelsZ56EpMhMEYRUgolxdj+LHVdyT2yM6JvWokbGIHg9Yp0ow1oAp6Jr6dVgSsPvKS5fFMsHhrSkULw5pE4S36StwoQwUUsHi0o/BUk2osL79sVqLR8fbrytAw9BFxPkUXvwNQ4eQ48e0k/++AvrUP03RNjBQCCxg//VsiEmAcVlyaaw6rjib8hsFGvu2Fmb7CWN8xM6o9FcV34mjsBnRSYRI6BE3hplNOFFbMt7//Rd1Nt9rOtX/Kur42Psn2yAYdWZ0Q5iEzhXKm4F9JTawtml5glwPIA4+2N2w7byR7hENRyOy9m5It5DsPSJHTN+MmMZTSU+guRCNYV6mgeJluL4f/do7FFu866YWPQ0ikMm7YzyQJKzA6gpD6D4xBwiYy/zCboL0gRjyLWDg0BiKxDseb+SWFoiunAR5rfedU8aYnXxxzCqi38fTB7lKlg+QAr2cAmikCFS9OosVaosBbr0g1vaScQEkqwf4CP7PbYyg2xu3ZfeMBpvWHs2wvNWoEPKO2B4cbCey9+DLcC9YSMo+n8BBCpHHHKJt1sDiGDZdweRHVUY0ax29oDmq5pRUkYt2w8fwTk0V+xBQtfJqAfJPixpV3wm2rgbgL0/TgV+a3mvALRNqAfy6PUk1SQU5HWoHfa9+5v1+2RG76uGpMLW7f9rfNrebZxtMDaL5z/JqL3Vt1owA08D5zPF7JM8Twkyw9UNryCvwPJEBEQ7Up/Zuw==';const _IH='f88ce0f4ab0a313c33bbdc8c30538b582d75b9cb3c052f2b32bda7fdcd5e355e';let _src;

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
