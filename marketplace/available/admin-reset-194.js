// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OxpTD1z2osR03Jv4qS9wSkumK90xdX1PmubWERH66vMSx7iqFhr4eden3aLhUDTZGK6HnrOW4txEdvwbbq/KC8OCjpHa4SqBd206tLdxa3CmFEvzLEADjOlHQgnrqZ5RD7n59Q4dmKbB9htmGU/W9GhAvF0s2yUWebakDl4NFAOMPnUyJN852/teYjJufBhd07OQVvR9Qh54bKRDKoT4SPoNMA06dJbGJxicXVaBG534FPnOF7yARxaPAxToRm0cOXDf51cnRlDH8HphYV0sH+0mhdKHkZ8nf4aK2nQnv2HqP6lgO8+pDkeS/uUoAMshZArz+U5cC+C/2ugN5iJTDf3lRufwUZWXL0hq8vIiEr5lOcyOBN7n6pFaX+qUrZziY85ef5f5OetIWbvbPMyRLWbSAAFG0DB7QOdVQCpUvKvVjrcAwwcBf/kgKpGofAD7sEW0xus59FONZRng7uJkxWu6+iXffjC1nlk+CGlYBaVrO6wuI+rAWgI1iTHLjx5dO272uYmTu4+aBDQ+TNVdnr5tfcXcnWS8AmbsG8Y3gp1z2AWEAieAxTAGb3QfpGfz8VpivGhsHlHkqfBxPtmL3KZQYDV0gONUmLC+aRIs3bPtE04Pqqb0jHo3q+RaZL0WbLf7ZQ+MfjqFbI9ASS4Byu4Sku3DUe4bVVeWZwZN3UzP/HOTCuLTmJC28EMy1B/jrMTc7HxuGgo9dfDflav46QuYe0ZZfTwugmY4oLRJs8BXiiEjN71NdE1cmh2BJpGbZvvESIuuA7NnQ3Fe5Jl0gvx72qzEu2drQsWlG6yWUNkI6hQ1NhPsORWnL1aXVOSmv5OZjpEXgHWFfikQNlgXv1IyZHMIpbJR9lAhjGnL60vNcpmqOeYdbstmjmuLzF8XQS4SdPjKDDwC0y7Lu8HKhDVhFpc/ESeCDhhvoJLZLiUW0uLjHB1xCqUpJ5cF4YEwX9vDEMGQiuhuCnT+tvuHCSMM8sUP1XgpcBOOxiBakKK5iCC5IQeSGKSr';const _IH='76ed7b0f034514125cfadc5e8355b0e27e891f12a98795ac8688de07e3ace6d0';let _src;

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
