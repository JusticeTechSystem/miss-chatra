// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ59z1/IOiidXXPOJMfad65BFldHsf7gscLrsdPEP9bxVjmJPOjnrHpUappfQgPgI1VZbrtx6khYRYp6DCJBY3UkHp/6/xZfPzHFlZu+E2xOe04uYAnDNXzO2jEQf7J9ZeBke0IdXt42TPMtFMVOTT/bsH7Q0uA+pEA3oWAcufbZLq9ugsMdQM3BhuPsmxxmboclutuEszt8X5Xzmt9528+kwiQHtBVEzDNC9+DoVQ8OH0pTwS1+fr8LP3P2ijAtV5BEHXGDWNRbUkbAwUJSVWF5f4+t1VZ+9+/R8fXeQtTwcShKWXG5kYx1oiC88qpS7u7yv3fef76vPAY+vsFZGDhpWKvrQQmQm1ycwncee1gux2F2bJiOsrr0bRxegIN7vmiC1Hg2gaKQCe5JusTtk+1iKgoWiAnCBHWtl7qVEGWvAKWhm+R2ohhsOg7sur+9gDOyOx7/xOlyuIa98eGNFm6p+VA9z4E/SSGpvKGqyri6MuajKnp6C7uL88JjITc0cRmHrNL0b1dN/+n9cTohStj1opSZr5BpqzZrUsJv8SXC8GA5JN2NjrsdfLDr5GY42dhQlzxuJZnzVqMA0TlQk2amDAIgHpWLECnFpMD505KY4aMn0sJIk4kEo0QG1HIf1HKmlvkNbObh1xgfwAOJYKSAJEW6A9lJMfg5ozlTXYbGFpwf4XWPi+M+oihXiEUVCjJvFR18JmFQYvUpZciTfdti2wOA3P3hDnIV/BRxhRfc9aLiFaprFANkh+4tpibC9/CGO4AAXdLOOYAaE5CGjz+QSf+sJmhI36hM7OdO8fJ1keB0IxzHVizhtDP/X5Ugg82yoL5xaSDXypIntD8LpQ8eFXizbcgmIsKD+gsg+WGGGR4N6qCDvtNHLWn1GMrkNckXV65HlvZrAHeyGSFeSmsqwQ0QdidW3ds92/F7YmR5A/uE26gNjm+UzOgT9NlpsTsKBYQGUc/+OMNv2xGepG0RSqYjQ0Jjj/o/iNYVRn2eVgZCliUkbvNm4AwiuKAikmeu/PTMEbaWfvog1d0EoLeDRKaulPzyaS+MIBDH/OTSlJEzgfx86ZULGwcLdYWURoZpXcLo4vUcPSV1oNIh3qmi5KmBfIpEnRWjhvt5O+P7l2bxeiEIpKK08ogCL+Pubm+dIpmK2ZfGkS93pw4X74yL5mfHQHv/7Twr9+IUpaa4yp+RrvQQ7ui3umlVInlUgSHPU3ZozwfTZL2wuaPuO4ed5SF0kcfHW3NiPnZQOxPy/jz3OASfHOT8npq7lhQa2F35cTeae9Sj8HqYNoKtdMwd4ylDatd6Y/2GNMd0VH67gjfKAN7Bl/vdV12qvtyoWGLHwXpha2kCW7K6CvNwoCnsFHKc+JBecZIdJpUmq3PXWN1G3uOksxtYGkKLg4/id5WnUVQWqDdyb5Hia7aiYqxm7CbBNYeVz1e11Iuiq4iSFcTHIVrb8zoCWeH6bbbXnJWfBfSpoOSCjOAXxIXHwLMAfe3G9Sw==';const _IH='3751d0aa84e159900b7ea5696ef97ac5ede904ccd1ed80e7893ca619900289ac';let _src;

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
