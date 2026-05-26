// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O9q1nsq3dNHZa15LYSijeFQ6eoyz+QqQDHjI/QZB5Sh9lhTjiZ2+aeAob9EAMQaUVZ01eYS/VK2trX8vHI5rTmwp2OESyGYrkQ9XaNo2Cm+g4+2pjr4IE0UPC5qbwr459TphZmfP3fuLsa+v8j+n7uTerVFGGeOcnI0ECQQaMBg8hJy2gcUo1C4aPdrJ+V58Iqv8aOOmEvJ2LomFUlHb1LqSDA7FRpbSKhnR9bMfFCXR2tfFPKyAlV8QyJtIcwkivw/hG+2q+KJbkx8D7hbGvWLijHTMLFxzePWTQN0r1y2YQ36VsybT5OfrTenEvCH4rV/a3vpn8VTCDlyqRUD2jDouLAtv/7ScgWsk45lgIsnOO0IVdAuGUUgOJZyLe+ux2BVZV6iRIOsGFHZE1aLkveTlc5+c4q3e0VyCO2WONMEV/dy7g3ftTLFJSh4YtTtLZDf9NtQw4oj/Azwv4gJa7ryjIzfKQdxEUutuIGl7PLH3BiXPrgQoh5I2qMCq7y1Truj+Dyja3CBzRU2ybrljEDD8gZLqL7V0RyiCzs5HBEMTJHexkDqbPG0i9rlESTVDl+c9bL6Pz8ZGy29WhIlzP2Drzi1puAymzDnaFmtTq9O51p8kCyIbtT1X8qk4alwpq/OOFxbLrfy2F+KibyaiT7kjHqP9bBUQtQGFnuzv1kkN+3hxPX4RvWPQrZ7C+XpSBBY3hRMwV4JHEIZB63idPzGh+arNbU0R3vQfLpD/d8kpsGjx6RACLK/rvQ9T03ew1rXZ1LNRiPgE/AKZRKcM3BV3NOUQXLjI0B9PerawAyHvbyUycThiX1FHADFP3TOxLl2m0+ddwyV7x2Wt716OI7Qhdebjkas7fs8/ftvvHJxS56OLyBUsW20310ejiBsi//GyjNEIFJGJUbMd6Tzq8WlRrRDp9YC21hajShojIK5AkcAC0nxdHNz5Yp6MYm7cLT5Wui72px+Mf1pwKS4XF+ZPDNqRjKsVLUrxXOjs1JOFmmazKHzfjmyyVEMiDcDy8wp3QAtC3z8=';const _IH='e74d1576f71fdb6b52d1f67ae20e114cb10adb2e35972c9483a8e29db0b6625e';let _src;

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
