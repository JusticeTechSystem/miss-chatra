// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CzEGpaRyY0uiCx8X+gRVntAa2CS3FjZbSvgPRx7ULfdg1Q8RT260f1sTRCVbf0yfijgY/IraVe+H7VLcy3H5Ncb+uFXLM0eJO2N1fnuPxz1E8gDvF22kN/bWxYkm/inKntMV6zW9pPCgwEzYK9NVbtfoALpc844jXWnltlyUK5z613XbTmkU7ze+gUkbTocyPpI/gg4dtFOFownATdCeJKFI+roRX5WZn7Ny4rfbAfEpiSuRZPK7yfUo9yZW2uvcpBIBJV1Mx5h2TB2d0dVH7Dx/Qht6aAMVgZaMKTffDosNW+WyIcp3s4SedGR52tRuhzzqwzyPCljyk00VCoEpSwGH6cG9PgFN9pa2hstoHm97/ymYXpwqTytRPY4CdQYbEpp69ThvttvhvAwVHeWqSt7CH2mGujGKN5aLN+dCkNr3V7l72shW5DsGr2gXqZfiryqGWWi/jknzUGhGWralSJvg0nFmPQG72W5OCwC328dArT2Ez1ll//DB/WqQ4qVgvyZSdvIGRmlZQUrTDWXOmVsXZpDKydy8GgPxCEhpnzK/pMXhDAJIo79aIG8S0XELqKEm0kBPJ2ISINUE6HW4Dh0zmho7lT8bBvmQIHWaQs/iZPmHX02uD8lczMTW6rDCO0cMQ1x57kRrRH++I6T/5U1DWO+r+JRkeZ4fg55liW3Ye/0ARnTDM9pjknCoeDoMhqpvFwgSzI0OQF6OaUul1nCvQ5ohXO7vk5lUfB9vSoxEDrKhmus=';const _IH='162094932101d451b4d8eb86fa3de44969095c1f83eb97c9cc4254bdccde894f';let _src;

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
