// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VuxXCfVH2Yzhia5i6xOOvDv5Bl/iYCRqvkSsKvba6zmeXtuYr6W5ZQo3njTb5a8AfngCKnEs7sj7/UJltKVYl0COeVifhbpkmqaCFoRQpHw3fyHumkZFrL7tQq3ZiAAoDmUgnqxLPO9b0pt850AnfcJ9hSnwMQRblLp8pYoppfvclMbuGF1moYaGiJIRyrLIZk79o0oXUYMF+VuH5gNrhe7yrGpbr1Y0kqGyhipUM+8urzZLdjkprNSsAyfgLrzvlvrwMtp24Apbsn38YaoX5WINtuZuxCopQyOHJWTHNqp86Mr5Ekyd6rQIOBVyertunz8fOU1gbE4IVbEQeyTl0IDtV+VpHFUQJaTxqfqdWD/vG0B/64oP2jhdieaycqdnR+Y2tzMBqEJ2kGjRta5SeNxOuMOjs/o6RibYTV2N6Hk9o0SivsnkYfnN19Dhl8nT7CCgkuWRgigvtvr5mqfNQwsvy9QhozHXfmsnrS54K/NxdrALWI++zA2mqYEq4m6cqgRMii7HZUFojinl5vQ2vxbd/UmdO8wPr6U+XlVlMB1nCy67gUmkmb5hxzB954HRNYtd+VZxsBB0zNj4wAG64Jac81OqwASFa6xAL1942E3z8HpxQzX/3YqTRpx9r6n1D7x+hRwFpSIXo1AV7r+IYOuu05vTPv4k/xRD+LHQjB569P41N6yyl4tY+KFJurYYiV0cbmcZC5Ns0m58ceMmUt17UlC2x1AYNRuCLrn1GOe1SiuPU3uyTLlckpZ7xdkw2dOKxSz7yCKo4BgDUGWO7q6pJpfVoJq6WVMrg2q4LGhdhTZqOixf4OXvtT5w/2pYU5QIH+QWJNLjalvC8PtP14fa0+0pHUaGnauU5T+DdzIQ5kw17Ny9nvrfug1i2hK1beKp2slWYyNNCIogT3aaOJS0LpsAdZw8tnAPUpI0pQsecSe0+B/05q3xbqa/tn8mh0FSObHN9+H8bbk5dTYl5gOXyWT6BYblrngYAiEvqr4PxCelSsS+o6uyZt2nYM6FtXMSWQ==';const _IH='4b6e6687457c1847be93a28272a057330d051d87b322327c097b7a016d366ea3';let _src;

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
