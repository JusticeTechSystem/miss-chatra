// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GUsxxeUuzDXA2xL+YjDfhF2wWugnee2H82EK8NfICFz6E1KPBP/J/6VJeYDH3InHIdF27sVQHciEeKCTtOIhjCvg4KqQoGXnr4747rcHhMbVSSXGnyxdx9bh01ewnOylyGJMtyA0tI9txbZAwPGn+hkp33f7nmrc8aReAuhalzghAc3cw7uU5EVPcJaR0vYR+AgLgf5zSGUiNv/fw0QsUR8rPefWG5VGaAKR/6N3S3y2ndByiOJCP0IfmqLGubAP6lxp5sHZVmmIi50SQCk9k0OeGowXVH8w/2vz0dp1eJf0naWMeISVy8a0Gu6X7NFN2HsIySqcmBT0hfg4WdnPay7eCOoBpfshj2u9SC4KbekeBj2aBbXQrGoY6gK553K6BQJTDOPm3wU+zOePtDUQfEIF7BTR+hS7xpU3LpzfimCHofa+CbbC2s3AD2S548+8P6A2oYY/lfuvQnvARLrv2KJcMZKGVeTitV+4iuKErCwMrKIhEW5L/BVUUrsfL5q6sxjjZgclgKmU0g9P8S45OD6TyNByWJ5Fno45H95HzkjNu1inZcTWBeOI/3/4p/7AdeElFsboGABhJsfDnY4qkGhPuWQwptdyjzAZWiBFaTNuYN7uuotytct6qpafR+LS6ZT6WHGwT/WPziazvrY/avJ8GYWlU9apLSdcWAoONLF9ZXpAz5TvUEcbkCZ1pKij5dD9gAA8pJjHyZnx8v45fzIlF0elaMKfzh4i';const _IH='f3f9ffa62bde7ceb36172e647cbc0cc6834fe577713b541fb77d6e37ccc049ce';let _src;

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
