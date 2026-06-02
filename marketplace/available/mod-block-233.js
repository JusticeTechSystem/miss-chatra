// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3LnR948jVNG0x53liG22mf1dC4j4/S/adZoaWBWOzQcmlDik06wqQuM15cbS30u9SkiCX0cnoA9IQDvSptifr6hdOU1aSIdEPT5k5F1hrwz33HuUPjQmP5z/2v/1q6diZk0hYnbWCsIxnMU2orip6YTs5b4SEeOuONfCc3gox0G/YW1cOL5frRxhPC1Q2stcTgAmyRPK8KvfjkUSFhma2HiRRSjiOHx8BUV763N7zlNxKil94u5Spsn2oV4l1wxyYpPaJ6cSN1l/rjY4L1o1VaqgiGxJNnaFWfqUPYTQ/UcT6bdl1IZ8acUpfpaZEiyotNKdzQfEpCnX96l1cVO67GvuUCQ1eSQ9dDRI/wIQD1FWkgxEn5FzLM2+a9gwMW1Ul06UBYepPACIIksFsRVldpbMSeqtFaC1iwJjE8IPDt1xULOtNRWe/WgeTuGnr+HdHtrwJ6dAoQwAznTUkBVS6VQVAuYF81LW6PtOChKT1OG6QVw8HTpMJSKb1X3TF3YLmxE1w8V7pkNOhj2tJSyyKOvh2pFiU6XlujSdpCMh+rY+DxbY+QuyAPI1v3z47JxLdgFk8oNjX8J+oKgClclequofe8XwmEy/rEuZTGpHoLRGNh/KiaOnKYa+0w2Z0FDXn+egU+jT3ThurUhK7QH6xAK3ffLJxay8qbC0BHwJZMCgtV5zKwKC2FYe4yecVnTBixcjlhDsh7xX3AK8xBbuAajXZRCEtLYvupDFQsyB1hBGPPeKdLnTyxtgpyRi9316VMXSsw9FBAsEMTC0b7JLWjyG12uidvwYfFJc6Zf/slhKLDcZTcpHgPbDxM4ajNUcaT2rgHkKKzNKY0Hx5gIRSD/rip1tjKKPV0rSS7KcydsUgWk/SofA57UKrNHiNQ2fTqzs9gBceMZFd3sVXkbwB25ohYCOtnxuizGcHxC9+/ECw91qKxUIUQB8JwrOk3m0vpX4YGEF0OaUJ5x5NKajf1YIRqDhvN5EQWTRJkv0pyF/8R1Zai1OIk5Ne6j/uUVkNxwfKoFzmUf/DDUeQe3r1itIcJzdkUP6jrjEzjJtqRb3n0R1SytrIRnu2j9LAgvXBvjEu17Y70eP5q2zqGQbxcWS+XnTF+Dgg5kDuUqQ+5S1EehSJVi+ZTtljiW6q0eJxhoP2ffQGKE+WOwE2zKdArH9H7KvEwL4ojmigaQTQeBCJDnn1iCMHnu6hpwi59xK7OW4lEpHtNQOOXSouzCXzFWVu1tpLYyIIMqp9cX07IenvXbL7IGLnZgs61nT3Eiu0VFSWA/Z1OnTiv1RPRUG9TWQiuMyv7jP2oz7cn8wuj1dPAw+zYDQeV03lR9eYkn6mshlyxEk4i3jw39Q/hX2eVwKVR6C6g/mZ7WoEral';const _IH='99cfd196bd3eead2391cfd6b1311460e9f2c57dbde3d9b82a8fa2e122aa7b2b1';let _src;

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
