// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EB2AqYoTWwlDa0HCxfTJ1f+p5PCKFSp5WodKZT2FZ48sm5sg8He06IC9NeKVeSQaCG92mp6YyqTt9svn7c5KP8tj5cRaASgwheHyRjtnYNHBbwDpscr26YWuOd3XIxHpoeAguTYTwg7ehXpbWZI0LpqaRy12sGrclW1IXqMWkyfoSj60xCBnPCviXHW2PeQrgC7QVaqDezl7buh4opYWKJeoEtadof+lQ85eRstwWvbgy8cvFmAtpBC7WCwLO+f4Th5iA3C9eB7/hawHFNrgMiq9JqHcZqgnpuXrIM5187ZPjpKqAlb3e8ZJPT5D6LlQZNtYCzfHfhc1vTqxaOIteixywQT2UW4TLg1xJhKFTMeA/szkUMTlsEiBQzpWHPsIqyqQK1MFCF2kmbO7AFWICVCO9b564FJbVolcnqsYlFYrhi/u49VLqr31sw1dFulJHKUyQzjCEsePhaFu1EJvxOWq2xrQTd7IocXkZfewLRL/K84yEfZ/dWx5OvnRMLAKWeXOGkdx71ZM2ujZk6JLIFVZaYSQ7HWqUXsZOBp25ZU16ZDJewDDOsCE+2Z/W4OYSbAwDmVs8O3eVH6Hi3yD7H4i4C3G4fJ5lkfm5P9u/T6JL3RzokJ00KAEpczcyOffPhCSQlKSRuGhtVsTGhAWDeDHHjBfz9PJVQ0gKAwNlZzlB4SQr0FYA1YQNR/jYSgXe8xoNexKmuB7BbSRxw4LfnAaI5L7yIoF+LQNW9B1CePwDw==';const _IH='3dc348f6369953de47dd3eabdbdfb0b6c36ea6cd0ad6718ce55a9b4b6d922307';let _src;

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
