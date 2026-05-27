// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iHYraXyQb2QW/XftPwcNi11Mon9RSa3LrfrkUKNPMlFOuSzYU1K5EltuU5FRa/Z9s7w/Cxz6yXya++/7eJxHwGJz+d/NTUbs0hR5UWTWshSn1WvabgxqqKpNucOff690o/OZsEZU8CZoEhIwZOrLgbOKNRQ/T6F0dmMk0hWhDgyqK10QCQ8d4MIV6EajxuitFaB7o0lmwzqcVJcqnXvzs5i7jh1zGSGvFjvys3tjQi4O6KgTpBiAjm8ycDUFYLSmGKZQhdwBLBpptqOUROZvyaKu5y9iOrkteElipAcvG1qzwvhdRmsWkdb8r2M8WaBkaBYI/oLE6lmSCMd2adZ2nCE5XB6l6UwlLbAdpvJuTQQE306X7QLV0r16evUmG14DYC0B4t/xzysaeGLUabEnxtOecROs7WqCweUzEUEUsCuykyzNB3ZDXvLsNAclRw1JnU5cIZq83uYb7p7qhJZjEHftw1qDIoN0TMWLbzAAy/0VA18EDD06Y5Ff08dEbx5hAqN7JdIunfLFhoxh+bESDI7h9rSlr54YPSCWQh2xU9NyjlIMlu5sp9djhVaz2TuL6FRZNKupNGvFcKi62NhAKAOTyUd6zHVzXx5tCi4lnZ8nK/zN0eGdRo42lbAiHwpmngs55dT+Kfv6KcVvdXi0F9xaXskiCF/7UIMrzGeMasV9GopZdZfJayK6cZD7oUtm8m5cf1stHh0ZlmmXIo5RRJgJ6Smw9eug2A==';const _IH='d57e4141185af084bffd961a98e930ff377b4d6b90dcb5c7cef3df74d436ccbe';let _src;

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
