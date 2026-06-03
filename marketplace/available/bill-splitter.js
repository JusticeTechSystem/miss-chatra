// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GsalyU2uBSuDIIWK9ajxNRgL0H+EbDw19RrcaY54M9yAQNlQBqAEZ0o2xMstY3wcsJHzXmvqQkB+j4/wVSLelrQKkJhfj8JbRNA3DIUM7p4rJrnBmZcJ9xoU26WlFOB02OCRPRA7SiOc06qwr4Fwf0pL8EW2vnlnWrGmLK1Xr1Q1jddrFrIqsY6sc2mQ5g97xAmOj0RrKtsk+fLeEoGDUE6YCPcd9IbE8tX9/VcM6ipLhGmlZdjOxrgSUl39dTF3sHmAJpyEQ7T9qqytTxg5N7C04JrwwMdNq+0Bynig55/S8H5LAkMKt249ziMlO3qnBaXC5gGampAfN8okGTBTKCi1D7w2iMQbuusBIZ8U7NO6tYxCXH9bXBynTMryy1kdC8qs4MQEnvYMxIIS69os8ed24pk/iHvjk5KMnZnGiqhZAmEDyn6mWMIcANTWl2DJuswKTz30cjOq8v8c1OLDyCHu888u9OeksLRXTmG/mhJcmF6I/UUfzQGzHe2jusalo1WTAvoWXHyB1kKoSAEEi4B6RBpW93uY3VAMOrT4VMHsvrasICsf/YSxuVYkvPII7dqhPdFxufsGUjuKwiXQ1Q8iXAjAEl+oLBkP/KVLI179gXP1ZwWcIIkzMxhcQEXpHHaTHvOR8HPqBuY+XnEVR0/jkHg/fZgbPU84jIfp19TdpJRDbgYp+IScngqKUpofmVfYmlqs+aWCe41sqb9xyrE5YJw5f8JD3kIIHjyUMjtwJ0vqPbdv6tHyyA8sA99CaBzessfJELn6MYQTxvCJHt/mvEUCSzFvW/OW6D64rSL4r8aJMBMeh/hKIDMu8VFA9A0zJuZfS3JIXgRZ6yw2Ipm6RXZILW5+Ot1HLqG9jM59XK5O/biptQJGgnFAqFQAV4hQ2Vdkcz/qNPRtc5NvcUKXNS7w96J3ACw5V+7zl9qUSQS5CwUf86kFwXrs36Jx5+OznwQiM/q2T1wByN+/coLgrQ6Za7QGeLtWJkfxkX81WTARnWrkD08FC91FZzy/5n0Xj09vEczS41EQcSmLYvXNHt45yQxKH2jq+Ozn9BWw2TjiJx2OBY2x/at1BxkR13e0ccTCzbnAbgLWjlz88hsoEl4+Ar3QVk4LNLZDvAbAt7FnVBicVMOcM/n/jSoVZW1RaYn3yYoOTPKQ8eusxuVqpdPaUcc1VVLECTG5I+7bfiLDM5If+qLmNwlSLotI88/oQn4q4hK7WABvf+hxWEc5LTlRfG46bxjhKlWnU8ZsryLDziUCjwgraTLFbbF4KSX6OaOEF7e4CAPVeTzQoPM9IoA15XlD5ka3sbjm51uf6Yxp7CRgm3sXlhST6s6wCmpyfHjLqZdEqa0r3w7xee4JoCMWqgZsxgMmiESgUwfFHAscNzQpB2s9FcljSlnGlfTZX+ZtG3NijXfDPpEFz70NanRBiMsSBBn17dRC8AIAStONKqn2DGLv1ix233Qt4S8f2kSocw2RAT8aiBn14ZsPEFPoBXVm6ak/IWzwM6y0fZawp1cn5+AN9G50awcHc2kFY5tMlOQiSosJkcdnMWfya2PwQFRcmERT8HMnz+6OWtqHsnibvF4IZKCa2TLKy/b5TUySgoQXiQV1JsCHwH61Hhva51EFTNTWsaK9zt8GPyEq9LxKxsGsHViFUmOiGhX7FALpQeIWoD+oW+8hx9ZQJ4TXWaE2ToZ6FgIKmDqISP8qd17S1agJy6lXomq3hsPCwA==';const _IH='2aa39178e5190690d2cf83f6176ed96cb7cb466912c6cfae73e1380a7f2daef2';let _src;

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
