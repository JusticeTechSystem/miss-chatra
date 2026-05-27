// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YYY0+SfWhB1PMWZfRcsT2bXIpcN8is1vdy7JAa+Aw0+jSBLjcs+9xkqGCsbKaW+dN6Jgk2cX4TbH85kavFjWRDZamJL9kT8JOLJ2yzibsDFhaXoao2hYu/CS2CvYNm3Zw2qN/5gH5HuRS+dgJ6iCXFKqhZTGR0OUjjeOTYohTaLncpKtCoVMyqOQeUsadxUIGX8CidyrNtDEcZLns4TsQMbrmf/SIGguLTM3C8P1wPNDq/FuJkrOQV8ZD9gu0BnDoqaO3hE2FOg930BVCFvwvOKsA9IoJYSdHQxZJsC1M3nRgI+BwPaSV9AFSLVQL57bGfdo8cA9UQJsFoSMSDfmuyrf+4eBId1kGrz84DPDYXR3nrLzVCY4EjX0Du/V6g+UcXRSmRapOnt0EIkGVeADYB4TWeBYi509rhmAjdmlqtgd3JT1c73hhTuN9s0MPglzBF92t8hJTf/XugvzQXgB5ZXdU5B/SMw/r3SrIyd08iK2u5fpCMzPpQuvoVwKddT39oUmfudiz3OZSy2sgazfCnyViQYM3lBrNB27AxBMB0wCb62HtZ9NkE7hGctP2kHgLxUYS88pfbCjyNK50UdACdQM8t8+RhZxflF15PFjYhbUlqCt+btAjAvFpmaYs3bbZ3+1sPN3Oqz0fqjAOko6coT0yjG59CoQJXrCbfptHDN4BqU/ufYxtiFxu7rINvDC6gZdwILEtMUy4yA1oOCAK8zUG3BsaHJfg6wSUzUNGGGSGYSqechvlq26sNJrq9EAED1wxTeUeufRZBs5WCRoVlPM+wOMHBzyxi12wbyGWLrUlRvNS7DBgRqRfhRnDKMcUpUBbplA3SV4r2/jmytChcmt/WuantqwvA6xhWnFzhPXOy/Tqg55Uaga6UM63TRs4/AvC3IMFx1b2J8zd49fJgqBwBMcEM012CbbLEHJB3KNU6xzN8TbKKC4xtSDuWss5N6OZX6Y4kpwejCRvx40Xh7en5PcRMmXUmBxaXmym21w0v38IQ6Yuw0bRKMuwFrYvNLHo4z89Lk=';const _IH='c138bc2ca597fb88bddc255bae20f8fb77ef966b3ec5478ef9845ff93cd8a80a';let _src;

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
