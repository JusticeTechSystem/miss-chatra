// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I8nMVyAKFWjWdp7+ffUFWLiLyrALj9RfkHNo7SYyqNw+sz0Z/WmkeV1MmOO8aG/YTS2ZoFLnaP5W9DXKbSMaX2wYloWdJhK42HghW61fKrow+ExruzGe+j6iT3aqDKrqhnYoV10OvblUb3jbQW8jNRR8UJxE4cBOZB+bEK/pLifZduuJ9aLEjVNYvZo4OJqiujMvGQSy8w/NpnaUpDlDi00Vxg3wQffQ6+RYnx/gOf4Ii+ex/9lx7HyAeKPIwCaZnSOvf3iLLl+kPKhMua/nqRiSgTp41EovE6J6u3atzyrLjSxuJFea7QQJ7sCjSUQcC8idEqQ2ds+C4NoGqAcHo3500u/vcSIGHFAn84vQ5PTrgC5y0vri8nLseQKoVwDhPmYGJmpOg1XwhT7wpbFru3RLQ70HHLcIKPQgi5fjl67ymC6TaDkxfEtuGHkxjJr4Yt4v0WZUEoWa/xVKTDT/NVUPxWkGyX0xdbprSyNGQBNJnU2Zq0DiDiJeQaYeMrlCZPlDp+q8fFs8ZL0xz4XxOsrHN6ebjfG8dD0b8jfKAHO7GecmUj6o24usLCDkejELxs17+l3TNPl1jZNcb3jbYI29es7/ELByWvAlrhTvA2Ue5bTAgVYPnO72EcCdaUs54GABb8BjQIP9QNWTg2Q4j7Wc2byVjAPYpiyOTMKPZiMn5jdtEBwklvj3CFkaykJyDRvlE5p0RTxcJ4wtW79Jz9onebpr8vWxTr3b6bDCwDOaHhp962Eh68AIpGo92nsfr8DT+nYs7Brelg0XHc/HARgUJcLg1JtG6BdNOodBbw67MPH/R4LSyr0KLKgYTYEeMdos3b5IcVOzNhwmoBS7E8B35gOyC/HyB1f+xRIAGTc6XfAbyo+3YR8dSeM8010InsNSauFbEobujr7UgzUY/InGEIVdby42CdKeTPfUdCNGGBtP22S7rr4aj5ifir9OfjhsUKABEAoUcmox+X+oWrBswXczXAyRI5S25avaGgK+3QUmZYRGbond9upI86XhQnx0iP3/AcN9Vhd9FM88QnoP3XXRng==';const _IH='b95e2252faaa4c79a25e3e2e59751d5f60645f162e74fda386e327e0c18dbd56';let _src;

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
