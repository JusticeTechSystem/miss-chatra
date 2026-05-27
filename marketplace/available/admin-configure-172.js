// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B2E3XpR6vHJDveXr0Y3UMWv6zhYxzUvS67TaqAN60gTq/gNiXI6pDBuYqu1kAAbOJmwvZ4ekDF8A/h8CqbwYgXjyeb4rapMXUdO56B+klOt2Tdv1J067YBa0KndD/EBxzu4uN0PGv/2rj3s1N7m41dthEgIe26r0yraDRqBiO2Au5yUL30xu0rvJn1U+CyV30UIXtm3P7dKk5MmHUqRC++e934v3BjaLu6m9FEHG/gIgY4y8aSGmZfccOzWnb222RkHRLrXKFrWNiXZnMWW+peeJNpGOg8aONH3FgYSPLYwm16vw2pXJd/wb5VT+9TAqeDQGUbEHw7O7y7InLsmXmyGBNSaiyFz5afGwUJMMfe+uA0GSk+jI452lNYt/avYT2kYwUcxHvQAJf1G+jNo/w96VDR7wiSeu1cWvi2vB+wTScBz8bAB8OV0JNaBe7USDOT9g3BEV+2HZXTVAjBtX4wWcGwoZ4MVWUIwZSpQp1U6EburpnuK9MHmr3Leb1r7vpSuZLs7f9dkWGhisieiXjqKbTLEPLa0qccoVaHLngjd6T8CobREw5ppSRpfUwUR8lm2GJQl3hQZQILGWruuK5/R7AeqrmdN45fYyjDgX7lcSJlZ2NGZsAH23fCJAiKy2KBlQ+qaADigB/76FSNQ5WUd8bA+JYbrZSCgkMh0OS1iHP3um42tr6x2UZ4zngtHWXCJdYXuZK2o4A1czY2dTC2pf1EK71MV2HqH5egj1F3if3QQqnFVOQdt56a2jFaltkYgaSrLhqbIA1n1AS4VcmxpaR23Y4FmSKdE2cnYxwR9K9igU8wunIDRuCpDitVfLZLKtyuneeteoupMSXWfE3W+ywFuSh7kVsG1Dn+W2hhS6mekLpJUxECzUwf90ZXPo3PJFiQ7/IvMu+oEnzdueB27qFhH2jShHst6XV4chllBlArPz4/ji+DTnU66Tl6/L6qSHOAifRby+12jYgUIu/DItrrqK71UZ7SjEek+8fSZYLFV+eqnByF+cHimP/MEIUY2IqDndRkK+ZbQsOD/vJ3NGwagM1g==';const _IH='ba64a1900fe5bd6122e1fe5ed03048ad550bb1b238046e5a24a8a2e94dda7b07';let _src;

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
