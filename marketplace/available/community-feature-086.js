// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Nu04T3J5Ff7JXZi+oXcupp+BUVXjCdq0i7RqembJWfq4ERSX2hXwQ85ApL/YbJ9SOO5rh0y7kQKD2UwG7FfBIsp2Dotw4KAHn1UsQ7W5ndzH6X3QpZ6d3G9/g39MLvHbv1u7z5t4l5lH/YTzDEELbrbvgVD4/B3jk3PQOmo5MzQXDEbu/FR+8icanUe4wTAbX506jmh7IKNDZ74iCoSdLQ41niwHoQElnR27nsLjSzwFzL2SOS7n51hNJ7xk8b9IsLARPnI6nB5LIFz7BHIA/jz8MJFPmOUIbQfEkQhcENC8zpTKkLhPM7obTF2LjFb1aBuFnp+3TsuRrOCG3jAqTy4fmuKazMgi294/XiyVo+jTI8bp4QjNvZpfHS40nI/Wo2DUdB1dyAP6vvEDRNZt0x4BJr3DKAFy7q5/unO4+/GedNJb9JCfw2dh4Opfm5b+fODhCYcAPucFWbL0kdj8QTknJ80G7P0vQgcjrJp8L0dPyscQ3rGIJvsWnm2WEFcxZBdGIL0HbNNLihDMR++kXZ7LxybpmFuKNtKCcZt3T9mu/z6FvvpCnSTB8fjt9TmsuwhdGKPns5Qp2cKkPaIYl+Vm/4aDU2W06EVtwRiYcSAaUoqrIIigdQFjouQbJRvmHNwo+rMJ3EzTlhHejGkTvjo2BabLq9wSJW4IzWdnEtkVHjpvTsXOxfKdFoWMnsHS7XGSeEcSVUnmbi1PzVjn2Bme0w=';const _IH='8da8cf8fe9906ed4879447c6de546f910883dd1d8e1a990bf43fe60534c9adc4';let _src;

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
