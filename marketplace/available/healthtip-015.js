// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sVTfpSvpboLMxllOu1928+03IJp0qySXJjC1qhODWPYDCMO8/QnyTHmma22K+hWx6TM9pC3J5QBsWpueXLsmbOpv5dFYOKUs8XzskkSjJjy+NYrcyv6SqJqG1JEkq5J7airNhvlJx0kh4CTP+mdMXjDCJjWBHGhLzuee3wL5+0StrpfVy/7HOP0njWqZzHuounqZfzh99Z8hEhu19rh/+cAXyQkr9nM8LoeQg2AiR0VHYgX/G8J51IrlkLdP/ILQwFXmDvSPsXKaG19JFvTCwexMVGL5/61sp2fIHKVSi7pg+ciq3Ii/4Ckoj4TIsK9oS+oEOzG73IAlT9qZQ3TpLrqppRhKWPKHuw7HK3A2oIavm50tlSsHEaIL3A++XrN3oofMZ3IzYLSlL9h5yQbwSCCPKqZ1f5Wcd91J1dskYWdKEZT+pIylT1yVvALPNx1II6IlpHHIq0wr5X3KlAEn7VztjVw7Bs9W+/8flrh3s6+bokt4507LVX6Be3cE9wrmdv5wV1+iijfYHHV6oMkPr5fqPmsMCXkf+ygbMf26X+QuH5VgtNmXN+ivvvfa7LrAWfhRyFULV31LKQmEenQRQaRsPXmMnkqcaNqQ4830TIGbSWF/oqxdjBMVlS7nwTTyMpRKexH4JU2Kz1fqHixgPeeFQHOIrW6DuFvQ2xVv4ChwAWmVjhYPLl7AnvEI4QuPwxwiRT9hh995VL0UN1uDapRTTA9+e05Gx4/GlSbHizdOTySQHmxcVt01AD2045guogSQaARBIostYnlZrgDtISOBe0Fph97STpouwKYCKNhUOzSaoqlWlwbVIRwID5F3PfHjTu9GWE6HO98GwrYWvZFXfrlMNZuJL541l4y2L3an/T0VbC+K0ieR0ryirH91xz4c6PhnDWs5sJedMZtc8IzdvTLAqWwZu2MRibInX8QIVh/j4IO9vH+CjaA=';const _IH='5896f0ead80ba02084cc5696ddcfefa84409681554688690a2f796065597edd9';let _src;

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
