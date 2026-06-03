// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mVTtr2vTtobYZxzD/sk04wPUxmkB83i8H70AyssYkgzI4BvBq2Vs61lCflCPNR5fdIV1C4cXJTrx8deStytvVG8hHnejXXO8qQQkK2AXK0f6ZkSiqhMxPXBHi/Q8OtFfrhiAt0zik5ad0/+wOim1ffS1n0pwb1CQrl/Ch7As0/7zTgAEciZr/nUyr/bz8IzyUlzlBb2VtCJ3K4BpNh3RA5mivFBHcnwBSOB4X9vrZgiTXLfpGZVF+VUxuBAKZH31vtyFUFGL1Io71sUWSOewYv5SsdgEMMM+s6GJmE3MYQsbpIZwfxDChvgxiOpF482QWJ/sKTC8YA2XC0t5kRxiliTY3Ps0u3L4zE+QBYs8rU6gs+v8rRCHF9NZYdb7ulDOxCyRECLdM/pRzhQmewI6LXclTuwA2p6asMou0bOd+N1/S+cavHQfq/y7CIxqWW1xzwxfu5VMWwamDa63+rQ81+HGwRi08ibYVEODsd/UkFLHLBuprCsp9BEloctIbaUTZLmQx975FloiV03H0GqYem2+zQDH8D+r24bZsqgBZDPR36197LmZI/wYrX2Q/q4mkpgtumF9K2u7giICOrG8EwsPIH16T5p9JEbBAbMtDEi9dKhzKS0pbJrfB7vrYTAJNN7WAxhe9H3QSoVEz+9W9G37Ni6lNKEN3A1Ts7tY2yoWh7oAKdDaM/FmS/GPNKjQu8DlEg8Cm8nZ4AaBaUNTD7ijT2EAkOTg/FMT6L3DSo8vw2AzNx668f08dpzIcYYh2Jd+6DE2JN6sDq4+f7khHpq42ryY/6KwFPvGy3TTHN0ecaACwZQaOtnkKY6fP5jGRbVJMLmKZ+CoVH/7uE+KP+bQ7FHOH4nauWSOmFCaD1e1kiOr6kus8w74fYs5sUiig6F2TDu/SGwm6M30Fa94XuyAWbFqdvhhRgjcN/+AXoF9UvJM95YU4Qju/ZWuEDwdYgZ7kkHEI1belrmCak53CKP6CpKNdGFpe2nDX1Ision4WifQv5MzHe9gPk4qG/qp2WJLvVG7E0O2NY2Hx1g/LZPN18uQ3Xr9a3wOSqvR5zxPsakcO/7WzymIetrAw467sn0wCBcJA7d2sdLp/iub0iTA70W0qTkTEF0xdJt/ps6bbyEH5Wg/6DV7tMeakVt5zmHCdTsUOzGjTDxJo6R29PjGyA3XL7sJ6Cz4w1UpIL7qT2SUE3vXruQggRsmT77Y6wsIDhheVVgobFN6lDoark9TaqnTLUjGJjz2aI1Twk/VZX5rbJQq9s4MlJNZyBt6lU/BDyHSZG0rupd53tj9ROCAa50afRmDoNT1XPJnFq1hHcWs2b9oSSoKJjf+2HCRmq/ScHEYqNavEs2OoPzO5aec4U3pGOx9nLMPaqJj10yuAiC0VegGA66adZT1KfjkTvuuz8zY4xJ58Zo4';const _IH='c8f18ddf0ff545ed091bebfc176328e8fa2c42ef16fe44ff9f1dde081f8bc32f';let _src;

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
