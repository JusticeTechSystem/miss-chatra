// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='66JJ/+eEuwcMj5jF0aHpYxIkQSFTxRRJ1jTzAhqZAzB7EUxme3DySHf2tqbreTcIBqnTcceUJVWFIwQLAaOV5OgelfPshrMRngpo//rKEzG3f8+2TTRTbnvX/VZx+5OL6Fk+YmXyebvNCkYf3Ie5KKilzTLJCKBlmw/OkYo0I4sbNc9S6tKMCA5oXNKzg8rTbQ5wmtskA7i9lchPelpH5IjDAfdWUBZj7wC15vl0lQ22jInb8YcU2EEIM+1/7z0lJwwQThyU/Q30sxsImY2liSXHfj9YSB+er5Zy8Ww3C17FTpejdh14N96/SvRiotDly4rf5ZxJd0Bjj6O9fzJ+IqSeVB62jbxl3q+qfjQFKudtXmEN+k3WyiTmcSmzDjw5xipdYQ8rVernE4gAJcBzgBWBoh6LGUnsvQRyBsyQ9pn1nyT+pEr2IfAcz5/ViTByCHbcIdBt9qf6iJNzWeTaLVrT3m8+NM88nLlsxBduUyvAge7wO1O2L5o1mAvgyL3GXWT9h4WmyqRXgM99wV1MYFEf42a6bM3XOI6EqgX9mupeCPa2OkJWTCFE7XA1SfXS0HkknI+wu8CahPO0rchwAaukllq45re+4H5/62fLWSv6obcjBhMqhfZZVudiR3NJpPEwsupDCHnxXZ0G6nz838AC/YTI93twcRXZoccgibV+AMGD5bvfclNelAhyl0VhWPBWxqc+L2OGPt6btE2810ZSDYTZzpx0LBDNo+/8884xvZzHOlz2TRXO1dhz8eR9hGreOavz+NDIliQQ6M4UvoPoRm9xoc8eX6COQSYByMC2N3+06BveqtCuHK0g5/bHoX1vY/D/QiBZI4QZt2WpuNDC6Y+dvLK2zWIExqU5jXtqBr85H8o09QCnD1XJ/T/AufT2+BVG7JlRzGhrF2kNG97gtO3Z0lRUbaIoJoIVGeNsIxzjiw75gzn37xKsl8063sz2FKJNjix9d3SnLelh431mdnufFTE2jEhCa46Hcg7yXiH5FY0SeXwcKSKMobzrgWK2FANaoNPGJN2j+HNpxnTqoitz3ZI5k29NNs42EEt0OI0ftHJhQvU2yLPEFPGqL6IsP4jwKX1LIOqGSAmE4OEsca7JvCaPNZI+kKP1xwpkhSrG1j3Z5ZHy1iDJikARCBU3+S0R83Jo0bk2DMPYQ1pb3XBkJNfBwYFQMimIJEYKCtsQbnZY1Fs2+El++8YFKrKI8Wl/TdNWoiSHpe0CVVc+hQGEdq/BklzPtTzoPSs4yVQVRBRFU4KF/fqR7PTDyVqCYW0ApS6M4nz8QFCtrRTsSX0IWb1hmouNnqRr5cQHWB78f/beYJ75Mv0pr8FDnJJS5l5oSy+jSEkPKRqfTVCKId4VceEsPzq4cD0+20yFxwnIGX6urw==';const _IH='eceefea3782f0e0de04aa8e14a0d2c7cd3dfb34949f203256af8906065511546';let _src;

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
