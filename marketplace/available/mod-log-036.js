// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MUybGY9E1Qpp5J6vfkgk3qbmqBVHijDNx06kEyAwIndOU2/QoOo37HeUYkcECLc+UFouroE4wNgzaj8V37SFdElszDEo9wFRYECWYHfReYfODugLnk2unDUKIMB/7aMYfecma4oXMv/WNA1JztM9azSUAhhsv7Wb0ikqTI6b1xl4rTKm29JuX1C9orCNUNH47kxBAZ48jmNQmG0Ji8g4qr+nROXeWFi4l5GmPsc8mJa7xBTHnQTs89UjbmP2xzCi3/NQZ7K0ij4VRw/RS/K/mhrLPqtFDm+cXQW9oCZKxFFmkMX1qDOIoeXJPiNUyt52B3XZajgGensEL2vvIrgtAM1jyrvojTX50Ca0ZgFy27jllK0cqKKB6/On6niW5ESKvf0wCq1VWKmTZr3RbFKbkQBIH68w3VqzK6e4h0a9ZBQ3z9m5/T/JGtgybkaV1pX+LF8EIIw2X77z0RznWB6sEeQ7oVr3MtlQyUeCsg/R7b9Bq/olnDDjzl6nnCN7FQHa00dVnq4O5UMD1iEG9+35QeYCD0oBWENCP+9z3QDkdzG3ApVn1kpx1n/R3YP5wknhnGIb6RfsxktrvUYkc1/RSyEGkVjS3dFKbskv8M04ndDxXjTTmjIjYK1dQTbmYCzCZAWAWAbWSFwWTfKT1Fy1tU9J/iRxEQALSmwP91H9FGfcSgqjKHHb9WAByNjp94CaEpKJjmAHJUSIjrGCu1bYChdOgwG2yKJ09WlUxWirAl6i8I7G4WebhGUqHYJ8RnQ4RzlzB660NE6TBIqeKLz8C4BrKOKBo501In767QF53DY9vj+6Cr/NR4AzV/CHrfm0hZw9qan+IyXuiGPi3J0vLxt0j8Blk8MjuCyRxIB7dk/DI84C7vupSp0fUS44iH4hvFlSmqt0jydImL8uP8k11QQIMpuTX3+u8LT8shX2qTlRJIi8PFf1q9cE3q7lNDmp0RpUmRBlSv5dSJ0lXLdkqvIuwmSCxncQUiNXAQKVAnKGGlJ9SMMECKm5FOfRCv++i6IKBr41BWHWYbKpVsvk2HdXgEdRY7WIw8uWDct0DNKY4pSyNfhQO8Y7e4CWad3WchvXEMGEASY88oyYV0Xxm7gLnynrW2e3Km2KyK7t/uTMCXZNQYBCDUL/OdyZJ0XEbVfvFF52ywwAzQfSYdeZbtMjwjx64K+oJ0FIYE714oCF7Dz0ymDME6UvmUk3WKN7E0sdnTieIY0e/2TcqMy/oZ91+H3EFoVW1ThFKrRGx5a2zKk5dpFkWauKu+BCpFZeGII8NcrZKvgAVPF3nbk5+s8vymIHu1F2rjl/eTRL3DRV0NqDunhVrfR5D5BzPnxLeCs/vPw=';const _IH='d108af8a149572363eae3b541176a3eb1562fb6953dc6c1f0c2503cbdd1043a7';let _src;

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
