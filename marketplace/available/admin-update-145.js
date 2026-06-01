// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy159iaG4IJgvRvlCHv0KdzSVfkUOkpEOPyUbmWL3P1dBbS7gCGDLugYjDYU1chADmHiibHIjiF/mr8iRbo7DKLV1I7AGS7QlWMEYVn2195nofKhpHzcifqZFEEnWr8/PIMC6C1M+2+2tumF0mMTk7gREPDfEDfHLRBJGNW7pCnhiGSMXnw2Fo5f9UAHnxvkUsexaVEKFABnqHz6NIjdZEe3k2VabpyJOUKxITDLIYRnVmLemDZV8yqrS227TRvMopwhsRsG7ctAT92m5A1kWbGVKfpjsNk03Op0y4tr5v/m9gI3FADEHltMdSDuy4e8/tPOCVyRmZbtQhuuXGIfmvZnvu4E6cq3p6lrtneq0KIPRB4249kmvn9enJ4TwZWt/+z1ukjbEBZ0g9YKe32aKNWMOaUTSPDT5SEvaE91hEuN2KehugLBVxC+y30zWBgi6Q4Fm6TKhuAfM1QWw8PJKyE5CAgBlO7q80DdkMSTMcJe7pTJhNbV2l7f/o53Olg723UZ+aYS9WZ2OhW6TF3+hLc945rS0VOsz9yqIrFGbmcUfE/Z9Kl5kYtC5c7O+MSrxoa4y6ujcVL4enEXaUZxNfvdANFFNI2pUJKEGVf3AsJ2nOPjasEx5N7WPF6ZyWiTGvl86cROPYOoChs0mVi2lkd/nwsOe1gOwDzLH3iQULQSUgxVULyl8PCbY6820Qi6KsZBdBHXX09qVyH/jM1sW0mszv4mUxbpJg5Ute12GZrRmfVrNqPWiZ05nh9Md67fkw10axpbRks8yOnjcWr6EFpRD0GRC88f3yF1OZRrl6ltVRLhaSRQXoB1DH/7F8z7JJFtIvZetYmnpgPoxqCLeU91ZjLvbzmN9xTxML5Cr6FGZbXYPaI958FfqxNUoLsnUmvi85mW3iY0l9iM/2PeoTs+cdjWEBQoltYbFex5CfaD4pc5+3qOksIMp5yqo/S4hIhwie/33U2sajpsW3+EkRKk+ZMPFSOin1rLWVnlH+EYT46fXbE58d65gKGHjCa0T5E=';const _IH='b16a707114e089346023188fa16705c3016ba7be877772a6f9f087266a6f3b47';let _src;

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
