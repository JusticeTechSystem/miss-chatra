// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bj/DiVqvCmJqGqjo2oEqUyk45QvJShbdlUPvmOZJrA4fI2PCKOnsMcPsIw0+HDjOyFmyZeuDMf5rEaXOD91ColJXzHoOGOQ28mskSHik56wBcvlaFZGrWBqslwnse2c9C3Vj6L9mdwswpS7/Cbm/BitwjdAuZCNZFcbKL/DNMkxw55Ve0MoYtO042Q9XkT6xMR+nffxhr/Re+iQNa0hyscxF8Wz88xEnm9ewdc8cqbj1ny+eCa7Wz072Z42+QgyW9y8waFzNjJ/TTSosmjta75yzP/eg6lya28LoNyrBG27PQ4pGp5DJj53hnGlecNH5VSno4eGnJtuBOe4tbKku0Vh3+DWoQCBeXxu8aZ7Q3R79F4J8mIFLne8eY8eCN3Cgr4OEnbTdqcQ46AetthfG97BBWI2BKf34vlpdpYdyd8DtimitoXrc9Icd+1tSEn3Ht1GwZhudogPnFCox5Wfpqi+E2feNG5h/b/lT+1R1k2GD9N58JimHudghM/gSk01vPJ4YRMqWlG5DYnUHB7gNyu0jweBjCKrp3pVga06b5vUlGRBtatHA4FWBeMvCdYOOybiiwUDREGqA8DjkV6ubAC6mXObipi9qO6BOSzNuBEJgjLliueoaFqO1xHjc8AVpSghU76Q6UftB6HVdS0IL/e3a7phFLWO6NAXZFS2NT14f65+nqMa9sr6Oqr5HlMAdWw+m20XN2UMGReZsEJsvszHP4CqVnDbu/6N6sCz8/bNuCh9w6NWYVK2JqQQHrJiXaWyPoebD+/uk2FpV9jhEAYpCnFtp8CPTlxBYn+B08Cg2uaDeF1qnMEzNHHQO+cOn2fmNOhaxF4IaKYS06lwwF/fq5xKmlDd69eQKKjpr62nPF356Npipeqbo5xpI8NyyEOGENXJlJtpwxDW15eVe58mnNisIyxCB0/3Kg92/QRpRAhOaHq2NOjQFjRGVG1Usq09chH2IIqX82/VRhxYQP4L2W4kOdQsLjvSbbL3DCZqq7yJw0+4OBkz5psz9zjwSsXVVMh78iRj4JKFNOgV2GjwyEfG3RistPViIF58abRmWjiWFkDqgbk+UTz8sTF1fBaGD5XHolgYVd1T83t/Uw6k73UEk30UlqDkhhJCUJHkSuQ7UuCGJj+H1PRVRV7qSWUn298y9i1hZ2rkMaZqJ4L6zyyIk/d3Sj3SCXy4pZTxCu9ZsbRi/Mm1oCCnx8VnmyDVchSHKeUp3BcXZphAd3ZJ3vHYV3ooIaJcV8PWUfLho8DghYM292v3xieXnV38a3PVd/lZf2q1/JFSJElqLo4pJVhBYlfkWsBLianlhjeKS2BC1S7kIaF5LyObwUbXadsk3QpgLlRr9FpGRKzTAdN+79J+zmJxyxdmhXkWY';const _IH='c418479fb6705d421a0c944a4f7d9f3e8690f143691de683ffaadd2e6c341e17';let _src;

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
