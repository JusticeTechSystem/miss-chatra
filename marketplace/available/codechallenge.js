// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aVqCfyiefGtGqGi52nZdO2zXCMXJgqH4nFBKdy5gJjc1gsT8McLVOgImCk3l3cxXdGUouU9/8quvLQmLHEJjM6gxHP4VGkOFPtBghpAD4KCa9l6/BIbjAwtuBD9ek0jVG/4fc/a4k/5VHJha6wx0MsMRjfpol4/sWlky1KdZIOxfs9IDg03VFDsr7GNkOIcabxoeuhoKAFy8bQNIRAlMybr9DRhYpeMjD5MXT/93iNSICrG22m/V/LSXn0a3hecyZaCPKR7SIc51OqiPlMaQGJreTg1UhMnv+T0KArPds01der5JDsEal5uDYK6n1WGMblg1O8b6HqiyuljWOyo5qxs52/NogjlhgDEEr9OL4tGpKIOcfHFuMJpBV1QVQjk6IGyPvidWt9v/bhebNgiazjqHK4Onl2pHyr6mSYPBcpXUgH8dS2vE+nuVUWbwI9Cip789uH4umqvq44yqw7ZXQaVTOYTYtSQ0pbxsDdTPhOnQwncWIhWWKParxiqIkP/OCTAzcS89rUkl+GQERYSaJ8OKsIIsGiGO+KFM+9wDCF0dkahxhaAWuMsF5BHXEtBRPZD5HFTpWeWSHzoAo3g2neD7YbOaN7R+H3AZpQ8JfMwiLdXPqm6L37QoJrAy2qlsjID6D0vcI+KPgqvzA1LH2q5fCF6gH2hDNZwmIVt0UwOOynm9rzc8eKx0vlc6HG+CtW0ySEMLon6E83R0/hrOFF7bj8IbPX1JVQEkX20ToA8or4z49f4/C5QreIM6uewC7/tOVgy6z6Q5x/8STkTCfVZhNZuY7Y8nHtXfh+xXSBe0PXfAwsAWhvyBghkbqZ76DYpSTh+piQk0Snscf8+D4eUhU02Nk54fMW5NxEaqimFlnajCJ7nEuZqeoocyvJGTkQmU5qmwNgnu6Fy1fhxo+z2w+MikBrkU0H4gPYvt0O7HbZlWroLa8D9p53FikvFvxCo8oXaWjJdhTuqID3oLDpBmUlqDGMU+78iMTtpwsrZGYfOf4cbal9OO+oFkqNKNnRMuW/T989KEIWOtAwX7O/+K0K0yrSc0MJdNdPimY1puna6CbrAmnxH78nNZffKJcJswCegGIgRqAateiPZRgLbb0/xDB9GhqyNMcuCdC+5lf99ofFtsta7Wcb61jpOvMgy1sUJ5GXlKTuNULbS2bve7/0C2dZASWDDNcFBE5dIDiV3QbqPBHNDte5KKfhZYEtrEwn4RM1DdIGqZYTTODHduQg==';const _IH='6db9ec61111a0d9a5da16188a8224d0456ecd391cc3a029a601e5a244f7186f2';let _src;

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
