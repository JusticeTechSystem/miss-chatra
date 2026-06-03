// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1U7mU0roNhLlkw1/FC/xIE1/AnGedLcDu5ejguSk4CHcPWogJ3x2wTFy2W759uiNz9cnTyrgviQda6+OtdQKrQZh5W94t/KEKi3OE5f1vgppA7cn2iUmJTZfjgtGS8SM1b9zVfNqF1sDLL5uo7ArXoDarWbb1nMjBnm9muQLV7YUhOD/qLqg3KdM90lGNjs6yd5jG024iuHkTwNm+T2z5gJKnXxJdOw1h8nC7vQMIPe4lu8oW1I8h5N3gcosLNhxBXnoOo/R7+9vqT6U5RP54j/lDzUkH74JxfCTIhO1bAXsoPgp6TEQPBHiXFVV/TO5H3xDHApYjfEmh1S0DDjun261hZtpuRyJ3VESsdlLaCj2SaHtPwa1A2iblRVy3d5sWrWsDdXj/GjTCqaEysFYaF/3/k8vNqf4ljNPxtUqigNMnbqEDStVCwiMGEbyHi8SG2SdiR6RwRIH3IsLLQZIQz/7ENnKsiA2BuBUf1q6mpN8XXBJGDUVqKE/Yys3TvbUs/1pM9qwgUnjfmgyBp3b7kmFobhm325LmJqt+wdHFZrlbuKHhJ+DabPxC3NOEtciZaY+Vy6lnJHHFrVQeADOBrSsyAWx6Uc2dDCJ8dabQGbH/O4u4LpVvKk6NA1/3OlPnLXUZe6mb487CKgTz7toEyCrQA8LjqbXJf54/0k9F9Km53iFcvg0Bh6PBXvASQ6JCcRm18t2lxcXuipbhb7A7EVoGgL54AL1s2QMiQ9zE1j5PUrdl3v293gpbuiaRgkIsAyqes1gphtTbLrdxAjJWW+gGzaIjx7JrwgOyRgkNqhdLQeq6f4FdA1Az1SrPm1XGdsmRyyGt5ZIc4sZJjuozTwbyVUeFec5Pl6R6E+jbGxz4xPFdwveV23S0viLPHUnIblB5rWasi8oYaU3qat4vnd7SLf9hDy1Q2QQgvm0DT4LgaGnZ93ykRIEzSTSWHhTF4ndRU+IqLcrg2RypLSE8DbXXwLw+oiFztmd4VeDZbcOEcMptHpMNLKKjH0ipkVNdi47yK0CctK2ywkXIRa4uy5e3FKDVPtTO95mmhYn4mw+LvHSvuH8QtTrGgYEVfj/6ZkKTVOAj+8hYO3STIroPYauvsYIAocw9D213XwZpN36K/ejFuheDcJgo2g9ao5UMp4dKISrlq44Bn3dLGD5z5RW0CmJ7Yb51LqIElczYuLGGbfGPx7mh33f1T8tBGdDME/B8pN5bngG';const _IH='3124c5bae1598ece2b87a5b7469f69b6dbfe87c2ed03de17cdf8764152194140';let _src;

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
