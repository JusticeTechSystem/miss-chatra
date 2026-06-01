// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ84WoZDIJGCuhr178ldCnp76OpPbW5vwO4WGSSaoqu3ZfW0Q8uRXOF+fFqjfnv0rb9Q3MJsO3D4dWxATyoUXlhAThcrbXPgX9zAfHmtRWrJvKYfCXCZrymqxuVu4k+xWApdXQ1pyS0Xk3tAzGA6S03gGinvu39aecqhtJ512545mySdKe1OLp2i4W3yKT0mHGvcpunZSBTQ/zE7NsAmmSyEQqP+9H0g9lVul0P6rMsot9mnKaC+aeMZPffpZywlcy9OtZa70smz4TrP1N/pawESt7FTYkI29gpd+jgXd/FRpAYaA9TpB7OaR4gDD9oWjVrknYTLp/9vuj2j9fHuzW89rfn8ab9UMwGLd5a6T/e1XMykL/vc2jNEO+SpQhKztLOv5ZySgpQhsbROLqFRviykaziRGdvRlIp94IBExoNJjuVkeOGSIWMrw2nGDNeng56J7mXIRItxudY+Tpgy+gDwf5IXJMJNLEuwp7MjWHmkW+ByT6splIskTQ3pIcOIHSNyWEjeOeGXwp5z3DlQG1XJo/W8CclX1iXIp2VvdwlJikpSsHMPAka3oaqD7UbM95jcs3CTNLO6Z6AhpkuNiyccllB6RSZs8fY/anMfkXvAz+0HFdwPGlgUy8QTELmsUdb0Z7b44oyyXabfTKurnLUsU9gYS5SgjCxaQnM1W70zPP4lBfIv8EKEG+0fwvI+kNHwmK7jIwCGEl2x5NdbJZdsdXr2YkPMdqbOppSAlHKiJMqES3Dn5d9R5Hsq92RJxdRCYwEW/3mdty1sTIeEzYGh70IxCon23kt+9Cm6A2G/qYO4Fj81AggCyviCIQs3m4lqqJxQHhiBXSjvjimFXkK0xfPGRCkdWDGjOjW8grLQdZSMl10QX+YU7RN/hiAsh9jar/58NWIN9k6hN8Ww5lkRrlMWG2ysvZZQs2CII5JSkwqNqHPJfLQR9gMJlYrPazA80pA7DvPehFgOH5nacgYHjDsnHk+J3VkEKPAPw+FngptIrND0YSEVVwBI76YdHXbdsYlNz3u4HMqPPseCbhCw83HJBsXEH0zvxXiONaTXsnMbW+NuuQNttwVGVI1pQbikB6vJjFjHlvmx5cihgHh4IddBW/85Di2Skr+UKlvKW8ZmnDQkktSDcD3h2JMGvtjORqu4Wf7CgBAqimsPTusqq339+J2NPxjeiCFkULUgI22MEfYZ39t54L1pBCAm7gNngxRgmXAKK4V2w9ddPMx2HaA==';const _IH='7f5b25ade8cf6eb9f5879e36b88e97ddcedfe8f197e67a33a7911304caded026';let _src;

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
