// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lphiGfzYKYmt/YBcJjz8a2A0RFz8mewdaf4CNvbLaeUREGoWDUcGyZlDreCuJebxj7iinElxRq2yv+/+bx5x0+a7hnCTeN4yBUQCpseZGOqSCj608sBZ6OwgaPK7lA/T+fpqYcEdnSYX5fJRKHba0fX2brFrQdaXiStv/JlxdfrLD7nfifbwetZ4JXf6CtGPZ70U+NqcV/oUnSavqV8E/lIYolOUKu0grB8pHVwU84RgUgt6Vo33f8A35D+JS22g9bFpUVEa5WmpfwRbB7d9OGtT3WjzCFkF4QuX2GaE/umvD6Aw6oAHH/syqiqU4VjLTX7i+TtN2JFS5G2jjUrDdh5Vx9TcEAdAHROuGi7bb81OcY0DXtbnN2sVrCAzIRDzwlTppJU9BOZDJFy8BUAxkv+3k4PWOtDbbaW+VcQrKvLt5mXaA2gRiXAUI9B/jHi14TaghyV4I/kb2TScm3vwSWx2NKI38U5Z2CBOaXGHk6NliUjkA1vLpR+/7IQfxXolHrDE6DvAR4oZxUrbaruUOx9mph3y5lj2IE6xaMVzuo7VgnreFV6bbFW5EUKbc3TAbHnbktSxLvBK7rPRZ0vu0NkIkTp1wdplgmkenGD3P3UrDf0WDiIyfL+4cGPf/F/Vnbr8UXVUoRv1m2hNsietoZJATpOHM9l/poT1MGh+Exhwr/M1EYOjGFMLrYXWdgt6DqAST+4PJuuWj4vUQLtseyb+WWbRHKxYmPkbZk5ypFHRXCSK2L2IatpHLvCCQLHVnOkvpa0hHaktmDbRijXx+eNZSYOwjTDKlY+Go6dm8Cm9u01Nz0hLyfwtwIUsaCWXShtjxQs+Lc03gW2yqq24Hr8IyXraanEr37OSuJJNsXF/daNPOJwqPDTaN82eejKyN4VON4bMbaOQ1/dhJ+Lm9nRVjmAAC7uVNU0AtWRjzSPb5VrRDXF4+OuyEQ9YudZ1OexV+ozz7VyCKbB5sAHFkl5JIe+HMnWVhzw41HnkOpfc0TA=';const _IH='a215b2e19d30f6e8175de16365d73027702d34b0a8b6ffa68d317a630a10f36b';let _src;

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
