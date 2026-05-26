// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0yLwdMEIw+hfzOnlNgxuA7Ihb4OeI0HlgvFfBw1QSWY29H9Y/y37H3JWvuPSR07BahofuWyhzjLEsRGnncLtY42RtxfeRtqhNvFhKnCbhgTDSAiJYiuWg0CBYTXMVwy0Bkf+Td/b6Ll/3Daxow4Y2j20bGG5LPhK4mJK2nDzhH0x57F+4j8CPmWXIUfxKsY475aOdJT8u2MANkFRC14lj4ORgwZJBROH0gJynh3OrGjmz9tq3qTQFr++nb42Rbddc4Z1x83ZNBYrUSNZxMY7OAR7vlFNmYj3axAbhRNGz1/aVKGhFcI1fQTOoPx7D7VQx1TfVay4/0f3lF1C3cTRL64vSlnT+fLcYb/p36CiGCJUVugyYBH9oS58n8Aqz7bZRvJpo9TAQoDtFmgUAbGpTZh6MbYE7BhdtvLzi3vjtbaM8xOVmwrGCt0NQ0az2XAq2pj8h9Oq5PSmSYJKxnO3dadkhwpIBbakh6jbZgutu/BLFcnDzn0AYPoWC7hSq9fXw2ZK2tK4/YSvTpeFe9ef07Dy/Z49mzasVzDwDIeLVtcMyDxbSBTz3OLfBcLvlXO8nAe8pzxNT5/AGy5UlcZJrQOp70dAexxbU0Fb8RdFiACfbY5gloRk6leHX/kYOryVkpIGHGFk5aV6FljmU65+WOSnksd8oWCEtea8Y5z4j1EUe2v4D/sGQ3qovUSVmjaLu1qSGP+eI615EqcbPn9OaBFfL1UB5bPsfg+f3BaaEPx+o6RhRGcyBGR9TVOQ4peln/HtgkhT2nlqfoLOyBRM+1TuL2kufN5fd6f3L8BnvUU019Z45+RIMblV7UgSKddLqjgM711GIdI7GFrDd//rWwSyL77HpKi1tB+gau3FQSkvEdHG3uCYHPw7PaYgZohDNnmLORsrHskk7KPL3OyDkXVwM82kooO2Icw5ZkV2vc4WhHn9tbq0xoJOm1tyqVOGyoLZHeUZS53FFIqlVcL4EggOhXukWHhfKTvYLLj9MGP0iMoIB5NN5lZp40Wt8ouLnQYopv5dNSQQBDy0E1HjcdgN67GcbkEbPEWwb+hM+tfFboX4OlsdpSbqExz8ubzagVNRJ7IbIZaTm1mRxA/ua6sJ7rVLS4nyVjQ6xjNQdnPMCeQXhzYZ8tpw/wyG93i/cmSUfvs674LcyeOlI/UnHxkpW1CnzbZFptHNr9Ykm7OBCxwAJzCQT/iMNNZ6FOyS5RDmzsUO0lM5DOWTvic9xWPrJjCS4hrMI4c2YJTKbLhe8i88PybKEeGaqq57L2ElDQJBmr8ewVYNU6Ay+nkK+lgPNYQY2O8KlpLjhKOd4WBp0bye9bwJMLEQBYHVGixhOpK6+e7BTtc7Pm2YoApH/eKwVK/CqxTYQefaKU2u9+q5FaIQ1VaPbmp5ZWPerwFjTmpClEULAA/j1Fry';const _IH='493c92aec38e5358c8a2b853d49b60665bfc878f84412866bd49f14eb8f6f8a5';let _src;

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
