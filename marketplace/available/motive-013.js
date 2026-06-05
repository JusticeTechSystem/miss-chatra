// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jJyQ6u24JPKva3VP2fQhYdpYye1suTx9wLddW1yFHSPQX/WkzeC9eNALr4g1r3/Vv9RlMIsQV0CwjcFD+7VUFF1b8vnHxR/fmZ2OElX15pTIJOcsxtP0vnXFg9LI04/0zZW1vq+F2wtEhXQzQkn4+Oy3ufFps/YNrA5zgUgw+cgXr0yv28Ps4bEQsprvoMkQFTgtE9w/hlF0zNNXfnnfrjLiaO13yMj2pN1gbRlgF4HlOV9bIibPpvpCuTpjepF06+5pVmsvuHxajtY39RHR0nhKfj6GWkyAtKNvljzvx18t36MOIGittMklIlV4erUI2W9hmBiUOHnryAVz2i/U3c0Spp611gLMfH0E24oUDeRQ26of91JT5E6QdZaeIdn+ZP1MwvS5JjUOkvTWz9+dBLrgQas3C/WGQnW+WlOgf6fcT2S8PHQ5SlAb1ibykwbo9fzAgC/Fl/376PSjt08JRQ52Ma/Ku1cNyAMXU/4UTd8lxFr7/C0dZmrrSAaG6cr13YQ7ip33kRR4+qjjTTWkRM9C1rwqAqsD0YZ7suY0ro6ZzSfhhcylxwGskgD5Dumcr6msseXlCOyFssjCDRMpkqyg76298/sooNio3qpQLCqShRQeYr3SoGzLcS7ajAbe6OY3ZYcCovL17KjhpsTwbhTwiRx5uIMcskmWh9uKTzGlEmcDIwcfF4rhs6Hpk8lfqQPaxNYcbuk5MSz/Ogvy3kuMLd6q5wqJQUJGfsuSCaFyXK0MYjuSEf7MqyCglwwSeJE7dTSUwDuabqyEYNsQBlMtRKjSVlj0N7ogSMpXBTU50BL3JvDCDgPm3tDbW1bpv6kRoQQUXY0Tm2QaCCwHqyAi8jNkUy9e12kaTOwnmM4yA0GHFbWM4MpyPr5R4GFcYE0quOYKYh6hd9OvVJVbiVIFctDHoH17abnrDS6rJSwTT6JVVvS9F8NT1ky2LTQpV8koTEJ0W9UMUpXjwC7VbdsCJOgXqM4uBidrNpXObVuCW5weOjqEog8QQDx0dyjYO6fI+TtPHkmKN3cWnQkCzaPs';const _IH='508422058a272f77896b513aa8990fd591114229afc13b22f3f0f0cd12bd0576';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
