// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZWWslZKgbmQm/eZoZ0me3oY+bAHynnckMowUNOVLGrUKotYqDJyTnpFA6cXoNVCzK7HC02HBgwUXz7d7xSILWznBcTgXB+5fxa1ll3AsxO+NMABjnzKGpDYl1A4YJuWTNaXIoj5GX9IJaYqs1I2OqhgKY5SMBKn5Z9741dfXBqCJECJi5eEoe7cg7AHtm9/O1gq7dXvlygKzE7mpgk0uBfHDCuJB67p//5d0CBbgzi/D2oBp4m16RLyks0kSx8//IRkqbuuzLgQkLkUjMYmR7xQ+utjSbzOb/3JHh69U8QXYk0kjDAvM6CL4Ucsnd7zDujnIR/NXvkWMbO03xqJyskNUDoE5crThz/NJ8fm0sbaPDEI5jNq6E+Ez0j6YueZ2qhzlHjggfKCDjMD49vEVi/MlzT5cZDChrEi+Zm8N2e/HmgYbk/1XSotH1JYHdzGsqcP0kMfG7M+AqmaAFqcQzuNam7EG7rckJV6T6OUZi3/3t1kC6h9qY34ITyCbOiYduDbOhY9b+/h+5zZWYTPUHrrFQmIQrARMA+/RZTIJN9vkpgIQd/6tQrxOuWkQm17LiAzEa7ysZZG5LUDnr3B2PhO8vtVD76/Shw1ukqckL8TIZLGUM944ilmXUoRGhBzoqCC3pgGO0u41DHu2wrPYXxH8gZtSlsbMPcU84QpOaEuAdXsbQK/lZUrB8DeDAoHxon9avsoMeisQxMqqHTLAxHHN0PitI5KhmsekEIDvzPMPaCDF5v3cirgA/Oo37/W5dzZ8BUqpSHg+xgnlAuAwxCq0pcQF3JsPvBzZhHepLWCUPyWsYo5GdoSUxpNsPW6nbgYtbMuEBxiwC5vY4KkFpNVVlEm3y37+SJDQ2JRd0PIndYm0mHSW2Uy7caaBbGsSJelde7FKQLNbgYYPKarunjeOP1AxYSvmH3hRce4DfIkhJiE2v2dmJZW1L3o28DrA8EnzbGVCeW2dU8W5SdnHnf6QhpOb/4EUsbeELrEfqE9i+OOV6He0TrNhUkqZl0gh83vt4FS9rCXrtu1Z/eDiVnI/slIStbX8QKzLl3bw2gP1FZf7WKwssWw183CdIOOn4qv8mSO3Kxcs/i606NAAgAYGTHkhwOy+rOT3YXeBy8fhBZuqJO8V+vgZex0V5REJWtu1Hx19gxvVRQjUXdlCYoTy4ijXR0JzUsjzY74YcCMtIootmiLChBnqW1rjKopMsubiAZmnWszve5bFvwxjfyUepaDFiQVpz/+RG6hQL/DADikE9J0i66SZbnliJ/OgiXin2z0NUyPJXCFbzVjU3I7iOtEKQXnemfoucJdLatFVKtLEZVho3Q5eoP3g2P6vq1f/zMCiJySgkASyBp7ZQEy7JwC8Y0I0a9DEABhgzdX5aZ96v';const _IH='43d0b056fd47028c04a6937dad4addbd0e037b927474e8ddce223154e488eba1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
