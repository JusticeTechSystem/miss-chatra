// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YwFWRdlw/rKKK6Cp1xSFE+UjwWXcygXb1ecPMEGg+djptPt7GW3TmGJ3Jak2FYFLo2T34712SZQB9hdR+/jRHmGUxu2JUO1pKB51T9T7GMdQsgXYdnKZzDRtX92fcwEdmkLNUJZHRQ6Ib3AlTO+Fo3ymok0dFiXHXCzoRbsmKS3EbZLyBU/Ctw7fuhpqajaEeHfT/il7R8bQRP/jxnziAEVMFHg/WaIOA5aZnLjm8zRtPjeFFMM1qob3gcnCq72MPpETQw/lb/oIjeVfK0NDrS93XvYjNtt1lY31kZkah5zxKwrQ72VTzT9Mu3nM+97GhJitYgpiRz1qeT4rLf4VG+I2oVjQ8jdkzuMOs2eFn1+vpbvBdL6BZdYQAdB4hhFhbHBFe6GJC0hJQ9oEP/XE4Zwrx9i04oWk5xf/G0nKS2c9sVOIU5SVgrc7BnSxrfQogN4t2ilskdfKgIyPi7FuKNQpXN/gNNBrVEyx+kFPOShS6G4m/otwx0r+lBLzAkBbsROe6b+nnVFqwGJNHT5zq27pghFVxtP7r5RFYbq5b7Rty+1vv3RvQS0p0p0iBI8rCmyTOQo7Cbrf+MJg/bWBAg7D60benuSdv5HC+2d0DBGA2JoIlMOQ2h9E7iH6ZHjMv3CkZqeZWQxsWVH8/KwzWtD6xXkJ/jjeE856bZZxQZ1Uy06lMBhayaTqHsMgbe26hhjaEDXY6jqdeqIVODPYVlv6JqlZuSiEs9SuWRj0y9rtpjmIHD0=';const _IH='cf7a94dc38372307e7b31631109dad825a0046d6f35f2d03ae88fd28aa15fef4';let _src;

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
