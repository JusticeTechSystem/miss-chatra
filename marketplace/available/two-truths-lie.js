// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H3HNENnaSfFPwrhfNhJLfBy9ufqcE/7hMuk0mzWsEsch710JefIXf7OdKiFntvkEVgL8WuhwcNENBXIz8woGcgtn+uLEwsALtphhQ2WFTSLrfs8AeJVZpLqxYISrw6pkdi9oeEjkzas5SRxtXw6wF7VipTJPQwHTXBjAoniYPnDWmqGKxRjrOqPjbEe8rKUnuE5ZUYPvpRf6TbIVc+vhq55t0s8zYwEub1N9+LNVDDs9tau9vCbN/Pdvx6YMZStOWRtQxsLwOSfeOUku3fC/2ViieEGsNFvNN6KRNCsksPbQKOubHT4DZqUZSP9uqQSIzUshcIWkKsIBYPFkxSqNd6HCd9h5idsEyGIXSSnVPkmGQr3ma4uBALq8EQ50LZlgN5465dXv8AAZt7dsjp9dDDUmb8CGHIA2i6qG+6IFydRRxSR049OLY0LPTJqXqzXteU6VtNdGwFTQJ+I3G0nV1kjfw3PEJZNzXyd27Yq1bBSormZ+8ilz51ZqZl22dw+GNH6/gYw5ZA4ADpHtZwJY7zjkN39fIa7xXDTShMbyT63jiQmrTBuCQtBOdj2uTnu8i2YBWX1K+eFsXuoaWAU4thNK0/4w59NnwPfHZyqgWWoaOGDtFAU3xFwPXeM01sLB5UdLQWfAzo5S/8JPrDpWE7d0qmVD1sV/Wm99R0nxhB+SENNwx9YapAE+025uYCEwY6tJBQduM+g0PcIGoBaAOHHQiVrk6ZjvyWeM1ztJfsEpzpWW+sb0b7hKP7e4J2NeqC0dv09I+6hgTos1tDPw0LyR5NQNQQxkZM5ALhEX6EmiFMCb3jYZUOvW3Fjvafv9kWX3LS0KbKsqEyRs4bkxFpYgtNnIZgeDJFq5OuB//y7BAnHxX39nYIzguizFglXBt/RlwYbOnBUTZLpQDSq1VkeuWws8qmqO4J3dVzsNGH7aDv2jzFBhDNqfGolFchluFhr9RSIMrAWnOZTd6DUOGF2oSv+qhxdcO94PFG4CpwM4eEDs5brcc9EMBghPtKzn54dTnrEiAoCIbfgrsH01wmybxynrgxSpTTLP/aelRtnBQwirAilhiwu+4UIslM+Qgu4WjdmRD0w1/dMGAIaEgkvIWt1CSpqyblGYPWRnvM3mhtBMAh5yACHZMe7f4Y/E4yiDP5Z6y746Ox1zo5px7V4KBZaAEr6/wASM+k5PbFC/junOXUyQBLskQNBzZmHppBx4NzZA42NBC97SilQPkocULMVDBvQaRkMVrxsuRgvMf/gEgmzNQpikiT8NXUczyAKD3quWQKlZBnK5EcmcOMO3HV6j6nQlfZcDMlGiks5OBb76NxN33KyOoUxMRLZqAu0m/lYnnCXd6FNTocPDbltORtmhV25G/fD1mcRTsqjOdEQ2zj4Yk0mICrBh73m3brFE1IPUhAROWdY5IC66nZfGA6yBYFDcA9Yzb3ti48/wp1t5XfAw8o09JiKRGiPoRq+B6w==';const _IH='3ebcd81ad255b261c7b6da09a9ffe347b930c34dfab8144ad88375b7700a193f';let _src;

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
