// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T5lh7Jdj//zo7VgfKG8QiOtC3luDIwEfdIbzoM2hUyVaoHEN+fZP5/xHwQ94NHHiY9KK9iPL6kmEJ42oCi5huJiWMtVw4Wk08pPAwVhH7lSvP9aTjCAgCsyiiFOTU4Iv35Kvao13a8Hq3/R6I+5cmBv4m/VHIFydpwYF5zonImesmx07k8ymWITm4Jz2Fcl/SvH5BVyoo2sjKp6sAsrm3wYzSQQL8b9mmSeimKAOuEU4J8Qbp3xbmNTLBpwxArNQsQJLecGNjpLcKA1l5x5dqJqzmz65f8v2LEM9elxDuKIO+JB2PRAy96a3ICxo82UVxbthz+9d92RBJagi59d/nEZ5hUhP8y+iKhlVkRsJmqmZ5C8RxCpgCU98suxp1pKsdFsRht7ozOaVBrI1aj+/v5qiahbq5rB6BOB5VRZR88a5e8WWegLLXNY2apjuHi/QnNz0pRWsLLAPvCRkJFE3lvpxqB7B3TBgXtrKgpAm6MvPJLTz3Io8BHdl7whZDOHTDRNfHAdP9KzbNY7wHTEcIGT8EYuhvsNk90XlJiQIT/Zgo7fs8IXWb0/qClEQg8ErPBmwW5Z5Ia6f8JXGL/2e0g0TFmWCZOdK4VDz0+8yezb5SzG40pVUBBFZXKj9QFmMDcsCuc3NZY1EnGGmizddfM2rRaeyav6KobsNplqxXliRJLTsOGBF24d8XHLCYO7QEqz42guw6oO1Onp7Z9utkD0h6UIYcdV1nGaIXBvSlhqlY5eG1x4mmtgTQXv72AHBRccq7vFoopugB1QfBymOVDlQLQfOR78PJ377KUEZ3WA8sCAA15QKY9jsG1OyRvf7Ef6S83kQ9rLG4KYeLW7hMxQZ0KbE+ei/eF/UOEDvqHAltTHoqtiBJ0HCQC6ODnhpXcQ2yGSt2dxkflbfpK6Jd8Un0woSD3mQt5ZEkEn6sAoEwgaZUeS993c/LAoTICARvHAkHHRIC/IGEtv8gQY/pS5dexkMwu6TwTCiR2EDXuO+KnqBSc1tF/X87RGK8wBKJlBQsDVtz6YTr7ZDiemmsqamNVBdgh+rG4I8ZGTRanQPZtRw7BBF4SPT/E7DVpxOVy+EDUWgCzVFAdTTcdLpvU9On3W4InWTnzAhW/uU+TuriyzF17aL7xp1fUeAxekPfY3p4Svgf4B+3KJ9FxS08+yt5S74LakQoqPUOuvqEarDlPoHZqtegmUjmq9E0TqGz7JuENFGw49eOpm8liJZZJ4OCYG/UF5HDOI8hNiZ8Ww4TqcgiaCPhJRZ2aYb3dI8NvogjF7tynJQawQ3bplRzsSS1CbFNzDv2u6sgs156+odBdk+B38UelQZL1kfGBm3BvrLbSlbpEsyfn1xckgkxMmLdviBOc1Uq9KKIK+G4MtFlYg=';const _IH='4dacd3372591123f08f36acd8ad21f7ad4d72035da8b2b1df62bba8760f5b01a';let _src;

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
