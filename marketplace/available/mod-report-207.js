// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kcf68ae3ZiN4QssgR0WrU0kBzFI03/XSuQahfhiyJR/FbrGAairr+1YVUZU7keXoX3KlMmj0R8pLt108au9jwireLCTXmuGwEo3bYMxOMBXUTCR5ORENHHur0PMJA9WNntgwAOllE29PpAUgkFVWJ3y4UrdtdvGn8RKdD4yR0BvN7riK2s94QsIaESCR7xhkxeFtPECeSmBHSm7L/bTnMQ58+OXu/oc8AZUhZJ4v3ssNZyuHFAgsDcdwKIQOzukF9hRdHKx0Ne7otDiO/C8Ql8PLndWa6z6RQyUs3o5DxkmQuO1wzV+rtS4Viz+5WTmQG9TizBhWzshoCJBgj6Rbv0qN1gqUhj58zL587aJrG9/Aqm6kMex0hwAEgZqPooJJ3IOrA/LmVvE2D7pLbOrNYp0UGkZoi0HpzuTwOFb6rYtQAxICF9vnBNEQNP8mv+AkQzJIo+FKJXB+0aeFXj5pRSOwKCZUcckaZxHQA0CV0dtLScHfGkx+QXTiyeVE6cjTon2vlXox+QNzaXusjaluiPMKAH2E0aHw3bYPdjjpO2T9Go4SNyvxZFF2k5t1pFxjXzZdaqPF0MuVFgODgFK1icm6SVvCwpp5SyWkbj/MJfwgIfiQUeyi05ah50J+yk7kHMeZCWhvKhP5QCjegZ6joigMV+JPg6LORGxyIV+YhGXwWpVrX+G5GZpa10YlcE78llIasqyHNDzZAMowDt5ntgMYwTW9Z7yXenyqcnXWyjEPfFCYrp0+HK7CBpsuL23m63H548KDF9ZKCRUvbPdm04JxGh4rcOmxAN6ktfoMpdtXCpF3u4n/+EP33BErrMz3i6s3KGXOUB37+BJObHW2zxl18voTlkXUzBxATM/08S+gL1v2Xx2G8m1N/0Ku6mFuZ56glpiujR1svfotMPoMNYizqZ79+XIiHJ0no96e15jsOc5TEzSKTrOcjYWctK/M6pWU8+Q/c3e98ck9QzjMOL8vPTzWfS5s/mr5idEpN4UAarHCsnY6jLlVqmwkDdtnL2QOJ+GxeE1y+h3l6ToIM0ZvG8xfViUT2XMalNFDZt9v9wWs8y+ALJGiCdrEQuboO0/UCZi+OiteNbQPUdTg0O5N7RzDz1n2emekE5pCxi3KnB16QaVdymZ0Irt4BSe/7nLuvoB7Jf8stzLNlLp5+yrtRZqJspggYUFmfVQ8uWvzmXON99lBQLQ+4S/EA8wAyXLZlfJWJ3ggDQ5JoylZFMuGhP2wn/PioMuI7BoluPideO20i0Rcm4VRxEfmeXK210NGNYthIFeB3iHkEZh0iYrqw1ceWiOC/AcYjjIjY8t8ROjwFxVtXIgKSVu4Wl6fkt6MI0NtlXGjY+8UQzyOgNS4ilL2SJYdzZKxDTfhBiz66RFYTQHHxQ==';const _IH='7a98141b9441ce44ba2cf8a34e15b3418fe04719889d3a12cb0a46b029fc86e0';let _src;

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
