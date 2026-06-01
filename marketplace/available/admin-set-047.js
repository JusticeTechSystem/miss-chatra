// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3DML6ljK4S6W7zDYPULeznaI5hJO1ZUc0UanRzr6qFHzRn4sAh+Ac+QTVJ4eHYrt3U53NmD5rVhFp6J0/dPpa9io8MqA5endNguWxB9PbO1qHTwP1nUDPG4zpLAi8wdg63w9oLjRoG3u4FTzLlBK3ZY1mneBHknYjWDpgz3MG9RPv1YJYzjE8hMP5iZZez6tQ3DHoWSlfoGxxiiGsyEA1qKqIxfjId5J8Ntdrj6z/6wa2pgPPnq92ZhSHniNM3xqG9Sf+KI6DE8IwoPOGqsSV3B6Akb0tzppnvRBy0j5Uiv9nGOZEIldn/Pe+AQGcD97zb+rA3reSsjV/BaMbq1KAFKyQ5GXIMgbL1U81CvrJYHhYfNYzpqarRVOvzAcBKnqmUxB5e9Ve0DZXhylPXOUFidYF2aeERopZ6ajWMlgsyQ2/XklazYF5ftMAjLMTRChjzwmnIpbnfWDYJ89RVI60ElcTa9spoGwvbalu1KHcgtrbP2gHRvokoFkbhhlGn2j+3YHky41V755mUPXA6jcz5Q8dT9ODDnuXR+Ux3OU0AIIfpCE1TkmXaNtOmfaxm5Pfh2ptEHJAX6ucSQYRJJ97C9quj1Wp07GbmWACQSZMuPdutwrhLs+cndInnbG44eJAqPLbCwyNKmjOMCncxdhaVLziovFTbyXYhION5jDK+WVbV3QRvalemuoEkGdv3MMS8CWuGHE4I6Hduo7sgk902+HbRnS+YVVe7pTiE4/smxXn1/Oa/Ajtm25jMlOz0Y4tsNxb4cXT7QbVuhNiVrOXPf4HmDHL+JklKQkZapEklwWNQfkveOXSWuCfuzm+46R0XB8pGTbDCI1z1ZGbsOwgz7IYZK01qMCIb1tG5JlsJei87n9161hrl9IDjmy+ge0VcDsx+FaAFIRowEaC6DrQoXAxIOh+wwUW/GoATjdFfOCsh0lal1RGlshxSC/HEsraOmhbJgOA+aytllzzXcivGWAcX7OHW5sw==';const _IH='3d12aa89a606adafbbdde0565f3a9ebed6b73d711054b2c7c258244123fd1ec0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
