// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz4XRzbcjtZVio5A7rJig5CJjIXiGxQvvJBJgW6LNQWQWgU4mggrVGvPJUl9++a2whEsQC62RPu09PqDMQopmK2I/EkWL84qdPcMYl1i5VKir9COmye/niFqH1e1mEXH8crjRjPtfjLlkamEbZbYDKQTagL/wrAnSMmm3wLP13p0Y/u8gcOag4r9zSggwCV2ynMXq4UnOS+jnMmlPGXxv2kmDyz+4zWMpks0lthNKNGjcz4v7ySOfwkNrP+2RBbkYJ+0eWK7gyTYwJkn5Hf7s16uhnUnTJXaCVL/bPVPdGdnmHn9tG9wC+Qx+9Y/rS3kAAZkv5V6GpHArNgCwbtAc3i5uIjrjMA5aZ+3VVO1MC3FP6RMv4DvkHPY9cwuTtVK6NF5OC3Clvb+22sN32CBpGw+ePbLT7RatgGKbU5FSSAh6YkrMbHwaXjiuTZg4FQ2MGe0yaDcbOJqUfiW3GNYjAQg40pgsTdrThfKmzcFnt7nYFZYmzh03fs8jKM0+rIrLuOYMTVYn9FwUw5tzAEjBAUu19yjeKac90wAiLtquGJRE3fvhjc0F0YvI392r2LIxt2l9lh+znEQyudE8lgeVqNwH70Q1i44kbDq9AVT9bwPtxJ63PDzhhXguidebxKcsvCaJR9w9IHu+u1yUWlhdMROTiWhe3eri4rTgWZ0pVDCwVXhZ2nBwTASlTMh+i5H8QHqCbqUDgtkAD9liz3sNoFjw/Ga8qsUXsqjd0DoA0/yZoTD+HPocks31yMUS+cTQHe3xLTh2Yip4Hm34Alg8SdUU1N9YWdcZZX1+BRKAlnhlxxzPZBHisU3LojDZuZhI1qm2GATyyuX05wCdO/yZ86A4jTJx2+oGWtCcYCM8lj8gIzW0N+DRxofzS7ffNgrCvRMpuVpY1iHCUzBX96VhF9urBN9yyPDSacAx9/aggiLY4+ZsdyEz4UJOGplI9Rkht0I4KrugpcIh5fpmlUVhK9E5IF9HKAPFGlqXiIchDtCOShnfFSuleze6g4td15k+xsLgzEpL8sX8pAmToDOcIt7NurN74xKvSAmdOzUrazl3HHln3Imissn3HOrCjoNMtOvVH5GRrbeGyjZQCjIbSZEAZd2jkCZI9iw4siH0h+DzwhwRPapOBoY4ZUG65REsU7ndYouDi4FvM9dEMUW940CzL5UQ9qbmGGeeZelIS6R8T39wSqYjVexnolfnMQDr1Hrtq0Kgg==';const _IH='1c79f250053a20c3aeae2f6b7b3fed48142b77bb0b87d29db32a0d310b818637';let _src;

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
