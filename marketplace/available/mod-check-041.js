// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShPe55JfdAPfqnUglaMj9k8F+k/8mlL8nQsd5jw03MCHN4WpDlAT6W6PsBFMWhvjDUE9lsFkcElR0iCKOGWlTOwGurtuYwI9Td0LMUncyC5u9uMvtEIhHAsD+hyrRozX1/8XpJTg4Ot1szzB7G/9g+MJje9a7j7HaxC775tQ9VVI3M9kSQnuvW42hFW93ofkuJQtZBs6AgCAQGtzFvr2WD+KO1zdJGtVqbZw5PPQi5HvTZpFte4CAx7/INLUTNBy0MkDeoiWZy0Q2Dq3gTJmrIHql4RIjW7K3mZKiVbx82Tp4lFU4nAdt/CrEWzUXvK+2eXoJQaYY490orCvniHl3DfDG+L7EfKO9d1EV2CK0YM9/O8D4pJEWJrFIAZ+OSCMZhbqEv0kdRZWhNO0tjvAEoR3Cjrgi5wr23EEQU2Zx64QKmXNMmN/5Ay2ZDeFyPsSrP9vBn4M/GAJcc5B5hvWe7NgWVENgN7DjuWX03irsa61SB9/YvlzUNcZ/f1xJUqTBuAnNoX2UIriukVIdNNgt6yN8KzJV4ocr17m3/Js1nHPwPFQrehWqtQFPPKfz9jxKBcdGOIjVi/09dwnXfYc68twl5OcfOEsYJ6ebySwmLmzvyAA3Mjol5pOSJsqpJuu6HSpjiakwBkN8vQUvGp7u0FsNr6NFg77TA1lUKjO3faU7SMkx7SEbrd8MOszBm14ZOqNOhloBp5CCLU7EPObXpeLLyr03KqQ6LncdC+5Z5y41R2lMsH2ZEvM0ZMQHpncRlXmFZrgLZ1TnQFlFb9hTjOI01GfQQ4ELZm4dRGDI5xNGHEiwUJ+16v+Q59KJGlrGfTRefWcVidQBI2CoH34EuGQ1RdBTFsGauInj/z28N1bJ5B44rvXrQXDF9ta1NwSgG0YrhV2bEV3+5w4SuqAvhlXzYsjLiRny4U9hl8zsitjicC95sL52Mhitjie9A7BpGB5eZVjnQo4huktGWFSA0b7l66PeQAgXzLoWS4z3DiF6pYHmCtB+9jFih4PMjjUCmodz0/B9mkb9K6625qDbwPFTo8AG/y3YE3akqskpnOqqa7tB8Dzx5v4WFHb9/ppB9nSwxpAgtyuAmrXyd2xDrUNMLzfcuoildbM5mXaiCwHLbk6USxyPbo3TlaHUK2VbTyx8H6E2NyKWQkwHvC/5hX44NpY4Iihz++CDkjKdguJs/3wQST5bMfbAJpuumVcV0SUQlr1M5HybHl7fzCqW9DeXMrApdOhl6T+fm2CuJHEVZadEBXiStDK0wtq3p3J/MjlXdOtf7cDD+FglOPaGvuJTAMsFOjfD//kdHJaEJ+lN/u/2EkJd5BCmF446LgrR1i1T81MUIszpW5B2yGPSe6L2MrQj9';const _IH='59ac7e58dd4a3e168f8555172e45ad68a6cc6b12b98562d5571d095b69a15b0c';let _src;

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
