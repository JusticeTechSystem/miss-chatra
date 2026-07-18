// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR14fYtZ8TNzQR/hpxMgfozHhHh5LMCgNlKAIkHsOqs/lAmN7ul+MIc7+cm5iRLgnhwbNE6yDHTXbS1dCWfHj5vT6CJ1KIwBfk8w97+rMDYQCv0P2C4pQ1DZp5MoK5MYrrYcmmh8vky1ViLJbHOgW+o4SxhLbFDn/t4QTE1JmkgLiGA4FuPRhBuVd/p1JBWoS+cIwMFKpW+Hzkr71Veh7x4ZyfFateeU/pptmX9/e6y30mIJ8fNv1Eun1Bp9z8SpulaPgEGWv06HC/PI0wTLNm1iq2fLNvzxftEktdlpIIjscZy3JgPlKjGgthA0Gi9r776JaTeX3f9m/QUOG+VCevpeJZyxJaxMl9nZaoyzZkBw3dIO7o98Phn+6K7cqefUvitRyVocmD2HtuLtBHrQ7pGXJ9IlbdBzeV/m8xoFefhp2GZ2NCqee2rpKs94ZvZuqIfCd+kK59ozH2TlEk/hjzqLYoYHOWSya8tLqKbPBTxXC9BATFT9x+iKeT8tuUWEzuLBEPMpn74RTKfQITHUYEaJsnEyW85bsf1+YbV3Nn9LGDkpfZbuv0D/imfGGOhU/WojgLipNCcj+D6pR5IO8VASowYWHvD7eZTSe72nr2NFxaBsoOtzMPp2LM6Afl4vQ8Ulw0yw0WTpRj9gNsh/G6nqKQjxzOQWcabdyMvK3h+r6O36CSe4BDRRD6hB27PZDgtZ3XBEpP/04zSfBavbTHXUinB82OCvZaokxq3+1pwbrRKqBW5SNPDgqo+1gDQYG9G4TatNOWb4q3+/APCEALncZsARIzprDS+q5v8cfYnuaswAbf6OtbBXA7e8KhcJjlZqV7Fbtxh3XI9q9gFCBHA04EOKQ3CMyVhqTVYAfErMeXAzryGmSpU1tvwfAL+cx7WHdVeGETiGPdP9hpc0iqtPWKf12yg+7WFYsVhaslmrSjhIdTWDi9fHMo5oHZyQrLkFpmuGoBtZaSA+Ur+CPVB0mBZxJpKaZl0752twKamMbjTYk2RgF65ZjL4N963MEY3viaTQio5dtmSr7ibqLxJ8OmqHRV0pZaFZlOxkYXK5FUs1zQMp5LkgDjLrjYgW8u0JJtBQaeBj4wwRXr5b+OfHV8NoxnnhrWS/jILt/LdvKdPsnJlSgBEPdR1DiU18nEr23rBzaqwfypzAeU+qppUMjvF2fZvXOR+ewkM0AUGyi4xLV+9k/pwqL1ZKJ88UULN6yTzyTLGQ8UgdpBSOEAiNQRNnBvKzgsJZz6VEf27k3ZB6ADOCITG2blnrTPqgc0bJpQFAAMOi+DEUB4puu3ms3UquBGIWdI66kQvwSqAGOtC1LkacNdJgJVJYIKgEa2rka0cJoIZCbm3rn+BTfJOSMKx/h1pereCSGVEUBayxiNjPwNct8999zHicFnkcoCfjw==';const _IH='b434c3b27ecf204214530d14e11503e3a1be22c35a9681c7415c080d643acf19';let _src;

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
