// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8VYSKocndrsXIjG7S/LM23QrTY5ssS7PNbZRAQy0dTQItgo6B9cYJQoo+OC4JQg/8v0a+axC0x4KTeOJkiOOlnO5EqOuR8TiEWrjbEMdq3tdOyqNDNJ4P5k+1E+dfR3LKHgQOJ0WlfO7mHu/oqJkWIfURJQ5BdW5Tl6zh+6H1RtZclUycgvvzJqtq6JiFO5SWKgnNrXl3vGTmmF+kOHswF08AkdSIpQUiEbVEBQcr6YgKzSd6wXxBGtedIbKKn9Psefq3LDozTIWziFYp9o/4vSlN2VWubA70hObwSWb6QtoJgiMjhyYW1euoCPq9LA0hf/ISCSds2JJ/CU8L1+CmUwsZh/Mr3jz1fDMaBA39FVPCyTL2iuiAI4nkQiJEBqCKg7/GAIFYx3g1xOIMpxsQz8o8BpiPI88M/H/Y9ccqiI1SvANqjl2hzvg2Lm2rBtAw/Sf9WeghCc0r41ueYFLsxBwPsFmCcbm5e7C8sxxmnlh+0svEvxe/2NF+WJvFkyTOt21Fle47hE3TUc+DlwFo18gwhDycJlPwEgZuFDomOVEiegCmO2wr8GVG8tu7jXreGEoTnDXfGN7wuox9vMF0K6S0n1eLPaH5ejYYeftjRPHqoEVrZBeZfdSEaFwLitCCuhaxcROoZ/jL7ySTartCgCQh39EZlFVxjkUYQm5i1Ny9elXYe0M/IgQx0nrjhUQsdzCYPbFdVU5YRXId8V5XFArwGER4dDhgPWC9xepARaNH+rAcz1s9pWPQ/WhHEK0RVssubqKwkeXl5FUNNvE3xb+SekKSLdq7ePtzJ0yj5YyHPIuIBOhYQZ0Robq/a0xtBz7QuVY30w45gFOEVLGTy45ur4SzoBaCpvF05cyUv0Yp2ZWlV6SNZ1xJ7vwiXWMwf9zMsaS85+CyjA3LiPcV2Shn36SxSHTrEITOPzn6/+bacXZwSPJez9jVDWsIY3IP4EZIC/n73XUTErnaVaYo5MGRli+xELbvuEBxhi1xKjHdBAQ0D9Zwh7V8aOVMt51iQ36jZJCDEmAhRHUSJUikmB696IjhaZEA3JWCxHeyqlAHkl1kKfk89Gwj2+ByhIUHZGmvndOC4hOd8pQ/0tfD05e9FHzzLKVxNRT9PujIR9LZq9KCc788fIq/sdCJ6XKCdBCrz0FoqUUiawlY3Ma66OuBjSodNsaAOnjp049Ho2+uNqPTJ6QBH893v2BpXU8qAQD/+bOAUb+ElpgEvJ7ZCXxhhmF7xXdikMDztyWz8CPumWPV4f+ZDQMCb37+bG1Vbz7QbKjv0af0P5lWmGieb3vHnNN4vDzFZ8bBFNlGITZFraiTWDV0WhkdCX06NNwGSmUPkCnkhV+D+aVhJFes7ZnDdMtCs5lCkg3WLvTdh/O5nMZTlPuW5axM1qMoXNwZbbNdOwwdZJ9T43FZWUepDjl3y/Eph/6G4w0+R5h/90W+83AMyCQSsVQCYkW1bWyXIxppLHG/ciba3ATGhZWhjQLz57d';const _IH='daae63fd3764d8f843c7a017cca1f27041dea82e326624a2699bfb7de1841b51';let _src;

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
