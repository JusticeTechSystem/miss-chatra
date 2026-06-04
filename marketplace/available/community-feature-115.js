// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tFpqqwrVNl6jM/wNuykCTD687o3KkqtAle29w4htKmjTGKalZtlRC+6NnAWDd2HKrd/xxaJ/A6Nrq4MR2Gz8RPMoIlGtap76N+tNQsaB5o68+7IkFzAYkzCLrsubQqqBKCXHr65Jo30q4HpL4GKOiNEBGE3IKJxcIxbW5DdQ1ad2yOHyMBDnimBg37duTqeKOA1Ag+X3n+Uwv2AXu8IvJLDWOHx3HnWPQRUQ50NGuHKjOisPdsGfgVOGCbIxynivlI+j2gPhGVo9z67adZQ5LsyMugCX22RvX+JgNQQOzLd1Sj6BquuoulRPZAkHC0zXb6dt7M/nAIt6CuIqhJcrwCJTlchkd0oJLeGidOtCCPKDux0TssXhGid8841ABDP/CbFFhfIZLaXYAw4hlnWSuL4UZ3v+hoQZ+BPykAXN4HaZKaJcTSEBnN8ne3547aJE3mb8Y0bkff+sU92XAySfW/0p4cwY9H18ilOQmcZpw3DZ3bSbLpeKJAZi3pingjakvXbU093YQqU+kPqh1Ex1ktQI8q4Yplt81o07CIeNUNu52BqAVaz22DFVsVm5uOxr92HJcgBi4QA53qjW7q7Co9aiGrXPonmrKkUFRzVRO2IhkcYI26LW2clzQ0UK6CqPoFrAkG4hXCgd+BTeBteJijy87Ww3q9YqvvvZsw8wbDAa98cCaP/oXIAvyrEgZtaaMtJDmyEVGt5zoYwvxIRtA2VEPrpol5I6QPD6vA2wM07qK7YSkZJX/Ah3';const _IH='25a03980b67af061999c5b0a9ef01bdacdd0a080e73982e4a6de8625e9534b0c';let _src;

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
