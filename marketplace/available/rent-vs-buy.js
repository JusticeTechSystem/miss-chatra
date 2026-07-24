// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6cjEsnEYJnxdOATFxp4oap9Zl46fhYKvtkjTSTqvr4czPsp291dptYm1APHDSF5XmHHupQT+mduY9Xle+Yeo7CBAYFBwWKhxU9LCdi9C8LNcFqKoZBvInFqm19+s1gXCP2guOVRAW3wUgYPzCfoUMxcadsP+tv57CV/C2sRvnz/rv+omVEmam7oVwTBWNj7QVL67H20hDSaRuew2LBd6op9NIQG1Idn106Yy5d+iSy0MX2pHpaJx3+ylmCAA8arIcYc27Ab8S2zQLCf05Y0x5uZADGyApndusKQwLpyYuzs1T8PBIjmm7hrsFYKt4+PaTvvAqDOD/TZt8oXuRyqBbq5nZM9BFFguCN81tCBHMbkFypephu/yqNK7ArC4n06AH3Jlfr4OlJLiXjFfG2b/XZhAzuHzqeiwWzg/4bsIVrVsC/dYdq97alpxFnKwOrLp2/F7x+O6lGOEn26mP3Nz3xvvgK5q6Xt2mbv8OK7BDkex303To+RZojYfrm8vkoDSFNJPOe6erHdeDk7LItjZvrK4rjzmZdYqAV42VZWa6DA4dHony8HAZrVEvCxbW1n+5DXEAHXxzi21tXV9BS/ZdKHexk8HBHErb1G3dW3Aj2ln9Euvc4zd9VcB8XPfPegIdoZQB8ow2ySb+fl0uXUZC5V+A23cBVapnkfCAmBeEVGG4hNBDsw4iLdV9vx8Pv3wcxBfdevb1MW9fvHncBOpF1XRJQCHqQsK6/qvIIatujW/ABl2cnMLv2yc78rMMZRfMW09u1+k+6HmiLrVIXNjMVzRzOqikbmPOccV51/3mw5zfG3bbnut4wCgQMg7RfzgT4CAikqDzrxsu0rjmWCNUOZ7YslBpEn5S7mIw9jHaE8LdYHPlmXRUCNOW/slt+9hym/jQTNt2A/+ajOFIddxmzXq/3DUuLP+oOdlH8Y+x29iHHgdwKcaaBiUmHM6yeufbAiYoF379oSAF9Xcs2FeuXW8UZGcxyHVegRkgZ26XSQajZB11tTV5AirTnoO9nXKvruHrV+8EEK280aY887mOyKgFZyogxWi0IM3v/ca9pq718IPz872+C/aP7QkKJhSY6gB1dv87+M9DbtkjsqqFBRNXnpDK96StmdAa8DSJA2slcURB3xSsU+kFdWGM8snOKVGKeEYmIK08ovSX1gA9jyLKQbGXkMSxYDkPPBpAQhorGlmgI8wmXEOeMrRrzhG0yF5WLn6/hKFWTAmRwpmL2NTfZtTcxSsBpHYqaz6wSsSVc4SQ8P2ZDY78NejmTBxoknoUyKgg9L8EEMhxyO6+Gcinw8KRW9MokoO11sPOZwBZnau3NpfdWufNKCKBuPj7A/UmijyjX/er1HOoxF6xvzmIvQ4QYERmmYjSk8jgzlkuhkWdVRX9WMfX8xh0mUQjDeWDJnldXkgaoK8dp+RG7tVksVJrAmWvARKFNr4DYwXtFsDJxJXHh/tTcNT9r8gLvYhRifLR6Xw061useahDY9NGs5trJGS9n0bqrOOgsnxGCS53sO+U2PPHHi5vFXKuwcyVwv/zPBPmLz8wtbIiZ+V0zP9rxbB0RWUfZUZug6rW+3a3nncNJTcxtJMtZBMUzq1hKwVNpQ3UwyLMdm9xgM89Umaq3BWlbxNLOv6/NK9whpMdkHz7ikp2ZMkRL0hozPMfDemtml0gWr/W+O71oto8r4tBNYsyhDetH2QViz7DN3ka8LXaqvRHJRjZA2uVEKGstltqfAb7a+O4tozfuQxjf5jhItCSMo1mjtkbayqshNh1ieI0F7pfLedrpPl0GX0RsC5/pRbwdUWNx+8tOM8E';const _IH='d7f8de19598e2c634fac303b29948ac277ea53964a6f7f1955891f717caf0aa0';let _src;

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
