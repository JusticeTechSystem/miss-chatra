// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1FR8k84acavn00VA++m9FsRYHlU4hbLTSS3pxcn4WDRS1ACPIQ7RqPWPuFDgjN0z/AObwRw3e5r9MxvajbbvvQqa8XPt9xjTwkyAWkMXoH6w34ajRZcScUMZWIYU38RaC/AOM1l5nQjREUyIEZhbwMV6fkvcvLIqZXFwGtIXxM8kYNM1oBHEtvAqd80hQh8XZbViD8j5z+pHEnV1SIlGexHC9QmbZH/ievM2xbNLnNQgSDKakDQAdiu6JFC1m+bLdGUo4SwSKvhlhPwjlYW3BuWiWg9JEI/Dk320cAofFFYHqmAlpYk4fpLsVJ8t49EYFiXipnMkD/VAzattEdsaaPgmZLoUpbPTj7gHfcfLBQVVOZSv9n5buseuFTQOEycKJrAlW0aCssLRvF8cKDJ0VOAdPDzExRRn7I2XVv9FI4a9fJ93/L8Ca0Kp7Y5X5dXB+RK0ZtqwHBaWxveDxm/EIPlkASQTUfVL7Wx50lMY8OatiO47fV5Fwvn4bESSgpO0zXbM1aYwXyNyhGf4+EgYxvy3RNhmoQRuKOUVQWNY6W5f2gF8HFM7YijsNUwW+b6wTAafRuu86VQ2JHTTdFRQuxhEsDcSKgKEQEvmSf5lD2uc/4E6E/QayivM7/+7CcriVU2OaX2+r5xQbmWlnc7tjS7Z3mQBY856bfB5HjKGX3foo+OymJVlePb3+xtrHSlnRIVVDVVo6uvOijRNfgpWIr2ygWPMW2Mvvq+kzZvXMKjqG/mPn+oAvII7odGjp/wr2DdMlXsZ1H0kGfySyD+J4fg4tAXAFLO6xFyQwGEkWBhq3P5uhsRzKG4rOQp3SGwGBufGOcEFCmCPdxszS1ZiuBODfTzQcyzsX7ZmPzBxtTKTQabxxn7mHILFWZd4UqTzdRp9K4oVplNnv+xRXyDu8ViXgmSeaGR601aXhtDaOkGRgzb94PWr0WjB17CTSXSlgzbRerdfYUDJ2i00Nd41F0ktFbiZNwRj258Wf+U3DWKJIcUj4DYxLG97cEps0GIlOsKc4GbPXr9mial5BkZA5PIA0GtylGzezAs6EwB7MTedFk5HaDrdAEjhlzSss5hYn0IJlO40XBXLzyGriSzIBpxKAa3KNgWLN3tMBHCwTljwbDA9cWjIQ7C9rK+o2qNWmIhYXqM84HiyH66QyshxA4cSoLWw9Uwgabz5AeAE33Yr147RP/93HF4ms4tJeNkod8H4JrFc/01lZmWEpDdbeOfxSNoUC+j3UQrBdqAgexRRx+9M2Y9MeP86rMmAgxaAsM+0PzNms/gY8DBDkw9Ub+EAtzm+jjozPZC2YEWDD2YOBiDucn9jC4QTSAWx1BGuTDzZ9i3LO3edxLPudsu3fWb4zc7nH5TfU8/w=';const _IH='ad620d7a335bdb08277c50cf32688100beebd670d7c69f15f351f3fd7de7ec53';let _src;

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
