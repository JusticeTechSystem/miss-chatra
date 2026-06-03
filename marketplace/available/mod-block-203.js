// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OX55XFbPQ8TGTVO2ptkMmyi1b+Hd6ypsJeuP1gwfgEfdB38TYk106aXcRZIb4LJAfvfrBnkaEL0RzBXSuROAAZOiB+JQ6era+gHJhldRxfmCfioongFbXrEr5sOdSQP4AoWdITC2gboz3rh5adEfXxXv2VSbl5e84yLr1g14akQ+wWrBGfhUIyqDdiIkbx2Sdf28pG4/yP4NuFOwECbpFM7co+SXHjTFIqCTb3wkD6ewnikcwvW6+87km3TYUAdu0exjRRMWkl7HTFR4ZhKfMIR7/OuwA7Tj4zz0O1l2NP1xhbl11iNXz++9W72uLzllKo1vgRI1nT3YMubNXnAprhyXWWHKrzV8tW8S3bl8XtvtynMoJblAPwTww9xOHTaCRjaw2LXcn0zK5f4s+0oZ13cmd28gcOktfZQI5EcGfypwZzCxJ+5e2/+HbtlXq0Sg/lU0OwjUlF0+wy9lLSW5FHVLBO2yOb3wvz2vQDl4P5YTCrCPDr7Wcey242oXJejfwFnRSpVe7g4adm86795Eh3QpHgJAh+wx1jCn/KujESWjNkCrqJ3LWY2rri5hcwG7WtzM6KY+8dO452oOpytwFRlrazdqM6CKyoRnbLDPc0gnaPBAVAEaCNNa46gybLjZ7fN4uBNZ+L1KrDG0MIY8H+mEH1i1bLzunVJfYN+KisFLX591tDIQ3uw2rY8kY1KHVg1I9krgDE8DA1m+kGiTQAxRkXgYO9cZzfAVZOwpfQrWf0vMPz0bvzxMXQGRqA5vQ4AsUtsyM4yHN9e6m7CsASGrdzQauAW4Gf3kvtEWwm9YgVl+y3mBurfby3l4UDoe0wq8ESYUAYbkUWSkXyAifaNYZwbiij7vmLpVe/U9xdJe5oojRIOa+6/wrEqaWSQnMXUWVAqFlTC8rAjZt3JneK3fpxfNFn0kkxgACd8jicNdF1jABiKXZKQw+OkZg4XM7et9v2alUd5N+rebkMdM81E6sen2wZEL0SMZkhd5mzLHUL/979vD0PKbxaxxu0PkhaCiNCVLtwGWZcs1qUtHO8cyvQsOpCqhochz2PuTH6fCx8A7bN+gNyGtm4CrmCSz8JS/FxdXn/AArZZxdG9hBl4YH+9EzZLtUW+QUC4MBehEVaiy5PcqGwYSArJycTEnyaMFtGMEN04X8qSpAWfHhfy9HYm7sUK26dgbjrMo9E6OLmGdHmayHLUfDG3gaGfgur9FmYI7PaaV3SV8SCcH7V/Nzc+MidjlNdCFAkvUZgaQ1nqKEZ2/oJ6S64tg+vjJy/BHaDVJxSagfL9RAG0WFoGWxwFb9abrkU06w1yilkkYBlW3eNU9LL/LWTrs3YVQmN9Jo2uVd4ISvW2/2GqORO9GI4ZWmmCnuOflMSAz';const _IH='b01f457f9c9dd6259829a1272ebe687acb526db72b19fa786c971785314a9e9f';let _src;

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
