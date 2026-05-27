// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wpTH2OQXPixEpw0hellEodzOfTb5vv6Vvo+Q+xI0r0RPncrOdVJrILnDUr6eXGznm2NFxwxy/aFDRHBkRuiHSmU1Ug99oTRypE9CfuB7qtAQFAr1JoO8BhZNIAZb7YTfiTSNwyGXVuTAGj5+j43CKrpg1X9fogR8cdZu692JWlHjh2q5V5vR5yFtLOrf3TRNXadPwp2FKRKhCfrG+99PGYgR/B/5D74d+U/20hxMJ6guqRyv9t+NP9urvPzfh1wJuWwzQ1nIR10QXAWRZc1GNqhkNEfE53UGzjYkzQSK7/imgDwBFYUHRpOJssigvnEo8aerQNXL1XdO/r6HnLMA4249/7/tsVFeNWe/q4MnllzWlv9OSN4rB2MrhVTYGjRXEpFYkWyuchKQU6vryL7vnp/PGtvLa5zFpJoMN3RLCsyHlje33G+TdJT6HN2e92ZNTEXeJe6MygKlCOWr2VN0zR788ZeEzf2jMwMS0N5M5klHnWvnMlbN/J1WV/BNGzrM+cK851Z0rMPrvXJrv2r0ioICn0Z7bAh4ToEpYujo0mNYzybnnQxCGtdVl/9d41X5P0tOMTiodzeMwk2vGZrjT7B2vPeHyyaV6ydU7YdftXsTr3L7FmFReiIUWFHtClYZFgCnXN6nAjcG79RHfbujoQ2ooYvhnCqpmYXzX6F9aHzGxap3p0f1DCctmHXOvkbp+a0S+HZ9rUm5hsPKBrqbI/LcFcjNyp0epwn/6PSc0hLm2hiuLURbP/cHpWDhBqS38h82oURDP+fxaprsJUVCuSXXTWsJXJBdfAHTFXjtDTfz5pdaf6CMy7A8z9pfgHS6oiH7ue9Ph88Lt0gzLWaR9L0qOujR+tBKpUnO36wEKDcQ65crz/Mtv8g0c/5DvhF+NIj3qf7pT/kcSsEiizMgBgZmXIbyMcppl/49kGvNwPCpD7c2H8ttZwvV/9jlOLbssiCtNbeDusYPdK71AKhRknE8OAWVcBf8eJXaCH8lpEO94EBNp+0owHmaN7FXQS071hROi4ld1ZzZ5dxIF9lZOGk+uoivvUbppEsgrjNr04aN72Xhy2Mpv8SFHNlr+G2yatU0GFzPy0g2YHp4/1V54XBLekF5BnAlmD584mO8qUL/ZTZgOQ8az20QOvHn/QQ7wQYM/X/L4zmzOLUrqo1wal1eBj7xjoD7g8ZOTIsZqoxwJjGZ3sJ8PCoRCPVmkIEaW3QgruqB0oS5ZDEJ';const _IH='5a0d913a878750a2a86d8c0e874ba5be6ad2f3154fc0442188534a3a668d5862';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
