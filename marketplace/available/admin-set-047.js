// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wxRqbZ58zx9I3xIRvD0hDpo1jJitpOVFKPAfWvxLOYVEiJ6Ceb0D/NKZO10kLHREXs3s3VfR1jJXO2zMqXgQqSV4+yKTgDsxpdniM9EYmSl3+OxowQDnI9+w8gGC3+wTEVcRVfiI8iXYiDo9sD6gE5QjY9GS1oU3SdIvSAb74W6K55reQ75DzthiHnmFHudQuAlGOmmHrFXdKk0nBtEe1YSiPpjbWNENRB8vd+SXgaL/AthnxgpPaXwA+Gn26z3SlkAtYbL5Hj/QEnNXQ8ek5aBaSIsRqAulNaFvMJbJCwstSHnWVZ9flxfSp/GB2968nwdHCj73dMYZvjbTtPhkezlxMZlFvYTCCStZd6TDrtL+ism74g9JCchErxCPoEm9p+W8yl2f+FZJQTkyRNyfkbjYpSGABVQpyCn9s9DOOPlDj6tGdMrwRPhFqWxDXCDHCXimo5LHaewnvDzkw3Taatv6kblyFpQiSEwdiIr2v0YT2Ia+5j6vkJ2bY4dRl+N5Q0EHsWRlE5o/MfSslG3KxB3UdSM8XGAlJjsBVE/ibCyPnucZntT3B3TTuVHqplu9MqUIfzsJJVsJXu43MunMq3SaKOB54QVXpySZVASZYbSHXtqpEmo9GQfmGTLgXQGySaYZoRupW/4Im/A8JbmmJ0gdXr3REQBozP3ZgU/EQ2XNz+jIjlOkk5RVsVP05GfhLivEkFb3vpe7KtOTrp3VcdjZhaKmQd9xFYhD5Jobzak5yBQCdfawSVqD9UkkXa3pkIJW9oEc6RPCHV0PAe02qf2VNgK5jjvpq24QX2RyW6oPl8inC/0MObVRuSz2iZfnURKqmNz8hZLBeCBWeZXReW3aoLYg9WMzTuTNR4ftyw77KkyRP9s6fbOPR3bOTG1d3xqB2QwIb4kLvnMbvcU3TldZTgHHmtAPJ4VlP+N6ogqNdLMqfeH2J59KBm/AQWiULLOB3UY0ZehqU6ICRvYcghKBAhqACyQ9';const _IH='f2dd3e5d779d47db01839e9e617e562b20cb4136aa7fd4994908ff0a63f1de78';let _src;

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
