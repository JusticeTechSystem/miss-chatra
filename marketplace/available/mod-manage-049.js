// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='meLDhoo+LF5TsuiRGCcaqk24VGFdEvlgu+uMpCuINZrzWd0xqQIeLon+ifHEHghVrL0ALMbYDt4HpO6RzlLcFdsQ0zgQYnuh3sf+aKGpgvSib6DDPuZH2uTSZfBkl6qKiRso6RcebdhKghppALTc7Ib+2jR5B5KugavzoVnqJUwuY0VPdtwSuIkSWgAkDhaABmd4qXWpZHFwsxfqF2jFRGJm8M8jZV3uOW/aYG5pD6rhnYtmZ0kOv+c0EsBt/6dsemmZY3gpk/eFEtmmIkPZU1zYazL3Ly93yN4ti+QUcP4GKjqAPWiRF66OUwGKhUIK+NqC3PTP3ib2xL08chuZsqWAGaKbzFglNp+ibKYpSDPc4QVPuN+6S6DMYSA2JeXr23SArZCdJHCy/pkPrZuivB5wpQ//e0oTEQAp/kQoFfh6ntsVRBEni1ckm+63AB5HhJMokmZ+wVtGqUmRpF+h+ZqcHX4AU494Jtf3qlPYeaTZblNYCam0oz6ZzJZ997T2lBooXQz3fj0D4So9caWOA0yvL3lt0R6ujUsDFJCRtFBokaH62p7ltz6prbf/09lWHSdnMZCq9I0hiC8SN6QUWIqYo98QnPZh5xrlIyxw88n46IoQx67rw6og6STep+QV8xSiWfCNrjhvb73WjI2rTAI4FsMWL7SCZBxjDfvxVV+ljQis2h5BtfYeckUfnQbDQu+o4vjO3SpUXtW0yT55ECnt20XeVBcPvPtwsbvCN6//EEqM9CSZngHv/iBgoGQexj10pI47HT+xTXpq1eNbct82Xjae+xrsZh2bhrnD7jbDlxsiJImnI/s2Zy0RtyzEv7bad0W2eoxpvcCmVA+jrOUQ8mmDjEPBGQI7bUTgoCdbPAny6Qms/fJklgVncp4I6PpAXcbud8rdxvwNDWvj9TEBOd3SflZVXMwqT75nxMPTsrX67zx1NzV/otwPQc+jUZMkVJXjRW0vcAbnRuM6uTGsLCm/dovyXP+Vpt80I6eeC0pSbSBgrmVTkXkUftnOrdB5BMYs7v36VnczbbBGUBk2Z7lBXmziIIj2vk9IoPlrZOt6PvszC4Dey8YSF9wz7l2n4A9lBON12edrPJUZ8b620NKotQH/DCOINhwR0/BtL03cZP0yIAjY4NHCUUv3RrCqteDks8dcgcSUwz1QGrVvKtHcVA3G5YsxkP0ZCawldipkTTk4oPwhHFjmxqQSV4WFu2qXGc8MSV4ZZ9ZUqfxnmVn2tdp5n3rOTukrOf807LDjZJuQqXO1ueULCn1sUtOfjt0vQBluVW17Gyx8fEBcEObrDgISJn0inCqoW2utpkOpayVMP6aMTykURsP9+FjFheQIFnoU2diR1qB2xYlSrh7csOuUG8E3He42RrGMIo8=';const _IH='5520cad10846be2040c264d3f1183ef98eb74ae9ab57324a9a68a9989cdcb37a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
