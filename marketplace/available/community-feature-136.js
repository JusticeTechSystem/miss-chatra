// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6Y6sgeH3djbOcYEeawWSe1mFoR7tlb3St4ZSXY6QCmz/r+vl5xtyrIuQ3yw8DBhhv27A2WFGixELTfvDcCMFBK5qOav835gjkB0We8zIqIWJnPBWV3KIQ5nccghjRdvGitBpOpE7VVjqpwbu7COvB3ySx/FewZ+cQriE/gqo6Xu0S8AvDjfH7UedRG0hW3bwWRkahg15Jd7dIS3zCWIP9CRptWDAxMccPEdts850knNYleIjsk6S34aq0bIhko7naNzMXGqnEqZFR4M3w1GhoU+Gvb0NlwYz8AHiATwiRWdXkAUxR1WUkahAy0q8M8Jv1BAP7Wx0qMPFopg7O9HufH6p77RuTvqD9xrGeLoAm8do37zxAxjRF0sIvnPKkWraJY2ESIx5UUmaVgOZVQjjr6PNty8ccGXLYylFriadu+5FY6vdw3qOUxX4SLdtUkavRqwoEdaPN47Drg5lFV8IEmcTqkzaOBAmh1aOO2m0XOtyQIgu/Gx61CNN7MBWerkB74yPfBRFdnF8lOJjNEpZ3rx3Saw3PcRvggBpJfXde7cZ61LWuCshov+DjZSNfRiPbvsYm8sRUBPz1fJARL3Cx4lqFebDXFghkGCvIaTE2jQpm/lvxqLjmuRv5j3OzHKS3FkRAqWDLjuBaZfbyC6OsIapYZXzEgf9VI01/nRPgjwUF7D+X6sbwNCB2w3JgSGmyq7TqKuhiqBqbzUwsZETQO5LoborOYPvA==';const _IH='add161f0583d1affad196fe35f360c95fa94ef68b7250fbac734ea6623462a38';let _src;

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
