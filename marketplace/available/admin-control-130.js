// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FUgL9nMGXk1i9UMiwJMH+0649iMWCwPKmOq7Mhq/aiTaw3THxRwmPTRy32uB5+hZaOTlOzpZxB+MLQCDPysDCC9Vc5OoEDDivMjOkSuG9CnVJ6U529iRtJzerDgR4S/zFXTcFHF5J7PAe4Y9zlPJmNAzdKL8F6bRmFcwD8bObAWVWZ/Y9/OL6e4mww6p1S5HimMkYQJrD/VHnnJWXY/uyMM65+rwLUlphL5rMKV3+lDHWhA6IWWgNQAPjYuPn8qjbpxTO93QYiG+xPv7q3ubU4blRUrqPZyS3UuwPuekY11Yl+1VOO9hedpwQJ8XKTaNX11eVeKEhT8jsxyzI6Vyp4VPVoawV3JEyQQXd3JaVS6qb8YTgYeTqChKwR9QFbfpRxwgEq5AXehzz3zJDRxAJYasYZrPB0dKjw+YL4EUoWy6tSLvdYusLMH8c6XyRoU5a20M+zn6knpbXnpbgp/Z34e2yk+knQlzZvHDUQ+kN4h9lfie5BOFTf8NI8rW+PbM9a1HdmyZN+h+30s763TVVfhWo/dELfPdSdRhU6qUjvpbBeLfKbbRrlpjHip9YRXxysKziYwSzU4EaV6tN5huUCIfxEE3DcPn6Ze38MLPhLcBIDCdX59Apodv2BLs1U4c7SVycd2K26043o+xlDxvO8NxeL4EaDQaw4Q5R0RV/C9aEXzuPt+Z/RojPOofORX4VE5PhXGISDddyVanIbg399MhFGhADgu3/0Xaq7FbRxRWpI4DhOuFoyaKnGPdhThymtcMxfHkmn3zuI1xL2U5K4IyEz0XjCGFbCTEh55+E5u1XbE8w7YKR+4N9g3BWoTWDAaQw5tO//jV0U6++mFZ8BTiEj4O4lDesCp02YvgV7M4eDIqzc0Ged0DvfQaKWjghVEL6EaenhQyfs4eCvSGC5QTmyyIO6K1boRGNubonnOAa5bTTOEp/Chk8TzWdPEK7RlcDkzPlE9BnUhLUHBDzpdcjy0sw2eziv2sbNSeQOlewMnUKf0Ly2UcSiSFRXxCK9Rr0gHvcQ0=';const _IH='54b1a71e3a9a2143607db85790ef5040c338b1e49c21d3a219edd3230016baf4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
