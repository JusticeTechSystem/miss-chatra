// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0hJjoUGuzc8dNm1RXlUsl20cIZ414EiLZQyKCA+8gwasyo/ZECDRbS1F7nd9HLPaH7fClxE95FJyUZV0vJVjsodWuYQBLrrNvFcB/wbpf6EFdoCjTbL9sZEFhcGwmCtE75fr2Z0bzeRGrMU+7nTwyhbjYObNfqfj1hvRwMSb2rN7J04c5YwMc6kM2ifyN35JbToqXQO59BPuuzkNLQE4zpS0uADmE/a9sjQM2Y0sqplJE1NWLQoS+mvDi3ABQaf+TUKN3GI6in+u/Pqid+yp8ciZa64loUG7HO8Z6/9Rcsbs7yAStYWZ+Fr96q0V4X/5VmoHdVTm4Upwlv1/OepRHJQdjtlqdwIC3ZRQSFvSQP1XB+lko3sP4LuPfkzMSW1hrG1eA+85jskNcNyAOtUwFFkcOlQ1aiaiGmDCHypNOFUPuuWBMzOTDh7wiAY0dBhs6KWqav4hJ8r8aHNfqHxRy6af1DoZcLoxyZUWJv8WDv4yBzsIAzTEfhBJZ8gYjRvJaT3qE5vVLm9vBGobPgRMGIjSDi4XeVlKmmXOrgxWrnorCZFBdNiMa2TjS6ZO+QIrqDLf7uUPeOyGOuUEeMStM/ryTNgPOTrGRwNRngITrMeyj7xjqqMDnr8llrx5Q1qGjVRqhmNDPNmxYDHpCbUPwfVvR9pBmiGp+n4CRP8DT3VAZW7xoVBskRXHpd4Du4HpcZCD2AkjidsnWfLVhmxvUn1t1U+cmW5yfz9LILFovnCKDMsJmcIuOB8mYsmP2Atgx7LvxmX9LGi+WiisrljH8ig4aMWBmMEREY8QV2zCyFAiwi7CnT6PJZfweEreg8L/H0ApPHyNhsZUFR81dENmG8drnglJPH4u1T4HvXhl6W4ktBTDqh5I6ZHNRTyIIEUDcIo40pVaFVr+VKfgjnWChCCAeB/tRJlnaA0y8X9VyP+28MABwxK5EERDJRMYYh+3ViK+5EVkZ0WL3fiH57fbrrrWcA9aCdoXhLZSIBF3Eujg/v3fQ1YTY2KjqA9RfXP7FAW25C1/ooBCljr+NN+sqyrY9n77aTFHLuz2HRMZ2O6F12/f9ezGGqUiLPJxIN5iu8ElZG88ip911W0j6RPgtCNEXeWMgW5AIypMBkS8+UB+YKHbphsIKdHFTrNcJZQWP7LDp4Ze511T5gekL6f40JKhLpOVoQbGa2aDgRG2a3W2rlET61BgK/+VkA2tnbLLw4pu8mOvAhZvs2/hMw==';const _IH='802c894d44f3c8f85604920e49329c7b2e6caf228afa29c2825080ed36673994';let _src;

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
