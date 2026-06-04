// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zZCqvYeSkcR+JJJ4sYZUxqPff1UI+HSIHjPjucNO0q/ZoQKRcZp9Jaub5ISJQRkZWK2Zdh5ZL5GbG4593JN1sE1E5u22VCjeCz4nZoxkIZ2VrYaq6MYwtFCyqfDQoFacBIAGwg8Gr1m+BZwg38P4iHDdtCLDiNP2fZzF6rwdgmyXIOOyemtZTEj8GayMa1xZdOtAKO3zSkv6VPLUNAoZZUpTRs8r0pxk2a62DKqX3L4/WILuzOhC/PWbWmHUabShq9WCIaYpZ+EZkJBNpIDNT1yYO743YCoGFCGzrTo3ut7aEKux3RjXhaSAVHmJn9B2rKSu3Q5kpUHr6wBneGGTfQuSFLb5mw5Z1BO2cSH3QlUS9WrjQ0huC6iUbRNyFPOkn4wBqpylPk1SMxuLHM9YOYLQip9SrlHV3yx9bxMcA6i9Wi/qX6kUB/If8O1FDvO1x5NgsfHKOc1NbFytmUernmQWvUELq6y+gFIE0ae1bY1PMGTH6EhrTiv85jru56IAuI+3BBV4mTMKlDo05STmjz/CBbqeRAVUWezpgRu+TdDbOFu/qAhLdDfkKSHd/nNF5brUTPWw+ToX5o20YUHNgmzcI/7dLWJHsapUSEzTb+ZzqmFW+WkQynaMuVioPsPW425ARoiQZzgdofIqYf5VL0td3BH/a0zI7Da9cjNdcaNY1FpUHMqBpNY9lkJZDBibr+zaKQxFIuml9fsKXfkmPMUUW7KYTiSS6N407Gyfwg==';const _IH='2e2b8af02dec5458ffc8789ed5e49cdcdc0bdcee7001fe0ad88f796abfddb049';let _src;

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
