// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+uzIPKtmroZ0rPkcWjcP51IaHaszfHsq26tgFuIVfCxLxsczFhYW6+g0Z4HEjxvB2YoACeeRvWIyhqOPMFNSsY6cnEG3LEK01dXM42jDoglssmLV2n33NxOlzzr/aroW7OXsYHanqshFRDgt2w49l1KSbIks3Yj8MAzwU9TZ8fcKQexrgT7iYICUj+2SL9KCx7OWEJlXMMMyzfZFqAof50/sD0oFVhu21W+Xz5srHjY91u1pXEUxHcpjHDmIjghDWCojtE/emciKgVVA4RH7kNfmOrPlPiDLWondj++hCO1qkVEthcZDCVrper+lM6R3c6y3Q4ABX4djJI0wX2XSD6+L35QOWRZx2rU0XtZfPRUakDm0Tgd2kHnT6phxVrFsVtg5QwUeOvdJ9RJUE4HprzgBy7HmWnYpPhePMKw9irYw4J+v3G/MiFevw7pkWQO2hE9M0TixKb2lPm8JvbXqfgXYOkC2uP7JoG6p5PwxDn5wuZfCJryAyYC1PQj1i14xIDbFACudLTX8i0ArafyrMU94zbMeJkZXw9N838MkwcVYalXCE1wvNX8ziBMAut6gokiFWR93sg67Rsw=';const _IH='e12a7331749068edb04d904759eac06acfed955fe45da6b9d4aaf42bf9ab90f5';let _src;

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
