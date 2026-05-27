// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gc+xu7fZVHR6opkJkW3K6IKGuY+0r73VmZsdGO43xcTrlcOyI/3ajq0C+7k5lWGgQ6twjkaVSVv6mDZGubJz2SqnGlL3eap/0Cvk7JF5KQlwOPN1iiIuGjjqYFYzbbBcldG788+54KiGP5m1e3qi2+hlKHNmmOsN4VW2Ss3oV4qAnRquCXFSSLMePT9CHRORInENmi2gSOgqnOE9DhyML4fsX7LkCX1bEsHJMBIqGnchpt+McxDhQpMxaT1IVXdLTQStcnLIcx9Mgfo3fYDH/mhI5TnqVbQNu1Y6spZI4LiNj385yd/YWeUsqmd9y+MC483u2WhzgjxDJoV/gB3BstEGF4j8v2DNPZn3YvTkcM3cDCBv97vgUPPBhUhnZMCxDnHdNbIJ6+GleZ9C5QbaIUwtaPL5Rq++DufXSqAdGxguJevhtbjo3JqbwQjGrOm7ncMow4SsQGCnwn67wmHQyYDGZKiBsAEeLUcYQ/rG/meUGRp2OWu1qnYclrePE3QdGaadJ02knH48aXYWoyhZo9EsG23lKkb1+ZsRAOF1ahu1KQpug+T34DaJOfgdhSFo0JUvT6jCry4uNyRjjmf7LrvYNfoGleQLm1sSXmJfzDx2dLpR3PKkhMT3KCS4p6gglzl7AyRCmd6v4CXjCzEB9dtZV0Cq+r6ersJIJCpKRb1kYEn3M/3XrV994jSJf0e0pjllzz82e5xMo9iC9aSfEqKgmw2rvyn23cf6oZwTSZFRuVJMk5gxwskyn4W+bA8SvQ+ou8I9Gz8lTa5neTR6Eos6KjAB1nNjZF9JguU9g8Swzd6EqNdnMeGvaMeBhlC4TkJKHTnAWEpsypsa+sKBZWUeMOYqBPRxtyNzS7XI3T/i+Ii+nTSgO7MfUxtNqzMIkC2RuX/jvbLr++v1U03K2GOmkuVWL7HuHKzkrVlTloTeM/inGXz17NAdQVGOPshqltXdUGxGlFVKU+xvxREa6yFBqFkJIscfzoTtN5wDULM7IOWTdwZVaklZ0zrFA6yJx8XtZAUGpXEMxB5NT28vyP4yIToirRxJJR0+PcgzCuvBO/S1lpUVRyNk686xL+mg5FDq4A7XOYuOnkRjpcLblqKy2ULDWYZwpqggWEsDZLMviVqgOozp0jCFxE0Kb8teukl53HTdockVX0fNRb6xGrQ2BspSEAY/kzxXuASKXjoTK0rh2XrfiEUCWAU6TwPt/17cril84uvlHfmoIPk2j2S4kFJ0Iz39XlxdJzANzR+Z+B5qH/NTMMIC3fPO6nuINGmY3nkSIh24ljk02ypv788a3Eeg344Tcn4AN9ZJEm4oOfeiPzvSUa0l27def7UKDznFegi4FzxSbbptUeBUEcFAw0oeon2X/cME/3Zj2D2toA5T3r3aOw==';const _IH='33711eb33214eddac32d1029cd06dafe72d1644cda93d4b8f86b2b46c45e9f06';let _src;

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
