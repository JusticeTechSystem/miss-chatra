// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PtkoGh0yyDRPi7nz3I67H9dbCQcBHkD3dZuVYkj23hbkwssKAKc6HCZ8bXHlDt3qhDX1JNKFkQBcNMyWNfwBawfJKByZTMDrSGYxHtM8AYlNE/XBqvP7Kx8zhUndZFx5Nsmk8BjnlkqEL/TJb5INdcQuZ5uspHEF2DPxs5r1wKLuRnlniejRc2Hgup4ufbOzVluf70DkN65dmGwgQlJKcbzZfhArSrIg9/uYlK7cudxWnCgf5fzRngiSQj8rWtjUdU7KChPPDIZ7IALqIVoLWMyI3hly1RUxni6xxKAHWIbdA2czXITWuGkLBYUL1TmMHY3o2E94CPDMJHYACCz7a1TMsdQJ9yJumefZx9rX70BBOj73nc1ezC1QHNuxYKz3p5jdPuZhYZyO280d8b2maaO8cR4c1CkwEerQzXafdqcrRQnEndcJco87GNRhYRSDyCfP8NzPMXlcStMoMZfPSUYVR5+P3bIBgz2uz7yU6oMSSij2ZBNpSVOdGbDzr9f4aqKe+thDRtiQHvoh55Lq7W3jFgEe5G0pqEotoGJLU0iszQSvdSk1M/eCic9dSUaX6EXqe6pdoGWNIpmnzJbr2CZc4/pv0B1+elrT2IILPziKTmxB/wCyUZjwBEtv8CGUuxbiPBRoAgOWULSyO1IdCa85H7NYAAqSJEmDsnBKFbFCxcD/6hdMiBA5Q90CJ//reZCswAzQQytG0nVsQHJk31x4vJriqQnSbelEQkQtSbGjPWWkLPxAKILEzcHW5oGcI7AH5/M1/8Y5CxIVuKb5GF4RpD/t3UBvkMe4ec2u21QU5DjU3pKD4JDDrOgxi94SYiw67WxmA/EeuJ5IxPo6JEhJtIj5KodGxPaoxi0CbwOJ1uAfhAGHy2VNDKkav05xy9wydc825Ypw6LnFlubVs3Kg6YK5g3a9fcrFPS+B/YPQGfNn0lJRv3v6n6HzesOxTrDtUxwXmomJtBId5EuwvfEEg7bxJiLdkU07a3TQG31WEC11S+rxcOZrRs+w23QF2R6gcfYOtc3H4AWn3NHvcL8129p/v/cn2KzTD99sKGgI5DqPIND6J5CPaFhIKou1gEGQBV6AY8rQmzOl4UMsibE0e/jnL3hAiWHOe6DD8tyShfVbDQ3X8HhgqvFQxTDl/+4pUWTGVtGyaL3wz4CHLIsnipXVCwgmmLzFKBNTxkgNKb48XgGWeyHf1FzO2vf3JIg0+msEMuYaTbdzCM0FZTRpHQ9SBm7zrg3G2dXf8vepovGn3aSZ4LCoMkP9MP7iBhllaAv7OkMXuOCbNXWldv32M8wMy4ahjFSlZudj/6H5G4wYljERpDndShxSDa6WJ7MERXN1HCf/q2r9UMfOVUV2tF1yFtlC6FjQD9XRiQSfmX8F06QzqA==';const _IH='57a4309993b1cf5d270424a961e9f7bed0b924dd638279c2450701263f5116e1';let _src;

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
