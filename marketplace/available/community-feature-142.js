// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/gvpMmcQ4pdooQYSCBzERUAVdbqRJJGCK4DkxVhkUBuj8wjQ7NFO4xGYjyDnoooKHs5AlnEbLcL+ooywSzFQ2k7n30DBABbiuqAaDgu3FT+lWBg/B59VDrxLBK/9MAyyO45AwEpP8aXAwF8jhKjWnojJzmR0Bo7fF6Bf3m6nwh1kR/LFZzKtJo6llu5+1mh1XsZ3gMqUhZ7UIKO0ML98rjl3oXAPzL05Flu2QddJwNIV9rV3SS57TYPTYakWPNIPZQ/HN2Fz0BDRtnxtbJpcFHAs6FBALjk00QFDM0WNkuh+q3+zQ+uOHMfVGLM7pmKtByDqUzGIlfaYnomSmS9HcTlLPk8gjc3EUBrq/eKSQX+P+Fa9QX06ghav4qZaFEkSaLf578qhaeeMFGTZzCRnwBneCnjRsNhHN7JDPBrKw32ZBey+Biu4y7CVIskUJLYJum0fZzLiV9t7Slfe5PqcxyQ23nSaP45avVph46a9q1Pd4l2LVLkPpN5JCe+A/elfLbKXAT056t4WMnzqIZiqBPgl8ILllqWjKlupRpEr7b0x4ckzs3aC7V6oTpfMhSQBp9DoCXVEg7UNgSYcfHKNMOdNsCyVqMNIWno1UuwMpyLmTZFSbhBfZPU21PzqJ9YfDkkSxCjgKqZWYQVb7b7BctO/RHO5BTUsAxdRJyuhgGulqjTyC24Hb0OR+6HtX1pbFiU0zR6Nj8t5uBJe6EslcXf1elYzNh5h+qh0yZt3Od8qKrI';const _IH='4ec4dacc7a293404ec36ce82e09159d0fe9245d18feb9c1ade62e651f2bf0421';let _src;

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
