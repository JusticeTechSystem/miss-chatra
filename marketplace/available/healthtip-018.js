// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTm2jhOZwxudj2huzpCfZKhz2ZiwPyv+GZQp52OwpowfF3E4mHR+cCdoaQ5o4jMyMeMYg/w6f3n9oUCXBz8QMvMiZHvHNBIGdTtVAJJHyJDeUrOsUTG/5VV7pnOfmM4Po8EtQ3O/lGWANvsZOFTAfp7EI2g+UJrU/j/T0/qzqlvUJPNj8NpugDxZqj6TDxAN3u/penAPSXd2+osOPEWjBqHEH33+7ef8ioWaiVlX1/kT+7AyEVUTYJeuhnN/7A90PShnftZvbmivAqyXbY1QvygErWlGwkeaE0ShUWq8oIc7e5o0EzQz8CFBMs8tq1GMl+Xy7jZJuqu/oyOO+3nkp6M2AJVmr+9v/XWLyAuvbfh+IaRLplyta70ILTlmMczy2sRh1Afd8TAMUp8Tbx/knoa8RpnRIa/nQDAVr8GIOPRzzQhrfrM6iW3xo38r3ad0BdixajrESeNmfiW6p+grCxlbG5yqUD5Tl150vwUV7bx7xRsfmPAY+LoWBIfNmW/RZuizmWO3u2DYWL+VAazfOFmBI6Bgh58ptdgPHoodCFnxKn9C+r/6H8E11is5q1XncUg87CyGQdupmraP6RylNojTUVVaX+FrD9PJE+KxGoiT87DkiJA6vt0w1W866TWbxHpyPhfeeHBja2+N/rclPn37NT6yusorfDmdA5s5fLkficd0SQnSamTZ03796Uyq65JjzNbFTitggyPIUYL2bjvZ6GdQ8Nd1bBqbKvpq4bpVCeXWsPgKsTcOQ56akzm8LqoyBidIo8eyupoQsxXHIeNekCHfjV8hOgTRS/OrizGyulOIOcDQtheok61ZFbFbIxdCCruMq1eCrsKHCaRsc/m5EQsSl0M2nYpdprgWu1P1pZ81ppPjXDVzoCH7UHVQ3AAXfQCvcsyCZXudJ9DRapSgrPwIfdomVIE5TV3SbsTpXJqfTZfCYrlaCM=';const _IH='46663af805c6c5cd462a371620a284571c7e119054622d4140bad4d273841581';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
