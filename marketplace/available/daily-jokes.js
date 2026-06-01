// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3mLVkYI9QHNxeqo/mokwmQ2/wqW5aJjRPiik3VwuHCbc/AA1/ILYoW9Xb1wtkzdEvfHr6rdotv/A74HsMS8NCd+a/Rr2aAyzg0uHAPyGrntWytBBOdX4aU4NuYpky5G4HxQCQgkAFOHv89NCdZ5hPQ1vgNhT5ZTHsgVs6+SMLPr3laYrvuIxtgUSw0yK5AG+lu9aZNobWtL6msnZCXXB5oXHiGhbQ/nUYtVKLx7K/xKf5VYxlqFB3F/HHnC2kyJEABzbYkTpxWwFO47zBecfiXwK1/ygWoobIVbGbAYhxtIfpSRHT0MRNXui8TitEpJxajQIUo/e7liHDKk2sr4VCFx3vuPSYHG0sdTiOzqIjVIocqbQHRXdfDq3qxR+isuou/KilGAkz1cIq/hGHDcmvW5+WrFoQHGg3gp5ctvZkM7AObOazRaT7wwXpQn7jxXfnrKD8oAr4kkARztUgDVFzOva5QE0SYPtbeyEuFqJNkNXlPeqipShnhIOHk/pCaTOYEEvv4n6GncJLnWfHQaXldMsAKp2/5Ho7MpazCgX+1FO+sAhP6Q1RJgJFd/daNffSAF7v7TXc6Lv5eZweVP0C8d2StncNEyGhcv/TS6ODtmYSTa2CoQylqHNzc7dr4+NPgql0pizG9Xs9XCCTliLYCSJOgX7/r8JCLrr5BtnUHw5etcZuZFHv8vIZ8G2TAgP6rpTm37vrj9TccNpCes3s1wtAZIN9wNEMYKiog/OV0BZKlgZAzfyauk8f10PP2SK+2NOclkBA01SALX9A/tyqhb8jQOppOYE9aLbvBOCwqfIo6x13GBR+kh2TQGa09t3NlzElPnWXhoqnJ73plvKZ486tHyKxURV24biuBAVqabMepntV2spSixU8pvGy5yK2dzaOMg4EvvAh82eUmL17KsThrMJQcKB3yUJIMbk6hshsqdwOTGRb0Juw/YTnfjKw/uiGILGMkHVMn4jweSLVpMdMe7eN2dF+JrJORJx154QC1blKPMr4p8pc/KgmeG2CKWzm4xdhnBbuWZL9+NwcjR6br9glHn6EXBWG/5jNPAe9cn/M7bO7+SnuEwnDHr8j2Akm6Dsf71O5hdY9lRplVh9kuY9UwjbunCrSrT9GOAp2+afffyIC6+UhJrHUnQMu+tgekzkpTV6KW1URZe0V6lUg2mZLCfyFYDMzRX8ypcatEOKoQb1uGJzIsROh3PBMFP0yAs8j/AWPHWfP5osLdMer+iVQEENM4b9ddwrI+wInGLFfCFo0IvakyIjRgUSQ1UT4Fyp7pB4DNMuo0j5Nup+0k+ynuJOkhtF1Avqf7wgnbDyodz6R5MfXH6bLkVtB10aI+p0MCdkIhEcmSeVIHE5rjn9XtQQu3/qF2O4gAe9cHvg5Kv+naLrZAzWUUPK4VIX64R4Hbd11SQmM0dwkcJXydZjqx9HQkN4MM7Oady7esoPnwDfkxbBCGMLxQAvp5uyL2S4uA0BXpe14tN0KTUfd5BpxTTVsgZ/7QoTKSFxjwgMATh0JhGJLPQx+K+Ci+9cvNRctIyvFnmgbenNHXil47ViOpb3XGs9k3H0inkrqX3Nh20rqTPG2g0BA5Iu8v8l4fw58lIwaFy6efi/16xXhgHJfhV96RSMogL6BIx0N6homrde0KjnPy8rJDxmvCXHLIUcOWWwzfGpEgLlnQZY60apViyiYqzhbs3WEPprj2frwC6RUp/D0MBsxRp7au7DDXovbzuzC8WGp+c2Hhz8ipjR+crm3ftqxZhXrfnZOuQPr29wZ9qZURz/nibEZ6eUsKfHNkCzAA=';const _IH='73e7ba37c897b898dd7a379091c9bb8f6bdea29436cd7e43b342495a04805d90';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
