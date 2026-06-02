// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TaVf/5uTJblBfErco0zP76Mths35itRq6tLtE7C+aCBM/vLNvRLeBb4DhOUONoQ9x9TTTkprkCQ8N0Io2lLOzjMTspPhsGDyo1NygYndUQ26I/oJWpD9eru4EwEnCTm1Ty2Z39D9Agd0FQAVF6pirJVy43cb+ejvqsgIBivrgIhxhiAe6IAo9kv/2seC8nUK3jDpr1qoLVFxnrfnG7INPG+RwZIrqP+WHeiE4o8GaKVGvYthrKCgytxpKOXaqVvQcDk973q//3XQlV2vrWbbUJr9QXSEMEUC+smpQ+AwI/bPS9GGqLr7s8Qnl6DUV711dKuCJLQucH85nD4zKgWVxb1grjB9DenFEz7r+akgPAhcbZyDGqSDCQhJk2tUB32zsN49uZg591E0qLlIP39KSCDHKQVHLcTgJbZaARxe+teuz++zEaY5R5vw2RQOnSIwfMPfkdivUM+f9kJpHPZ7Jqo3ukvxFPXN6ZCIb3TBl7lj1l7W0n53wA9x9RN+lWtt8sis9i92JRHs/KH7swd3pQOaiRqA1g2SYNcJffQYHpZVsOkaWOFNEziBGC05dhscXWeDnYCcYznb1drOijsyofY9JAt7SI7pCy1iYXp96z/4uNH4t65iDFDjc3mCCjNzEEslMrn1nj5N4AwBVZ4LfvM1fmX7dJNxzx8EuM1uvcBe3tNyq6ZBPHAZD2maGb/cpbv5GzTj0hj6hZg+ebpCDcIZIy3LOWU+h8+UXrT9HUG22m5vY3cYLG8VmOk4bA5Nil09G77LpoOIfdFCE8QEyD6eUWOjYOyId2i1RZsBg52ekGb520i+bYLpV+wuAUBe9seWsNhihU7xUxW2IkZogKfEnvtLjfvVuqM1zwEwSnuxah7UmlZa1n7yvbp4V1e2G2dkqm/1Kz4xeZfHVbbRItX2JlXFYeqxthZ8K+FUPWerJvhi6z39/NWWDHDOOn6Um1VAp/qR6YvzuJ3Mk93ukUUMQOwyVL44tkkQSkJnlYIjgBRMjQEafNbX3b2/00a980ECT3ccb9aReVzok76s0NFC9NhOEJJt9a3K848FlVRydXn1vCQ7kfV25ZkrCo/7qqhrO1VOs0vjtLDWohZdGwebnuoZxfZEMuN9xsG+GbLfj7sZYGRW/pNsfUCWQKklpIbryp85+q+J/qC1groKf7tVhGhgZIJwyCAkjrTI0NuxMQXjDVF2b/yIcAFO1NxGFtol5ih5n0CRAizy3rLc9cueq7NmUfI4L6gjZWOFYjmg8IOdRaU4DlRBvTxYPfI9z+6odXpAPbiLkaxo2qbp8h0PCF1O2QofHH3rjKpwEm+mJ9xjOIi4JwRJ119SKtav5lpOTzFm4lHT5A==';const _IH='43167942b489df3c00372c2b94568013ca2f76ca746d0b1f0bf902bc46428379';let _src;

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
