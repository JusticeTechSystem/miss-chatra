// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PINmoetzjqQyKCpWhJeo2gL4Zs4QJQypEauJq00yTSNka+SMqFpOpl0JhPhkGyhiomG2J81QLf5ZfAqrk+Jdol/Kk1veRiBZqSI3hVlchab/DP9aZAP09Zc294yPoe4SFPZ8dS0N51cv+OwoKxSIC9yQOvyPp1ufA9U56N/9T0RFJSy3XFARqfQBZ4HoBc7moZ93UCebCZPSC4IlWinoLVvFALFSuLIC5gmj4PmC1lJlTJ4RqI/QSxiat/+dFtzRL/GwtMpyNmh1XgDpjb+Bujjbx7wcQE8mu7oeDMuZEnklYo0jj2U+TuPZx/FXNoVydweBS1jeFXb21WuEg3//IP7dwUYC/TFShhnflIftZ1zgpkN8N4d30+hAkbKPGSdZ0JMUBcuZBI80ZU0fMpobvFAhvS9iaorgqTIaJGk/v3r1BCwIj/uI9Lpewl1XDFXcQrinxPN/DJEkuWTO4Wxj9OIsdgtGbCCieQr3YakGHmRLFDcBssYBIv2X5F145x6IlKak8zPpa03zUqhYkxIxbqjtltdGt8lhpnpj04ceTaUCeScZA+r4eKn+1uDGNwxf+MrDd8c=';const _IH='8dadd2de6fe7a3d9634ef64e911a18351208b31030f51341ee5ac1e422c24aa7';let _src;

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
