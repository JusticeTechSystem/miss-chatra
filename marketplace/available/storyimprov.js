// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QupGi50Xup8c1gApR3ZSS14VmKT97wn4D2KKNvpD20EmVMCWqRpG84Ob2FONdFUYqLrHGowCNAfWA6dsx9eYpEXHzMuQqUmACZEs9lNj7kUoEFFtrQhaBtns8SstnLrrUCOcm9szPWPHmDjsWiRGuEb+s5M47ysZpt6ZzRbW1wh6jcjsyBsn+OMi7zolASgA5/Ugk5dH6psDhfJfcz+qp6YC7BXPyyG+eF2f8JklEgmk6GnMW97JU+qj2q+6KqrJ1RFmCTpgT8lbuTnvN/Wc28lJ4uwaf3Qj5KVrUxQFsw8P2P6Nda/ZlOgK82Pvq0K1czmVg4QK3bt/gwPmo0Nt7nphO8a9qC8s3A9ix5DcsI6FqCXxn5kG46kBrXmFJEME4wRo1GjLXsNKmwW7Q8yHVUH1K/8PQmDsphd6gQV7oAuJMeFNCJGTCgfIyqMArH2xBP2Q4K1iiB9guPc3z8twG1CmjA+egkwFptQV4hAaXNiWgk6XaoOZJ+BoBrBuRdvo7ZsQIoWg/ZVKBgnzjOo9lknL2oQxQysPIe6UwkDAIhnEdgmK2gpyPXHUMeKxtU6cREEjzrlJ9B4RKv7jGPybYLC93+bGssvJHMqthDciV2PBLtZwyIH/qcfHQSOxepKkBcRcmMzBDDeSCs7hAb9Nub5nCLnQfl+AKr1axA5fc5ZHemVk8cpFZtg5kzWmfDEVSKuVgwjSqR9k8gDJo0g87k6k6GjAmjyR2ibqpmxOfUOeMrGHQSdxugvRaRkw9nwvSVAG6vD5dwk0BKCiVZZzsJRDPVDiDko5DfwUL2FRsJ0JhXtlX4QfFMPzfetD9s1+UUDJ2k1kIex6Wj+Fxs713NhdTBGpOg72zv13NSRg+qgN1DqbBKbbQ+92xwbwvI2MRevWzqcVZz1B0nUn5fO7Or6epPbdmHXctB2qbHA35GvFGDcxP+xUJs1aPtHDxWEl3D49RNjK0CdNu/mZdao41KvyigC2yN94smceMhGqbyZ8pWTDj9cx/P5nJioA13LGveAXSLrEVZNNvMjJk8wGCQfCIU+2i1EGh+uiQ+lJmsP1pPrufoyWZur7HmdniBN2qwoXOuKDdQQSkdP9syRnBF0lrrJDGFG0sPWVcYSDukdJT4NjZF1jYm6oYOZYZGT58f7UgkgsXgAfMM+W8bFNzQ0M36usF8xVMhYAnpxCyLmEupvhEFTlLzZFuMbnWiWNkF/y';const _IH='1821209b92e7ff352eeb5608166bef6eec57d61d623c15c9ba2f2c7f7cfdfc7d';let _src;

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
