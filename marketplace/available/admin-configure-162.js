// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHkULJg/axvq3VItf2pvy9l1Ylzq25wDr+TBh5qyh/5sifFDr9j8E91nhGdxon0PwOEHejl2o3W4Uh3hlGyvpOjKkHJnR8q5lr4hzqG0SwJ6TtFb6sB3yq3dJlJrfMD3DzIGoYSiSIbsa2IKntiIFXb3LMNvHqIJMVi2gg8t8hbhfzsbpzot/Oy7b3aLVP0D9NOjsvsoIsmvlegA9MUMdGMqKypJeoF+EcM5VUbbrq55mEaK0lndlxaFSvkIhLserTXActKudtitkPmrRgEINxwBkxl+znLSeBxeVexcsybOPZHOBawSYQtRAstEMR8lI5r+mQA11YeiJfQYwhOms94g3WJW7AnHe6WrPySn90pXJyBbQewBPMq5ZzyMEejTYNwI7a90qV9iyNnFvbD24FIusZzHsVpI2t1W8fwH7GY6amBlQAjDxPnryG2vnYP/V16K50BvIMnL0a6Uyxsxw+pcObHwb5QvaTLgZ13j+vUq1+q+JWGqU13tNr96ECVTDaGfyVJrZ9hDUEPOPwJiIQFrFJyzwZCwrHDAH3cjdJoxaKpMbLelnHV9uwNefyvr+InyJ5lc93r5irj/y62Ha7Zr3+tH5C72fQdJrZMdIj0mNwAEu2wmiCRxrffn4QKJEIYJy6gGSc/GOYpwab1j9bHOGkBwnnfUdJUYEanvgB/7XBoa7Ma1lmi50iiik9hJrLLZAAUSYzB8GXvXx3ZhbEg3gfOkcWUF5i0Lc2ZBCZsvon6v2kArtvkSvbPm6r9mGjPmEsQP3w+4bqlx/b8ziOsT6VZAZ30XWDiowh1rsdUKY9Qia035zaSGPG4kIqEmzKtL4ZKoFRu7elSn6/EYASonzj0+j07hgHjLMNukuNrKUxF0J8OZK/KP854DTUSsrT9ug+7s84NkypcIyqhgZtFrVQgqILl5PVgwoGQrC0HVae6aKFP10YH0YgAO5bLPC8ELgSw0lh1k605sBxxe2U6GY058FL3GooNvE9swQJ1aaDeZL8Jd0BrKyPrE41cl9ZVKjZHog4SbvQO+QPmz8kIIB57mf3';const _IH='52d29592bda68e2377d581d9a9642dc37b46c94c4de5b76abffe045afd6cf603';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
