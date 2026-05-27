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
  const _b64='Ku6UaXMwjcgRqKLVmFj7x8VHaicfxO3dFZpcu+T0DtNhqXaQk0OgWv6AMizZyJh0G9H+neohAZC6mA3Sb8SK6uUrKGzMgMMAf+2MJoHnhRTpwpbasFJx1SCqsorHB8aP/EIlu1LjGduxtVI/mkEs4Ellvg3DplZM9RiFGKBXjahrNw10qMv8w4TbIs2HqJSCVab8gAYfRl6zDrYtlXbdK5nfisGCzB948KfniFRWOUeAhoXMIOzOStg/YsTps/3l6eFN22FH0LfahFig2M2fHRWfsOtjAbkk9Jx/RB5ClAk2wPNk4EJ7RNsQQlwyFPHsMAHqEIqqUDcdpsvXKaXIsVduiaOR1JTF0aoxECvd4yQYd5Smrb6UD1KfotvppHyjSdanOvr2OTGXmTOvkugXC+KHYicvU0jsnjKKJ0pkki0VMuVksIGvZWECNg61EaClepvS92/o5utMCOBRx4jqazxXRak55CVnFkAupjUf8++bSBA6O51gUDmmK4dAofTUpQb/iU2OY7dwqb8ApQ2ufbSPhst/0IqUuyIi/AsdvR1vhsKzIXKavXDxXjX9PWoRqYk7vTFVlAxVhz3wXB++xcz3ymdY79iEG/dEzOg2qNoz+BmthIjCEXJQm/ErNlsZAnoSIrI9sPTZ/36wf73LsyiO2SV3TgFhk7uyOIV9zuR/ZuFmynOj4UqzLGaakTwOfBHviVBx+6Qb3L0/jBGMNl49b0m3H3Cr/VjNUwsKeA==';const _IH='1951a689a9fc59e4e0988f4169961350836dc18dc27dc9c526c1dbe89391387a';let _src;

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
