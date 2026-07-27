// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFBJlYYFGEu4T0oWbblFVHwaxwVoA1hUBsQgOujQZiWDOlKZ2ii+FOmJBe9vKK8bZ8v0qYU6L5RpTtDGOEYAqoXVkBkRVaKfOiLrDKgOR5Nus1E9EQH+tXVBw1s6k67HfVf3pcURIKgp8HkGW9rDkpuHapsEC+biPFSosp/GkxkuidN9WSvHzBHocowUenCU/rnUV9vP8QmyZHPt5ujuVti6aI0RkjJ+Ocgjy3W23cb0dPphYUt6WgehOS6E58NEmpylsPhhGqi5Zmf6cflpDagwTtldDaoI4ew+CF751jRcRNewnmyqrnxLNlwv/Z4iFH3Woom2W4xqtWNucKqcdnuPU494A5oFhOH8evg/6UT8+MQRNzHGv6Vyf/+aLT9jRLYWLXk2mMHKdD/ZARNxl77l0EJRBfjvIeDSmgSYLSJV4EQFHIWKSXHqUxH/5la1u5xqDDHf1u28nWab6lUtBc/0SEGyh39RviRW8M47R2DnrlcInBN59CXKQEs4r49z3HSPRSGWIez3VHhZ71/MDNMJGXel9FhF1AD4e297EzJ0CR97gq15s+SfKHSSnN4OpM1+IU+uc32tCrZtwxBmybVw1eMcnJntsKOLAPV0qbme4mC7E4ou0SizpEdJdFvVNx7glT1NABIKZ8feI48zh+CDS1cfQHrVEDYtm3Ggr68OngfIR1KeddMXliDkDQ5wGmSPyQ+64JR+lQZEBJSJ3JtAft2+lywLcbRQ/so21odacj9LouUyUIPyaiaKolbaAXqBhWB907FxfMOfx/VKDDx7ryf512wHo0Y4lHX2Wn+6pVlFEiCBoeTuJukjAPudKXPaOgAjSdqR4WOBV8J46wWL1u1ZwHvTgFy2K8kx08WnHV+gJDM3Iuce2E2yNjsHySPl1fTJ8iGDvhZN938qngC9eMarXCqr/09xcaxiM5FGLJSeppd9kjkCKKEb/b10MtZGi8Nb+ZDLDsm3q6vDWBuNllAd2liQtNhMLjEPrrhurmiGNLQGbu/qckLM26UxX+JRaQhTVf1U1VXnZiq9eJCMfWUW8Fy6TY6JSDKdsJjYlloNNsdjPImoxzcx1Dqfsrs+nPdCLHC6GTI2ru9YxNlpBEPnXuwtLh0JES1rrSz5HxdRxoRntpEvGTAiENMB8VPO1m6mBIsdEKAVBNXPy5a7mLrlOwZw2hyTgQCH94pWfhlc8RzGkqDH4eLoQa3Ukm2aQMSKuG/3Pxben0rQtQnMShxH+CG4C1uYwTOCouyfdXDKaPCPKY6jpLYZdgihEuycyzg/Et0qDDEv53qJLqr/ecBYnU7/NaM6s10CGxYaA0q3FJvyd8AfzrmZp3BJYoNlOAHH1SL8FTvAcY3m6PhG6VZkCh2uboYqs4mZuIJ1dd2h4HdzVztLVkufyN0Tx/tDzxz+8g';const _IH='9c9dd2a7ccaa54dead19530d48079530324e5aa4a4cbdce7cf8bec7b5b7bcc0e';let _src;

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
