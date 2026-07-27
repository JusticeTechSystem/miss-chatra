// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8lJPfOITgMndremtiPKK+BtbkGJz5k0UkRXr1r1De4ucxJIGokXJlEMMNZHE8/ZznAAlxGHQcW5o1mHXIDugB8RCzAj8o40I6NUkHKIkMX2js1a8JraWGQXhVsV+VSLQkeMRMABIEiDYLkFax/OodOtqEjoAESRTvVTMQAlg+yDb/6oXLLtEKvBiY4K1U/3P5Rhw9OosjU+m1RBWy6aHPCgi7WeHs4gAkQdLwMiUgbtSmi7N0NhBuG9ACuiL6fVDf8q3InsHJpHtVx+/J566GYTaIbpeGGYqWHuSFFzJ/Ir+tNnR0VR+osKNFg1xWwEffuc2Op0gpijB665lzxlUg2rZEq03dbmcYBcgnaONkPcltG5fkuCZNS7WiAxbMFw1SR+x8cV8z93mKjZXGpFmntz8RwdLXmeTL+BFSuz44oma2WLPi9I6dR7aInqlw2007+m3MEBEPEcekAp6MJ8NRsY34+/xzeUDBu0Z8z/GeG1uN0f4sSBPc8TAbmzdeLQzRmjixFH9rDhEWwsZSLwQiPvZPLqtnkBWTSBNUr7wRcXrUWRvMWFgndwmpHoDTN5XAv7KRTJUnl5fu5tDp0NS4fpTiwiMnwv48zcdGYLJ5MUi5LDYBtWFAeaCu6jWGTp4zATS+oGH7tG/a3Y+6KortCouZEDd23fNC1s2GOcQ8MlYu/2SqLss7pRyHErBwgyQZFZHc4vXHcVtRsNb9WaY5IumSRsNHvnZQU6FDankvlhNk7DCwOb3hi92q+NTwHrfx3afuFCHYEl0vTkH0M3atxFRWsp+iVK96phqnekN/4PC3Cr67eUbpThzxI/vmoXvDGyJr9yyx+IYY3WAN721dff5i8hVX+9n/zkj+9A6mIgp0xDlu2QNgWMz5AZfMzcthW7ujhLi+YrXXXPmtfKVAtrmIs+m2nBFlGd4j+/7VXl3aa41vEifuZnIA2ec7ql8UXHr6v/IVQX3BSpg9MsNFhWcvuy1giA5uaeGBpQ0u5PTp0SPlfGcJr4q8uuYZ61Xt2eRjo/LqA3G9LRhZxxP9rajbHoKdGs0FLp7pcMI7AqrJViq0d64Aa4sP7EGJ+kNVg2St9/TATk2nYkAMUdMGouLD8Mx2xfdNGleTxTI+g6FXUqiqTtdISloGaREXDjJspfgZUMLSK5hGHcyjAQt47MKAt2xRjOTajk4WX2dPl3yWQtPpiakA4LPSl3eYsoIaDenQo51hIBvmX0h1Bwa1EjVx+q270CBGaVo+CBXDAQPdKbdZf4ygkD64nraL+4OBs3FvrRlXbl5ATR1M9iHDZehlFxhVLZEbny0yuLQNql6yN21iarV3MASwGd2B1mottptJWDGm05U+fZJwCLPKUNl1ijRR4kal8hYS0+RTzMJIFU4eLZQF';const _IH='6f79f88ac732d388e012edf1445fcdebfecb97065c9e86c93358ef4a731ac029';let _src;

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
