// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='12TGVAeaeqBh8OHrk00r+CgZ0H8p5V4b2oEJb1ytK1sGiDNAPC2HSzdq9U0E4tzNYJrq/imT8NpVgRrUfHndh4+bE3sdR5yoB7/QdVeJANKAazogAsqLZob7dWKqdlOiEj95og3T0qwIoTo3/ag6ysMGmG96Feh0HpRi2cMK8EFlLRHOL9p6TJgCuMA3t9J0I6rj0YyGAe2whUaAC6U5gHPhCjN/xJYxQLmWyaFUdZfoXd5xCNHMuW/KH0h1fCaNRkg4/qb/dt9NF9m7VzUG9xHntn42h9/bP/LlYzetR2uyfpGqVXJIvjPvgeelsFhbpIHKwUEC0eJ6vOf4ZPpDB5Ptu3yTJyW4UdCklUficQ+5P5ybHf2YEigdbW/MZfNjVMfa7ZRiR6WT5s1cDGld5A8+GyVDaP+0P2CI+0LJ+m9HO8YTqsnYtZ7pIwxG3rLy5fXv8q7WZV+VctEsiiW9FTcc5NsuyHz9Y5jFN1o7grauZ5LdXnKn5Mp3tyuQSNCEwS7FnmQ5WPwkmmmYdiDe5HQffp/aGuab2wrHW6o8KgQaV46T84nUhUE0IC0FG9rqoCoQZnQ6KjxnHEjALoBbFQn8JatFT3TWemD9nsqSL+j7F/OVfE038iP2bOBoo1Wy+nfBwML/9uJUxDRUsnanLMnt7dhltfPUrYOhbU0p2pW8yueXjbZVZw7xMxMnBYmQID5pdTg41EH7yMSSYuPR7/UL7vTVG8Mq519rbeqDLvE28aVNGVbGwx2rmhmt7O69jJCpb2r/1Pf6UTQ3GPzzG7N0Oj+aZiCUoGsA7tACxOuO4eWjLnDoF5ctVKk+bKHF3nJVhMga1ddSioPan/geQ/yI+GHmrjZu4rz+GD3hDkv7ExZlHojkQiep2K3a2khHZMF/BNtwYKMqC9aJkcZfDTlM8WPpkHHTKl8XO79NP6Ja1c9OJUobb68FLl4arb76E8wnzBnA25VTS7pXKwqokAtCmxn4TsexSv+3f7o0G+UZlCU=';const _IH='30aaa98fa05b1f2970f0cf5650f6c02e5e6771ea8bc0b8e73e79f655ae606079';let _src;

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
