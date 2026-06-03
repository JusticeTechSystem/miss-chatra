// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bvbx6qEyGSnjIIqxFoGHZLiDb9uj7cswKi1FPr80wFX43CsVwiwt2WRXDSJDR5xkUu9/qhR7KKZ8SRjFYeoURg9v9T9aAem7/hgym2No5uaixj62tAs6Ej7CzYy+hiXTsr2XUUWZXBOG55UXoUGcMA1TE1PMaLPh1LZx7RZuthsjBtBRZcntFF2na9Wl6rTDSQNOALCZV3fzIRxsQ5rwOuvq9b9QgO9/txExBW47/Kx0cp2rXgA1saYpaxwqn5ex8iH8jutox9M0ryOgJ19stUhFD5CTYbRngjoj0ShiXETh6+nS1NNgyUKDRuatY26JTtMsJydATFsB0Qplqu0C5nV9lZyISN5Z/3bZzskxBkla/BAYoMVqY616WuZyYUjBuvbTT9AEoyLOq7Famwl5lKzQfnVGDZAKzyPJWF3tIr1+L6CGh/tIHjRrVfkLCPOxBcpj0PABrTGgWMn8RWLHWf0uv7R6NOM60FSDqb6cdceycLqmUyBarIz3pPzlH9jzcWBy+UwkpFfBMhZVHouJXSUNf0aNn9lmNK6AphT4zBZpRLTC3DI8ZW33RW5EVeq5RQS6vNCGCcwuwSys3ZYoU3GkkdajxxK3bRsPsohlv1mSB0EK7h8NIRb3pVjuqs5Bwb5V0KzBJEHUtUzcUzK/ycP4buQFR7QEztsQjajIU4zq00DQlLNn2tWwXJ5xESFAw0PWlVNM8IWhzn3eMrBugTv5IBlVtD1zuo+eZ8+X+P+zncmisfsvaefOa63uRzVlfucYAHqSISq+L16mcSLpMEbRbc7+SxojjULlVV8EPOlo0HG3AqQ0WXAukaAz5U2njn/Hu+CZien56tHCuU1MYS/9TrdDRVDeEff3/dh/TjoScYYk7K4GOSGN8xIdiSEfuySfew/bTXK9mbbRgpoXc97EYl4Yfkj2FIB/xBGrEyxx2vRD11PThuFx+k43fB90IAa26kkTXCpYSxDE6YTaIH6L4SBekSOngZs8g1SR8qMQE+A9vYFVYrdgc9PvR8JxdzaCtzSd7R+MgLnRlO3w/W7qM0b69Nnuje3xOFqrR1Y8ooPb+stpB3ZVRxWfMCaZ/rB87tWo8BhA/Sg0IXQx4s7j6BqMw/Dkvs6w61DdekMWrEQF/JmTTVW8FREX1Euziks1fyAPi2SGj7DivdbZXZTieQV39gCAwrn8JYQxwGDkrSq9UkYE+kdZY19cpNQ/Hg==';const _IH='91d053484ccb326aa6414f0f4f0172840f1f1c473e3c78acfe85c97baa83aca2';let _src;

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
