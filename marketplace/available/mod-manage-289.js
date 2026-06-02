// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ydPA4FEPLmJo+N3g3G4/nOz9MCYTaUMXXwpCo7eFQbyPD+TXk1eDeRDYToJHGjUHVQV9lDeUg3CEF/dcgMFLbxJcBpgAfpfb+8lj22DI9E2sP50dIsobCrYbotDNSNddFv22+DXey3GaLFK9Nn/EALR0EAWlBxht1U3bs0jA5eqZnaBYqwe/PUR2O6PxV3MDu29USlSnXVNOp89jRtzSCdoXgJb3q8mlFPUBQcMK2VMAEeFq2KKIC5wwCBr+4OBg7CpkAS6zU/0XQ7qEOI+jOSNH3ee/3uXIBeSsMbRMu1fjr5d1ZRbOT37cvO4QpfYoLFEaA1tGx+dgB29ZzO2GmBqGz0m4p3zGYjdy1Ye/JVENmggwJiB5/n9aB3oK23wcN+PBXtK8yqU3SwUeJDE9vs4hLa+jkI3OL0edgMrrlJuTLp/O83fxjm5COfXG7PFCacwRxW49sxK4iF95LuT5q3Fvuc8v9Ow4ULXiLJ9E0i/07bqxPRwgwXI4SDhfIsDkp7ALmxCdFzOEQj++IzgTMW1RwV8E1P0nkErU8RRl0KaR89OMaFIuZj07VM0XvoAiJc5w1U7iwy1QmvncRAbPnFSpusnoQl7g0LEWvRS/2O0srjeq8UI02WB7mgNe5pcbhEFOtNYq4dwjH4pRkaQ467NQIWDuq1hBrYTK1F1cBruAEnxjlorycSzs8tAkj5NEMrASMegl7Famwt3dF4a4XllF3xWUUjTlycVdLWb2KZzcdwdvhwREQBqlUz1YthuKpLE3fQ34f30MUPVnX5MnBxlorHZ4ddsq2cyulmpwInqwOCPvjXC77xbapAFszonw0lDqXcvER6IcxdeAmQaYzRXzKoPa/An/DW7YtYm/dWj891igZK0KBx91C+/FebHINqInk74nlblBqOCcEhZONGKxz4ysO1ga8uZ1MvjayLfqInOe6p5DTvQGSyVqY7iYVkDtIVTHHdaCwPYBcoUkWvXeVREy6TYX8Tbveb0jhUhn5Nq3p7Ovv6WlQwKfx+MGI50JKdC4WDLpCWkH8hKlByj0I7d0l856+s50nFvomQyCskimz+RiH2rWmqXVJkQoxrI+GENoMgOtryMT9vki/h/lcjczL8ytR9bHtxDtEl0ofDVE5XmW9WZUt4w//7rKd9WI6f87uiZyjpoqisduQwc/FxzGtHkq8v7odvxu0fZX8GdjXTjvqXO+cbFVXb2Ts2uQMK/VW3d8VFkJ/0WA3oRGu0RegSenxqb1SRbzsz+6ZBpheDlV5INA4UXplTpxtpn09TLq8wL5FEdODmUpU+cJb9wN+NErf7BqZ6by4S9jV1cHUhR1BeAhrRVOdLvwlOe9JSkCWD3C6NHo+V2Ro8TC37P5viOgCi6baInH4mmw2QgOCTnzVA==';const _IH='1ae42c27fa6dc42f36a522dd3a1796d3a8ad0570e503147abdd3ac19b618927d';let _src;

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
