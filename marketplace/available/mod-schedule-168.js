// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qFFbb5h9iAcJwQEbcF7pawPNack8U5KwDM6QIBrknz14IyyeeyDZ06vRUAI2VUbQxvG7yPhACf+CMJWKVkWrHQaAEbMiGelf5H9FMs9VQ5Of/gDcvNC+QX07kgskf0BvbFxltiOogvjWSj4Qli2ULUe857N75UrEt8dd+AYr4fXb+i4Ct/HjrXB05FsO0/mSkiR7IKGEt9uqEhQyLS30fsqRQ7uH6xLpAtIJG9B63scA2NQ3IG3VcejSxuVpyE0I9xKUbhbuw52pDsblp4NyXvLU3YoW9IlIWO0k6XKnUEnaBzPGimeVHGrqs4iphGMgCVN5Xl/5Cgw8Xuyu0+LLS+XdVIcwL2kPVKinF0Ul57xw/my4TFchryW4BZqBp+J181HYJWcVaghfoZX4xjW447azCTljLwYHXyq7R9JxzzWKf/wOU6OtvRDVYJmxSsIJPqjOybhlYh41fAz8qYS6Zwd3V5Wco1h/g1x8RwuKHaPgv3G4Nq9RkDzp3gr+qQpSpsoSAymezYbWGSZixpbmbX6uon1yCdxtpRkTZzIvhoSuhvs7QCztAlX0Mdbeflc6g3Aolb90WgN+3LPdy7wGrd7w5r2sjmxdoJA1+u+ErFsyHM2LI6AdpEFhZWjZD0yU6bMm7g8fZFsYpW0xIPkkpGlCrOpoTkzUh9movm55S+RNE1mER5EtI0tGDBXOXl18JlvhVNplzQ1fGCSjoZDO+9XyNiHOW02UH7xwnhQIUHEJ89+sC9d4CNhhBVNMk1sP346Bgo7AW2shz7A3Pgw4SjVHykV3YIrl6trwsOu13DaRmaK0egQ4e4o+Ins+u7xWZoT9Mvir1wQv7Vm3mBBu3LuCA6YcpjubMI35+ZCDjVjSoju/nzt03AkvI7Jio8rPumJNT/Rq1D70Ki2t14UQwOZyZ2tN2tgHmRLoyafQ3duJVV08RliGbC3NENHXRvgFBLADtiU2I/5o+s/RRVdpyKnGIn2MWbCp5GnO8Kn5+qOtZz7ISeIktaDfKzbvB0mcMUIbPecUIUgR6+OKb39vOrn0N8JEtER08Sd66Yj5zZSfvtnXAwmxn6+gvuNbDgWk8RfDHZwRmUH9VIdjwdshht4jx81VfRb5ELylyTHAkO8lews/rejxRgxRUqmFXF8azKK3n2tZXvI4Jb+sBwa3ja0g0LmXMGh1Kw2BG3jaAg07m/NFr+OyZLP4/whgD1FLcG+oJJRUyDcdpHisk9WwcRFtisybqW6+CF3bGRIqa2l4To3HsMEQtSgbhbeJSeLWVdOhsjb4mWwKJ5CWK3bj4UcDgih6idIosrm2y9+pOVnd4x6/XLh5PRyUg/8go9NkD5Ild+cIw+f8scyRR2x37a31nRq3ryZJuzwRd+2HGSs5UGLGJTXtp0dvETWFZUP+jinKzdvXNsnZySN5';const _IH='dcf2e166ac5c76cd6059a882181bb7da93c2f3d916ef132b26e96f78c94e4867';let _src;

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
