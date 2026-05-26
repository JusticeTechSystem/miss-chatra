// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4SAXZPHp/ntdrZTzdkEOkyf0Yvv6JVbTw7E17guXI+4H0hMWOJYh5doUU/+IjBtNNXr5EMlEKCVEFSrtpemCboqkb3bYdN23lTfYHdplGoG7XWAyld7neyfk64XrVU2EkwQGJzc+8M4vgWUFwuIdN1V5OBPY1RIXM78HPJ0Hvw5mrbynYPA+IkR7sJDVubcGCQ7iUwolN4JV4MAr5XDdN52TrbNvPfGQmPqpP9Sy7c3kyNT35HcX0eQVVEYgwnlv3pTjP4iIR8tWXzQNQPt7astkQyNeB0WGI/eX9odCTBosTKdbZKusajryCGSGxe11k8xA0p/FHB9/zsbbNjDTSv8DKnEPHKw3U4qZ6EhPCPU943Wv+JeHhux21XW7NwGhHoYUWiFAojrvx91lVASMhtbhguHlG5t67ykSjr6xWGj87KrXiAGrr0MNHHGOImcgsXA1P4ItLiLEr6gt6KtmfzGFiZreo7oaXCz6bPh8FX63Vy+7swZqrf8Ng+Ox1BISl3KLEfeGJuQIDwuOszCrPg5UL2sAvTdXC0NfNpxJl+k5iFVGHHsJf9nVfHZM7X44hFm0u/SQlob97GZFVjs8Zjos5lZgwG3QT561FNbElBJZfiAYOLZvFy9iW5DfAJ+gcIzpi2PUuDaYN5YAqSFb2O+K22stWVoXAa8w86ut8CW1jluN+lj/JX7Hri/72Fw2m48OrrzjZsoeA7pxhdkYjAXMaPp8w1oTKirP+kq30TzdUo2h2m10rEYEfAD0xjFC5YdH5mduSrZeN9gNsSkYhjKG9MfniIBBv7GVCmt6vyzptTkcKzdPb2DqRP30ZiTgRt89DA3NqjDTBCjz8oWo5fYGj24/KRr5ZYz/TVvn04/9Q4oZBkGFdauvf5PYTJjqaFu4gQ1Il1JG7csEJQwItYMkGDJEuEosFWXlvIQpvUoEHeVuyvNnz7jQTGCD1RCb1tEIlyb5ncxWUE/aAUkB/fiBva5X7IPcr88VwA==';const _IH='b57d7299271a8a145a4abf4a8b395fe9194752976f752993d27ce75bbaec7afb';let _src;

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
