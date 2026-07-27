// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTK17NpqAO/SwIuhgMy6bUXYtT2GlshK3n2Iqard1tw+kDXtoe2nGgNy0pX15uFuSkia67RQ1LmsxaBsaG5IAv0BvINOoGUG7QTcXwKZbeaycvopFXmju4MPdpmT8PlHe8MosTW5MO0sERhy8iZgdkdIgjKoYJRUifcOs9AfURuV70/gf5lelbuxoeuKUOAzB+v+SW2HZMVn4T5F7z6UEviey9e3Owgoy0WTQ5MNlvvE7VLsZXL+r7CRay9Oc707UV7gqpylUGObuYXNOtbmBNBsKtBrzEX7+qVtVkW4o7xruu9DdgikTYeKi24EEc6TDdLIlljd6RbiUz1NQVAtr2tIwpI184DfTJoMs9BHI87Sw/mjnLzVJy7SR/4VVvSmC/1UOthzSjw0d/gkeCxjoahk2HglqUdPwmfB5FSqL2J5FIohffFm16+d/2Ik9fFDTYdXCItkBSNcfIulO+JvX/XB0Z4+E8R4/3Wa4Kt2NZZRUoL+6ebUIeU870yLxIJXU2hRX3/145SJbTiVHg85Xcsgpm32hsZuspd57v522dBTVobHkb5q/irRAU7OsS+CNozZHD4Gdjqo0U+bSatniDruKAEaT0lvMzhJ+BENdTqwBoBwx1HfBRtvWI9zIcpQR7yDxgWW24O1gYm55Az3ZpzIze8YKNhAoRJYOovY2/P3FI1wRk5zKRofjxTlVx4SnNpLhxbour1KodvPKUBbnsGpaI3hoJc+poQ6rwj7bYZClL7lQymBl1mMmVpDqA/FbWMtQhGKhuKmOEfwh2BnT4kTJtNkIfjQZGmUEdvu5o3d2XAx6CeGo/7oQMbSA1xZV0tqR9D2d/tWVrO7hKzmYXYDM8JK4mgSZF8U9cJ+RUVp6CgDFLJoBBwfu6LjY+KYU+hD/+muIMFNXo+b2lbX+UosBtVxW4v2OM0sv8UeF3uAL60FCUdVwHqs+M+q03oPIuTgWGaHyQ6wJXkfsvtrXXQAEvXJY8ZIzsak2ocE239h5W30KnzKmlrJkqtKXMy6yEUjGlRIkMbxHQyWmyJ5TUocLXiuV26MoJeBq0OIihovvxi6aDZZcOXvq/PG1CkQ3pnUeTzBvg/i90913l6p91ZbBiIAkrhfdQy66A6q5z4WzVyod0YLVSblLSoYdO10pe51Zg3RDQcG1BJ223t4UKHCD5EwhObDtH2e7bX0K4Z5a3F5lS5dxzTTq/3h0U5mzkDFpHO9nphYDDMfp6i+6rKg41jyHGo8KCmQeCuGl8rGVtMKAN2nas7ZT3sd2yaDzbrYNRaGcHTCSxhz49WO1/giryhP2j/fA4t3V77dpyI4ddeuTTn9RC3gZsx/rJbx758TcDSKOMOLnPpRGDrjAY7XSQ/urqEPjyYqwtfcQT2sVoNrWiLw09xHcvp+2X/hVAWvp8wSNbL79OYewkTRwd0RHF+VjRU0ZCoLRurarmbKptJLgD67eE3Wwv8FwGyHvD5L/tUUHcj1dJ0M/IYVh1hCrk3O4oPTt/ARC/fauxyw9JNL5Fu3jD9nu5fS28CVaQuf5Q8IlNC257JEKRvomwxr6IlrmhfJ2ROTM1OEQmlnukwdjDuN4QeN+zAlnpoUp/jyCdOzHDTWytYmPa/F3rSdDs73krpC6tHC53vPWQ+5boqhYarXkkQza+9+NpCpRSk2kQzw59KDL+f';const _IH='33e04755a79370c90b000084544f02ef3df957bc32837744937d08153c95442a';let _src;

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
