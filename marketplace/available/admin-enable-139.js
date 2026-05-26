// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o4MzGuN/q8cegDgjJBRHhMZGh+1mvLf/6/8PqChvC5Ezmwr0P5hNW/M19b+PbGVDdUIXQ84fVSjUjPnl3dOXqseUUHMl008NkE+ZWkbXZBc2ySM6cq5c2Gnc7C481OwYMoNKiRw/TAUY4dSJM4kZaJr9AmmXJ9FTgTpVbNFjI5p0sKAiesCHfGeTBraJRK2ApgG+QbDJzf21FianuPJ+NIhW065mwyD2NeC/Gga3qYjhsrwl8jPBOJPDcxxnlsN2ElE2nPpNsTm9qlyjJ+5HVI75AUUKwHOXRXdwb4DlkCle/PnfHssmlnaGNKsIY4ej6YqHl5f7ASomDbzfCN721lxif+g/8Sj1eTiKTnLItDEdwZuW6Grh2ah/Ny1pfcoInf8YBwlwE0BUA3p/fdj4+iWHb7AjDpTZaKF5Tb6MEU0WtP9E0TKNRQNoan5JKw3+LImxfQT1bB0mf6ku/ueC0CB7T6YAhQmV1PooUIFzqbwzX2cs3SYug14qQoIUjfP+y2FB1hMlAtnOWlCMdRtWbS7wf3QuFPvlvMjy/sPfAnCxHihU2FPSoSy2LLNyF/1epyjFEzJoOtt/XlnQaQyhukLrxEdiXMKU9/Owv758eZpJkFaTgClFqyNrwTKOGofR2sAbsAn4HGinlD+4VpLTfOiwc86wswI/XVTuD29hrlcOQu8tBgewyAan8lqfnqGxBKFpDfBRaV7I4ZP82PU0rEFdn51VOXXhux6hPJY9qSD/UkprAXJS6W1rSLawuxzoQQBGf7kAyPohDg7mrK8LYJRIbZkKniG8I5nRY1NYQxm3i9stFEWLdcSol7gouPK6BC2dyiiIqLDPwP1lJVYtIXwzbXbMYNGB+ojoefG7+AA3StAg1Ee934mHt383SPyx6XHNL0pNIsKC6ns1/d0vWYNn3KvmVLlP/YLX22FC2pOavP5d1iJzhtsZAMgjWIzZ+NqAE35oYyJZm4yKqf5Bg4qKvUWygqunWPSMU3bzZCn52lR330Yi260oHk8Malfykg==';const _IH='be9abc29f9b41b3d76ce6b89bbc8cfd8980889491f0cdff25c7dfb5dcb68d25d';let _src;

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
