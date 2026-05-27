// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pI0J+CZhzFTCTdSTaYbJ53MxQocoG51z+aORxNsd4Oem7++4SypC896UB5cmUXidrlr7EOj/JlKoc2Oo89ZG0yuSbZleIyklckLyqEDDuECUdUACuXJQ5smNvOsaf84iOalVEtPauS4ImVOj1iKvcr+53ueFSSOP+ePq4DxdonAo03uUoxDSoFB+X8OKxK0COf7YuwGX1zAhxmSUq4Qrd70zCQfLK8gnkV9sxiPP03RqrmrHVQPoMuXUOrcZvy849jeVeqqm9mhkF34/nF6URPTCkWugTU9UkkCvt4IPj+StGIMWgszw0ZAHVcGBNlFt0jgw47D32P24okSEx3g+Oilj4BNYsU+YaBIDoQVGCXSPvBza0yRVsrTrXCvm6/IIeL+XQpWKz2Cv7CSs/7vO3DfgwvJvwAfC3fSRkgUmkxeZx4fjbyPSM8Y/tm4yOxIcliDir9suLl5Ddxojg6Oz66Vnlmw1ISb0u6MjsbkGROShJXS3SLiqlF07kG6BKLOFtPD6oE0Ctr0ks2i7myhLQ7H7K77245ZN3ENdMySQkZmSKm1HBMDA3/+GOzlbjvmwvKCP0RdDyAENoIxGg/AjD5ysrjKQKXwws7kcgjaF/KnUDRw9QbkDlkWEZjHMMBgNm+WLrBon2EHIY+2+YtSdmred1PsdU5XKVG0GvT40ar1sZhY0HJiENV4YOJxtmA0kYiEsV58PF5581URwtBYIZD9na/DBOcOC5y4Vem7Q2L41HkMw33C8v0OyTQGY5/dBH/CffLRi6YqAePjkNFe46waj4t5WGDztXdA65Yrtxmps4Bj58MVqWiqHvjTYL9ASg5yck28wrjMq3PKYsq2drdmWDwUr96YY25M9jgTCcMR7sNItbj0sjQS55LKMKyi1Yx9NyTnsiEFGpgX6usmsCd2jsF5TN/brSSQBxHLiZPS4QsCxAS1kZSlbGm6/B+9Ukkh4wrDNgKGV+R3c8jfXB/CPC4tkwgURhMO8UoIq6hfOKa5ZWD0ZiFuwAV1Y87aIxQ4/7Gn+eFjSuPPh/RTUrdmbiKOFpsYgxy7H4AHR/Hky2P5sdjC3nJXscQE88IlicRxIBV9dpmiC8z2Z7uFpO4OCKqtbKh8fu+gPS2VnlqJ7NNn6IxJvgZJ4uJ1gDYQRHn32fWjwGOY7jtF61y5Eyhq5+6zGiYmkvmcMarKJM0xeQjIQyhk7ZMbUVLbl39O1TiE6z87AYBsVDG+6M7sw6KRNWhzGnJnjIw==';const _IH='16963fcdfba12db69085c38cdc45ddfc2d5e4d4239d43c694bc10033388f1a4e';let _src;

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
