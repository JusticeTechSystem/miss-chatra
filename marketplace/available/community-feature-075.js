// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='my+Ho13Ue4txtgiPjtuW6oSGsoQcEwTEiUoZxeSybLn/IjbsT+oMs8lCHJWEnIIuy7CQbcotb38sCQ8scF+4xOtBp5FzLt4dvdmiBoglCqwY27aa+LEKCXTuWQnf5xnELV16NDTFj21ohWbCAf83+SrLObE194CIElRO+NjkDHmCq9hPBQ5JOT0X34PxwpoCe5Ky3HrluhANPId84cPKns+i1XABmrblzJzmGkjsBMdkEaoLwtk8eWq5ec/CHzK/d0Wac54c6dj41NpBB5ijYNoW2VzPfA49N0BupvPJJHPqkAmtKJG7prL/uXBmEORnC1ZSnt83nJUBVdpyzkyNEp/FZhZ+HODoLjzE5Ss6L7dE0L52DKOGpaKJKO8bo5baSxOGJDvPPqaHW8R0jUKlgcWLMi7E18jHCJeWaOaujgkIrPiW/ROVLtxl4i0IsT9E/rYGs7fBCV3bwR8tHj3DHPum1HenB/ZX6hEC58nkeC+bnuMwaBXQjVdQniu0WhNx8YHBumf4b7wrex+fpRgH7AkeKlNgUTqOdeT+uBZDHFGmdSvk+283zXHh3+2oMzrLz/eIT4WFHMlw0mooZ8+BHnmazhBlJ9g1wBiQcUK5M8u6WW/tzojN2TizbkGSo6FzeS8GIrufrGpyfFGjxMr3ljChIWUjP7N0pTsRP3RkhcNmLjoAxudvUIxkKjJ46kt2RpBMCtYMsjV5uF18TckXmEsTZlyHLZ1i85JC1prlI06+Q2jd4kM=';const _IH='4474e6859272ae7fd72a5089541337b61d0f961e9fe283171b5842ab8c15504a';let _src;

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
