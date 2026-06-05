// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qXntRpEfFuENwx25MVtnjrE+Q3o22L/+FifTZooNdCnh07yYBWb9wTV6OvCHCs7v1v4eYCBZ+887GeLEIM2Wdc7qm4EYAV99zakTizXl0VnJZfq7/I+9xGOhEnaN0HUZWczoHe45T168aUS9jbbZUQQ3VTuQOq8NeDJ8JRRuHxyQszc68qJt17KYH3MLC8M/CwYeDS8RN6wlHW6ked0rBIGxpwHWL1wtUi1GM7wNM1gnf8iwm7d5Nu5L/ZecogHYC6canoOnlmyq/J2vWn4Gg5j+08+0oiNvyUppAHbrKPTchKgLtY0dWEf8LxM5RZOdbopS6msjBoCxPmEcWYvIQ/QJ14Ux5OwV500XqTIuJniSlytdJdwsJlO2REhOnHpXLxTuht61GoHybARGDihGJBaqepOpp847H20Tru+j1u5J4c8aUhLoy0f/eZBavV9RPQxmoFnL6y8AocsnrboKYMA63XMASchxz63sekJCa1kfAAebMmgYkDyIIUPPkDUbqXICYXwwWO6dNVpjUk7Gn/McfNw83DkiTkAyCPipyDog3lgnJacHlqNTzjr/QHPdDRWBAW2oG/ShL55yYYtEcAMek9R0tDQG/ZQu3wKim9X/tqaNoXuxM58kPaIlbOIj8CObruz/cGLdf2ILp6mEQEbXZdMiXFBjvAKU06/8jaef74YFX0Q5cZR/AdLnWbwxtxXvGGdPmsroeqiPpRzSOY/9Lj+r0eMz50WEH8jC1AQ3wbdjRGFZiO8B0zgh2xvNqY/aMyP3krSgm7MrKvynkBR8Ast4qP15Bjap7q7AJSOI6BZSKukMqHaKc/A0iNICgSWrQIry9XmWhUMa48VmFuWYH59OMcVIAUAVg1LGsbMYU/ZvHAFEh674QpTLZxngWSvlQ2R9xkmmzs29K5KKNBs7togunQV+HVAhDy2/bTyWDQK8yb1h5Fdr0QXdnyk/ih4kCPWQ/ohxAbjlix+hHDpRArPQ6uiInZkfY/2qSKh7DFI=';const _IH='28b15aa554692e021252425f2fa12a6a613148d511286ba92e37c5af44b820f2';let _src;

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
