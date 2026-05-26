// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wADubYokJulTdqWD/dEHc/sfIfTZHVuDitqjopFKfna/mQqQloMwyPEPgr7k7nRkR5P5TIunC1XD7TjfAKxMfP0kyUH6iCKdFAMVvcvmCEX6fLuSnXGE90e/l6p7Y4BLRqmg0AzPZqnZh24Q8W8a0g06+EIApbiRoTWWpqp9EnSkcXtAhlycl90P7DK1qNxzohhatM70TwR3dODdwV/SVH7rqs6Ppe6iMc0m4XLguQbh+gvPbMPG4Lj1DAMzaZCY/YqdP9i6zFMIr2g4H0T91IJcL3AOVw3PaWFsNB/axd8dUVH5WiCgvhQU+EzJv8YweV14xcgqxwf5kowqKBmoZrLPgqupnYyaSkFwTTcPAi5hi8qidCMgY77Dh/TMMHs+luNRb/73g9EGl/ql8AwaCvydWamOjd9fNoqs/MXml6AYhjqfohOzXu3BSSi7qoNUNjmolEhJpkjoeM9xi5ZNjUyhnpPrQKhuoMA3DbqZ7hegJciqdALZ4YQc8dNLlPm8cHKaOE8MDoS1G7JpH9N5eWKj96GQbjuw5OxS6ZZYcMZdWWCt1ke9FYh6zYZSsBOpSIfJaYEX6hfBjlrWADWFqPc3G5rmHmFMx1X739AI737WJt9T9iWg2017ewcqHZpOEddD38k0uwxRoeK9YMH6uKZ4SXR1+RlFg6+nZuBcBAx1alTunc6BwcIX9acj5NSO2IyZJpH7sefqNfBzTQdCyUUi//uyvoVqQCULxu/DYG0ahkqXNvcQEWiurSLe9Im0jskowgGRZ9OIXnkGcVmu6Hr6QGZA9qk0gdHysFQ/DRqxm/WBZYGGQYPiQZjq/fKx/TCEsx9ridlNLaWCE8T82mTTISZzzYqms6PPIQKMryddOiONP8SjnByW4LmMKaKfoqbjF1cB3nU1ZvA18g5TJjz6G+4Ano+jN6smSgNhXMCpR51F7uJghe7Y93f3utB+hCZFkjglcq4YlIF9XaqZXsilEYVGDZGZ7FI+Zx2CPlJJAECmKkr/kBVoXIrkg+haKocxT6gVV7nlJcrgcYhdnLAZJ5TEXhA0NRl+6e9FoaSpCDoD2/WCSKDmFVWdID9MxbLNCPsfU11z9KkxpC17oH4SGSa5OJgvVTrO2b8e3tOWtKwMsHxafQR9fueKXQkglA8AjKj65z7w5w+1NBNF0bYCVwUVMLKqPR5KLsz9D+Fk8PWeQBoYN1RAVsf8CUoV4p2MuBQjCsF9McxaIs39EFrKurHZrq0Iy2Ahxl5Uom7iGNdQNeRDSEGFJOC4weTlN51Z1iDzAiGeRsLC24hgtwggDvt0hQfZFbh6k8P4T0TSJbxDfuWFt5YAQ0bAOokvQ5kC/3UIU5J2FaIZw+h/GCiTFyQ6fXW2qtZklgZx';const _IH='48405a3f1ff67da09ddbbdba0b1b471c8b8234494cec07c0e72326b982675ec8';let _src;

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
