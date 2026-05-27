// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S+rWvzKHWT+3Ek15liPVErysX4Kc89tHdO2cMa+wZIAhWrbIAHAldzldMw2UxNIrlTxIhcASsI3EOsybbmETpm4k6YPxZveMfxO6AL4BvXTwR0077hhJ0j8/cUXcdxBpmJXFquT0DJuMIMNaZRsXlplpTk08nIobk4GjsFgZl8gId6pY/qb/70OsZKSSLUetmwHtFzAO84ij5UiN4dBDPuWybXT5eX8lH7ZwHWwzqtQMB0YSAJ8+e3IUq05iE01Sso+hd1IO+G21ZR0NVcfMQcahV+XSaxINtqgYNGINxMSrQ5ojc1wVxtBe53H8fO6m3ER6/6YlK9Z4mEl9w7KO6sRQ/6AcxkERoJPB4dCf14js4Yc/QIJRDIHg1y0uON5Awu3jgRga+uAGmRd2a0MmMZGRN+xKgMRmnTkRdzoLp9A/mmXGmtAkNXPMzKuy0uueyNOsTQFE37A/vSAGs5GtDgQg7/dJHuh8oa5YHLUWN1qYoqApRpx3rJOgUeIrSb20tMmq1DK2eUzm+WaAMx7aBm69i84yHX0I2s2tUdYU2Qj6ZJwhV7BrTT34mxxhMNk1LhqjXv4ZYVjhoXvBVJaiq01wWuKxHYNkzi446ofDGS4/3HUyEJ+wR8OjNgLsNLdEOwUt4pTQW2m7diH/8kOuWxXrYkziDUh0PKLTk0w/6U4C6qABT0hyfAZYOBGnILyswsCCohcB9Jyyid3AI+qcJnfMEqZuKoUx9pYcNRnk895/2QA=';const _IH='870d1b99acbde030f1ba43343d1cfd4368f34800d40cda4a21e5bd6d28cdf949';let _src;

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
