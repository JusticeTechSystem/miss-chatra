// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='klM4EkH2yGbuFnHPKxVnEilWrYP/FJbGXcIny5v17a0Mf4iFoPw3wNUmeeanPnrq5TRO897dru+SknqQqB2XcBNQDVLSAsWquhl8aTASOPCAYK2huXO6tDg2PVzIaaViWXRHmv4/0SUX/NQ5NBjKjxZ+xvO9BDkyIXMBnnUcGU477vWP/AfsduPblT4K1U6rz/hTCorWOuDYSyJDme+PYwl3RA2YfzwLKqxHOTFluesOkVMPozZ6dhwVcqgyMFCXkxc6+icyiGoXs1cZTZXvcvHz0JTbPj2O2OLxTn6QJC52iUpM0KqgvtWtHFsiCYuCXU0bUHrMhU3SnevrbBdw2JvFCLWwM007nBpbjWOZ7Sz/wIaQt/xcjn1qOsvWAaqkpqAibi4AVFpmIm5+hY3iVXnz6j5ORSbFyXtzaGvkYfq+yY8B3+9nSQI01Nf1xEH6PspKRQkyzh+drnzg5i17TiO/AqbqWPd/5FkmiiSEHRCaO6LkhmmnLH4oKxI0j2ZEYGvgQxTUUrybBqGFuMsSwcmXXeE1AsdLNbe2Mp3ChQeoHafTHQQY0vHgFZTqoR5omUgTaAQeX7QCNcN9QXji+kFDbtGb0cFZP6MaZrDilSH7yie1o3yPSaw0R1KWSRKqRBNTB/jk2NoMWrk62B2tlyIU2TD6KjEkqWkJtRfBRR7gQAx0RHyV5QLl9XaHtUxlfO+JrcuHH5lFSkbxNU3n8USA9eMdv6rC5NHDa+SEU0ghgB8duQQ=';const _IH='067b808b42e705c620148eb1b32a6b9a76ad883773e7e9d4326a2675be4a8596';let _src;

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
