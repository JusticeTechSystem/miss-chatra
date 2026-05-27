// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nqXY1IfHZ4jM3WIw42Hh7dA2Y9hSCN/jUY5UAt6fP06jMnu68uekV9dMYWhVKY/Q40xS4VkbTCOOScuJMX1OeHov8CfcI6Q1Ru/Q+IPzzcmvvr+xu6HbHe4Co32ZhFfCRavax3SB3loL/rJNvOeMh5TklvqLURJfv5lnUbrKCovQjI4vdS7hBCjwKV/8fcDwDs+xSmwpHdeRKpqo9h6Obptu7niNNfMkTsHSXa/vRG6UyCWmIl8waZAL2D/RwkRUnPDNBxaUcPLi+N31mfR1Swa1EsUq694xYua7YerMdJ0pz8sEeWVSRKFYXcnFK8DvVKpThWP1HdPNysNyca1NvRGhV10EJs/r3OUrpv6f4npwEagSjgIHBrYFS6PEDFyHo1MBMnysh1CiInCyb+XEEs86fJ/VUg3E9df7yt3a+LmOSDGHebgA/+l27xrllHbfHNr4gMvgNnzT+0/pp1S3Ok6XUnmvQ5LxWqkFQQgfCfnDG1Si+l29RZKhvMmpLcSmqnZSJR+hrPrIC8nIFulSVFEBH+M0ml54SVwzV4hoSyV2wSew2Tfps31G7kbd6okEaulHLymj75EOzi92cDDq7alo8tJRApmVOO+gyXtw4bYPpiERdqHfEzMiuyicEBxbDw0wr8/ttMEGJ0rtXWw6wrrArnddKb5VSTnlb+VYynfMasd/jbqnLH9aoXYcT6crnzSCWMpLP1Z+Ne38RGxOuW6tW0Jjods6n3M57GdOEND/8HGHNrXi7D+5bk0xgxg5oaFVwUEW2Ok7CCgh7t9fS///KEaXm57uHucG/1hHeND928zzJOhF43Qtx3oXaCSzuXW55S/PqwL0n+yeIiJzGYmn4t0OuEzv0BaXRAsCpIA3Ds4N+a9zji2H5t9MIFoldxin+iQbcb7bqNdKqpxYpZ/ChFzvkuOc5yPYpYaL81+3ipOtE/cnnU2figUcXbr2rlFmPJ8Tm1/14P5UQkUvOfBW7ugWF5lZ70YuRSRQaNuYxrnZKzHhLo1bALzi3nBmVdM6pJXJMvcV+YmtkGpP7RZ2wmTBzvlxpyUY/XEc2CfsXpM+tn0YIhC6mgOMguLp/ddyGn3ok5OIahnTnQiJjOYsaUUtci0Zvh8ni3NZUfhaTI1Z0T7mKMfC4yH85p1wQw2G8JKUsjarJEC0acVZVA5LgpbOmxxMl6AD3oP11jq/J6HX0yQWzKV2PyQC46GF55oZb8Sd09+BP+uboG9MBX76UqdInic/PmKU7rVU56OW3XR5iIZ1u/uddaDIldpn4kFqO98e/PaypT9flHO/OAaIopi8LCqBpzt4KERnAw5V87yDfFY886ckBRA2oL4CAt4T64OK5fm/GlRYTf8Qywlo2aeU0SszvgH/iQECcM8G5rxmGBIwl6As/ycO90Yl/SlSFJmPGViFSuwWhosyy8/AhoDKm583E3q/NJJwkBraez0YUJWTFQSXF+KSQjBiMDUZV0tOaYQoJu4R8IoJMykQc0TOtyshAwFvK3I/an6CmzE5VHCTfnZg81XY8l4EmdF2VSsvaI8=';const _IH='822536fef6f348cbb5e2ce877f093b40be0d1cccc991ccd147f3ef67de72da6b';let _src;

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
