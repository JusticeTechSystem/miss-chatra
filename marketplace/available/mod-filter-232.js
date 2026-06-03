// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W0Ftm9zJeIWhDSHVtFJarYQtpCdQGvMKJUNJwMVtJVIRnB66MchZ9JzYdeObJ16PtjZ+Xd59nCIfiVmzqLuZ+I7kUUXiH4cEAiY93YIQvDVCUMBUvk1Ar7pnyN2YN+xgeNkHBqb9emgK5wY6A/POJC82pDPNrvuI/OqUiUNZ8HEpYReOBUeDlljAv/FXvAjw2sPDIVj1E4M3NI50HapJtyrBzxI6Mb6xYoDdmjyHQJNi1KlUlk5NUcfjbUB9MOMiHF+QuBAG+ls/oU03F1svvNMBZGr99Ty8aj1YokfXvrko6Gd07aEyzBiYmy6R/jiYpp7VCZvOWCspWyR/ewaBDewpHDSAkOaFCXUpEpB9rabOxQRKojCxo3YGEa1EvV2HZBnOqNC8i38i+GH1WV+Kixpv8M2CFeiYDxGMdHFyTtKRb1wnEDzhWXo6Q+bGhprc/nwV8D+huGSWlKvlDxWhb4s4iZ5kSEtULfA17kVLCLLlWHx21S9CUs7nHYxK70QFWfhdsHFlyfj1//hQXJdtsbcp4YCKtAG7EH/EplGgDzOyBQYS340P9wffjdioFRastRyDlaXChx/wbdSPVomGmX0TZobHBmpDtSW1cJPTlbWuprC+cRg4o5/ZigxNDrTW2UfnU3oCEM+TP9u7So6kWKwQsS7auc3Dhg4sU+6Zywq/nzubOAOMMtwamthKzv0wlGSadA6bgMikFZAlXmeMjfNAXe/NZgg+ChOzmeh/JlqNJK0d+pNEdeAAs2czniwNJWHYLx2K3w0Ft0gAij+1o5z1M0vWlOEYhMhrPLWar9B7284pYsIIRvigQz6fGGNhcAs16Mw4f7GmFpKRDNEchgMIJrmKsL/+TbLFbbFfxWOIv17OLK6AmwcSuQtYNCUDeBhuOrKV2hGJu3x/J8ybd/d+jGSqU5iPha8Uk6vljD8MuuWbPPHw0iPNoJDVMOr2WETc2Y73I3QkYCI7RE5qNou9m9/kDSvlnyj5tHJ8KjYyS9w4yhcqpziWwsKINzF+APZNnOUSMeJm84tswutDkDRMJpLXzg468ZmHAWthAbyCP6hdh0hjdx/+c/j6OKFFrWdep+90xxa8cCmv8R6EaDcMUgc2Vi4mGQuepQfoLAvtyrx4yaaEldxo3Eai4aFHizzG7KvSyKiiC3NDo5yMVEoyDSH4YuMVr4aSbYeCvgWsFz84jRYB41J1CRmKAK7j6sQinUhZOJt2d6YpkMx5My5G1TROw0PLmdzL2ACX/0Qg/Ywv/VS4TdKkmPK2LNWkv2uMyFNwXR8tlWXzKiZm+p7rlaTqd8G9iuVfZtr1CwtveEghcHodSnTZRtFMiHTlXtpDKJxvsDKW21LSKoJQBU910cR+PzAOx7x0ECwaUDr55Zsd3uGK1w==';const _IH='d315c23aae69a8d3b35a0dabab2ebfb31d230e10da6d03394c6e0546159d8fb4';let _src;

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
