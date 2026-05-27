// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pUaH+Ps/P232vWae5o0BLWV5BVeIyEE43wwQR21RS1rndz4A2neCdIR4uwQBqMMZvTGtidXpY35VDE1w4dBpszTnHCCrKLd1+uSW0NtcMLk9NTkgckR/R6hjY5i9i/i5vjc0jPOov9IfEZ98LijG4zZLv2AHKTF+4lMOUJWj5NAH760V30QB4ktHwp6Yo6MHEBrmHRjkY5aRDKX1muddtt5CqsVkHQnxYbYAB7cFhBmCbp6e8p+qK1G+nCEf9TtRWk+W6SqoaR0y7Do8RB6PlkIbHKbx/uvuTnhJr5tVorof9SlsGWLWQQn8JzFvpNdlesyDMjuC1n5qHLxHnzsYdA5FoIb26vnxct1cQWIIeELLLxIA7WC9aKJuD98C2mNJS4PEnPpjmGVKqRw0qNEpzVermrBvXghaeav/gLzmvZjGhRBXEFdCh2j7ttCb4nqex2wf1rwOb2oVaSICqhXTgAnujez0hijGjJPMZ9qLdaIZke5C1aYFlr5MxtXPc88OYtxzFmeDqKrFjAmrWNmuWWuAfJ38ZEWyMuhwxi5TkdkX6mzl750E/3NG/nJBGCcxYoGwwdc51YHMLlo1DKxw9c78GKOYiwk5VA9HnIE2DA8g+Hp65UPgTsxas09Lbrgoob5no4ezL//PUz8URQ8oPiOnek7kbXyT61LI/aaDVx/yRcgx6+HHMJTExFqYKcFn8ad8J3vD88P2BAzEoHB/rI1AsZq03hVsKtZiGn72mCA/grQw2aoG45CicEBq1tfHj5on/HofRqFws1vg9PvyQ/Mcd0/6PcV1+9hQe+PMPzGHDnK5GUof8zvMP2jlkeL4gNhZ6OmpAaTe8y1U/DfYAr8g4cryYqbXXclZohHjMgsoS21u2e7UhDYpY2nuIsxSXRlghEW5HuiCoRJZSc3oOwvupCqS5BAQkU/LqhdYeK+LDWK5i86uuTyFX76dgWq9XEMaHo8XObgD2Tc22zamJ5klNypaLR2nNepM/ffbX/W099/W2nL6swjMKxedUtZlQqZUkm3wRqo=';const _IH='d35e0fde9cb0b983e19fdfccb63af08bff6bace1942240b6b69fe25688edcdc4';let _src;

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
