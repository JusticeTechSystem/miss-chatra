// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t7Wdz4fDZLYs7NV0s30Kons4DxFu656EoVbOcbqcSXbnRDSFikqwqJlmoQkd3NzJlZF0hdPSupfaiNzIK53CL7EPpvW+Qkr/li12RGcfPhNWvMBqSYBwrf75BXJUruyMhVpFBFb3KGlSics2Ckpn71k0U/KPWoRnJ0pFO/PNQxgNN5/sKo67a3Pt2kkNX/cF47BQbRbfwg5xW+EgU1dHKPXsIoR7VCz1v+0K6kb1fVv9s8VrGO+yLocy69pb1sKuelNyGJIi/FkqZQFIketNFqRWmzPP75sNzF/wDz5xBw9IYIMZQNbgNucOshxor2JIId6QBnXLZ0F4OoQtmgqbIR4PyNTMi9H/Ze8INZ8C5XyGviEOmGfZ/kFTyvx6zuJcR0+mG5+X8GROpnMgg7tBipAfwhjDOJKQCniefw6Tt/B1d9Xvf2utg9rgYA35/ORnV1/SF7owWM4ONL6fjsWixZl0QtrO0Z/H9r8JLsOA8lIdoPNjRFgvrW2hNjKhFVeQmcLetDNnAvh7COWlN5Kic1Vog32/bSi54VfhhNADjiGySr8EYgnDn8NSF9QxMOEZnfhvWZMoSCbubSdYaxw54guQAUxs/XoFHlKHZq53WlOzzQt7VS2f17PCE9RlnO3CrBYPqys+C51tzmJKd0BIANoT77BAmO/Mn40+BadbT5oRpPnmmOhRW5jxDZeuI7W4DSw+ZqaGTbiudq1ZaJ3cIw3jGS0NQj142+Bv8aasjUUNlONm+HM1p5DuWWu9lQgDW3G5wtpCVrFgHtVzItT87T/96T/BGQC720SHigy5wgaHNkGa9kD0QZw6jjPGqQmqKdiKEyB3HhKjwlelVYJD5sj64wPIaYQ9bm/4Da6S5wdwmiYcif2YfEvPnPvuFUMRWulWyF6xgJRtOK9ydhu1SaZLst+C9TLFNVC6jTWYb+f9Ed8ukRjHg9RLjKwd/hthNFRxefXWyVzX3pvOgTPcbwsITA7uXRfDg3O9lbVRuXMopdwt2yGT097YjVWdaeTuuYSqittwWQD6mjRf1TFVYAgYHX4eitbm5qxs94HcKvxHB2sPd82YCnMZ+a2oqXas95iRPC7TlJr/McAManhKWraPWK/ZC4adSbt6VfKo2jsHAWlFMshiowF9thpaSlTxPHSA8tGCdIrddR1OivJXK+Cl79qbgObFmxjfxIw+nXnPNbU2YoajNRd7piL/T52r2QJuPjO7STrjHKxSSl2fQ/f/LJYw39NnVRR7qE1/BVFJkQfLhGzsGwr0HA1LkAkh9EKk69lbkIK21qd3VEHIoFHL9LMc6dSsPyK13zveVEXpcU6wJgR0BmKdAg46oq/MxmlZpAl9GUHI2g==';const _IH='87a7babb3c6d829d945c72da0ac8ce24214c3657a17ae6ddb987bc27c1b0c634';let _src;

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
