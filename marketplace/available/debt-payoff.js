// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QjqdzWbI3gSZrgUyTrhuD/Wm8quOxjITb6NyNUrPgqJDFZLNg1527veFhC+TJMLQZqM0F5enAXYppD7Y00OY0vhXP5dYcsoMZUp6OLkH16HdyItMu3IbIT0RI3560hixFnzVVC1TA4LlNYjpcGrbS4DHdWx31GZsBN2VkT9SkeKutFOccSrc+eYpZ/HqYhTMA75tZn3PSOZw6eBtiBaEmWcJ9ZJi7lZ7s2mX+1cpV5L+08Um9xAH+Hf2ynj2kFUeuBUb6ATbif6DCkENDzBx3sctkfSFgcVumrTqkTAio3IxJICY5FIS8NX/pgN4eYsSrbvyrj4253dme20gwZZywFpLP/Rz4uT/R7147e5faedku2RWLpLjIjw29iz2KxV5QrBbqYblSPs03wpQ6AwthgSfTO0dpsEHLLLDI3Bqj+B9dDagwJ5uJv9l2LapRKLRBoMXZE0gkfih8w0InevmumTlkVW7P+Ro2OX3Dn9ceCOAxcPoGUM2j50iF8YTJtAO6C1vOZEKVQo26KtrthkUZN4Ls9dqkj842rrNWtXI4hGZAUD8msOl39NvQ7R1qvdcV8/13hZZNzO/nBGdcNpIgDnYzq+ESWq4NVgZzEV8nig47iYLWM7xvvPPjjf46iL/Oh4tPwdaK4zpvGbi/A5RltetcmeKgM9TZ/UDoc9GDh0u4lIiGo3g6yx5SkiXqubVtNJvwNmpe3JJNQsP3V3xudjrptGF7XbzZUi5cpktWAY3disUJ8UOvM9Uvpk+l0guTENIlwJq+BEE5izz/ZwpV5pY+hO7J2aAJvuCDgkuiDP+dApGwQZKwlP3oi+qSGlVbDsGocEoykggRG/IPSDHtiOQRgFIYXNnPFt6A0xCnwhY9DYo5N0Xkl3cYiI4OJ1Xid3FHD1+RCfqjQ/0nqCevRsNx9+GPOTXXjbblvN7mSSOT7xiUnbdKIqWFyOkB88P/L/lTldFYBJJ1o/S4WAv0HjzsU4xOxpUQk3zDvjUx/F2hLm1S+Atet+aMSmOXXeMSKj3/NF/xUm3AATgz3EceQ0TAsHmn9ko+1xEpXnX/S4iJd1xBZnTxO2klX5ZkIiKzcDtI7AaOxZH/fPrkqlhiRL8QospraSziZqLi9dlNbRwz6wkKQnwRd+sSCj4oEwYDrh8v2e+UbbrJRAIjooSB4SdaSrAW6iTnjKswcRoQc8psp82hU1XhMqfxeIqBXR4FmvfsJIGJxyDbV5uWPBSLYsoUw5BttAdbASM6+2knaczaGMhu8EfzvQm8TTOw+rFTCzMT1B5EUlNsEDNQhDqAMg+/lSHNCjgihbRKyR8DzT1GqsPLpGMJbb6VYwx6uar+6CQo94j3/b2fonl9ITxK9xUDns0YbppzLPoD7xARioUdN/8818F7OezyP/CZntk/CZ8AY+b8M+eVXXGsTgo6KrYkaWDyOyHFVBotsZ+yptKwqQE/Y9mABTpf5CHtPFkAlyUP3n0QzmX7lCz77KARBCjYgHEvWpjh/rbQNqX9i4vXXEM34+1kfI0UFT9BofIbZdSTjgZYdqr6rqEEQagTt3g54pUbZDJLUguIhQVLpikPRTOHx+lZgXq7tvcIY2/YKpfF83h/jEe9TrhNQmi8YZE';const _IH='78477c17bebabe4119a2fdc381c2967f0d6819c92275ba4bfd27c18e5a47ffe4';let _src;

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
