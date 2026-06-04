// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W9TjFskgwSku+T42eOOYtdjdIk5TroZZ9nH4FLqDqjvqWHnsKn3V/8neY607Ncchb/4Gd7lvBeoqeSImKFZ30nWKq7SHV3UKbtR9gToFTV1+8UGf2EdK5SrCTOmkiDiUGN2G4XN20TSbbwLrrJ2buWu7wX3RMJ5Lr1dnWTC73vf21cSNjtxE/7X7On8re6yGUag6vVYRu31N/9j7HxwBEPDg4f5+3roseYwCA7GveHJrRQ0SGlgirv2qsp9F66lA3++rGIbMYfI9OKhfBQI3RWDWB6SNR6ENVfp+a9E8N7Wa9hNxs4q7XCzRaTMBsC7C2xguTiLXdUz9dKhg23atBSxL+84sLGPJUlcN2mtBvBAkCOvoOCDzcOd+8DVFoCNCn1xMWnHC2LE/QbdGCJEdmJNpZe2JGwbYIWcMf71BuQwyaGbZaaFd3+D+rPLYi9NeMQtYF1sqZXoRDlJhokb4ek0RTtrJVtdhD7l1Ybq8gw6F49+iD+2am0V9KT6D5SQTjIxtfGDsR52ARSgWMgUmpnGkLrZ/iju5k490Bt/EMJbIFYscNXm5muu08fhVp1YCl4AlYqpeETKefgCnMTlGPMudtVZ85qMvcAewGwIZvziHhLNO1wgn6f2UaD3E72sHZlIM4Vu6OWzK5sCM37VKvzgVQKtu5K4f0IaxBSJwwjaJvb7Bf7c+lsK/X8AqQ5tsF1fUd2i9M2AcV6DpSaxtuIl/UrSfIGgJh5GWIgayf+3EZwi0oyx9L7Cem0iiPdVcGs+m5CLS1hPnNWOTL/dB+jlrucYsRuv/EGp0rLiR94bwBPL64k7vLV42UGg2etfxs782H82TlIo2ijpXJrzJREA00LPiHFEUDDAj0YXngshh05bVIooK9YWeRtHXxhByi25dJYoa2Viskv8JoPRZAPcsy/2j5ML3DN48kEoxqzhbIPqGjFK4jUmhUwLTP5twfrtmIDPux32aUxQD9fHa0KNI9QZsoDx01ieyRjJbeYFvQU6d/Slut9m1fzVhYxjdv9SQQBCMl/0PJ33H4U5JE0BpnjLjl3eUx7jlfImmG3IfpWWAzz64wCb6tqCTRew7Yhx4vY0wno+yYqzv/wWsyBMqrXXJWpd2nIaSlUgdKa71jFx8stzLloRe5+mibGqF/b6iUfbxhwV0s2JdIIFP2JBqi/I0aTkFq8Gq5u8mc+CSwzRjUxH/hLr1K/6ntNHRj+L6HDi/cNweP8yoahtDG8Kuap0uE09vOIe23mznkdyKSVL4x/GNKWf1ncGY7bDU3DIhj8je6LyiuilcjDxigL3etyoAV9Z10YGHoqsmVQxq/Pabf6u48MxOQeZNYhWXsA59JzQLIJNIpFg2cFflABPtQ/Oai4wSmzul5Kb9khgtfWHciOxiMZr12p9mevGMhj2wne1KURzjPlQ200a4S4CNYwIsZTsPuqGUECKKl3CO50xskUdQ913dHHO6SHnZo9S1n1h77Sn9Y0DJFf/r0m/phptLQaiCtXxKjUnmVLbiPxbQzL5Kl6I9XGLRrE9C1WKTKBR7UJsHRZRU9Bg+D1O7LTCgYCeM8PCGnQ==';const _IH='6e1a1ed5d1ecf3991307a25a548de902980cb60455de1e3f3af7c27dcfcdf101';let _src;

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
