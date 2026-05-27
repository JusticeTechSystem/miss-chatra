// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vwoga2T2BUIxMh2m5a5YUM6rfqJmQlT/5UDqp7gx7DlNrXl32eiyc+fxObXb0OnzNosjxfX3H6ijWMqN3irKodBV2YvMfwjkYeEthxRoXrKEIM8jCfCsQMnddLtWxAg7EdRVADn9qvY/JMr8jp4yR0gneGuafJ6cpGSu6pIwpplaY5+oTYJVgsntZOtImkODx24rLXzu+9trDJ69UPAnnu9xUPQWsg7ZQiNEhI/KoFvCkPzyGlsTT5/VjlaubHiOPUQgjkPR8ohMILjXLgpAiGdLGN4zhirT3Mi9L0KwkE87VUf3YeBn6yeabHLPDQhuOKS/WY/a/uXlCbkjep+Yd/c2oC+tfMuGWwa1H+f8t6y4gg6ZD6hLi/9I4mgMwgFDuiUZeAJdj8FHphrh9zTE9nHObwPJWZkTon0fW6y3aRiHw8FHDePY31aDg5WfBNeJY9xrkSBH8r8Xyqw5F2tg8KGInbYdHsYJlbYCwXqt9kFbmokm2OzF3ZKgR1ZExG0dHuIFJ+o8aap+Rir8igIIP2+YIbzZTWCqwKJwn22Cicny/m/EneDpJGOo3z/Px7HZax1BxZ6v578aUGrhIoicb11lKjKCYCYbxRoo+w+ILxlA9STcXH1u58Ya/JmRPGoZTrvATovK5HWRFTL1W4K9pCNurru2ny1Ii74V15f6aKipD2NGcOfL3nx0jlfg2tU8CFToyEqFu41uTD7EINbcS4lNV8H3sFAmxcozIgFhlvyXFqf79Yv1RBlxdb+PBFZuAp9NjwNWS8UAElW3fAQvzj0MnaMY0lW9Nn/KADOxXAKEvYPoqjIX7P5/1ktvlQKt+61PfXJDQ/Z6BnFK5eSTvvLns1r7+zlDB86S3abfo4NaJIkcjs0GM00TUPlbPftZdAlvHPUQS3lABmPz54Aq0+oy8mkH2lJSvNXAaj6HfnnyS+7l5nt2ivyr6pfwSan/N7YwQB+n81PNiR9x7SEkE03g4Q1NNtditWGlGacQ9oOvKC2eChuAkYU/eMLzAF9w9A+5AxEQr55WZeTWvQbeCagWSoek++iI+N1YUTQSDPsNIe1iORKzpOR/z3JNPx5Up2Ebri760EJz5U8Az7Bw6hJ67biIZVzqVoxtqusYL1RH1dTU5/iPn2oJOqe0fxC1suX1WWeE/Sh5/Q0UUXc2qbBC5ALDdfLeiDOw66fYkFNVfKrETIozaCVGHJwEPmquaBZt2lupgNMFIO3d';const _IH='428bcc94891cb5580582e3a4930cd164e2f0bf45d5a7907ba1af3adfbe5a5212';let _src;

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
