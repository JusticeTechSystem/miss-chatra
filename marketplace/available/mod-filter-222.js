// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q7MrcSIR6K6y7aliGXbSczN7R9CbA9CLk8CPTRz52TNKCONUJypT/6W+ukwygX3id1dJQ+flXNQI2ujn6TYE6dfyfkyWxuPDbVNfhqeHCNKDYhruYW8rXhMtMthSY/2/JaNUHEzL8eZ49oj59WpbrS8hUtTj6Rfz38NScIwwlS7hS3TfELGvLciVl9N4Ci/hJDfffmqGPIJrUzfd44ThIRlbySGt9MMGhawy+euD31kevenOVg2SpeYjNeiONmoAKvFtsbq/t8+zi/2Pf02AWxGAcnyzW0bBVkxzW+SzxkPsoV5GA5YMLnZgjnH1CRAk4Ne1AKyUbK0fhyssVzcyiNE5tLzQ5TZjY0pV8UK1xmg2fla0Rtuke2ag/lD83mqItWSBt8HOaEMkO492myHkEShsf9MoPBO6++mLt7tVog23BvY1kEVGQjQBAarJ/WhdGwOA/16lEiHBYPEcCCIBOwJ4gPKTGuOb1fbta2j/rno/CPPvMZNxOJKIs3oa+rC+F8LaR0G3T7TpctNr8X0J75+U2N0my+lSgrUs3YMl9TW559sjlVJfGilgtOUBuBfxE6wc3xu8akG7pw0qdPTd/NR7gqJqhFAGPmYG1Nr65JL0QMff3osXDQNYT0pfX11JFRb3jtxhYb6Dyy6aD8v6GOdfUhcpWFuh6Pbtb0IlPe8GkEFJ5BelK1rhxKSzdGE7M7X2VylJAeEibEicb9+aKhlwbZrinfAmHNqWVxSZs4uSpwzOukgKCZmmTabTn4/MvpqUDVLK/SjiUE3XEtxNkAgagJ8fPLmEKyo85sL6DW7lDhvGSq28ZuWTt1SvfsTV1afhyY6nt8cl7ZYHKU0H7QRsJdMoKtZHbXIez6aBRTFhmzhpQugnTGqGgdoCp4At8PD8W5S4sz+NicmbfrJGRdR7P0VeGUrfHTodqd6XeZZPJEgmvLeOySi4WbWv+HKCXZpD8p/I6uvaxh37LnOzcJK8evZaJ67c3wwrs1fx4ImXVC1zlZpIp3pFg8O39nFRaAHobKGaSdS71AxiBcMx+7YpGA5v5++WCqQsbYzpF5qYsibs2fXF6XbRVebQBddGTiAf1Yq9WuCMzGylsih9f1R9EzwTGIqfO0AoiOSMsIJoxiNO46BuUeUFLMJg5X4AoenVC1pyNFHcUwMhfFYzWFFODSwhXh0JyMoMFBtZLfmM4E60OLOQGNdBuZorFR1qd6ZBlZOn+lDt83+TG1mN3iluOCY+eGlq0vLzxMvQmFjS6UA2Ej/kP/ZRRC6B4GCfGqn1GaxUC5QqFrp5mwQCb5DkNuzK2ILe6e14DE006Fy13MR+8ZfQoYQ+9TIf7rqp0tJcpOQGfxQ9kGW4pMd3Lx5BFLRZ+wwZU4rTqsx4fCXqQLRrW/faXw==';const _IH='7f96158d9f51ffb972f79a5089cc70baed2fa051caa7f33885c8c52402fbcf2e';let _src;

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
