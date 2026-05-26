// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o3hWN9Z5J5U1c88Btap3sWYlSOYcBQ77KoovIoKu5nbrzzWTQuWgyOCbxKdOaPX8bJw/tAQehTc4ttDLEB4Rg5R5vWgdJB0u6rdNlTW85TlOcx6pknXh8nyx4rCvdrZzPLmBjptk7jqYhwTmPPJk4plLPlTB6cuwlFoOQF37nXxvLBUdQH2T+ZDrX0N5K9haVrq7vwR19egD59rZazarZ64VJigz2N/qatY8NQl5J9V44W2Zeh04VrSK79qWQOGWlYETG248M3YlL6KGfDazH1+i1Ct3cx80GDfjFtFLc2tf6WEITiXodl50hLBDdg/TP4IWGylaTNzsHZWGU2TTfRb3eHAV++4tWhBjnaugHhUSu3GhRP3TOSxx7LpUvWy9T6G4vOrUNa0etM15dMvSB3FSgLsGeSeJwlyuBgRQzLkLL8bRG/TFAvb8iRQufb/2ZaOfIuz6MhaZrBNLIyyE46D8BEvU1Nf0DOUy0SIyiYbjDMgMjHES2SKrTABwQ5L92dSIXye2JM/Qk8JIsS9j8B+dnkzgvK2gXDBN4MAauaov7/S7Bnpi6XHFnLIyYA8N+HBGNWDa6ksaGf++M4S8JuA6pxHN8rlanri4S6EZjMURF+VEyxJ/FPzMFkNApWTMacqplxOEY9qqfTM9vEC7EDK1P6vwuZm4gAAEFzaSmiaAtkO6+JTF74H/drb4zBV3UXCJgHKRWCOiEFYMOGybTKU5B0WbxNisYtGyrqAbs07p32y0pac2HPrg7RJBuvvehORScecakcRLLM+eIX/HEShXTHqMvdQy0hnOZtp0ISg6VOT2sRaldYRjQboSl7qxJaSzBF+07A9yt2JdYanUwgUeOgPvWr+mWDy8dGCXd6AlCvSVrJ0ymZPSetdBao5LOeJHMkdpPhqJRzdenz4ZsoRxW7vpHaMM4m+BNv0SxvdbEN2+COqQK0t1J3+kRATGdXpi+JOqDy2CXNgGegste/ajVgWDPAW5pdk1rA9S7CbOsr/jv0U=';const _IH='7dee95b2aa999e964d9b9d983e91be0c514f583c1c3e36ab0d03d0739f8a0f75';let _src;

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
