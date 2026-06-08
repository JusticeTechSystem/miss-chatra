// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JIOwig116O1FuctoXndO4Q7j66KaHXW6XsU9tj49dgseH8kvYu5Rp4QbshRfvF25WnOx/Pa8gCgtAHU6JCX9w2hkR7A83xje/LiD7X5DD744tUbIwi+wGRCtB/4jLW2vcZj9lQLHZstLC2w3hDtzA4vqNtRaVzXDrQjyIatrqYomL7vC7s7sxzKUh/3ASr5+TFEslwITQiMAQsQlniKrcHRkX02oMnehKA9LRaOvOp67u3MNzLwxYmicN2GE1Eo5Zl1e91bvjKuIaaLWt5uIr9Vs+xOZj17cdm7A0GxRdtVPcKQLcQcIaN4Swosrs6vOKZ3nhG09MlmeYMIHBbpLVGd+WLkWhnZVzQyIO4GAtklb+522LugFQEkOfs0Pl03GsFwvE1zfVV3EKvWB57R1xV66Q/hC5r5ZJpsIkR3NBZh5oeCp6KVHWxZ3awTMD8tIovUMIf4cqgHfoJvusUXjqoN7/6FMYvjknsn2X252q0RWaPGny11pdTLCa0EADPdTahc2d4k2ilQw8d6bx0rASzghGlnec5WZBTxkWUdyKBYUW3ESOEODkW/ACvlIMstsOHcdq1v6jhywKUhNZB2jEZ6kcVub5T2TMAvzrStnXXPgyBkbhSOX418Q6I06XRp7HEAAOviU5cJo85ohLYxRHKdpPXwAQwxfM9HYIJm7kc2UJx1lFfRS3gOqA5400+owjPrUK/nYvPJ8mtSFHr2PZ+DdNblEVtAIlQz1tdMCCy8mhnjAUl2KiFf/VMFMFBa08onTjG9A1F8xB8O6DN/+B56I8Nc7IT07riPxXWqXUBcTNeYAENT7mQeupLVW4qflDIdhebx10/tQvWN0y+J6HbE8woSJRDuhmzdvQ1H4tuPKRIrIf5FcHG4EfX/A5YjAi8eypStcvqOpp6rlpPFcH40Cu1D2V3nO+4TZzRVMC9hqMDZ0GeDUAprH2tr+8JBAoLO/A45Vb4XfR8M0eNVsaw92wJhfibOCSR+IN9oX5H/Yf4zYsGUWu0xYbgwtQ2ihox8Gwoi33oPV1SIRaWAkF3gxdB1deT/EKmQxIt/GpteTn+khA760Q+5WXc23ccRKXpPEwPRNp/hOlJm+nKvOiUQSahL1NFj523B5l5KfbeqE1XR59AJjsDnw675TDQCBDxLwbecSxbG4QE115Ri4i2k3qQk8iGWaH24rty5xBCBbwcs5fcJhEfS8VUH6vDeeKJ7wCn0ZdyAYNXl/wGJu6AqvreiIsvbpx8ncZ6tP/nPLGZLqB95CE58Dz7GwSTEYXj5H4ycNx6hKYDKlk4BZT26JSKnBn2fSTVZOM7pJFgNMOR/yHbjhpYgn7mXM8ujVf+T9PrQV3QFMiWFjXQHeOGW5mCg7MZATWWmfjzN0jgIWu/zPsEk3KBprlgoOmZ9/odf3rEQie/fQ3Eikfqv5JkIt1WGVIDe7PVuSUwWbSMnxfrI3pUAfTZE1PjRjMrnfzWOth0OxwhYfBq/7gx23nct8HhGRrL9eDP98AijtktTaNcQIcS8V1msT0j+7PafQT7daLLjc5OPzlA5W8inrKT4M6NEBwg==';const _IH='588b2820ad4cb2f82059d3967a10cb807143b10a4c1215900b69448b6c0ac782';let _src;

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
