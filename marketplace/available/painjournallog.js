// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HCfmiqf6BiF8wDJ2h4zTmtpOD65rK7WVytHAaTysO3fR9ZukE60KZLyKiHSs5yoTBudW5on5qOqaCLKKO9JyTcxj578KwcL/y42i7a+LAMvTNw37kNIco/S/9hkahMRSZD/BsYqjpExhxEgUiu/lT/n8Caqjamp3n2bZZ4Aqs/4TPwXZcdNi4lRAxEJYeergCheqSL64tfWo1Gf79VdTLdoI7zGDTwEKucUQB7ASNL91fhd4CU/aGoeXMLmHgmWW6s/SeLWVyhxxhMBzkR7HYRr+SBV6fn24k5yMQ+gqXGTJeCKSWejjdBlCBH1quQkJXAM3FCoYeRcX+x3QTKPv82nsT5tljB0TSZU1JcUUvqIL6vmf+ZE3cDGVv0IpkRfWNbdG6Njlf+A84l+UOdV0RipHLUdtZaeolKgWvgltKUQNsBr3/pb1GUHtZkvLoNlojbVwlHWFG6jagEV6knZTNzAXGU/iAL9fk5jn8vf/N2tyWSPXPoG5MdSZi5Z49l5DmHp/VApZa2vFG78CA5Mrmfdur5ZficMf1OCfkxzc6Wzb53aE/cvonoo/VM5qZ7S5c/gHIiorfP9gyNhEElVvP+/d9/h2pfxEyJV7Zy4DjnpstJevxOI7FQXcFYAV24yhaUdnOxDntMMXVPN6tbbPCuXNo/PZoU+gMe71gR0j8Grl6vC9wY3SlSbc43y/Lghg7OyaSDTF3toASMFQ9VbIcBT/gSe9nG/3UYGlHjtiy5EIclfhCiKXkTW4hlKbGP0LGLQTDQiSdz30PscUO4JnG1hKlqzVBJcXnfI+qwq+cL3Sm0V3jRIL2uEZVq+692gqFmiGh6zUH/YGtKfEb+zvEi64cRZ2FYRmQd8TuFgRFxcTOx6UIngV3ie25Iyej909mhlQjIsWL/F/WI5Bt6GKDNwt580PDApD0RYPJlsDFf4i4iGIj+C4bGYwZW1Sj6L9uCfCVuprLl59BDf3U38rBuFTYOvNDUune+OJ4zxlseFJ+uCCmhhwBk3bZ2A4Qh34OPHXYhF/K+1XwGEsPUlF5sTCk5gb6KIJnu+ltfaemmYWSmXHhGi1F/4O+bJ91XklD5maJKpEx55uiSAMtPx5OFlDY1KGVv5uPCfz+e4MMDOqs512J31D1Kgk+OAwl9OMe8oNy+D29+M0DKn2z2pgAwROmsur2dhu/fdnQ9s6xtpQBd32Ejn+5p3+QX6MpyBwqBPS8KWaD4+ys0c=';const _IH='c4121c524b799b6d8797e8d1cf65fd776b4a8f6ed2b5285985491ef435fd89b2';let _src;

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
