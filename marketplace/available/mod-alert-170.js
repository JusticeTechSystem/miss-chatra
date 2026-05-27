// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cpnjsai2omcCR5QJrYjwbaA/luja8lIEAq2A6sLOVh1aBIgCYDLROfdTHjBUWWF2KggFw/hJHBOzchZ1kcKfRRSjfzOCG03zcVHMvV6Twvy0toPNmp9Lc/DjWlj2vdoQAsFmr64ARmO7db9UxsNaZUYVxxJdY98x+co7hQl6RIi7vxbxj3u6+4DVt1fxLu6yLYWY387RJ5bcNoPhFrRcA+WXD/NPR63LokW5XPmPAu+3OMVwkyj4xMqzzJFUUM8annvsA8Uch0zBJV6V1UgdNysp6wbNo+A9FWks4pmBOB+Tcmgaap236io3NvE84FK9fc16JZr3aAa3PC2anuBtTnDv8DddQsWtDreYMe8VlYpYFmwg7IE6kkLtBln/C4Rxwp68UqilzdiUYhFR8fm4aY5Xce0B/yUOk81HzNIbxoGAJFYdJqlurWTuQn8L3B5DpCpQpC7p0EYblzpBF/3Db11HoqvwJPEgEjuNONowNA0E2/CfWcbDkHdRqkG8L6O8m4MVl2Mv56MOjw65+NEFj6n/U/SlkMGU0vTFnwKK/UiRiqbM+X1lqFRcH8q59SCPOHkK7Amy1A+b2uQxA36ZL4V3GuWLpu33H0Eln+vUsA7WaK05E9TrnAfLiiXOItm7JXv7KJGd7ia925TsU7lNQlSXWcOhYsvPkao03aVSTVIU0/OPAiefeUsf0wILE6djw1FkPZpNTliHAmj6tKAe36v4Jb1NxhiRcvOgIRkrutZ9aqKohHcmJHFofAru1iGshTEFwekzL2hizQspK/wlBlEWaJhLDcqbjdoTPqBWilDt1nQo5uVQJqYiCkRP164SwXUPLmjW4e/4XK93Q5Su42cU1HYAMil1Rj0TvLaCNspZt9oXrG55pBb4XPI99K6tmj+p1axE88x0YOTkvfoDaL5pFLpX+9db7A64vGEh5pc6s1dtce4Pedi+RlG+TkMh05N2ijSZxdgIgOwIb/qJqYYlP16jucc7h+7HM1LqPfeC+keYUI5GIlukqRHX4xeqdQwo/k3i9u94CCvpGSNMSRkV9fJPusgczQIUdedHeOJ/AAFgBssJBGew5wsoE59ZbdtBUqhZH17jv2bxpupb+YgyEOvru2/T26UgKTIZGp76UYS6cY3GxaHDuQy2c9Dwju32JRQf37CXiDW3g0SKMTNxSDJAUVxg1/x2lm+oML1krAAdFGpq6citWPHIl9k0Of3b5D1TkXyKSaC9pBwejs/iDmpIWwZzhsoPDTI0VxmtsPwNmazOap6WOvwJS+lmGvF2C9bYkgt9OfnZXH7K+RLAuTwNX/qPTpvIsTcht6CCWBPJK0kHOxNHJlwRBqpLbuDM83cONsj5ptm9lbrDjZFmujyAmYkLpfQb2NO+';const _IH='15c77142aee9c8c7e78fdc2b21b764f37b12214713973700357b0893a4eec0bf';let _src;

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
