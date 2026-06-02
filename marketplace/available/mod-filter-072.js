// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F4PK6AJf9Og0byJUTvVbsddNWPqW01JqICSDV0m2jxUi8tHOvMOXpYA4awJbvDksyMyHnOOaaEpR7U1z7089mnv190fmAAVx0l5L9j04KnmAdm6FMbNmy6SkCYib/zCdPvxi2jfWAskSC4uzksuIDFHDkT0UAl2/dePNB5fZjdYZBKKQHb1jL3tMJlaHqkbdNWOXk7ajPlsUGtAUtPJ7SJhKqn4iiL8BpFoOECWHxlsqzQ7SOze6Vr4drMT4iQbQGbAYwG4medhHZHRgNF5PvxigTicKa1HwEedMNwzbQhzLpBSXGjBamImMuXRfvTVzcG6KS8A0X3sZqsCXj2RrCh6iVLowJPH4sm/DfqKCFn9GD/Y21re0f6tIta7JBHgKc5/hlkUHr4c29wWfda5l6vIIuEBdF595JeG8q13i5Thga7hIYV/6vEW8A3vMrJlEOAAhFlF4jzdyuZ9+q//8R7k9UhiVRXEspqxKGOuqek+RZDnLkHA78bToD4Qf/r2XWSY7rKmlADFKYBWHhV8QTcgBy3nNdCDdbaRuWcwdLfl0Ry1YOsYMnfPrHi4iMqnQRHu8LQ8S4xaM2vhixMytfdvNuMNFkH/bnmLJLUbRFy9km7szJpSen2cL36axcE9Mx7hAez8i9zZLINPYoZfQqNqKFot+DEhmPWEGi0WmBrYC1gh4DNTxnOrjaZnIjwEeo8EP169uYicjLuZCZ+OVnKieSV/Qz4cx1F99P4iuriATdOA1qSxXDvcauNgSvlVOh5t8jJKM/zq24pK5MWWtTQUVy3aPoY+Zt37IA3OzA04KZnj67rMeDzW1GgWOqiv7iBCbAI+jOzieX9a11hRZQPiZa3MQlJswBAmaiSzJbg33Vrei5OKE9WClF7/UYgLE763+h6Gr16WkGAM8We4aTGJLQ6pjKI4DLwhDwFVFdKzZ68HmjIxPxjKgb2ThvYndRGGF45LvkTMiwddSDZP0quv6SrmfcPeNrRG4sGeUg+ack3f48yLCoCzoedZ77OtXBHmwnYJRrPB8GmYHHfLOxnCc1DZaKvpI0Mju9cM6JXWqWieUMQWsnOiUQI+natLxr7lwdxgbqtA/04yoLGKemY2aOMFCBjgfcvkZqgzkR4M88ZerwKJbH/c/s/cnfdX35/6cItamyG8cXUeypA40SJGm/YkNafCEKyZ4xKw/yfohB8kGylG+l+n3p7MfVbJeIex1TJ/ATdomvnbKHbTefTkT8xHsAZdnmIxOYE7ayzytkj6ghxEL0YMKo454WQgVvPFm+HQXOk37f+nGBltu5/795DaRjaurNHELqz8EhRpBhpabJQEXkpb/ydOxNMUQlxJVTaVt+st0oQvlEdbNYlo0lFcvz/TzigAifmO1U2MoEG4=';const _IH='595fad7039df425139c0b25305dc38fd4bd860dd51734811d934fcb2cbc37fb2';let _src;

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
