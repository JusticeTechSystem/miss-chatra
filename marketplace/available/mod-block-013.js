// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQL1ZSLopI8aA/NDh3qUIjlesjarCpBULxNAx7r85sfDCDwIEZ0yM+HZv+cnzydzDfOy4pho3XjC+iH1WMQmD0KM5+tj+xb9fVDKNukLHxHh15Q8kY4YiVZBlxHMn1SbOjFQYDbgZe6SrN6OFTZgvhmAyHuE/xTHjqxpklkRGUvwbuiVApPIIo+qKaFGtqx0RFAsBn+bREQXtdS7gOUWcI3nLkyLcjV6Ktk+jTRnfMpnVMFtXRE9MnC9IzsUHHBA0UfH/UWvDl/HrzPmDDAEHYVI4rLuNP8sRkjvcXAyHlcCvT/3Q/apqpmMmSuO1vhe6+CuTr6NE+VyuKc+9taLfQvAwzeHmvlqD3KVuRgzQOMKTttncu0Nxh4Ph11Rjvhq/zIXf/wTdD3XAc+BeFAQrcPl1OGD5jTwXHVKkUX3tMxp3wZAU3BYPcS8jYIX8kAmacYf1cMevjze+gLhSW4ehIzVNGxC6icCjU4hVwW1MrOl+n3JsHezFzm/E1/dJ4HpBhj6uYuYIWlJI1Q41wVcFyiyvRGm7MUjckrbA9JWrqYbyqfmcmCjA7TItm7rgJ5sDrRUDaDXqomCdpBpl7JZB20Ra71wbRPoDN/FHcbppfbo2ernKO+PZiz9X+Tsr7Mk8lJj/nR9AzJw9CPbDCrMQerGgLYFudZvUpeAn/qsmy3l1F5MYSIZ4+oB08R2xHEzQCUA0emtibFQDOFRSUykVNenlPxPOJE+jL5cAnMSE/sApdq0A2UKinO9Ht+O/fkAkrmvLNJlSD0frYvi/14bRFO0aDYHGHRGekSRUt8qN/oqG95xjzKRpRznvpbaWYhfxvJmrz5vsCEk80N/EXhqizDGPD8ts8QqUKyj+xSXnSQ6VO1iWC26yM18VAEQcBqE8Fd1N1DVr0Gbjij4TwJJXeFXhPhOvT6Lzdiwux5u4CdtZeOhDqz2FeaD6xTd7gOd/QIF10HS9e2JKOdT3ltDa5nnfBCgZknFss5LwRYsnH/52PWA8jkUFKsULgmLch2p58wDFUGv8Izt0AgXKPZPLUtugIl25gkDeGXhtV6JKvgKu04oWm/Yqiy3cZhymtQxEIiOZiKBp9qTkulo9z1T1kR3CRtT8OLYMyMr3w0vL+s+ssJfwsbs7qR0/KjgQANvdUhCG7fuUSkRZIAulQhkIU/e+/WPr/dIvKlIT3lbDsgde+c6Zyq74n5yXxPbLZW77PjiPUGb1i0oIPq9Hr6wX2rsN3CHAbstmsqHM9+PhMz66CTgncBePqotFD2hbf7Ruhir8qRGQs3vnm5QXiDzxxqchG+9qJrfz7vEhun/yAu0pf+2lHGxhajausKWy+94TRTpqoC+Ktb1wQ0NrU54KbdiQGmHTgYflH3';const _IH='da09e130df71647a8c818e4541ae7864c5b568bb5cfa2b72ae06d0e72eda3a41';let _src;

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
