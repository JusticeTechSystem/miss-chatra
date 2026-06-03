// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+RBsxsYZGXV5d8UVYjrcTZnC594KD8ty2vyEJHzMWYwJ0zXaB9w32Jr2KP+I9GBOMkwV97pGUEMw1h6P61iC5y7tvRPgpQgOJML7QIp8e3rGwbrSrx86swAVu7RiDJZA5enFAMwjdnvHy/ueSiiAp9hmpZq3vVqe/wL9Nrjc++n7i3GbdC8YxatN5wGjW4C8AJTGPwKn/BXuZDs5fStIIaK/bzdKKN3mw7n/B5SbxMRB/tT4cd4JrOQKPFagjVkpBkp2vhNlX8N7cKvEBg/vRD8WHNxi4yDztLghUisPzi0nd0KUQT4RhhDzn7+SbGYs8aVSLZet3pIuDKbFgFDMd2JNL1+vr3V9wNbaVSTG+hgQ88tB1EUQ033N4gN3fED4EnAhg60Z8k4yLhGjpw6lxufnV1UnfKOXCaVWhDam4h55o677a/o/l2xCJ1eW/+MEmALLi40DOiYdmVM4tTXJL23bIFIxCBzC3vA3vpLgDh/M5J8UEaen4c4R26yKy1KXF7Mew0cLJbCO8ebsbbf9y3NEYkspPSqQIr4CaACuENWkkFJoFiFft8fRz1Ma6BL07CDXORoHw+e+IKI3LJ4t5wIbnJnBcKyDUxTyGBXQp4vL8UBw6hi4hiR/KfnRrSn4zM2UC8+NsPIvcGploE1dRvMHOnzQa3xCZMqwsy/2pvhwjSW7IFJw9FnMJ9QbnGPDG7ovBU6IVZsMKUN5Zpce1+CxBksqUi0YD/JWsWlaf0FVTJzVmKt/hJHBbEVfBHyJGaZuvL+fHh/5vf8uJY6Hy8GlapiDOGk/azVWwfzViYnBDJOycdAcc5ljbgBfR75ZzG8YckUbu1Z/iq3OLeZ9ms7R9m3cq9RjrrVmbi73h4JzPOO50yeMXqWAeczxiw2QVRAAmou9WWGZcLa27SSptrtd2NXcSaM6kKEwX2IesovnOM7WKsvWNI7qBkBVwenCjJvYTT62SCZge2rV9eY/zmesi+Ptg3t/jg1N/TIctyty7N9pENjTqU1N3qxXsdhCLmoiG8IlxHpKL7QAXvRVL0nUg8wTXNykkOk6QbKuWhRd4OGsg7ahCWh8XEuZ43fELEvshwSx6zI5s6XIPzUeOYDulNP25vEgosIy9fP9i4lxpOCXKM6pv846ssZ84JQkZXHPPOo4g/lBLbnJNpyMaR5iN0x5z2HFW5OqO7kr5PD8fvqjggkb9PzNAdukQ2C9SV66iSXWHSlewPFHVh+My88mkOYWuDxlf5C6S59o/eI3PPYQeAKSv0dMzGAjgUPRM3RFWF8xo4TMz/7sBXmFRFx+hSnEx0GumJLvbMUkViK2ecgXZJUxviOzqN2Wo4WwWtPSeSnagr4QAcHQrggFSDd5ceE=';const _IH='5a089a51e9e57de4015d99871b6e86fbd9573370800f4562cd24d34d8105d336';let _src;

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
