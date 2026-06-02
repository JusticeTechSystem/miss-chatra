// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9ITFh4iaTR2zQWbJiUCbtodyNc8MTByGfH2V/1WrukXCJby+Ys3nLogVJXgepaek/pFmAVyT6hEUNbNxEph4IsQSwTcpSv7JbcW8gyGhwRvLBgkV6AggUUGAh3nkn3s834m4qBfNoi2Nj54vWvcT2KWhLiAanaQwa/MTW3xzeqywS89YU9j91Zp8tAZutTHgprbWvPxVu6ZIa6n+f5CeLdzlNtiwMsHyteSqHXEwHWgySEyQ9XRXUsaoS6YRyjlqf6vRck6fqTiOWdNzIytMOeLDsN6cd+3gYGP4ee2+L4ZsXvC+XZZKV/T8jV6UIr8dsvucevEYsPIqYjiJVm85BlS3Qut1CMnfD0fYQ4hVoove5WGoHrMekMScisXx+enP+mVtpv6xUQzEp6VctvEUiu8A/d4EGXJGMynETnnD6eXO1FkPugRKyr2bthjEG84Uf2St/3pNrxsa0MpB/Qwuz7wNN1nmSOc6vrwDNraXT4Rb5RuRI4eoh3gXOnTuo3P00muaLDoJIBnopOdFDkiErkcMOPe8ZwtoQILzaa/rkREWVD8z+WQ7o2bDiuyTVeJ6Dj0pM4dZBCR0dlgEqeyLlTFOTZQbuHFuZqnMiSgSA419';const _IH='00c6878c3ca3842fd7296b5ab56dd34a6a063492d790888deaf443306c353247';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
