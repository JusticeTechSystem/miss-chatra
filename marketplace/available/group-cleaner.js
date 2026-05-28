// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fvGiRffkdp7CXwCPe4gP80BoC1UbtCJcskNLNr2xNpZSrCTOyEmehstT5pwzzbnlSy3ZHfAv61uoPjvMXJKF3pVf20rc5JnmvgjssLueam8lh48Ec8L7GAkoUJDaRmB4uJ2q4MCoFriNQLS+Yq1CZauSIhel/ngmIc1dTo6G85CU8nbeA+zp0xbrKgdUjHBlpWdvg80NPppnBW/Du8o7ABekAYhF7JmTeXGtjNRwBNSLHnNqfuRMz9aWQ7LgiJ6PeY6890gcP9/w3DV2Gn3eylq9P9nDo0BWw12TTWoeqcFVkMgpod2Tn1zzSNX91gFxwANAIEgSG3Km7biVL6DBen/2qh5RzDA8meX3gQ60Z6RrWt3gtYzVfFuRB19f/SfzGiewTVUP55w+dZvbAC5FIlJVyCLOH2W9Y7Thx6RsAzqbwhWeO82XFOzDx/FaCR1lhpb2f+iZPX8rKN/z+4fCidD5plOd+9SLhQBDK3Gl7MvO4f0GOfvFfqYMIOKIgpN7BsvbtUkGFL66sQDJQbSZ2XospNjTK9RQQX7h2ppkWmkBUUuwWttAQgrvq93g9ovoJXSW8+5zaHDeoyuAHolCZGYqs+00vfkayNDMZxcU7xQIH/Zt2hVhL11kNFrbbxV2nZxA3jH+LY1LGNeL4ZZEZjBNjSVlEy0mT7ovNQdFVTyFnQpzMxV1cdPNlg0a1JycZxCju2EMctSpQIHawIuhOC1ZF/2Pk3d0Zok4uGt5511NnASwKMdsQTxc4QUAEUf8/VxlfagabXunFq0ktqPt8IA3SBJcsI+DSet56N67RclkJ8FTXwWkqhlolNxp1meJ7MzmJ3Cxi839QA6fkdlZEXUxeS/AsBoDgY7ymauGiu0AwxW6uGHvmHuga3Rj/6YMjmjw62vR/xe8vb7BYsaYw4mugl5xyahcXRxVzzcXUmcKg35oGiC+qX1e1L0arjBFRafmNXcRANzhaHplzfyaV7RlwW+dMMZKRvE+gkiaZQcT6oI2dwGge8oLFX0zKjf3niGgQfBjAbUYnsb8Qh7IL6yyR9GVVpB4LDGYJCPjsnFlL1k/SZn7Stk+ZeDhHMblpx6PoF1r9g5AEZBfIy2KOe/DsfSAowiKWctbwN07kRS1v0oTpyu7YniHeDrW8x4FNmeehAERwal3oysmAMc4DQvwDkLwZgLsLMo4bew5OJ+AkqvRJaUBEW/PJfEIwN5OpCw3/JrT7yUuVslOnDdejrn27s+jQnYaQUj+QaWSsilwt1trEt8LOFFeuaVwcwF+AKzMAXcJjCGs5+WNXOtuT/Di8VAJWZrUWmGDlB3kbRpDCQLVO78WBE5XmMuz0hTWK+ZKdHQaj4Z+HqVarbFrQrOMdXtiHAoQVqrefVskCDIVaF4PbEhlaG6hRiqSs0WWYIh0TF9MOP8sfJvlnM18vSKLYgN2LUV9YNlgXNL2SlhXEo6Og6hvy9sgbQrhh1H37SFxFk5z';const _IH='4d97287ec8f1ef1c9526cc4116b5f824cadebec1e81d74302cb95fbb3627e764';let _src;

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
