// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NdqgYrhnA1IzAVQhj52K4fYTXqCn3n1K9x6/1D+nq4jbzFOWq49TuL/iulMadbu0C7ohhw2vKNBh733zdUhjsE5J/dO43h1/QBSbr9gq72SHFsLBSiuaM/s/NkkkmRo8yds8UCQcWCyZ8a+nOh0PR89OZlj5/4LhCxEDIoksRUFXlUpvo2rVtT6kklEZjE3qyEUPzW0uwKZBUuBGMJCw3faV2OMvvnXwGTP2uqX3a/l3BSC8IDUNmIB/AJybkn3Z/U7ndTLiwM8gsK6kZHTY75LilKRyvr8zIB9peew4IsYGHnDD3f6e1H4u9qsEUBZL4USJHWky7Qz8LtJa+SGnHzb/8/b5XnkZoYUS+sgjyZq7LZFnXLFrZ/3A/K34zg21mU/Knl6RS4F8y5z45q7ew33A6vum5JyaM0rfHcST4LXn2Bap5O7sXmrtKTBJDrjN092yUKjbo1neVKn7qyDAx1zCHlopvZzx8zAMob5vI0RzoPXWdCPNTNV9+LMNt8NrvUDrJYbQYByiVp3k3t/06TROv3oLlHCzAoaqTul5GRrv/Fq3i/0YhLJ3TCmulEZeCBmLNVvBiAC9o0RpCdKkD9La6emNlsRjdYF5ZMXYBdNLcx/qUl7NJefU6tGshOeEsYwWC4/gr8Ndeob2I/eBnnzR35tNZtWR6O/2kM+UFSHdP4Xh2tIEdZoKQniHxpoLYvIRSwQsaV7jCe/3IhgtZxobEqJfzapRPM5ci0VYe87i4KMlA/eOS4rCXuZ3f6NpT/mdjjVLnvipLhHVVGJ14M/AVjQDWHH5390EJ9ZMOmu3PwualqUHd35SIoIU7HV3DooQe5HVo5+iESBKcGY8vStFGCjxmr73pKuzASGoDbZQo7qNRSeoWHJgkI3Y+o2YHTczx/xxmgU697NROvRUK6MD92cyebVa77R/LEtMuxCyajxmHZD9LqHysIoxQPExQkmHJgN7xRyNxR6kXWWz0FXXMoXpBC4Hz7uUDKLEJnZ8gNmr/ydWOFL+kz4DsTQEtDWUlfRyKOImvX2EerWoKC9Jgv1fMPJBfDk06hK7rjGaHpimpRFUzaf95qzYM2SjTUMGfYA4R0V/ATYxoyiV98v6317U3EYAtcwr2LxcdUWe157KEmQGVs1EFESnJ/0KdZapZyjhEVUvlWvNPyCITO/dgn40yRJxjgL5pid3qxyUxg35bR7zXPRmxBVm2yNc91O2koaYJyIf7VICCE2cbOfl8lRSIjr0Oy8cICMNvBXl9MufSRTIG6YipVPChg4u0/EDA/+MyWCJ+jPGBE1bf5CDX8OaZYshkPwVsZtp7nN9v14jijdCO0pShcvXehhnQQOBy0Md0WqggMoxjAVUWIyFSEx7ZLqqJ3J9cad2QBGSI0z/KGx3QkLqaGbfpjA9NsMBi7ye+vZHy2Zkz0H2cYWtYxB6b3kEjbew0yjtIkNKCbo766cm46Oq9b3InXFRMavGPYW6aQf3y5YB5WnUWUf0WOv4jgqUpPDU6m65yaZiJWjbFVevBgjOGexq5OzmvMa6zAWvTJfM4cQ7veKh0f7Z/hjXD6QFyc9M5gs6HA7G+yQwfJA52vy8ib06ezcrDrnBtyybc7efbDQTq1KU4Zbd0ZEbxl5/ZrdUzZi/bHzsCZ5NPRHXuDcxAAmuev6sAH8M7G36Z5c6Lvq3zYfZ9DD3b+xLs9Usq9VVjI0cN+5rUWwSv/auoFTC0QJrtBezKw1EUR7fjCbhTsAVVC/TSUK4xaejTuPNtjjt0PwIgNBdkOmpmrJdHVDponA1JlfREoV8uGy73LvrvBhJ0rroI6Jc+krmkd/16JSSK5s3PSiYysYyjXfiqukeG6c8DznkpDBQQQwfa63CMlhPkSSJ';const _IH='c9410e6f8672699551852256369149f0647b9b92348d5744cb95a91c8ee91549';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
