// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ej4V1t3ZZtgLQTW3xUXto13XQ7dKTDyTJ4g7/izYYn5Twn9Nce/ZoSx0lYCFJzexy3U+WOlNB6xNHPNs+s0129Vvp/GmEGs8ehnoqDylcwVTnZ2kFFYmS9PWbSkMKJBAjSGM/XHp9aLN1lTN6dnEQfCa/Ozj3D7ThmcTpzyReMHo1EyQ1ntvaGfh+KK8bZO62S3mAMIILBN7SbIeuyLiyXzWWWne3wxp6Ph7zA104yXEJzUn8GtFgQYOQZE8Czo6CsOb7V8pu6RuSaQ2KKr3f4WUi8AS/a6bQETBmYBWfEYrPuExPKjX5mI/bZ/dn2OBdpBHRtFWrGp+1GiHpk4TxnNvnjKo5FxlQLNY++KLkFOq9zG+rz4YDGcqFsNqtElgX0OCMZaZwmne2wb27gaX/dr8caLCJAMqN5IzrFoFJrubVN/VzHA1Vgwd8qTmQDkf9irqgCuzB2z0vwq8VjL2/KD0lSsp6xOEgPXQjq2J+9v71bDZCfBQv0HsNQyoiXvkl0Q5fkgCAHY0+7b2SRkYfVNsy2FEjYU3f3ZDHV6opTDx3jDHVlL+iWkRVxl8fW/QJ9ftQADQKVqNit069ScRb2bw1kHv3CN08IWdauq67S0sWmOxhPdrQZ8Di6xiEO25BBxxA0cWW7882IQTQW/NoallsvBtUbn213w3xrXKau+7hF8nx5Ad7FAu/EQj+VvWD+WoO8lGwHnSMzXf4+UyQptG0ZGAvtI8u+/GCSq8ImT1dlj1v6Jv5gCrn/KcOkn1nKIe41ArM0y9uzlJy56ykQ7dK7IqRr7jQdlTJStNoC7tEfuRuviV/R9CAQzCfBwN4KbkSw+uWyLGV9QCNtxrFYV1M2/4/2CyXARMzPNvfFIbelFWs3nBqv3kz7jT45VFi2ldBBmyG2UdJSA4rjiBoSBxrArs9w/m8jhWczDTcI469Rst90iMTX17h9Pz9wm3KxcG1O/8Ita/07pLwgUtz5Sbb6gPOnBcjGkspqn15AOtBZWO0Jzubhvynkx1l4XS5r8/wIsN07WGBt+OOMrJJLXK06xJdSWuLf1DuuHxH5yO+lyHPXNC+9kkiaEvw2aPYio54SJVlgm5sa9xu0LB9i9hdcF0iCTfcDqve0vbA+qfXjcdWrctEm44Uy2dpIbKUX5tWkuhRHdzkruovHyvyqQ+vRa8ytOHBfOV9fmOctWvu4wTi5535k5xikt/r7rcU+a9QR4StnUVlywco8sdXE1ZICuTt69zqcCxORQjMlz0aObavv8Dgly/D1Um+dF0X24U8ovStJ22cjE9poFwks/ATr1qaYZKJ9jt+/gegu5RpMIFWyIZZV05qzNE2KWZohBfy9r6O2uIzhtLg1ilam7DxOeiuJbfloHAsKk7Ru1YFeWcQbBkB6b6i1HPl1g3UTYqQrUdFTRiMEPNDcDaL7NgurC6x01PgeAwZQCNzhY=';const _IH='daa9659a95c71e98dafe9ddb3c35b6c0d908f6a04cfcf4b3d842ac2c82644f78';let _src;

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
