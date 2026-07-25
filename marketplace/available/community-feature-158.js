// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRAVtw80LV778xRb+qpoTDNUKGEYaljxu5yGs3jFJouokXL5vbu9lmu4sA6YlL5LjZsN0KtLRxIpySxBpcErKQgE8i+mjs5j3tX8wrvQ+N2LloJt/uueUAn8jbop8nUAAqJ0De2nyiBnBT8OvvB7TkMs6LBPM9cdn/q9Lmo7CVeB37lEeTTaz4cdlqsLH1DvFr+oyctgM2aBl/ljAZhAqQsVZTInNQ1i/KkNhrt9NZblH/lR0vlOr7hTFXrpiqVd+CAxfJklHXBLprCXOogv+gB/GYbbkwgJvYdyjarg4Ab41i0UgVm48NKThDTFlh1h1vP781QnmvfIRqCLI15aFtzRR4sKLHlS1hiYoubuaKQ2c4JVkp21zTfh4LElUmVYPBv4sYzOEINM+A0rGiCRuFkvQpEWvwGK67OTZyCZ8DI7c5DhIFqyUWDDrLuy+wmrVd2w201D9eBqzhg/6u1uuEYobBzHt3eMLWIsvbQaDRKf0OZlxDMlbn1bNGxkxSByqqeC5Fg5zA0N4usVolUPf/NaqBiYdsjbtCPg/XXHLAlkuVxof1C7Ygh1PISSk7kMIjZAG41UsWOIFuYtArTqANlIp8qFt6J5pzsAptEZCgm1UzocTtcGMD636fWJ7AWmSReKDgx3ovgi3AVK5KrbGKJd9zvEb/mF59j194RYCLNfLQt1BUGRLMfrFk9fT9uFttnjMdkXpQfHUtyGbJ9b+mKCtwGeJ0gQGcjZWYdA==';const _IH='bc48ca0b2180b2b601ac230824b6e9a40c4a2b0497c1b69f2fc15ec2056dda2a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
