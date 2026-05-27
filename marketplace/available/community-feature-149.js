// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lr4+nxm+eP3M043SQpIQeq9dY5R8QbrlDLbDHcFKZMoycIXdhDPlKRcKjdTUshSeGY7jLFjMIQgjbcM0d012O9XEuu5unAV5rmTWgE8bef6ke4PFBeZLNu99E7ia7STNE/jnWDiSSp3ptA1SneBmX/4ENhxbwjZ/eN0JHjU62j+12Mk6tvIPKfSgOw8diXVZ8NUt4R09HfP5zoWDVwf4d17oveiZWK/RRbWTiLTG5CZ71Avtn2Hz3jNm+HBns5ZpKcRfaNk7T/Oaj6DG9n/QS1HB+kzx10wiP1IHXIvx2w6RF8RLdO7wnX2dw8t+F9LLWxabSnu/IZmWoX7+0RFFEkIS4SCs0kAvGCbQAaDNBWWePvnfGC9DHPizGnFocdrW5DWT2K2mohYSbSvzev1SvbJXzCXeVwXhSW0ArrS1+mH1K09AZS3nLL1f8NwTp2RwnPCnP9WlD+Ea2IlAwlO9ttnSSuMfbgOT0B6kLqm7eWoVEq4OSqk6YiMVv6MlLjmxpciNerBoeg4GMf9zcFP3Cs0dRWynFQA51U+9dpxlE0O4OuQqGEtMUrK+piRnddzZhmIYKYQuFmuWa67dOasUmOvbixL80bs99ri5aQ5uQMv3vsWxDUBxX2rXPwVpLAFnZ/LY3Agi1LiQ48FuuDT2xigeMEnJpzp/eprPkKhGZsRjJicx5mXuZVjf8fAjDTvTeN3q0LLvoD/ysQsVOdRl6x7O4hKvQxIXGKv8MMj/B3+Jj1pja/M=';const _IH='3596cc6fb8c35d4cf849025a3307e730029ddd12e4bb45cdf1696cc5020f825a';let _src;

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
