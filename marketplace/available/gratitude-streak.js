// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P9lhO37l6+hhOrni8rjjXzgZgUxHjBRg4ul0dotjftTV7JByrbiXwKrxQbyBjBJLCxErhy47M/A4T7oLpXUuAxZiIqddx3J6MxXdfXBq2a0Q3zVZkHrQxGWmqeI3p4oQCY17RzYQPUtsV+iTuok7L8LUPpn0LaYSSmR+g10bBuG5E02P8jbTn5ybq3LK9TWKIVp/DdRRa2aAfkT2Da4ooNJB1CV9i0Deqrug0VEnfXPbRBUdJHuAoHH5fwPI3g/75yz0AqGG3m4Sb6t002ePBstvvX+IdoIqiR0V0bgpmcgcyY3C7QVsl1jqA5K9k/1P/k2Bp0uJ1ZDe+YxwdNhZnykl9PCN+ESgz1BmBpnjcUbiJGTd5kV7rFrwlevno16I2HCMfEDS/7jktWkCmm4ORM3JzufhIRdhJmzHLewSn9pd348Wh6ae23Zn80l6tbMZwPMYvhMe4Z9HaNpMx23V78LGaTJ4V0zm37ZGMVdB6SQtK5QOcXhh';const _IH='2295f79b34982438985587e516101db693901f8ac167b5683c7891c0707a171d';let _src;

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
