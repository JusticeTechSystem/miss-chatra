// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='70bDo+8C2IY0Cl4GR6FE9MmNiHTInb4vCnyN/qC78023x0PmlKE5JRFVaQQiu4yXA4W7mejTIKFTVkFVwwAcAq3K0k8EGtLpv03r/EwSP/QmlbsMP4DuwJSBj6m4gVK9XZfsTMjIeIxscUUHYt5EgDgkpmBJAmbwuYjVGGwYQsxE75Ibs9yJ6ZgaCUUlIoilHG0fBnht9Af1QMcNO8/9W9+PeXvPAvFRfq6wcAHp5HvdddpmkRudcvyVxsEkQHTxAkfVTckWzdtYnKUxQF3f5aCoinFdVqbovoyWf+socTBIuWOnufOHhHbk7GHKGfUs1LkMg3NFmA/whLviI3LjTeh8b4NJgGfDGtn1NVE4z/FrFKQTJmkyCrS5TSPnpMpd/4VAPGqvHF+q9Fsiu80ztck0BDqM/W4iCF7fMJc0g0SbbBG7jE0/yPNUaniEi+9SXolnqxz06rlVow9cwumv1Y6RUJ1Qu2JULaokOZVWLnbafiSUswOCr0rb/ySG9PnrwQURZgV7hgRckqU/jzj4XL4aV+hdGZT8W8eiU6aSfN7hq7ROAcbUzQp21HQNdfVc7+QnV38WVxebbMuuuKeDQHOcoYA2VfQBypqm2G/K49+5dMq/5Y1tXOv05lsJkXE0DFw4GoeVSYChgk9eHOzNAAeWQ0eYE7mfhbJZ7cBiNfGhtlZhpONlFX/2FFkWGKj/ds+zgjvWzjulJ6HIGjnh1rAXPXKSCPvljZB5qpE8eXCijI6sE5I=';const _IH='4dd894efa207a201951a996f3d73522eae744f9ebf9306007b04f28743bedd65';let _src;

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
