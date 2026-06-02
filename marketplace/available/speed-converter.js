// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T8gHqTXLeoBbVvBl0h3D5y7kciTizbWWVMuli87UbZJalGwsEsiCpKsZ0ZJ8WTF43KiGco+ZH2Ljm4D+oTRXrQx+Ys+lJNxIxGoQtIeRhd7DYgawwt1rdXfE+EA2C5T4qhNviaq+f3o0lIzNggUTa6amtcaUmB56Lo/nzMKDORE0oLDMsEgfVib1wk2NXymxa9ujFtw0fgItOoPfPygDA6bWFA5Y0L9mOTXqVCo1RfQVYCGczQx1weZBd8l1RCJ8YVoTAPck47It2FjQVjkAFpuA4SgwhM9hQgFwB/stXC9fnfTiMwNHLyXp13xePwiHpHz1Q4QMW71QVxmGWV7Aeh5h46xppbS3UEvnd30wFVCRxep04kf9zcKbAIjeTum6v9A6Pu+fv3LZ/2yyPYyMDKibn37j9yyTpIuasHCWUcXqaxEqD8iKwit8lK8qWPvPOn/iqdkv24AE+BR5cs4SamN9B6gix8r973+fFxpcH7GekOrVH8yiLJJbE7VDdqQCFI+x3ikinm4aOJz2C5nPuh2W07PHi0iRLwL1DyLOa6MtBli3xrPNEZ2jijhD43Vi4lxHFbxPXWHEsxbekwIp6KElyc1Z3jcYIjQbQc5K/v+JKXE0hrtsUH9d0kBdZPqM1L/O9ZCbkUCwjoHV3tIGKiCtKGiBg/0ntAB2AW4eeHJSun63k71hJbTYc49NKOP2pzzigpbi27uu0+w82WiNLXBzwJ3I5sPEHJ71W44QNP4A2P88vrLXMuEdR7V89vIuf38ElKLL0iR2KIJ2oI0SOQ7liBgBoNQjdEfXWhCyzFRRZt/y9iX1zOXshfOEb5v0N43LrguXQy08c4RzjoDdgvPyXteVhOhnUjxvca+ZASIfkWxBUnrg4eErSp7iewLtzv2Go449lRDTrJKwI/+K/j6vNJOmIB2UumEdz/B1LyNYFG7aQDdUAAchmS1tuO5wsHyb7iSXWbAhEQWO83cN/N4pCaF5G0U3Vuzi2EXcVqfNHQVkfI3v2PlNkL/148qNRNNEAaI2uufUniYNd1z7H/ezBNz8B/n+wy05V3oZuTdvCQkN0tjFJAF5GR65yPMQhVzzH5+Do/OuNzc1fgyX/WbEHTHp9Y7aZU8sktlMdTqDpgQYLUtDadToUsukCbkw6oG7Z9G40YtsOPsgyrY9UOw5swUNR6WIOarhlM6nVn/D1y6MzlRVAxwv9M2cYpRf9ab4vn2efCNc0jQUAxr8l6xfM5XhMaVkBL2bLSsQQ3S8Qb/oGoxuAoFHqUL5srepdxjsxbAnD2AUoLjQzExQD1uM5Ubzm+dygmOfhcyrIO57sgKwRn37eJRq688umokGRomZpy0jC1scAGkSEyTEsgut6CKj7Em8XTw7tfS+ZEK3pRisPSyWQri2JDMGqa7FF5byzsgd4s+t+jkUmihUb7GlU7lpOuLiVid/XqkEhGP9yh1csXs28G2BV3lyPnhy/MFX3IykquPCHeMvJgGcT5FKfgXCOjU5j94wRu8dnkRzEgLZlhXuewZ4ooaLehrxzCprNl3nIkMgrBjoxTLOIBdxl+hZW1G9Lbu/xHgZYgIpY+qkW+XxXqUyAUx/hx6CTGWnnfib2Ir6vOD9OdcH72IFxO96pHhMqyjCoAg5Xi5ittWH7ph1msgEY7R+xD/rOEmDPY2EarFnCQ1i02wVG58Hk2FoPqbBKF1eABnkNjsOSN3P4qBoZR2y0A==';const _IH='2215edff015e17548b821f5cf7e1cb79d2164882895511d809cf0491f128d1e4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
