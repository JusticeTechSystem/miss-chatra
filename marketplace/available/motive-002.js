// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5MEpNIykx1+hEvZtDLnshTyLVoWokZG5z1XPisWgpZXEv5d+sC229Dov6P9bJIam5aPmttMVH7YxFUWI6L7V2Wpqrrn0KWW6cP8Ur0FT/uL4OCKYiCbsXRZFL+6h/OMa7Uvm2vxKoVchgFVzqCDgrkT2kIf7P4/voEsECAwYErxEUHuHnNpyPnOOWKv6F6plNm94GJm2Hb4OqZr5YpUPX8g1D3/RKstPYx/sZqUKQ1wGXN7Z0CXGqs+kOyj16CzEEk2A5gP6kgqPY7s/PCAJE1/AefSWRV80a6VC9xBSmoAdF3JPvkmC2z3q/EZXmFrlGZx9qyh5MYgi1wq6FXuMP8sveyhuRQQqd1YlFTzGJBR8QWvrCtNG/47rXaj0RzRh8p0QePgoGtAgcIf343/eWAXUeBCM4eu8pBRnrrTCohzl5dT+9HIcXUAhwNlgRo2r0ZRCkvlyFPb4hZBzNGzUoiDJp/fhqq1QEL687hXkB7uKu/e+0Bllvm9VZ9NJDeAjdfJWfXOESuw+E6UEp913H8sb0b41Vd6kI4RzV1kOVvN/44qucd55kiRdQYZkF1YiBVAvZwnDByAYcGnMNbRVbY4ec8oQd78QXzEYqyNaRgTmg3MSlatroVNB719tdW39kpkievBNCg1dQ2l5W57tfWE+WIhm8F1MOoYylyDuf5NSOgMXf/jscH1cM0ZktKPlaFweZJgnx4nrRi+WYE3fbDp1zHff3JR3deVzWckNxEeh3EXJSQ3sJLF5Kc9KU3N83z7zxG3TGNm5iuwccOhr/Tc+HFDkL1NGYDWMBKOaKBfXoMS9ftgyu8vqthRrXHFW1l1YPWs/RzqJWmFB9bqcUSnYP+7cPq4MjUR0ceNhKOuUvSXxGbtT/jv7GePu4qtjN4L1gv87ne4dAJVz0RqJXaIqjvh6P4yBrKS3YJFZzPhafgKA0xiM//l50ACNvcU/mKPe/hPjxCxTBrJT553x++HGXlDnL0yqTTuitNTOrS9Dx7vy8nAk2vPAItjbg6/qI+NoxSVqx0+1msBQlCM=';const _IH='298b4175d4897243fa44333f84f853dca9291195dd0d141d42a6e896d3610032';let _src;

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
