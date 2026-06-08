// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pwW/wmF9E3mPwgxLQqQmigtgrW9aolULDqjNOka/8ar7IRLw1e3eo0wUBJ1vGUBHZ82Ttoh74FtXhT7S3G+ycmqGDyCIOHyazuoOZmnMyon/UOxEPKkBeJQwniLO4jHXjgDoIpWpb+y4A/No1Y4F0ZmuPqh3n9k2s1v84Mxd3Jqbz5R20mkDZMg+2SpMnshxSlHuqojaZ6vCJ/kzLiy2Sx2yd7HoK/l8wAll/hIiz24E55N+0RU3NESu2uTxLDMUPQr8i5x99uOBsEOxCwK55VJsDeK/DV9HwZWlUyex4sVhcXkg45WQtlYmVu6PuLSK2cCmooI2GvdGTKMQlUqdiOhG+nytQken0AFSIzh59mb3ybChMl8EQFPibetUCKJdUWsioJ9tO+0M+gYwyl7wzGdhBx7KYIsw5TYvJT9XwbZTiQCH4yGVaKYIrLPXAgh9XvyTRh321rYjGOX/bEbrtDTArbOy/NdVOuHXdVD5rVYTCROUlv5kDuWeBiulHOICUITqOKTVKhgAjKRSF/EiLNbmVrowq56MslNQSu9nEnxlJrDsaNDaa7x69ZoGpeV7QRmx2UudZDHlDyly92VsiN9uCypONdYdQbLGTrH7HejfkwXdAjUfhZuMmT3ffSgivEr1JUVby+Y5ljkAqh/TUSnxtRORbMhI+psBmR6Pm5zm+8soZTCNXfIjw9sH0bWxHA+okkstvO20FP9DN+V8RJArdrrcywF2q+YYjYqjPOZvBc7d9u4w5zhHh+tJI0IcOfODyGeAT5V58ais8Fb+5HGZ8XRTkQG28SW8QrI8JLmpO+aTPuU8whpGyj86Y3wJSJYR3wJXwMyO0LvO1KG/xy9kgCAmzIDOcTDXEeIbtu+l3NbmopvIhZ63redoJm8jxvuDKx3oTPVPNSE+MGBdzGuFVe6wAMPxwQ3G56qTtodx2JHExpVq2wz84OE=';const _IH='64819448d5c89793d722a9943d72f36d97ee676fd82b9451704553ffb4d8851c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
